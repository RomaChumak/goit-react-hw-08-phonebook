import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="menu-wrapper">
      <p className="username">Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};