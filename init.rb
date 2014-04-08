require 'redmine'
require 'redmine_issue_history_listener.rb'

Redmine::Plugin.register :redmine_issue_history do
  name 'redmine_issue_history'
  author 'Systango'
  description 'This plugin provide history of issue in tabs representation'
  version '1.0.0'
  requires_redmine :version_or_higher => '2.2.4'
end