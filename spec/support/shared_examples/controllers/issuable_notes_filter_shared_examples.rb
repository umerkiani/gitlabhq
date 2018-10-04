shared_examples 'issuable notes filter' do
  it 'sets discussion filter' do
    notes_filter = UserPreference::NOTES_FILTERS[:only_comments]

    get :discussions, namespace_id: project.namespace, project_id: project, id: issuable.iid, notes_filter: notes_filter

    expect(user.reload.notes_filter_for(issuable)).to eq(notes_filter)
    expect(UserPreference.count).to eq(1)
  end

  it 'expires notes e-tag cache for issuable if filter changed' do
    notes_filter = UserPreference::NOTES_FILTERS[:only_comments]

    expect_any_instance_of(issuable.class).to receive(:expire_note_etag_cache)

    get :discussions, namespace_id: project.namespace, project_id: project, id: issuable.iid, notes_filter: notes_filter
  end

  it 'does not expires notes e-tag cache for issuable if filter did not change' do
    notes_filter = UserPreference::NOTES_FILTERS[:only_comments]
    user.set_notes_filter(notes_filter, issuable)

    expect_any_instance_of(issuable.class).not_to receive(:expire_note_etag_cache)

    get :discussions, namespace_id: project.namespace, project_id: project, id: issuable.iid, notes_filter: notes_filter
  end

  it 'does not set notes filter when database is in read only mode' do
    allow(Gitlab::Database).to receive(:read_only?).and_return(true)
    notes_filter = UserPreference::NOTES_FILTERS[:only_comments]

    get :discussions, namespace_id: project.namespace, project_id: project, id: issuable.iid, notes_filter: notes_filter

    expect(user.reload.notes_filter_for(issuable)).to eq(0)
  end

  it 'returns no system note' do
    user.set_notes_filter(UserPreference::NOTES_FILTERS[:only_comments], issuable)

    get :discussions, namespace_id: project.namespace, project_id: project, id: issuable.iid

    expect(JSON.parse(response.body).count).to eq(1)
  end
end
