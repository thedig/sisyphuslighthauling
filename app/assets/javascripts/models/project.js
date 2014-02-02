ClairePortfolio.Models.Project = Backbone.Model.extend({

	parse: function(obj) {
		obj.photos = new ClairePortfolio.Collections.Photos(obj.photos, {project_id: obj.id});
		return obj;
	},

})