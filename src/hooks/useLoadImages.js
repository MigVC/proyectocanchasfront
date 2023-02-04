import { useState } from 'react';

export const useLoadImages = () => {
  const [images, setImages] = useState([]);
  const [filesUploads, setFilesUploads] = useState([]);
  const convert2Base64 = (files) => {
    const selectedFilesArray = Array.from(files);
    setFilesUploads(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((previousImages) => previousImages.concat(imagesArray));
  };

  function deleteHandler(image) {
    const position = images.indexOf(image);
    setFilesUploads(
      filesUploads.filter((e) => filesUploads.indexOf(e) !== position)
    );
    setImages(images.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return {
    images,
    filesUploads,
    convert2Base64,
    deleteHandler,
    setImages,
    setFilesUploads,
  };
};
