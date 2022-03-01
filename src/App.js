import './reset.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeIndexPage from './pages/Home';
import LoginIndexPage from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIndexPage} />
      <Route path="/login" exact component={LoginIndexPage} />
    </BrowserRouter>
  );
}

export default App;
