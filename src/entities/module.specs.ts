import { Module, Course, Lecture } from '.'

describe('Module', () => {

describe('Course', ()=>{
    it('should be able to add lectures to modules', ()=>{
        const module = new Module('Fundamentals')
        const lecture: Lecture = new Lecture ('Branching', 'https://youtube.com/1234')
        module.add(lecture)
        expect(module.lectures.includes(lecture))toBeTruthy()
    })

    it('should be able to add lectures to modules', ()=>{
        const course = new Course('azure-devops',
        'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
        const module = new Module('Fundamentals')
        const lecture:Lecture = new Lecture ('Branching', 'https://youtube.com/1234')
        const otherLecture:Lecture = new Lecture ('Branching', 'https://youtube.com/3456')
    
        module.add(lecture)
        module.add(otherLecture)
        expect(module.lectures.includes(lecture))toBeTruthy()
        expect(module.lectures.includes(otherLecture))toBeTruthy()
    })


    it('should be able to add lectures to modules', ()=>{
        const course = new Course('azure-devops',
        'Continuous Delivery and DevOps with Azure DevOps: Source Control with Git')
        const module = new Module('Fundamentals')
        const lecture:Lecture = new Lecture ('Branching', 'https://youtube.com/1234')
        module.add(lecture)
        course.add(module)
        expect(courses.modules.includes(module)).toBeTruthy()
    })

    interface('should be able to rearrange lectures order', () =>{
        const module = new Module('Fundamentals')
        const branching: Lecture = new Lecture('Branching', 'https://youtube.com/branching')
        const commiting: Lecture = new Lecture('Commiting', 'https://youtube.com/commiting')
        const pushing: Lecture = new Lecture('Pushing', 'https://youtube.com/pushing')
        
        module.add(branching)
        module.add(commiting)
        module.add(pushing)

        module.move(branching, 3)

        expect(module.position(commiting)).toBe(1)
        expect(module.position(pushing)).toBe(2)
        expect(module.position(branching)).toBe(3)
    })

    it('should handle exceeding position while rearranging', ()=>{
        const module = new Module('Fundamentals')
        const branching: Lecture = new Lecture('Branching', 'https://youtube.com/branching')
        const commiting: Lecture = new Lecture('Commiting', 'https://youtube.com/commiting')
        const pushing: Lecture = new Lecture('Pushing', 'https://youtube.com/pushing')
        
        module.add(branching)
        module.add(commiting)
        module.add(pushing)
        
        module.move(branching, 0)

        expect(module.position(branching)).toBe(1)
        expect(module.position(commiting)).toBe(2)
        expect(module.position(pushing)).toBe(3)
    })
})