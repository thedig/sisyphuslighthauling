// stringToBoolean: function(string){
//   switch(string.toLowerCase()){
//     case "true": case "yes": case "1": return true;
//     case "false": case "no": case "0": case null: return false;
//     default: return Boolean(string);
//   }
// }

window.ClairePortfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    ClairePortfolio.projects = new ClairePortfolio.Collections.Projects();
    var patt = new RegExp("true");
    ClairePortfolio.login_status = patt.test($('#login_status').text());
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
