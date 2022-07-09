import React, { Suspense, lazy, forwardRef, useState, useEffect, useMemo, useCallback } from 'react'
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

function Footer(props, ref){
  return (<Suspense fallback={null}>
    <div className="py-4" ref={ref}>
      <div className="text-center">This is Footer</div>
    </div>
  </Suspense>)
}

export default forwardRef(Footer)