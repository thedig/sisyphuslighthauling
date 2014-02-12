ClairePortfolio.Views.PhotosNew = Backbone.View.extend({
	template: JST['photos/new'],

	events: {
		"submit form": "submit"
		// 'change #attached_img' : 'uploadPhoto'
		// "hidden.bs.modal": "render"
	},

	// uploadPhoto: function(e) {
	// 	upload_frame = $('#addPhotoForm');
	// 	upload_frame.prop('target', 'upload_frame');
	// 	upload_frame.submit();
	// },

	render: function() {
		var renderedContent = this.template({project: this.model});
		this.$el.html(renderedContent);
		// this.attachUploader(this.model);
		return this;
	},

	submit: function(event){
		var that = this;
		event.preventDefault();
		var $form = $(event.currentTarget);
		var params = $form.serializeJSON();
		var photo = this.collection.create(params["photo"], {
			success: function(){
				alert("saved!");
				var url = "project/" + that.model.id
				Backbone.history.navigate(url, {trigger: true});
			}
		});
	}
})