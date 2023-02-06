import './categories.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react';
import Home from './router/home/home.component'
import Navigationbaar from './router/Navigation/Navigation.component'
import Authentication from './router/authentication/authentication.component';
import Shop from './router/shop/shop.component'

function App() {
  return (<>

      <Routes>
        <Route path="/" element={<Navigationbaar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>

      </Routes>
    

    

  </>)
}

export default App;
