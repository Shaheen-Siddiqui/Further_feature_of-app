import './categories.style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './router/home/home.component'
import Navigationbaar from './router/Navigation/Navigation.component'
import Authentication from './router/authentication/authentication.component';
import Shop from './router/shop/shop.component';
import CheckOut from './router/checkout/checkout.component'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils'
import { setCurrentUser } from "./store/user/user.action";
import { getCategoriesAndDocument } from "./utils/firebase/firebase.utils";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, [])
  return (<>


    <Routes>
      <Route path="/" element={<Navigationbaar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path="checkout" element={<CheckOut/>}/>
      </Route>
    </Routes>




  </>)
}

export default App;
