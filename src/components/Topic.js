import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SyncComponent from './Topics/SyncComponent'
import AsyncComponent from './Topics/AsyncComponent'
function Topic() {
  return (
    <div>
      <nav>
        <Link to="/sync">Synchronous</Link>
        <Link to="/async">AsynChronous</Link>
        <Link to="/typescripteg">TypeScriptEg</Link>
        <Link to="/apicomponent">ApiComponent</Link>
        <Link to="/numberinputprops">NumberInputProps</Link>
        <Link to="/datavisual">DataVisualizationEg</Link>
      </nav>
    </div>
  )
}

export default Topic
