import React, { Suspense, lazy, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// routes
import { routes, Link  } from '@src/routes'

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

function Me(){
  const store = useStore()

  return (<Suspense fallback={null}>
    <div className="text-center">
      This is About Me page.
    </div>
  </Suspense>)
}

export default Me