ClairePortfolio.Views.ProjectsIndex = Backbone.View.extend({
	// tagName: "",
	template: JST['projects/index'],
	className: "windowDiv",

	initialize: function() {
		this.listenTo(this.collection, "add change remove reset", this.render);
	},

	events: {
		// "click .button":"clickButton"
	},

	// clickButton: function() {
	// 	alert('click click');
	// },

	render: function() {
		var renderedContent = this.template({
			projects: this.collection,
			
		});

		this.$el.html(renderedContent);
		return this;
	},



})