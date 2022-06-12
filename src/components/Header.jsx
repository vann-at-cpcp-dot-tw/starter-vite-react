import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// routes
import { routes, Link  } from '@src/routes'

// store
import { useStore } from '@src/store'

// use
import { useWindowSize } from 'react-use'

// methods & components
import components from '@src/components'
import { isEmpty } from '@src/helpers'

// styles
import styles from '@src/components/styles/index.module.sass'

const { Lightbox } = components


function Header(){
  return (<Suspense fallback={null}>
    <header className="py-4">
      <div className="text-center">This is Header</div>
      <div className="row justify-center">
        <div className="col-auto">
          <Link to="/">Home</Link>
        </div>
        <div className="col-auto">
          <Link to="/about">ABOUT</Link>
        </div>
      </div>
    </header>
  </Suspense>)
}

export default Header