import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomAppBar from '../components/AppBar'

const RootLayout = () => {
  return (
    <Stack>
        <CustomAppBar/>
        <Outlet/>
    </Stack>
  )
}

export default RootLayout