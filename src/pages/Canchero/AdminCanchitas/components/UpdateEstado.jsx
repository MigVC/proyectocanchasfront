import {
  Button,
  DialogActions,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { style } from '../../../../theme/style';
import { useForm } from 'react-hook-form';
import { HorarioContext } from '../../../../context/HorarioContext';
import { useReservation } from '../../../../hooks/useReservation';

const stados = [
  {
    value: 'Disponible',
    label: 'Disponible',
  },
  {
    value: 'Deshabilitado',
    label: 'Deshabilitado',
  },
  {
    value: 'Reservado',
    label: 'Reservado',
  },
];
export const TableActionsCanchero = ({ props, status }) => {
  const [open, setOpen] = useState(false);
  const [reservado, setReservado] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});
  const { setHorario, fecha } = useContext(HorarioContext);
  const {
    reservationList,
    createReservation,
    filterReservations,
    reservationListFiltered,
  } = useReservation();

  const Fecha = new Date(fecha);

  Fecha.setHours(props);

  const onSubmit = async (data) => {
    // console.log({ data });
    const formData = {
      toName: data.usuario,
      start: `${new Date(Fecha).toISOString().substring(0, 10)} ${new Date(
        Fecha
      )
        .toString()
        .substring(16, 24)}`,
      end: `${new Date(Fecha.setHours(props + 1))
        .toISOString()
        .substring(0, 10)} ${new Date(Fecha.setHours(props + 1))
        .toString()
        .substring(16, 24)}`,
      state: data.status,
    };
    await createReservation(formData);
    console.log(Fecha);
    console.log({ formData});
    // console.log(reservationList);
    setOpen(false);
  };

  // console.log({ reservationListFiltered });
  // console.log(reservado)

  // console.log(reservado)
  return (
    <>
      <IconButton onClick={handleOpen}>
        <ChangeCircleIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <div style={style.modal}>
          <div style={style.content}>
            <Typography
              style={{
                ...style.typography,
                marginBottom: 2,
                fontWeight: 600,
                fontSize: 26,
                color: style.color.letraDark,
              }}
            >
              Estado de la Canchita
            </Typography>
            <Button
              style={{
                borderRadius: 40,
                marginBottom: 10,
                marginTop: 10,
                height: 40,
                color: 'white',
                width: 150,
                background:
                  status === 'Deshabilitado'
                    ? '#f50057'
                    : status === 'Reservado'
                    ? '#0276aa'
                    : '#00e676',
              }}
            >
              {status}
            </Button>
            <Typography
              style={{
                ...style.typography,
                marginBottom: 2,
                fontWeight: 600,
                color: style.color.letraDark,
              }}
            >
              Hora
            </Typography>
            <Typography
              style={{
                ...style.typography,
                marginBottom: 10,
                fontWeight: 300,
                color: style.color.letraDark,
              }}
            >
              {Fecha.getHours()}:00 -{Fecha.getHours() + 1}:00
            </Typography>

            <Typography
              style={{
                ...style.typography,
                fontWeight: 600,
                color: style.color.letraDark,
              }}
            >
              Cambiar estado
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={1} p={2}>
                <Grid item style={style.content} xs={12}>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      defaultValue={status}
                      // onChange={setReservado('j')}
                      SelectProps={{
                        native: true,
                      }}
                      {...register('status')}
                      helperText='Selecciona el estado del horario'
                    >
                      {stados.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    {
                      <TextField
                        fullWidth
                        style={{ marginTop: 9 }}
                        label='Nombre de la reserva'
                        {...register('usuario')}
                      ></TextField>
                    }
                  </Grid>
                  <Grid container marginTop spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        variant='contained'
                        fullWidth
                        color='error'
                        onClick={(e) => reset()}
                      >
                        Cancelar
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        type='submit'
                        startIcon={<SaveIcon />}
                        variant='contained'
                        // onClick={e=>e.preventDefault(console.log(props))}
                      >
                        GUARDAR
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
