# RedmineIssueHistoryX because the name RedmineIssueHistory is used by lib/redmine_issue_history_listener.rb
module RedmineIssueHistoryX
  module Hooks
    class ViewJournalsUpdateJsBottomHook < Redmine::Hook::ViewListener
      render_on(:view_journals_update_js_bottom, partial: 'journals/mark_even_odd', layout: false)
    end
  end
end