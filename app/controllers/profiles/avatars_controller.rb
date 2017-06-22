class Profiles::AvatarsController < Profiles::ApplicationController
  def destroy
    @user = current_user

    Users::UpdateService.new(@user, @user).execute { |user| user.remove_avatar! }

    redirect_to profile_path, status: 302
  end
end
