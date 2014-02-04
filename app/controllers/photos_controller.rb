class PhotosController < ApplicationController

	def create
		@proj_id = params[:project_id]
		params[:photo][:project_id] = @proj_id
		@last_photo = Project.find(@proj_id).photos.last
		if @last_photo
			params[:photo][:position] = @last_photo.position + 1
		else
			params[:photo][:position] = 1
		end
		@photo = Photo.new(params[:photo])
		if @photo.save
			flash[:notice] = "Saved!"
			render :json => @photo
		else
			flash.now[:errors] = @photo.errors.full_messages
		end
	end

	# def destroy
	# 	@list = List.find(params[:id])
	# 	@list.destroy
	# 	render :json => @list
	# end

	# def index
	# 	respond_to do |format|
	# 		format.html { render :index }
	# 		format.json { render :json => List.all.to_json(:include => :cards) }
	# 	end
	# end

	# def new
	# end

	# def show
	# 	@list = List.find(params[:id])
	# 	render :show
	# end

	# def update
	# 	@list = List.find(params[:id])
	# 	if @list.update_attributes(params[:list])
	# 		render :json => @list.to_json(:include => :cards)
	# 	else
	# 		flash.now[:errors] = @list.errors.full_messages
	# 	end
	# end


end