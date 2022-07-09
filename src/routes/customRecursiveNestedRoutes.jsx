import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useRoutes } from 'react-router-dom'
export { BrowserRouter, Routes, Route, Link, Outlet, useRoutes }

export const routes = [
  {
    path: '/',
    element: lazy(()=>import('@src/pages/Index.jsx')),
    fallback: '...',
  },
  {
    path: '/about',
    element: lazy(()=>import('@src/pages/about/Index.jsx')),
    children: [
      {
        path: '/about/me',
        element: lazy(()=>import('@src/pages/about/Me.jsx')),
      },
      {
        path: '/about/company',
        element: lazy(()=>import('@src/pages/about/Company.jsx')),
      },
    ]
  },
  {
    path: '*',
    element: <div className="py-10 text-center">404</div>
  }
]

export function RouteWithSubRoutes(route, key){
  return (
    <Route
    key={key}
    path={route.path}
    element={<Suspense fallback={<>{route?.fallback}</>}><route.element /></Suspense>}>
      {
        route?.children?.map((subRoute, subRouteIndex)=>{
          return RouteWithSubRoutes(subRoute, subRouteIndex)
        })
      }
    </Route>
  )
}

// 在 App.jsx
// import { routes } from '@src/routes'
// import { Link, useParams, useSearchParams, createSearchParams, useNavigate, useLocation, matchRoutes } from 'react-router-dom'
// function App(){
//   return (
//     <BrowserRouter>
//       <Routes>
//         {
//           routes.map((route, index)=>{
//             return RouteWithSubRoutes(route, index)
//           })
//         }
//       </Routes>
//     </BrowserRouter>
//   )
// }




