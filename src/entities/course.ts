import { Module } from "./module"

export class Course{
    public modules: Array<Module> = []
    public reference: string
    public description: string
    constructor(reference: string, description: string)
        public reference:string,
        public description: string
    

    add(module: Module) void{
        this.modules.push(module)
    }
}