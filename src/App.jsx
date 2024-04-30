
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import AuthPage from './page/AuthPage/AuthPage';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
