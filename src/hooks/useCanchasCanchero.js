import { useEffect, useState } from 'react';
import cancheroRequest from '../api/apiRequest';
import swal from 'sweetalert';

export const useCanchasCanchero = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [canchasList, setCanchasList] = useState([]);

  const loadCanchas = async () => {
    try {
      const resp = await cancheroRequest.get('/api/cancha');
      setCanchasList(resp.data);
      setIsFetching(false);
    } catch (error) {
      swal({
        title: 'Error',
        icon: 'error',
        text: error.response.data.message,
        buttons: 'OK',
      });
    }
  };

  const verificationName = async (nombre) => {
    try {
      await cancheroRequest.post('/api/cancha/nombre', { nombre });
      setIsFetching(false);
    } catch (error) {
      swal({
        title: 'Error',
        icon: 'error',
        text: error.response.data.message,
        buttons: 'OK',
      });
      throw new Error();
    }
  };

  const postCanchas = async (cancha) => {
    try {
      const resp = await cancheroRequest.post('/api/cancha', cancha);
      setCanchasList(resp.data);
      setIsFetching(false);
    } catch (error) {
      swal({
        title: 'Error',
        icon: 'error',
        text: error.response.data.message,
        buttons: 'OK',
      });
    }
  };

  useEffect(() => {
    loadCanchas();
  }, []);

  return {
    isFetching,
    canchasList,
    postCanchas,
    verificationName,
  };
};
