module Api
  module V1
    class ProfilesController < ApplicationController
      before_action :authenticate_user!

      def show
        render json: current_user.profile
      end

      def create
        if current_user.profile
          render json: { error: "Profile already exists" }, status: :unprocessable_entity
        else
          profile = current_user.build_profile(profile_params)
          if profile.save
            render json: profile, status: :created
          else
            render json: {errors: profile.error.full_messages}
          end
        end
      end

      def update 
        profile = current_user.profile
        if profile.update(profile_params)
          render json: profile, status: :ok
        else
          render json: { errors: profile.errors.full_messages}, status: :unprocessable_entity
        end
      end

      private

      def profile_params
        params.require(:profile).permit(
          :phone, :avatar, :date_of_birth, :address, :city, :state, :postal_code, :country, :bio
        )
      end

    end
  end
end