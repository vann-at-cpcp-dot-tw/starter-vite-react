import React, { Suspense, lazy, useState, useRef, useEffect, useMemo, useCallback } from 'react'
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
import styles from '@src/components/styles/Lightbox.module.sass'

const { Portal } = components
Lightbox.propTypes = {
  id: PropTypes.string,
}
function Lightbox(props){
  const store = useStore()
  const innerRef = useRef(null)
  const lightboxRef = useRef(null)

  useEffect(()=>{

    if( store.lightbox ){
      $('body').addClass('lb-open')
    }

    return function(){
      $('body').removeClass('lb-open')
    }

  }, [store.lightbox])

  return(
    <>
      {
        store.lightbox == props.id
          ?(
            <Portal dom={document.body}>
              <div data-el="lightbox"
              className={`${styles.lightbox} ${props?.className}`}
              id={props?.id}
              ref={lightboxRef}>
                <div className="inner" style={{maxWidth: props?.maxWidth}} ref={innerRef}>
                  <div className="p-6 lg:px-8 lg:py-6">{props?.children}</div>
                </div>
              </div>
            </Portal>
          )
          :('')
      }
    </>
  )
}

export default Lightbox