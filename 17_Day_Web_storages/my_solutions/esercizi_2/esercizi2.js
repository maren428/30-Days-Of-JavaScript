const student = {
    firstName: "Lucas",
    lastName: "Hopkins",
    age: "20",
    skills: ["HTML","CSS","JS","PHP"],
    country: "Germany",
    enrolled: true
}
const studentText = JSON.stringify(student,undefined,4);
localStorage.setItem("student",studentText);
