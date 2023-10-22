import { useAuth } from 'hooks/useAuth';
import { Link} from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className="nav-link" to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};