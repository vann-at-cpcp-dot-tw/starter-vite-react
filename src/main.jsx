/* eslint-disable no-extend-native */
import React, { Suspense, lazy, useState, useEffect, useMemo, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import App from '@src/App'

import '@src/styles/main.sass'
import '@src/styles/tailwind.css'

// 新增物件原型 replaceAll 方法 (支援舊手機)
if (!String.prototype.replaceAll){
  String.prototype.replaceAll = function(str, newStr){

    function escapeRegExp(string){
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    }

    return this.replace(new RegExp(escapeRegExp(str), 'g'), newStr)
  }
}

// https://vitejs.dev/config/#build-polyfillmodulepreload
// using workaround https://github.com/vitejs/vite/issues/4786
if (import.meta.env.MODE !== 'development'){
  import('vite/modulepreload-polyfill')
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />)
