
function parseCount(argument) {
    let result = Number.parseFloat(argument);
        if (isNaN(result)) {
        throw new Error("Невалидное значение");
        } else {
        return result; 
        } 
    }

function validateCount(argument) {
    
    try{
       return parseCount(argument);
    } catch(Error){
        return Error
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a+b)< c || (a+c)< b || (b+c)< a) {
            throw new MyError("Треугольник с такими сторонами не существует");
        } 

        this.a = a;
        this.b = b;
        this.c =c;

    }
    get perimeter() {
        return this.a + this.b +this.c;
    }
    get area() {
        const p = (this.a + this.b + this.c) / 2;
        return +((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3);
        
    }

}

class MyError extends Error {
    constructor(text) {
        super(text)
        this._area = "Ошибка! Треугольник не существует";
        this._perimeter = 'Ошибка! Треугольник не существует';
    }
    get area() {
        return this._area;
    }
    get perimeter() {
        return this._perimeter;
    }
}

function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);
    } catch(Error){
        return Error;
    }
}