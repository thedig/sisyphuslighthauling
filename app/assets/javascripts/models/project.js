ClairePortfolio.Models.Project = Backbone.Model.extend({

	parse: function(obj) {
		obj.photos = new ClairePortfolio.Collections.Photos(obj.photos, {project_id: obj.id});
		obj.splash = new ClairePortfolio.Collections.Photos(obj.splash_photo, {project_id: obj.id})
		return obj;
	},

})