ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope){
  $scope.todos = [
    { val: 'A new cool thing 1', completed: true },
    { val: 'A new cool thing 2', completed: false },
    { val: 'A new cool thing 3', completed: false },
    { val: 'A new cool thing 4', completed: true },
    { val: 'A new cool thing 5', completed: false }
  ];
});