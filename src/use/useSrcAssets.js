import React, { Suspense, lazy, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

export default function(QueueToBeResolved = []){

  const modules = import.meta.glob('@src/assets/**')
  const srcAssets =  Object.entries(modules || {}).reduce((acc, entry, index)=>{
    const path = entry[0]
    const importFunc = entry[1]
    const name = `@src/assets/${path.split('assets/')[1]}`
    return {
      ...acc,
      [name]: importFunc
    }
  }, {})

  const [assetsState, commit] = useReducer((state, action)=>{
    if( action.path && action.result ){
      return {
        ...state,
        [action.path]: action?.result
      }
    }
  }, {
  })

  useEffect(()=>{
    QueueToBeResolved.forEach((path)=>{
      srcAssets[path]().then((result)=>{
        commit({
          path: path,
          result: result.default
        })
      })
    })
  }, [])

  return assetsState
}
