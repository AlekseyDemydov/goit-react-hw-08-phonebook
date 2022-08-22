import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserToken } from '../../redux/authorization/authorizationSelector';

function Navigation() {
  const isAuth = useSelector(getUserToken);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      isAuth ? navigate('/contacts') : navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main>
        <section>
          <div>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default Navigation;
