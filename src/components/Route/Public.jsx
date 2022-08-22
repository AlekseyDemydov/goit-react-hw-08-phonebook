import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserToken } from '../../redux/authorization/authorizationSelector';

const Public = ({ component: Component, restricted = false }) => {
  const isAuth = useSelector(getUserToken);

  return isAuth && restricted ? <Navigate to="/contacts" /> : <Component />;
};

export default Public;

Public.propTypes = {
  component: PropTypes.object,
  restricted: PropTypes.bool,
};
