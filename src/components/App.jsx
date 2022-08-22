import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Private from './Route/Private';
import Public from './Route/Public';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from '../redux/authorization/authorizationSelector';
import { getCurrentUser } from '../redux/authorization/authorizationOperation';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contact = lazy(() => import('../pages/Contact'));

const App = () => {
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser(token));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            path="login"
            element={<Public component={Login} restricted />}
          />
          <Route
            path="register"
            element={<Public component={Register} restricted />}
          />
          <Route path="contacts" element={<Private component={Contact} />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
