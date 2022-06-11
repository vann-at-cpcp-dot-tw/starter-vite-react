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

function Footer(){
  return (<Suspense fallback={null}>
    <div className="text-center">This is Footer</div>
  </Suspense>)
}

export default Footer