import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'

// routes
import { BrowserRouter, Routes, routes, RouteWithSubRoutes } from '@src/routes'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route, index)=>{
            return RouteWithSubRoutes(route, index)
          })
        }
      </Routes>
    </BrowserRouter>
  )
}
