import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import cancheroRequest from '../api/apiRequest';

export const useReservation = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [reservationList, setReservationList] = useState([]);
  const [reservationListFiltered, setReservationListFiltered] = useState([]);

  useEffect(() => {
    // ⛔️ React Hook useEffect has a missing dependency: 'obj'.
    // Either include it or remove the dependency array. eslintreact-hooks/exhaustive-deps
    getReservation();
  }, []);

  const filterReservations = () => {
    let reservations = '2023-02-08';
    let undeReserva = new Date().toISOString().substring(0, 10);
    if (reservationList.length !== 0)
      setReservationListFiltered(
        reservationList.filter((fecha) =>
          fecha.start
            .substring(0, 10)
            .includes(
              reservations ? reservations.toString() : undeReserva.toString()
            )
        )
      );
  };

  useEffect(() => {
    if (reservationList.length === 0) return;

    filterReservations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservationList]);

  const getReservation = async () => {
    try {
      const resp = await cancheroRequest.get('/api/reservation');
      setReservationList(resp.data);
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

  const createReservation = async (reserv) => {
    try {
      await cancheroRequest.post('/api/reservation', reserv);
      swal({
        title: 'Cancha registrada',
        icon: 'success',
        buttons: 'OK',
      });
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
  const updateReservation = async (id, reserv) => {
    try {
      const resp = await cancheroRequest.put(`/api/reservation/${id}`, reserv);
      setReservationList(resp.data);
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

  return {
    reservationList,
    isFetching,
    reservationListFiltered,
    filterReservations,
    createReservation,
    getReservation,
    updateReservation,
  };
};
