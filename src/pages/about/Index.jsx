import React, { Suspense, lazy, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// routes
import { routes, Link, Outlet  } from '@src/routes'

// store
import { useStore } from '@src/store'
import useSrcAssets from '@src/use/useSrcAssets'

// use
import { useWindowSize } from 'react-use'

// methods & components
import components from '@src/components'
import { isEmpty } from '@src/helpers'

// styles
import styles from '@src/components/styles/index.module.sass'

const { LayoutGeneral, Lightbox, LightboxClose } = components

function About(){
  const store = useStore()

  return (<Suspense fallback={null}>
    <LayoutGeneral>
      <div className="row justify-center">
        <div className="col-auto">
          <Link to="/about/me">Me</Link>
        </div>
        <div className="col-auto">
          <Link to="/about/Company">Company</Link>
        </div>
      </div>
      <Outlet />
    </LayoutGeneral>
  </Suspense>)
}

export default About