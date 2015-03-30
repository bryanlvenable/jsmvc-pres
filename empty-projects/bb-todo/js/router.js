window.TodoApp = new (backbone.Router.extend({
  routes: {'': 'index'},
  index: function() {

  },
  start: function(){
    Backbone.history.start();
  }
}));