import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRoles } from 'entities/User';
import { RoutePaths } from 'shared/config/routes/routes';
import { useMemo } from 'react';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRoles[];
}

export function RequireAuth(props : RequireAuthProps) {
  const { children, roles } = props;
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return (
         <Navigate
            to={RoutePaths.main}
            state={{ from: location }}
            replace
         />
    );
  }

  if (!hasRequiredRoles) {
    return (
         <Navigate
            to={RoutePaths.forbidden}
            state={{ from: location }}
            replace
         />
    );
  }

  return children;
}
