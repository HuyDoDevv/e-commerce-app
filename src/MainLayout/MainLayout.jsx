import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../page/Home/Home'
import Auth from '../Page/Auth/Auth'
import Login from '../page/Auth/Login/Login'
import Register from '../page/Auth/Register/Register'
import Error from '../page/Error/Error'
import AuthCheck from '../AuthCheck/AuthCheck'
import Footer from '../Components/Footer/Footer'

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* NavBar */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* not found Routes */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* footer compoonent */}
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default MainLayout
