// let obj = new Object()
// let obj1 = {}

// let student = new Object()
// student['Name'] = "Nadir"
// student.Age = 42
// student['Birth year'] = 1980
// // console.log(student.Name)
// // console.log(student["Age"])
// // console.log(student['Birth year'])
// console.log(student)
//
// delete student['Birth year']
//
// console.log(student)
//
// console.log('Age' in student)


let Student = {
    name: "Nadir",
    lastname: "Zamanov",
    age: 42,
    marks:{
        cpp: 12,
        sharp: 3,
        js: 1
    },
    show: function (){
        console.log(this.name)
        console.log(this.age)
    }
}

// console.log(Student)
// Student.show()


