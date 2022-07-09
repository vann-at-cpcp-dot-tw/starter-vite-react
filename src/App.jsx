import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'

// routes
import { routes } from '@src/routes'
import { BrowserRouter, useRoutes } from 'react-router-dom'

function RoutesNodes(){
  const routeNodes = useRoutes(routes)
  return routeNodes
}

function App(){
  return (
    <BrowserRouter basename={VITE_APP_BASE}>
      <RoutesNodes />
    </BrowserRouter>
  )
}

export default App