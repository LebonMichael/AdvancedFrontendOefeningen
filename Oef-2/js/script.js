// In de cursus hadden we reeds een object Rectangle besproken. Maar een Rectangle object is
// eigenlijk een vorm (Shape). Dit is een object op zich. Het Rectangle object is dus een
// uitbreiding van Shape
// Schrijf een object Shape die 2 properties aanvaard met een standaard waarde van elk 0. Zorg
// ervoor dat het object zowel getters en setters bevat. Schrijf een methode move die beide
// binnengekomen properties kan opvangen. Daarnaast overschrijf je terug de toString methode
// met “Shape [x:5,y:6]
class Shape {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    move(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `Shape [x:${this.x},y:${this.y}]`;
    }
}

// Hieronder zie je dan het object Rectangle die we in de klas besproken
// hebben.

class Rectangle extends Shape{
    constructor(width = 0, height = 0, x = 0, y = 0) {
        super(x,y);
        this.width = width;
        this.height = height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width < 0 ? 0 : width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height < 0 ? 0 : height;
    }
    get area() {
        return (this._height * this._width);
    }
    get perimeter() {
        return 2 * (this._height + this._width);
    }
    scale (factor) {
        this.width*=factor;
        this.height*=factor;
    }
    toString() {
        return `Rectangle
[width:${this.width},height:${this.height},x:${this.x},y:${this.y}]`;
    }
}

// Probeer nu zelf een uitbreiding van het object Shape te schrijven met
// het object Circle. Circle bevat 2 methodes,nl. area() om de
// oppervlakte te berekenen en perimeter() om de straal te berekenen.
// Deze twee overschrijven dus de methodes van Shape. Het resultaat van
// toString() zal hier zijn: Circle [radius:radius, x:x,y:y]

class Circle extends Shape{
    constructor(radius = 0, x = 0, y = 0) {
        super(x,y);
        this.radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(radius) {
        this._radius = radius < 0 ? 0 : radius;
    }
    get area() {
        return (Math.PI * this._radius**2);
    }
    get perimeter() {
        return 2 * Math.PI * this._radius;
    }
    scale (factor) {
        this.radius*=factor;
    }
    toString() {
        return `Circle [radius:${this.radius},x:${this.x},y:${this.y}]`;
    }
}

// Voorbeelden uitvoering programma. Voer lijn per lijn uit. Bekijk
// iedere console.log apart.

const rect1 = new Rectangle(10, 5, 3, 6);
console.log(rect1.area);
console.log(rect1.perimeter);
console.log(rect1.toString());
rect1.move(4,9);
console.log(rect1.toString());
rect1.scale(2);
console.log(rect1.toString());


const circ1 = new Circle(5, 3, 6);
console.log(circ1.area);
console.log(circ1.perimeter);
console.log(circ1.toString());
circ1.move(4,9);
console.log(circ1.toString());
circ1.scale(2);
console.log(circ1.toString());