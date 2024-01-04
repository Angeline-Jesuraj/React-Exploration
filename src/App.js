import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Topic from "./components/Topic";
import SyncComponent from "./components/Topics/SyncComponent";
import AsyncComponent from "./components/Topics/AsyncComponent";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// import oktaConfig from './oktaConfig';
function App() {
  return (
    <Provider store={store}>
      {/* <Security {...oktaConfig}> */}
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
        </nav>
        <Routes>
          <Route path="/topics" element={<Topic />} />
          <Route path="/sync" element={<SyncComponent />} />
          <Route path="/async" element={<AsyncComponent />} />
          {/* <SecureRoute path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* </Security> */}
    </Provider>
  );
}

export default App;
