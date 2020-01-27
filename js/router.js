class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoutes();
  }

  loadRoute(...urlSegs) {
    const matchedRoute = this._matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join('/')}`;
    history.pushState({}, 'SPA Router', url);

    const routerOutElement = document.querySelectorAll('[data-router]')[0];
    routerOutElement.innerHTML = matchedRoute.template;
  }

  _matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find(route => {
      const routePathSegs = route.path.split('/').slice(1);

      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }
      return routePathSegs.every((routePathSeg, i) => routePathSegs === urlSegs[i]);
    });
    return matchedRoute;
  }

  _loadInitialRoutes() {
    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

    this.loadRoute(...pathSegs);
  }
}
