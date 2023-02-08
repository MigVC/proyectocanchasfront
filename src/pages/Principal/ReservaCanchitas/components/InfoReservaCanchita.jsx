import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useContext,useState } from 'react'
import { style } from '../../../../theme/style';
import { HorarioContext } from '../../../../context/HorarioContext';
import InfoIcon from '@mui/icons-material/Info';
import {Jugador} from '../../../../assets/icons/jugador';
import {JugadorTriste} from '../../../../assets/icons/jugadorTriste';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Canchero } from '../../../../assets/icons/canchero';
import FondoCanchero from '../../../../assets/images/pagina.jpg'
export const InfoReservaCanchita = () => {
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { setHorario, fecha } = useContext(HorarioContext);
    const Fecha=new Date(fecha)
    
    const status='Disponible'
  return (
    
    <>
      <Button onClick={handleOpen} style={{color:style.color.letraDark}}>
          <InfoIcon/>
      </Button>
      <Modal open={open} onClose={handleClose}
      >
        <div style={style.modal}>
          <div style={{...style.content, backgroundRepeat:'no-repeat',
              // backgroundPosition:'center', backgroundSize:'cover',backgroundImage:`url(${FondoCanchero})`
              }}>
            <Typography style={{...style.typography,marginBottom:15,fontWeight:600,fontSize:26,color:style.color.letraDark}}>
              Estado de la Canchita
            </Typography>
              <Button  
                style={{borderRadius:40,
                  marginBottom:20,
                  marginTop:10,
                  height:40,color:'white',
                  width:150,background:status==='Deshabilitado'?"#f50057":status==='Reservado'?"#0276aa":"#00e676"}}
              >
                {status}
              </Button>
              <Typography style={{...style.typography,marginBottom:5,fontWeight:600,color:style.color.letraDark}}>
                Hora
              </Typography>
              <Typography style={{...style.typography,marginBottom:20,fontWeight:300,color:style.color.letraDark}}>
                {Fecha.getHours()}:00 -{Fecha.getHours()+1}:00
              </Typography>
              {(status==='Disponible'?
              <>
                <Typography style={{...style.typography,marginBottom:15,fontWeight:600,color:style.color.letraDark}}>
                  Contactesé con el canchero para reservar
                </Typography>
                <Typography style={{...style.typography,marginBottom:15,fontWeight:500,fontSize:14,color:style.color.letraDark}}>
                  Willy Colon
                </Typography>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderRadius:50,backgroundColor:style.color.primary, marginBottom:2,height:28,width:200}}>
                <Typography style={{...style.typography,fontWeight:350,fontSize:15,color:style.color.letra}}>
                  951260282
                </Typography>
                </Box>
                <Canchero/>
              </>
              :
              status==='Reservado'?
              <>
                <Typography style={{...style.typography,marginBottom:15,fontWeight:600,fontSize:20,color:style.color.letraDark}}>
                Reserva a nombre de
                </Typography>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderRadius:50,backgroundColor:style.color.primary, marginBottom:2,height:28,width:200}}>
                <Typography style={{...style.typography,fontWeight:350,fontSize:15,color:style.color.letra}}>
                  Julito Jirafales Cano
                </Typography>
                </Box>
                <Jugador/>
              </>:
              <>
                <JugadorTriste />
                <Typography style={{...style.typography,marginBottom:15,fontWeight:600,fontSize:10,color:style.color.letraDark}}>
                Lo sentimos, la canchita está deshabilitada para este horario 
                </Typography>
                
              </>)}
              
          </div>
        </div>
      </Modal>
    </>
  )
}
