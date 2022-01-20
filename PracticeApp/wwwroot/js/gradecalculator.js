
$("#calcbutton").click(function () {
    grade = +$("#assignments").val() + +$("#quizzes").val() + +$("#intex").val();
    if (grade >= 93) {
        lettergrade = 'A'
    } else if (grade <= 92 && grade >= 90) {
        lettergrade = 'A-'
    } else if (grade <= 92 && grade >= 90) {
        lettergrade = 'A-'
    } else if (grade <= 89 && grade >= 87) {
        lettergrade = 'B+'
    } else if (grade <= 86 && grade >= 83) {
        lettergrade = 'B'
    } else if (grade <= 83 && grade >= 80) {
        lettergrade = 'B-'
    } else if (grade <= 79 && grade >= 77) {
        lettergrade = 'C+'
    } else if (grade <= 76 && grade >= 73) {
        lettergrade = 'C'
    } else if (grade <= 72 && grade >= 70) {
        lettergrade = 'C-'
    } else if (grade <= 69 && grade >= 67) {
        lettergrade = 'D+'
    } else if (grade <= 66 && grade >= 63) {
        lettergrade = 'D'
    } else if (grade <= 62 && grade >= 60) {
        lettergrade = 'D-'
    } else {
        lettergrade = 'E'
    }
    grade = widow.sessionStorage;
    lettergrade = window.sessionStorage;
})

//window.onload(){
//    alert("Grade: " + grade + "   Letter Grade: " + lettergrade);
//}

window.addEventListener("load", alert("Grade: " + grade + "   Letter Grade: " + lettergrade);