Flag per Node
=============

The Flag per Node module provides a flexible way to control which flags are
visible on which nodes. Flag per Node can define custom access for individual 
pieces of content with a default setting per content type.


Requirements
------------

- Flag; https://www.drupal.org/project/flag


Installation
------------

- Copy the flag_per_node module's directory to your modules directory and 
  activate the module.


Configuration
-------------

- Visit a content type configuration page and provide the default Flag per Node
  permissions. These are the flag permissions that will apply to all nodes of 
  this type.

- Edit the nodes that require it and override the default Flag per Node settings
  to grant or deny a certain flagging action on this specific node.
