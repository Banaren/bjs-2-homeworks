const parseCount = function (arg) {
  const number = Number.parseInt(arg, 10);
  if (number) {
    return number;
  }
  throw new Error("Невалидное значение");
}

const validateCount = function (value) {
  try {
    return parseCount(value)
  }
  catch(err) {
  return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.leftSide = a;
    this.rightSide = b;
    this.basicSide = c;
  }
  getPerimeter() {
    return this.leftSide + this.rightSide + this.basicSide;
  }
  getArea() {
    const p = 0.5 * this.getPerimeter();
    return Number((p * (p - this.leftSide) * (p - this.rightSide) * (p - this.basicSide)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);   
    }
    catch(err) {
        const dummyTriangle = new Object();
        dummyTriangle.getArea = function() {return "Ошибка! Треугольник не существует";};
        dummyTriangle.getPerimeter = function() {return "Ошибка! Треугольник не существует";};
        return dummyTriangle;
    }
}