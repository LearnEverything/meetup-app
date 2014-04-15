Template.pageLayout.events({
  "click [data-action = 'nextSlide']" : function(e, t){

    //console.log(Router.current().params.num);
    //Router.go();
    //Router.current().params.++);
		Router.go("/slide/" +  Router.current().params++)
  },
     "click [data-action = 'previousSlide']" : function(e, t){
     	Router.go("/slide/" +  Router.current().params--)
     }

})