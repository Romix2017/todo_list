export var LOAD_TODOS = "LOAD_TODOS";
export var ADD_TODO = "ADD_TODO";
export var TOGGLE_TODO = "TOGGLE_TODO";
export var DELETE_TODO = "DELETE_TODO";
export var BACKEND_ACTION_STARTED = "BACKEND_ACTION_STARTED";
export var BACKEND_ACTION_FINISHED = "BACKEND_ACTION_FINISHED";
export function loadTodos(todos) {
    return {
        type: LOAD_TODOS,
        todos: todos
    };
}
export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        newTodo: newTodo
    };
}
export function toggleTodo(todo) {
    return {
        type: TOGGLE_TODO,
        todo: todo
    };
}
export function deleteTodo(todo) {
    return {
        type: DELETE_TODO,
        todo: todo
    };
}
export function startBackendAction(message) {
    return {
        type: BACKEND_ACTION_STARTED,
        message: message
    };
}
export function endBackendAction(message) {
    if (message === void 0) { message = ''; }
    return {
        type: BACKEND_ACTION_FINISHED
    };
}
//# sourceMappingURL=todoActions.js.map