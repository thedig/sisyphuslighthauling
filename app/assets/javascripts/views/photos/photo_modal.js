ClairePortfolio.Views.PhotoModal = Backbone.View.extend({
	template: JST['photos/show'],
	className: "windowDiv",

	render: function() {
		var renderedContent = this.template({
			photo: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},
})