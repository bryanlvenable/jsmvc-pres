Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    removeTodo: function(){
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    }
  }
});

Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createNewTodo: function() {
      var newVal = this.get('newTodo');
      var todo = this.store.createRecord('todo', {
        val: newVal,
        completed: false
      });
      this.set('newTodo', '');
      todo.save();
    }
  }
});