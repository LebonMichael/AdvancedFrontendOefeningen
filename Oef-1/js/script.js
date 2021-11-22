// We hebben een project gekregen. Dit project hebben we grondig
// geanaliseerd en zijn tot de vaststelling gekomen dat we een object
// Person dienen te maken.
// Schrijf een object Person . Dit object kan 2 properties ontvangen, nl.
// firstName en lastName. Beide hebben een standaardwaarde die blanco is.
// Beiden moeten worden ingelezen in het object en dienen onmiddellijk na
// ontvangst in het object te worden omgezet naar hoofdletters.
// Overschrijf in het object de built-in methode van Javascript nl.
// toString() met je eigen variant, nl
// [firstName=”Tom”,lastName=”Vanhoutte”]

class Person {
    constructor(firstName ="", lastName="") {
        this._firstName= firstName;
        this._lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName.toUppercase();
    }
    get lastName() {
        return this._lastName
    }
    set lastName(lastName) {
        this._lastName= lastName.toUppercase();
    }
    toString() {
        return `Person
    [firstName=${this._firstName},lastName=${this._lastName}]`;
    }
}

// Uitleg: hier wordt veelal de vraag gesteld. Waarom gebruik je een get
// en een set om de properties in hoofdletters om te zetten en geen
// functie die beiden in 1 keer doet?
// Het verschil zit hem in het feit dat een get en een set onmiddellijk
// de binnengekomen properties aanpassen. Bij een functie is het de
// gebruiker die later zelf de functie binnen het object dient aan te
// roepen.
// Het verschil tussen een get en een set?
// Met een get wordt een property zoals lastName weergegeven in de
// uitvoer van een programma.
// Met een set kan de waarde van een property zoals lastName gewijzigd
// worden en zorgt OOK voor een uitvoer in het programma. Wanneer je dus
// properties enkel uit een object wil gebruiken in een programma dan
// gebruik je ENKEL set. (In het volgende voorbeeld zie je hier een demo
// van). Wanneer je de property ook nog wenst te wijzigen dan gebruik je
// een SET. Let op: een set heeft steeds een get nodig. Omgekeerd heeft
// een get een set niet nodig.
// ———————————————————-
// Maak nu het object student aan. Het object student is een uitbreiding
// van het object Person.
// Student heeft een bijkomende property StudentId met een
// standaardwaarde van 0.
// Zorg ervoor dat alle properties van student bereikbaar zijn.
// Dit object bevat een methode study() die in de console.log “Studying”
// zal weergeven wanneer we dit zouden aanroepen in een programma.
// Ook hier wordt de standaard Javascript methode toString() overschreven
// met: Student [firstName=”Tom”,lastName=”Vanhoutte”,StudentId=1);

class Student extends Person {
    constructor(firstName, lastName, studentId = 0) {
        super(firstName,lastName);
        this._studentId = studentId;
    }
    get studentId() {
        return this._studentId;
    }
    study() {
        console.log("Studying")
    }
    toString() {
        return `Student
[firstName=${this._firstName},lastName=${this._lastName},studentId=${this._studentId}]`;
    }
}

// Uitvoering van dit object in een programma zou zijn:
//     let studentA = new Student();
// studentA._firstName= “Tom”;
// studentA._lastName= “Vanhoutte”;
// studentA._studentId= 1;
// studentA.study();
// console.log(studentA.toString());

// Uitleg: zoals je hierboven kan zien gebruiken we hier enkel een set om
// de property StudentId in ons programma te kunnen gebruiken. Dit MAG
// maar is geen vereiste. Je kan hier gerust een set toevoegen met
// dezelfde inhoud, zonder dat iets wordt gewijzigd.
// Schrijf nu een object Teacher die een uitbreiding is van Persoon naar
// analogie van deze van Student. De methode die hier dient te schrijven
// is teach() met als output in de console “Teaching”.
// Overschrijf ook hier de toString methode naar analogie met voorgaande.

    class Teacher extends Person {
    constructor(firstName, lastName, employeeId = 0) {
        super(firstName,lastName);
        this._employeeId = employeeId;
    }
    get employeeId() {
        return this._employeeId;
    }
    teach() {
        console.log("Teaching");
    }
    toString() {
        return `Teacher
    [firstName=${this._firstName},lastName=${this._lastName},employeeId=${
            this._employeeId}]`;
    }
}


// Voorbeelden van objecten die we vullen.

const person = new Person("Homer","Simpson");
console.log(person.toString());
const student = new Student("Bart","Simpson", 1);
console.log(student.toString());
student.study();
const teacher = new Teacher("Marge","Simpson", 200);
console.log(teacher.toString());
teacher.teach();
