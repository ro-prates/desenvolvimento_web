import { Lecture } from "./lecture";

export class Module{
    private readonly lectures = new Array<Lecture>()
    constructor(name: string){
        this.name = name
    }

    get numberOfLectures (): void{
        if(!this.lectures.includes(this.lecture)){
            this.lectures.push(this.lecture)
        }
    }

    add (lecture: Lecture): void{
        if(!this.includes(lecture)){
            this.lectures.push(lecture)
        }
    }

    includes (lecture: Lecture):boolean{
        return this.lectures.find(lec => lec.description === lecture.description) !== undefined
    }

    private includesLectureWithSameName(lecture: Lecture): boolean{
        return this.lectures.find(lec => lec.description === lecture.description) !== undefined
    }

    move(lecture: Lecture, to: Number): void{
        if (to > this.lectures.length || to <= 0){
            return
        }
        const from = this.position(lecture)
        this.lectures.splice(to - 1, 0, this.lectures.splice(from - 1, 1)[0])
    }

    position (lecture: Lecture): number{
        const lectureInModule = this.lectures.find(lec => lec.equals(lecture))
        if(lectureInModule === undefined){
            return undefined
        }
        return this.lectures.indexOf(lectureInModule) + 1
    }
}