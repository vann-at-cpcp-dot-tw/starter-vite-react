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


function LightboxClose(props){

  const store = useStore()

  useEffect(()=>{

    function lightboxClickHandler(e){
      if( $(e.target).data('el') == 'lightbox'){
        store.lightboxOpen(null)
      }
    }

    $('body').on('click', lightboxClickHandler)


    return function(){
      $('body').off('click', lightboxClickHandler)
    }
  }, [store.lightbox])

  return(
    <div className="close flex justify-end">
      <div className="btn flex h-10 w-10 items-center justify-center"
      style={{
        marginRight: '-32px',
        marginTop: '-24px',
      }}
      onClick={()=>{
        store.lightboxOpen(null)
      }}>
        <i className="bi bi-x text-[42px] leading-none"></i>
      </div>
    </div>
  )
}

export default LightboxClose