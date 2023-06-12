import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import Home from './pages/Home';
import Err404 from './pages/Err404';
import Resume from '../src/layout/pdf/resume.pdf'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.scss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<Err404/>}></Route>
        <Route path='/resume.pdf' element={<Resume/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
