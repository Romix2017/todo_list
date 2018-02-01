import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let todos = [
            { id: '1', description: 'first', completed:false },
            { id: '2', description: 'second', completed: false },
            { id: '3', description: 'third', completed: false },
            { id: '4', description: 'four', completed: false }
        ];

        let samp = [
            {id: '1', name: 'goose'}
        ]

        return { 'todos': todos, 'samp':samp };
    }
}