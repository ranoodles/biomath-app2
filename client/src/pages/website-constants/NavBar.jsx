import React from 'react'
import {AppBar, Toolbar, IconButton} from '@mui/material'
import AcUnit from '@mui/icons-material/AcUnit'

export default function Nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <AcUnit />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
