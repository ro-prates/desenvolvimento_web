"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lecture = void 0;
class Lecture {
    constructor(description, videoUrl) {
        this.description = description;
        this.videoUrl = videoUrl;
    }
    equals(other) {
        return this.description === other.description &&
            this.videoUrl === other.videoUrl;
    }
}
exports.Lecture = Lecture;
