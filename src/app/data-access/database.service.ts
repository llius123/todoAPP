import {Injectable} from '@angular/core';
import {Connection, ConnectionOptions, createConnection} from 'typeorm';
import {Settings} from './repositories/settings';
import { Todo } from './entities/todo.entity';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        Settings.initialize();
        this.options = {
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [Todo],
            synchronize: true,
            // logging: 'all',
        };
        this.connection = createConnection(this.options);
    }
}
