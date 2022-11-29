class Student{
    constructor(name,age,marks){
        this.name = name
        this.age = age
        this.marks = marks
    }
    EligibleAge(minAge){
        return (minMarks) => {
            if(this.marks > minMarks && this.age>minAge){
                console.log(`${this.name} is eligible`)
            }
            else{
                console.log(`${this.name} is not eligible`)
            }
        }
    }
}

const S1 = new Student('Subham', 26, 80)
const S2 = new Student('Shashi', 17, 50)

S1.EligibleAge(18)(50)
S2.EligibleAge(18)(50)