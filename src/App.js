import './reset.css';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeIndexPage from './pages/Home';
import AccountIndexPage from './pages/Accounts';
import JoinPages from './pages/Accounts/components/JoinPage';
import ProductIndexPage from './pages/Product';
import CartIndexPage from './pages/Cart';
import PaymentIndexPage from './pages/Payment';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIndexPage} />
      <Route path="/account" exact component={AccountIndexPage} />
      <Route path="/product/:id" exact component={ProductIndexPage} />
      <Route path="/cart" exact component={CartIndexPage} />
      <Route path="/payment" exact component={PaymentIndexPage} />
      <Route path="/account/signup" exact component={JoinPages} />
    </BrowserRouter>
  );
}

export default App;
