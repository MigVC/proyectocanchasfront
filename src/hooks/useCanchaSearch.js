import { useEffect, useState } from 'react';
import { publicRequest } from '../api/apiRequest';
import swal from 'sweetalert';
import dayjs from 'dayjs';

export const useCanchaSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [canchaList, setCanchaList] = useState([]);
  const [timeSearch, setTimeSearch] = useState(dayjs('2022-04-07'));

  const loadCanchas = async () => {
    try {
      const resp = await publicRequest.get('/api/cancha/all');
      setCanchaList(resp.data);
      setIsFetching(false);
    } catch (error) {
      swal({
        title: 'Error',
        icon: 'error',
        text: 'Algo sucedió con las canchitas, por favor recarga la página',
        buttons: 'OK',
      });
    }
  };

  console.log({ timeSearch });

  useEffect(() => {
    loadCanchas();
  }, []);

  return {
    isFetching,
    canchaList,
    timeSearch,
    setTimeSearch,
  };
};
