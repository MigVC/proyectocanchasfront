import { Box, Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { Feed } from '../../components/Feed'

export const DashBoard = () => {
  return (
    <Box>
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar/>
            <Feed/>
        </Stack>
    </Box>
  )
}
