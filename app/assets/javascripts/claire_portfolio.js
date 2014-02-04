window.ClairePortfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ClairePortfolio.projects = new ClairePortfolio.Collections.Projects();
    ClairePortfolio.projects.fetch({
    	success: function() {
    		new ClairePortfolio.Routers.Router({
    			"$rootEl": $("#content")
    		});
    		Backbone.history.start();
    	}
    });
  }
};

$(document).ready(function(){
  ClairePortfolio.initialize();
});
