import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Feed } from '../../components/Feed'
import SearchIcon from '@mui/icons-material/Search';
import { stylesNavBar } from '../../context/theme';
export const DashBoard = () => {
  return (
    <Box>
      
      <Stack>
        
        <Box component="span" alignContent='center' sx={{ p:4,textAlign: 'center',...stylesNavBar.titleBackGround }}>
          <div style={{justifyContent:'space-between'}}>
          <Sidebar/>
          
          </div>
          
        </Box>
      </Stack>
      <Stack direction='column' spacing={2} justifyContent='space-between' sx={{margin:0}} >
            
            
            <Feed/>
      </Stack>
    </Box>
  )
}
