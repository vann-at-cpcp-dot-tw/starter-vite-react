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
// import styles from '@src/components/styles/index.module.sass'

RatioArea.propTypes = {
  ratio: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

function RatioArea(props){

  return (
    <div className="ratioArea relative w-full">
      <div className="fill pointer-events-none relative" style={{
        width: '100%',
        paddingBottom: `${props.ratio}%`
      }}></div>
      { props.children }
    </div>
  )
}


export default RatioArea