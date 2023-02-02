import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export const TableroHorarioDia = ({data,columns}) => {
  
  const [props, setProps] = useState();
  console.log(props)
  const array=data.horas
 
  console.log(columns)
  
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((columns)=>(
              
              <TableCell key={columns.field} width={columns.width}  align="center">{columns.headerName}</TableCell>

            ))}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  align="center"  component="th" scope="row">
                {row.name}
              </TableCell >
              <TableCell  align="center" >
                <Button  style={{borderRadius:40,height:40,color:'white',width:150,background:row.status==='Deshabilitado'?"#f50057":row.status==='Reservado'?"#0276aa":"#00e676"}}>

                
                {row.status}
                </Button>
                </TableCell >
              
              
                
                {columns.map(((columns)=>{if (columns.actions) return<TableCell key={columns.field} width={columns.width} align="center">
                  {columns.actions.map((Actions,index)=>{return (<React.Fragment key={index}>
                    <div  onClick={()=>{setProps(row)}}><Actions props={props}  /></div>
                  </React.Fragment>)})}
                  </TableCell> }
                
            ))}
              
              
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}