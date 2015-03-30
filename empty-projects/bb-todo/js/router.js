window.TodoApp = new (Backbone.Router.extend({
  routes: {'' : 'index'},
  initialize: function() {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
  },
  index: function() {
    var fixtures = [
      {val: "thing 1", completed: true},
      {val: "thing 2", completed: true},
      {val: "thing 3", completed: false},
      {val: "thing 4", completed: true},
      {val: "thing 5", completed: false}
    ];

    $('#app').html(this.todosView.el);
    this.todoItems.reset(fixtures);

  },
  start: function(){
    Backbone.history.start();
  }
}));