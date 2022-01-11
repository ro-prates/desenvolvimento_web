"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(reference, description) {
        this.modules = [];
        this.reference = reference;
        this.description = description;
    }
    add(module) {
        this.modules.push(module);
    }
    includes(module) {
        return this.modules.includes(module);
    }
}
exports.Course = Course;
