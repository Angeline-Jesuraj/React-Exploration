import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import SyncComponent from './Topics/SyncComponent';
import AsyncComponent from './Topics/AsyncComponent';
function Topic() {
  return (
  <div>
    <nav>
      <Link to ="/sync">Synchronous</Link>
      <Link to ="/async">AsynChronous</Link>
    </nav>
    </div>
  );
}

export default Topic;
