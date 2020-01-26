class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoutes();
  }

  _matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find(route => {
      const routePathSegs = route.path.split('/').splice(1);

      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }
    });
  }

  _loadInitialRoutes() {
    const pathNameSplit = window.location.pathname.split('/');
    const pathSegs = pathNameSplit.length > 1 ? pathNameSplit[1] : '';
    this.loadRoute(...pathSegs);
  }
}
