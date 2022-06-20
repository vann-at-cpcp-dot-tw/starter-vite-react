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
import styles from '@src/components/styles/index.module.sass'

const { LayoutGeneral, Lightbox, LightboxClose } = components

// Sample.propTypes = {
//   // https://github.com/facebook/prop-types
//   foo: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
//   bar: PropTypes.string,
// }

function __Sample(props, ref){
  const store = useStore()
  const viewport = useWindowSize()
  const [searchParams, setSearchParams] = useSearchParams()
  const queryObject = useMemo(()=>Object.fromEntries([...searchParams]), [Object.values(Object.fromEntries([...searchParams])).join(',')])
  const navigate = useNavigate()
  const [{ route }] = matchRoutes(routes, location)
  const [state, setState] = useReducer((state, updateState)=>({...state, ...updateState}), {
    // init state
  })

  return (<Suspense fallback={null}>

  </Suspense>)
}

export default __Sample