ClairePortfolio.Collections.Projects = Backbone.Collection.extend({
	
	comparator: function(item){
		return item.id;
	},

	model: ClairePortfolio.Models.Project,
	url: "/projects/"
})