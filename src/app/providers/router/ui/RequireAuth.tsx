import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from 'entities/User';
import { RoutePaths } from 'shared/config/routes/routes';

export function RequireAuth({ children }: {children: JSX.Element}) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
         <Navigate
            to={RoutePaths.main}
            state={{ from: location }}
            replace
         />
    );
  }

  return children;
}
