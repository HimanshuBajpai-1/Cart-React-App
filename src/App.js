import './style/app.scss'
import Header from './component/Header';
import Home from './component/Home'
import Cart from './component/Cart'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import './style/mediaquery.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
