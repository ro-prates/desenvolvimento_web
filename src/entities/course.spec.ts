import { Module, Course, Lecture } from '../../src/entities'
import { Lecture } from './lecture'

describe('Module', ()=>{
    it('should be able to add lectures to modules', ()=>{
        const module = new Module('Fundamentals')
        const lecture:Lecture = {
            description: 'Branching'
        }
        module.add(lecture)
        expect(module.lectures.length)toBe(1)
        expect(module.lectures.includes(lecture))toBeTruthy()
    })

    it('should be able to add lectures to modules', ()=>{
        const course = new Course('azure-devops',
        'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
        const module = new Module('Fundamentals')
        const lecture:Lecture = {
            description: 'Branching'
        }
        module.add(lecture)
        course.add(module)
        expect(courses.modules.includes(module)).toBeTruthy()
})