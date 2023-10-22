import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from './Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';
import { Layout } from './Layout';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('../pages/homePage'));
const RegisterPage = lazy(() => import('../pages/registrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
