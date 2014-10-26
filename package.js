Package.describe({
  summary: "MultiPass - NPM MultiPass, repackaged For Meteor"
  , version: "1.0.2"
});

Npm.depends({multipass: "1.0.2"});

Package.on_use(function (api) {
  api.add_files("lib/multipass.js", "server");
  api.export("Multipass"); // >0.6.5
});