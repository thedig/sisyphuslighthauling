ClairePortfolio.Collections.Photos = Backbone.Collection.extend({
	
	comparator: function(item){
		return item.get('position');
	},

	initialize: function (models, options) {
		this.project_id = options.project_id;
	},

	model: ClairePortfolio.Models.Photo,
	url: function() {
		return "/projects/" + this.project_id + "/photos";
	},

})
