Router.map(function(){
  this.route('home', {
    layoutTemplate: 'pageLayout',
    template: 'home', 
    path: '/'
  });
  this.route('slide', {
    layoutTemplate: 'pageLayout',
    template: 'slide',
    path: '/slide'
  });
});