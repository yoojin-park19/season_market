import './reset.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeIndexPage from './pages/Home';
import LoginIndexPage from './pages/Login';
import ProductIndexPage from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIndexPage} />
      <Route path="/login" exact component={LoginIndexPage} />
      <Route path="/Product/:id" exact component={ProductIndexPage} />
    </BrowserRouter>
  );
}

export default App;
