import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberclitestENV.locationType
});

Router.map(function() {
	  this.resource("users", { path: "/users" });

});
/*
this.userRoute = Ember.Route.extend({
	model: function  () {
		return [1,2,3];
	}
});*/

export default Router;
