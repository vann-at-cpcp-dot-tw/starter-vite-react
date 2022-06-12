import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'

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
// import styles from '@src/components/styles/index.module.sass'

const { LayoutGeneral, Lightbox, LightboxClose } = components


export default function Index(){
  const srcAssets = useSrcAssets(['@src/assets/img/logo.png'])
  const store = useStore()

  return (<Suspense fallback={<>333333333333333333333333</>}>
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