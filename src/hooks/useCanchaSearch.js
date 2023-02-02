import { useEffect, useState } from 'react';
import { publicRequest } from '../api/apiRequest';

export const useCanchaSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [canchaList, setCanchaList] = useState([]);

  const loadCanchas = async () => {
    try {
      const resp = await publicRequest.get('/api/cancha/all');
      setCanchaList(resp.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log({ canchaList });

  useEffect(() => {
    loadCanchas();
  }, []);

  return {
    isFetching,
    canchaList,
  };
};
