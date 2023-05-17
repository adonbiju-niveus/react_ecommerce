import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Home ,Cart, Wishlist} from './Pages ';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
