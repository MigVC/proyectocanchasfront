import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useReservation } from '../../../../hooks/useReservation';

export const TableroHorarioDia = ({ data, columns }) => {
  const { reservationListFiltered } =
    useReservation();

  const [hours, setHours] = useState([]);
  const Horas = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];
  useEffect(() => {
    setHoursAlgorithem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setHoursAlgorithem = () => {
    let arrayHoursBack = [];
    let arrayHours = [];
    for (let j = 0; j < reservationListFiltered.length; j++) {
      arrayHoursBack.push(reservationListFiltered[j].start.substring(11, 13));
    }
    for (let i = 0; i < Horas.length; i++) {
      let response = arrayHoursBack.find((h) => h === Horas[i].substring(0, 2));
      if (typeof response === 'undefined') {
        arrayHours.push({
          hour: Horas[i],
          state: 'Disponible',
        });
      } else {
        let response = reservationListFiltered.find(
          (h) => h.start.substring(11, 13) === Horas[i].substring(0, 2)
        );
        arrayHours.push({
          hour: Horas[i],
          state: response.state,
        });
      }
    }

    setHours(arrayHours);

  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 850 }}>
      <Table sx={{ minWidth: 300 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns.map((columns) => (
              <TableCell
                key={columns.field}
                width={columns.width}
                align='center'
              >
                {columns.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map((Hora, horaInt) => {
            if (horaInt > 6 && horaInt !== 23)
              return (
                <TableRow
                  key={horaInt}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {
                    <TableCell align='center' component='th' scope='row'>
                      {Hora.hour} - {Horas[horaInt + 1]}
                    </TableCell>
                  }
                  <TableCell align='center'>
                    <Button
                      style={{
                        borderRadius: 40,
                        height: 40,
                        color: 'white',
                        width: 150,
                        background:
                          Hora.state === 'Deshabilitado'
                            ? '#f50057'
                            : Hora.state === 'Reservado'
                            ? '#0276aa'
                            : '#00e676',
                      }}
                    >
                      {Hora.state}
                    </Button>
                  </TableCell>

                  {columns.map((columns, idx) => {
                    if (columns.actions)
                      return (
                        <TableCell
                          key={columns.field}
                          width={columns.width}
                          align='center'
                        >
                          {columns.actions.map((Actions, index) => (
                            <React.Fragment key={index}>
                              <Actions
                                props={horaInt}
                                status={hours[horaInt].state}
                              />
                            </React.Fragment>
                          ))}
                        </TableCell>
                      );
                    else return null;
                  })}
                </TableRow>
              );
            else return null;
          })}
        </TableBody>
      </Table>
      <button onClick={() => setHoursAlgorithem()}>Clik me</button>
    </TableContainer>
  );
};
