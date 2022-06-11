import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'

// 以 file system 自動引入
const componentModules = import.meta.glob('./**/*.jsx')
const components = {}

for (const path in componentModules){

  const componentName = path.replaceAll('./', '').replaceAll('.jsx', '').replaceAll('/', '')
  components[componentName] = lazy(componentModules[/* @vite-ignore */ `${path}`])
}

export default components
