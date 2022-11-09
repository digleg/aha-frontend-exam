import { matchRoutes, useLocation } from 'react-router-dom';

const routes = [{ path: '/members/:id' }];

const useCurrentPath = () => {
  const location = useLocation();
  const route = matchRoutes(routes, location);

  return route;
};

export default useCurrentPath;
