Router.map(function(){
  this.route('home', {
    layoutTemplate: 'pageLayout',
    template: 'home', 
    path: '/'
  });
  this.route('slide', {
    layoutTemplate: 'pageLayout',
    path: "/slide/:num",
    action: function(){
      this.render("slide" + this.params.num)
    }
  });
});