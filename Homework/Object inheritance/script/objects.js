function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

function Student(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function () {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}.`)
    }
    this.studentAcademy = function () {
        return `The student is from the academy ${this.academyName}.`
    }
}

let studentAd = new Student(`Finki`, `2dfgr3`, `Bojana`, `Dimovska`, 21);
console.log(studentAd)
studentAd.getFullName();
studentAd.study();

let studentAdd = new Student(`SEDC`, `2er3fgh4`, `Boris`, `Karakolev`, 22);
console.log(studentAdd)
studentAdd.getFullName();
studentAdd.study();

function DesignStudent(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.isStudentOfTheYear = false;
    this.attendAdobeExam = function () {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}
let studentD = new DesignStudent(`Design Academy`, `2kjhy34`, `Simona`, `Stojanova`, 21);
console.log(studentD);
studentD.attendAdobeExam();
console.log(studentD.studentAcademy());

function CodeStudent(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type) {
        if(type === `individual`) {
            console.log(`The student ${this.firstName} ${this.lastName} is working on the individual project.`)
            this.hasIndividualProject = true;
        } else if (type === `group`) {
            console.log(`The student ${this.firstName} ${this.lastName} is working on the group project.`)
            this.hasGroupProject = true;
        }
    }
}
let studentC = new CodeStudent(`Seavus`, `234ktjy3`, `Blagoj`, `Delovski`, 23);
console.log(studentC);
studentC.doProject(`individual`);
console.log(studentC.studentAcademy());

function NetworkStudent(academyPart, academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student(academyName, studentId, firstName, lastName, age))
    this.partOfTheAcademy = academyPart;
    this.attendCiscoExam = function() {
        console.log(`The student ${this.firstName} is doing a cisco exam!`);
    }
}
let studentN = new NetworkStudent(3, `Network Academy`, `23glhtl3`, `Martin`, `Dimitrievski`, 23);
console.log(studentN);
console.log(studentN.studentAcademy());
studentN.attendCiscoExam();