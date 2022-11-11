import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'
import { toCamelCase } from '@src/helpers'

// 以 file system 自動引入
const modules = import.meta.glob('@src/components/**/*.jsx')
const components = Object.entries(modules || {}).reduce((acc, entry, index)=>{
  const path = entry[0]
  const importFunc = entry[1]
  const name = toCamelCase(path.replaceAll('/src/components/', '').replaceAll('.jsx', '').replaceAll('/', ''), '/', true)
  return {
    ...acc,
    [name]: lazy(importFunc)
  }
}, {})

export default components
