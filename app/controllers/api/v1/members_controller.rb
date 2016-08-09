class Api::V1::MembersController < ApplicationController

  def index
    @members = Member.all
    render 'index.json.jbuilder'
  end

  def create
    @member = Member.new(
    first_name: params[:first_name],
    last_name: params[:last_name],
    street_address: params[:street_address],
    city: params[:city],
    state: params[:state],
    zip: params[:zip],
    email: params[:email],
    phone: params[:phone],
    membership: params[:membership]
    )

    if @member.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @member.errors.full_messages }, status: 422
    end
  end

  def show
    @member = Member.find(params[:id])
  end

end