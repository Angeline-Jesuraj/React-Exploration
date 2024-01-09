
import React from 'react'
import {  Link } from 'react-router-dom'
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
        <Link to ="/loginForm">LoginForm</Link>
        <Link to ="/reduxsagaeg">Redux Saga Eg</Link>
        <Link to ="/reduceg">Redux Example</Link>
      </nav>
    </div>
  )
}

export default Topic
