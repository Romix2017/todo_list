import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from "../../Models/Todo";
import { List } from 'immutable';
import { TodoService } from "../../Services/toDoService";
import { TodoStore } from "../../../Store/todoStore";
import { toggleTodo, deleteTodo } from '../../../Store/todoActions';


@Component({
    selector: 'todo-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <section id="main" [hidden]="todos.size === 0">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li *ngFor="let todo of todos" [ngClass]="{completed: todo.completed}">
                    <div class="view">
                        <input class="toggle" type="checkbox" (change)="onToggleTodo(todo)" [checked]="todo.completed">
                        <label>{{todo.description}}</label>
                        <button class="destroy" (click)="delete(todo)"></button>
                    </div>
                </li>
            </ul>
        </section>
    `
})
export class TodoList {

    @Input() todos: List<Todo>;
    @Output() toggleAll: EventEmitter<any> = new EventEmitter();
    @Output() deleteTodo: EventEmitter<any> = new EventEmitter();

    constructor(private todoService: TodoService, private store: TodoStore) {

    }

    changeCompleted(todo: Todo): boolean {
        let res: boolean;
        todo.completed == true ?  res = false : res = true;
        return res;
    }

    onToggleTodo(todo: Todo) {

        let updateTodo: Todo = new Todo({ id: todo.id, description: todo.description, completed: this.changeCompleted(todo) });
        this.todoService.toggleTodo(updateTodo)
            .subscribe(
            res => this.store.dispatch(toggleTodo(updateTodo)),
            err => console.log('error toggling todo' + err)
            );
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo)
            .subscribe(
            res => this.store.dispatch(deleteTodo(todo)),
            err => console.log('error deleting todo' + err)
            );

    }

}