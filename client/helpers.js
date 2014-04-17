UI.registerHelper("currentRouteIs", function(routeName){
  return Router.current().route.name === routeName;
});