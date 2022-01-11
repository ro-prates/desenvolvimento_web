"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
class Module {
    constructor(name) {
        this.lectures = [];
        this.name = name;
    }
    get numberOfLectures() {
        return this.lectures.length;
    }
    add(lecture) {
        if (!this.includesLectureWithSameDescription(lecture)) {
            this.lectures.push(lecture);
        }
    }
    includesLectureWithSameDescription(lecture) {
        return this.lectures.find(lec => lec.description === lecture.description) !== undefined;
    }
    includes(lecture) {
        return this.lectures.find(lec => lec.equals(lecture)) !== undefined;
    }
    move(lecture, to) {
        if (to > this.lectures.length || to <= 0) {
            return;
        }
        const from = this.position(lecture);
        this.moveInArray(this.lectures, from - 1, to - 1);
    }
    moveInArray(array, from, to) {
        const element = array.splice(from, 1)[0];
        array.splice(to, 0, element);
    }
    position(lecture) {
        const lectureInModule = this.lectures.find(lec => lec.equals(lecture));
        if (lectureInModule === undefined) {
            return undefined;
        }
        return this.lectures.indexOf(lectureInModule) + 1;
    }
}
exports.Module = Module;
