ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope){
  $scope.todos = [
    { val: 'A new cool thing 1', completed: true },
    { val: 'A new cool thing 2', completed: false },
    { val: 'A new cool thing 3', completed: false },
    { val: 'A new cool thing 4', completed: true },
    { val: 'A new cool thing 5', completed: false }
  ];

  $scope.addNewTask = function() {
    $scope.todos.unshift({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(el, index) {
      return !el.completed;
    });
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };
});