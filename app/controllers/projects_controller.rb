class ProjectsController < ApplicationController
	# def create
	# 	params[:project][:user_id] = current_user.id
	# 	@board = Board.new(params[:board])
	# 	if @board.save
	# 		render :json => @board
	# 	else
	# 		flash.now[:errors] = @board.errors.full_messages
	# 		# render :new
	# 	end
	# end

	# def destroy
	# 	@board = Board.find(params[:id])
	# 	@board.destroy
	# 	render :json => @board
	# end

	# def new
	# 	render :new
	# end

	# def show
	# 	@board = Board.find(params[:id])
	# 	render :show
	# end

	# def update
	# 	@board = Board.find(params[:id])
	# 	if @board.update_attributes(params[:board])
	# 		render :json => @board.to_json(:include => { :lists => { :include => {:cards => { :include => :checklists}}}})
	# 	else
	# 		flash.now[:errors] = @board.errors.full_messages
	# 	end
	# end

	def index
		@projects = Project.all
		render :json => @projects.to_json(:include => [:photos, :splash_photo] )
	end

end
