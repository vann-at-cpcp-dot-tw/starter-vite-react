import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export { BrowserRouter, Routes, Route, Link }

export const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(()=>import('@src/pages/Index.jsx')),
    fallback: '...',
  },
]

export function RouteWithSubRoutes(route, key){
  return (
    <Route
    key={key}
    path={route.path}
    element={<Suspense fallback={<>{route?.fallback}</>}><route.component /></Suspense>}>
      {
        route?.children?.map((subRoute, subRouteIndex)=>{
          return <RouteWithSubRoutes route={subRoute} key={subRouteIndex} />
        })
      }
    </Route>
  )
}
