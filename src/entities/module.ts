import { Lecture } from "./lecture";

export class Module{
    private readonly lectures = new Array<Lecture>()
    constructor(
        private readonly namee: string
    ){}

    add(lecture: Lecture): void{
        this.lectures.push(lecture)
    }
}