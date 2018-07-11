module API
  class ProtectedTags < Grape::API
    include PaginationParams

    TAG_ENDPOINT_REQUIREMENTS = API::PROJECT_ENDPOINT_REQUIREMENTS.merge(branch: API::NO_SLASH_URL_PART_REGEX)

    before { authorize_admin_project }

    params do
      requires :id, type: String, desc: 'The ID of a project'
    end
    resource :projects, requirements: API::PROJECT_ENDPOINT_REQUIREMENTS do
      desc "Get a project's protected tags" do
        detail 'This feature was introduced in GitLab 10.6.'
        success Entities::ProtectedTag
      end
      params do
        use :pagination
      end
      get ':id/protected_tags' do
        protected_tags = user_project.protected_tags.preload(:create_access_levels)

        present paginate(protected_tags), with: Entities::ProtectedTag, project: user_project
      end

      desc 'Get a single protected tag' do
        detail 'This feature was introduced in GitLab 10.6.'
        success Entities::ProtectedTag
      end
      params do
        requires :name, type: String, desc: 'The name of the tag or wildcard'
      end
      get ':id/protected_tags/:name', requirements: TAG_ENDPOINT_REQUIREMENTS do
        protected_tag = user_project.protected_tags.find_by!(name: params[:name])

        present protected_tag, with: Entities::ProtectedTag, project: user_project
      end

      desc 'Protect a single tag or wildcard' do
        detail 'This feature was introduced in GitLab 10.6.'
        success Entities::ProtectedTag
      end
      params do
        requires :name, type: String, desc: 'The name of the protected tag'
        optional :create_access_level, type: Integer, default: Gitlab::Access::MASTER,
                                       values: ProtectedTagAccess::ALLOWED_ACCESS_LEVELS,
                                       desc: 'Access levels allowed to create (defaults: `40`, master access level)'
      end
      post ':id/protected_tags' do
        protected_tags_params = {
          name: params[:name],
          create_access_levels_attributes: [{ access_level: params[:create_access_level] }]
        }

        protected_tag = ::ProtectedTags::CreateService.new(user_project,
                                                           current_user,
                                                           protected_tags_params).execute

        if protected_tag.persisted?
          present protected_tag, with: Entities::ProtectedTag, project: user_project
        else
          render_api_error!(protected_tag.errors.full_messages, 422)
        end
      end

      desc 'Unprotect a single tag' do
        detail 'This feature was introduced in GitLab 10.6.'
      end
      params do
        requires :name, type: String, desc: 'The name of the protected tag'
      end
      delete ':id/protected_tags/:name', requirements: TAG_ENDPOINT_REQUIREMENTS do
        protected_tag = user_project.protected_tags.find_by!(name: params[:name])

        destroy_conditionally!(protected_tag)
      end
    end
  end
end