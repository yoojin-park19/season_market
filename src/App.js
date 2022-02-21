import './reset.css';
import { Route, BrowserRouter } from 'react-router-dom';
import HomeIndexPage from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeIndexPage} />
    </BrowserRouter>
  );
}

export default App;
