import { useEffect, useState } from "react";
import swal from "sweetalert";
import cancheroRequest from '../api/apiRequest'
export const useReservation = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [reservationList, setReservationList] = useState([]);
    useEffect(() => {
        getReservation();
      }, []);
    
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
        const resp = await cancheroRequest.post('/api/reservation',reserv);
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
    const updateReservation = async (id,reserv) => {
      try {
        const resp = await cancheroRequest.put(`/api/reservation/${id}`,reserv);
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
  
    return { createReservation,getReservation,updateReservation,reservationList,isFetching};
};