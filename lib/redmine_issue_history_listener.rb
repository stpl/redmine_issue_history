require 'redmine'

class RedmineIssueHistory < Redmine::Hook::ViewListener

  def view_layouts_base_html_head(context)
    javascript_include_tag('issue-history-tabs.js', :plugin => :redmine_issue_history)
  end

end
