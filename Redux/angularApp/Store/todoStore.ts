import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import { todoApp, initialUiState } from './todoReducers';
import { List } from 'immutable';
import * as Logger from 'redux-logger';
import { ReduxStore } from "angular2-redux-store";
import { Todo } from '../app/Models/Todo';

const logger = Logger.createLogger({
    stateTransformer: (state) => {
        return {
            todos: state.todos,
            uiState: state.uiState
        }
    }
});




const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(
    todoApp,
    {
        todos: List([]),
        uiState: {
            actionOngoing: false,
            message: "Ready"
        }
    });


@Injectable()
export class TodoStore extends ReduxStore {
   
    constructor() {
        super(store);
    }

}