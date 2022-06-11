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

const { Header, Footer } = components

function General(props){

  return (<Suspense fallback={null}>
    <div className="flex h-full w-full flex-col flex-nowrap">
      <Header />

      <main className="grow">
        { props.children }
      </main>

      <Footer />
    </div>
  </Suspense>)
}

export default General