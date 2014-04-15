var maxSlide = 2;

Template.pageLayout.events({
  "click [data-action = 'nextSlide']" : function(e, t){
    e.preventDefault();
		Router.go("/slide/" +  Router.current().params.num++);
  },
 "click [data-action = 'previousSlide']" : function(e, t){
    e.preventDefault();
   	Router.go("/slide/" +  Router.current().params.num--);
 }
})