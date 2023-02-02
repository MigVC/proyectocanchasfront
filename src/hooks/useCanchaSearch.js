import { useEffect, useState } from 'react';
import { canchaApi } from '../api/canchaApi';

export const useCanchaSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simpleCanchaList, setSimpleCanchaList] = useState([]);

  const loadCanchas = async () => {
    try {
      const resp = await canchaApi.get(process.env.PATH_URL);
      setSimpleCanchaList(resp.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadCanchas();
  }, []);

  console.log({ simpleCanchaList });

  return {
    isFetching,
    simpleCanchaList,
  };
};
