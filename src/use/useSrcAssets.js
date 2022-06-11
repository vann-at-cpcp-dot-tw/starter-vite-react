import React, { Suspense, lazy, useState, useRef, useReducer, useEffect, useMemo, useCallback } from 'react'

export default function(QueueToBeResolved = []){

  const srcAssetsModules = import.meta.glob('@src/assets/**')
  const srcAssets =  {}

  for (const path in srcAssetsModules){
    const assetName = `@src/assets/${path.split('assets/')[1]}`
    srcAssets[assetName] = srcAssetsModules[/* @vite-ignore */ `${path}`]
  }

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
