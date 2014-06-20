Task Manager application
========

Technologies
--------

* Backbone js
* Marionette js
* Jquery
* Handlebars
* Underscore
* Jasmine
* Gulp and Bower (building, running, dependencies management)

Building and running
--------

1. Run `npm install` inside project directory
2. Install bower `npm install -g bower`
3. Fetch bower dependencies `bower install`

Now you can simply build app by `gulp build` or `gulp build-prod` for production.
If you want to run server with livereload and watch for files change do `gulp watch`.

*Specs are under specs folder. Simply open SpecRunner.html in browser*