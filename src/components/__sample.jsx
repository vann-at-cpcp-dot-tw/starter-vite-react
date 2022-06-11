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

Sample.propTypes = {
  ratio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

function Sample(){
  const store = useStore()

  return (<Suspense fallback={null}>

  </Suspense>)
}

export default Sample