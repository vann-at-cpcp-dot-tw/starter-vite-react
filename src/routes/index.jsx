import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useRoutes } from 'react-router-dom'
export { BrowserRouter, Routes, Route, Link, Outlet, useRoutes }

import { toCamelCase } from '@src/helpers'

const PageModules = import.meta.glob('@src/pages/**/*.jsx')
const PageElements = Object.entries(PageModules || {}).reduce((acc, entry, index)=>{
  const path = entry[0]
  const importFunc = entry[1]
  const name = toCamelCase(path.split('pages/')[1].replaceAll('.jsx', ''), '/', true)
  return {
    ...acc,
    [name]: lazy(importFunc)
  }
}, {})

export const routes = [
  {
    path: '/',
    element: <Suspense fallback={null}><PageElements.Index /></Suspense>,
  },
  {
    path: '/about',
    element: <Suspense fallback={null}><PageElements.AboutIndex /></Suspense>,
    children: [
      {
        path: '/about/me',
        element: <Suspense fallback={null}><PageElements.AboutMe /></Suspense>,
      },
      {
        path: '/about/company',
        element: <Suspense fallback={null}><PageElements.AboutCompany /></Suspense>,
      },
    ]
  },
  {
    path: '*',
    element: <div className="py-10 text-center">404</div>
  }
]

