ClairePortfolio.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	className: "windowDiv",

	events: {
		"click #newPhotoLink":"newPhoto"
		// "hidden.bs.modal": "render"
	},

	initialize: function(){
		this.listenTo(this.model, "reset change sync", this.render);
	},

	newPhoto: function(event) {
		event.preventDefault();
		var url = "project/" + this.model.id + "/photos/new"
		Backbone.history.navigate(url, {trigger: true});
	},

	render: function() {
		var renderedContent = this.template({
						project: this.model
					});

		this.$el.html(renderedContent);

		// this.$('#allPhotos').sortable({
		// 	opacity: 0.8,
		// 	cursor: "move",
		// 	delay: 200,
		// 	// connectWith: [".cardList"],
		//  });

		return this;
	},


})