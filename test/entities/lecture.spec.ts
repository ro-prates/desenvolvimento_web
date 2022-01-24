import { Lecture } from "../../src/entities"
import { Link } from "../../src/entities/link"
import { Material } from "../../src/entities/material"

describe('Lecture', () =>{
    it('should be able to add further material to lectures', () =>{
        const lecture: new Lecture('Branching', 'https://youtube.com/1234')
        const branchingPdf: Material = new Pdf('Branching', 'https://storage/branching.pdf')
        lecture.add(branchingPdf)
        expect(lecture.includes(branchingPdf)).toBeTruthy()
    })

    it('should be able to remove further material from lectures', () =>{
        const lecture: new Lecture('Branching', 'https://youtube.com/1234')
        const branchingPdf: Material = new Pdf('Branching', 'https://storage/branching.pdf')
        lecture.add(branchingPdf)
        lecture.remove(branchingPdf)
        expect(lecture.includes(branchingPdf)).toBeFalsy()
    })

    it('should be able to add further links to lectures', () =>{
        const lecture: new Lecture('Branching', 'https://youtube.com/1234')
        const branchingLink: Material = new Link('Branching', 'https://page/branching.com')
        lecture.add(branchingPdf)
        expect(lecture.includes(branchingLink)).toBeTruthy()
    })
})