import React from 'react';
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

export const TableroHorarioDia = ({ data, columns }) => {
  const Horas = [
    '0:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
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
  // const mock=[
  //   {
  //     state:'Reservado',
  //     start:'Fri Feb 03 2023 15:03:05 GMT-0500 (hora estándar de Perú)',
  //     end:'Fri Feb 03 2023 16:03:05 GMT-0500 (hora estándar de Perú)'
  //   },
  //   {
  //     state:'Deshabilitado',
  //     start:'Fri Feb 03 2023 16:03:05 GMT-0500 (hora estándar de Perú)',
  //     end:'Fri Feb 03 2023 17:03:05 GMT-0500 (hora estándar de Perú)'
  //   },
  //   {
  //     state:'Reservado',
  //     start:'Fri Feb 03 2023 17:03:05 GMT-0500 (hora estándar de Perú)',
  //     end:'Fri Feb 03 2023 18:03:05 GMT-0500 (hora estándar de Perú)'
  //   },
  //   {
  //     state:'Reservado',
  //     start:'Thu Feb 02 2023 11:26:24 GMT-0500 (hora estándar de Perú)',
  //     end:'Thu Feb 02 2023 12:26:24 GMT-0500 (hora estándar de Perú)'
  //   },
  //   {
  //     state:'Deshabilitado',
  //     start:'Thu Feb 02 2023 12:26:24 GMT-0500 (hora estándar de Perú)',
  //     end:'Thu Feb 02 2023 13:26:24 GMT-0500 (hora estándar de Perú)'
  //   },
  //   {
  //     state:'Reservado',
  //     start:'Thu Feb 02 2023 13:26:24 GMT-0500 (hora estándar de Perú)',
  //     end:'Thu Feb 02 2023 14:26:24 GMT-0500 (hora estándar de Perú)'
  //   }
  // ]
  // prueba.setHours(Number('700'))
  // {
  //   mock.map((data)=>console.log(new Date(data.start)))
  // }
  const Estado = 'Disponible';
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 850 }}>
      <Table sx={{ minWidth: 300, }} aria-label='simple table'>
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
          {Horas.map((Hora, horaInt) => {
            if (horaInt > 6 && horaInt !== 23)
              return (
                <TableRow
                  key={horaInt}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {
                    <TableCell align='center' component='th' scope='row'>
                      {Hora} - {Horas[horaInt + 1]}
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
                          Estado === 'Deshabilitado'
                            ? '#f50057'
                            : Estado === 'Reservado'
                            ? '#0276aa'
                            : '#00e676',
                      }}
                    >
                      {Estado}
                    </Button>
                  </TableCell>

                  {columns.map((columns) => {
                    if (columns.actions)
                      return (
                        <TableCell
                          key={columns.field}
                          width={columns.width}
                          align='center'
                        >
                          {columns.actions.map((Actions, index) => (
                            <React.Fragment key={index}>
                              <Actions props={horaInt} status={Estado} />
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
    </TableContainer>
  );
};
