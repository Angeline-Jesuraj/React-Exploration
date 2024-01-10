import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Topic from './components/Topic'
import SyncComponent from './components/Topics/SyncComponent'
import AsyncComponent from './components/Topics/AsyncComponent'
import Home from './components/Home'
import { Provider } from 'react-redux'
import TypeScriptEg from './components/Topics/TypeScriptEg.tsx'
import ApiComponent from './components/Topics/ApiComponent.tsx'
import NumberInput from './components/Topics/NumberInputProps.tsx'
import DataVisualizationEg from './components/Topics/DataVisualizationEg.tsx'
import LoginForm from './components/Topics/LoginForm.js'
import UserComponent from './components/Topics/UserComponent.js'
import ReduxEg from "./components/redux/ReduxEg.js"
import store from './store'
import Header from './components/redux/Header.js'
import SagaEg from './components/saga/SagaEg.js'

// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import oktaConfig from './oktaConfig';
function App() {
  return (
    <Provider store={store}>
      {/* <Security {...oktaConfig}> */}
      {/* <div>Hello !!!!!!!!!!!!</div> */}
      <Header/>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
        </nav>
        <Routes>
          <Route path="/topics" element={<Topic />} />
          <Route path="/sync" element={<SyncComponent />} />
          <Route path="/async" element={<AsyncComponent />} />
          <Route path="/typescripteg" element={<TypeScriptEg />} />
          <Route path="/apicomponent" element={<ApiComponent />} />
          <Route path="/numberinputprops" element={<NumberInput />} />
          <Route path="/datavisual" element={<DataVisualizationEg/>} />
          <Route path="/loginForm" element ={<LoginForm/>}/>
          <Route path ="/reduxsagaeg" element ={<UserComponent/>}/>
          <Route path ="/SagaFetchEg" element ={<SagaEg/>}/>
          {/* <SecureRoute path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/reduceg" element={<ReduxEg/>}/>
        </Routes>
      </BrowserRouter>
      {/* </Security> */}
    </Provider>
  )
}

export default App
