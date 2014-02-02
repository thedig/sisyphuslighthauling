ClairePortfolio.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "projectIndex",
		"projects": "projectIndex",
		"project/:id": "projectShow",
		"project/:id/photos/new": "newPhoto"
	},

	newPhoto: function(id) {
		var project = ClairePortfolio.projects.get(id);
		if (!project) {
			this.projectIndex();
		} else {
			var view = new ClairePortfolio.Views.PhotosNew({
				model: project,
				collection: project.get("photos")
			});
			// this.$rootEl.html(view.render().$el);
			this._swapView(view);
		}
	},

	projectIndex: function() {
		var view = new ClairePortfolio.Views.ProjectsIndex({collection: ClairePortfolio.projects});
		this.$rootEl.html(view.render().$el);
	},

	projectShow: function(id) {
		// var board = MyTrello.boards.findWhere({slug: id});
		var project = ClairePortfolio.projects.get(id);
		if (!project) {
			this.projectIndex();
		} else {
			var view = new ClairePortfolio.Views.ProjectShow({model: project});
			this._swapView(view);
		}

	},

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }


})