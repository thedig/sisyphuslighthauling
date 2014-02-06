ClairePortfolio.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	className: "windowDiv",

	events: {
		"click .deletePhoto" : "deletePhoto",
		"click .photoLi":"openPhoto",
		"click #newPhotoLink":"newPhoto",
		"click .cardLink": "cardOpen",
	},

	deletePhoto: function(event){
		this.resetTimer();
		event.preventDefault();
		var that = this;
		var photo_id = $(event.currentTarget).data("id");
		var photos_coll = this.model.get("photos");
		var photo = photos_coll.get(photo_id);
		photo.destroy({
			success: function() {
				// that.render();
			}
		})
	},

	initialize: function(){
		this.listenTo(this.model, "reset change sync", this.render);
		this.listenTo(this.model.get("photos"), "reset change sync", this.render);
	},

	newPhoto: function(event) {
		event.preventDefault();
		var url = "project/" + this.model.id + "/photos/new"
		Backbone.history.navigate(url, {trigger: true});
	},

	openPhoto: function(event) {
		var that = this;
		this.timerId = setTimeout(function(){
			var photo_id = $(event.currentTarget).data("id");
			var photos_coll = that.model.get("photos");
			var photo = photos_coll.get(photo_id);
			var photoShow = new ClairePortfolio.Views.PhotoModal({model: photo})
			that.$el.find(".modal-content").html(photoShow.render().$el);
			that.$('#photo-modal').modal('show');
		}, 400);
	},

	render: function() {
		var renderedContent = this.template({
						project: this.model
					});
		this.$el.html(renderedContent);
		return this;
	},

	resetTimer: function(delay) {
		var that = this;
		setTimeout(function(){
			clearTimeout(that.timerId);
		}, 20);
	}


})