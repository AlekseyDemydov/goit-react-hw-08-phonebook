import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserToken } from '../../redux/authorization/authorizationSelector';

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector(getUserToken);
  return isAuth ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.object,
};
