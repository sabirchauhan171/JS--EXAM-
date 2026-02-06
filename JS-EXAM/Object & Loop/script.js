function calculateGrade() {

    let student = {
        name: document.getElementById("name").value.trim(),
        marks: Number(document.getElementById("marks").value),
        grade: ""
    };

    if (student.name === "" || isNaN(student.marks)) {
        document.getElementById("result").innerHTML =
            "Please enter valid details!";
        return;
    }
    
    if (student.marks >= 90) {
        student.grade = "A";
    } 
    else if (student.marks >= 75) {
        student.grade = "B";
    } 
    else if (student.marks >= 50) {
        student.grade = "C";
    } 
    else {
        student.grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Name: " + student.name + "<br>" +
        "Marks: " + student.marks + "<br>" +
        "Grade: " + student.grade;
}
