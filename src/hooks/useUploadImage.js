import { useState } from 'react';
import { uploadFile } from '../firebase/config';

export const useUploadImage = () => {
  const [statusObject, setStatusObject] = useState({});
  const [links, setLinks] = useState([]);

  const getPreview = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return new Promise((res, rej) => {
      fileReader.onload = () => {
        res(fileReader.result);
      };
    });
  };

  const onUpdateUpload = async (snapshot, filename) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setStatusObject((ob) => ({
      ...ob,
      [filename]: { ...ob[filename], progress },
    }));
  };

  const handleMultiple = async (filesUpload) => {
    if (!filesUpload || !filesUpload.length) return;
    const files = Array.from(filesUpload);
    const objects = {};
    for (let file of files) {
      const preview = await getPreview(file);
      objects[file.name] = { preview };
    }
    setStatusObject(objects);
    const promises = files.map((file) => {
      return uploadFile(file, (snapshot) =>
        onUpdateUpload(snapshot, file.name)
      );
    });
    const ls = await Promise.all(promises);
    setLinks(ls);
  };

  return {
    statusObject,
    links,
    handleMultiple,
    setStatusObject,
  };
};
