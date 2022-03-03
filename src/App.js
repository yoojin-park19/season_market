import './reset.css';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeIndexPage from './pages/Home';
import LoginIndexPage from './pages/Login';
import ProductIndexPage from './pages/Product';
import CartIndexPage from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIndexPage} />
      <Route path="/login" exact component={LoginIndexPage} />
      <Route path="/product/:id" exact component={ProductIndexPage} />
      <Route path="/cart" exact component={CartIndexPage} />
    </BrowserRouter>
  );
}

export default App;
