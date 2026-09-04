import { KeepAlive, Interval, Command } from "../core/events"

export type ModuleEvent = KeepAlive | Command;

export interface Module {
    name: String,
    description: String,
    subscribes: ModuleEvent[]
}

export class ModuleHandler {
    private modules: Module[]
    constructor() {
        this.modules = []
    }

    load(path?: String) {
        
    }
}