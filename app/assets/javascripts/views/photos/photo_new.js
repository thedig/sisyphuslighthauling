ClairePortfolio.Views.PhotosNew = Backbone.View.extend({
	template: JST['photos/new'],

	events: {
		"submit form": "submit"
		// "hidden.bs.modal": "render"
	},

	render: function() {
		var renderedContent = this.template({project: this.model});
		this.$el.html(renderedContent);
		return this;
	},

	submit: function(event){
		console.log("submit?");
		var that = this;
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		var photo = this.collection.create(params["photo"], {
			// validate: true,
			success: function(){
				alert("saved!");
				var url = "project/" + that.model.id
				Backbone.history.navigate(url, {trigger: true});
			}
		});
	}
})