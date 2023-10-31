import { Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import { AuthContextProvider } from './Context/AuthContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import Account from './Pages/Account';
import ProtectedRoute from './Componenets/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
         <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
