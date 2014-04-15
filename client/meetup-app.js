var maxSlide = 3;

Template.pageLayout.events({
  "click [data-action = 'nextSlide']" : function(e, t){
    e.preventDefault();
    var nextSlideNum = +Router.current().params.num + 1;
    console.log(nextSlideNum);
    if(nextSlideNum > maxSlide) {
    }else {
    	Router.go("/slide/" + nextSlideNum);
    }
		
  },
 "click [data-action = 'previousSlide']" : function(e, t){
    e.preventDefault();
    var previousSlideNum = +Router.current().params.num - 1;
    if(previousSlideNum >= 0) {
    	Router.go("/slide/" + previousSlideNum);
    }
    else {
    	
    }
  
 }
})

Template.pageLayout.isAtLastSlide = function(){
  return maxSlide === +Router.current().params.num;
}

Template.pageLayout.isAtFirstSlide = function(){
  return 0 === +Router.current().params.num;
}