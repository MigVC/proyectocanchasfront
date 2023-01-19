import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Feed } from '../../components/Feed'

export const DashBoard = () => {
  return (
    <Box>
      
      <Stack>
        
      <Box component="span" sx={{ p:4,textAlign: 'center', border: '1px dashed grey' }}>
      <h1>Encuentra tu Canchita</h1>
    </Box>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            
            <Sidebar/>
            <Feed/>
        </Stack>
    </Box>
  )
}
