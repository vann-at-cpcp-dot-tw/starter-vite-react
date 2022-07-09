import React, { Suspense, lazy, forwardRef, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'

// routes
import { routes } from '@src/routes'
import { Link, useParams, useSearchParams, createSearchParams, useNavigate, useLocation, matchRoutes } from 'react-router-dom'

// store
import { useStore } from '@src/store'
import useSrcAssets from '@src/use/useSrcAssets'

// use
import { useWindowSize } from 'react-use'
import { useQuery, useMutation, useQueryClient } from 'react-query'

// methods & components
import components from '@src/components'
import { isEmpty } from '@src/helpers'

// styles
// import styles from '@src/components/styles/index.module.sass'


const { LayoutGeneral, Lightbox, LightboxClose } = components


export default function Index(){
  const srcAssets = useSrcAssets(['@src/assets/img/logo.png'])
  const store = useStore()

  return (<Suspense fallback={<>...LOADING...</>}>
    <LayoutGeneral>

      <Lightbox id="helloLightbox">
        <LightboxClose />
        <div>Hello Lightbox</div>
      </Lightbox>

      <div className="flex min-h-full flex-col items-center justify-center p-5">

        <div className="row mb-5 justify-center">
          <div className="col">
            <img src={srcAssets?.['@src/assets/img/logo.png']} />
          </div>
          <div className="col">
            <img src="/assets/img/logo-without-hash.png" />
          </div>
        </div>

        <div className="text-center">
          <div className="btn cursor-pointer"
          onClick={()=>{
            store.set({lightbox: 'helloLightbox'})
          }}>
            CLICK ME!
          </div>
        </div>
      </div>
    </LayoutGeneral>
  </Suspense>)
}