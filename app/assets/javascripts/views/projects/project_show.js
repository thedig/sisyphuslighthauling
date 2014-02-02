ClairePortfolio.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	className: "windowDiv",

	events: {
		"click .photoLi":"openPhoto",
		"click #newPhotoLink":"newPhoto",
		"click .cardLink": "cardOpen",
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

	openPhoto: function(event) {
		var photo_id = $(event.currentTarget).data("id");
		var photos_coll = this.model.get("photos");
		var photo = photos_coll.get(photo_id);
		var photoShow = new ClairePortfolio.Views.PhotoModal({model: photo})
		this.$el.find(".modal-content").html(photoShow.render().$el);
		this.$('#photo-modal').modal('show');
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