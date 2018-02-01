import { List } from 'immutable';
import { Todo } from "../app/Models/Todo";
import { ADD_TODO, DELETE_TODO, LOAD_TODOS, TOGGLE_TODO, BACKEND_ACTION_STARTED, BACKEND_ACTION_FINISHED } from './todoActions';
import { combineReducers } from 'redux';
function todos(state, action) {
    if (!state) {
        return List([]);
    }
    switch (action.type) {
        case LOAD_TODOS:
            return List(action.todos);
        case ADD_TODO:
            return state.push(action.newTodo);
        case TOGGLE_TODO:
            return toggleTodo(state, action);
        case DELETE_TODO:
            var index = state.findIndex(function (todo) { return todo.id === action.todo.id; });
            return state.delete(index);
        default:
            return state;
    }
}
function toggleTodo(state, action) {
    var index = state.findIndex(function (todo) { return todo.id === action.todo.id; });
    var toggled = state.get(index);
    return state.set(index, new Todo({ id: toggled.id, description: toggled.description, completed: !toggled.completed }));
}
export var initialUiState = {
    actionOngoing: false,
    message: 'Ready'
};
function uiState(state, action) {
    if (!state) {
        return initialUiState;
    }
    switch (action.type) {
        case BACKEND_ACTION_STARTED:
            return {
                actionOngoing: true,
                message: action.message
            };
        case BACKEND_ACTION_FINISHED:
        default:
            return {
                actionOngoing: false,
                message: action.message ? action.message : initialUiState.message
            };
    }
}
var todoApp = combineReducers({
    uiState: uiState,
    todos: todos
});
export { todoApp };
//# sourceMappingURL=todoReducers.js.map