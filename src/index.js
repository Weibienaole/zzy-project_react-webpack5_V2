import { render } from 'react-dom'
import { JSB_init, setDomRem } from 'zzy-javascript-devtools'

import App from './App.js'


// JSbridge 初始化
JSB_init()

// console.log = function () { }

// rem 设置
setDomRem(8)
window.localStorage.setItem('domRem', 8)


render(<App />, document.getElementById('root'))
