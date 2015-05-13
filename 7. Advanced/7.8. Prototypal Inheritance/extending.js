(function() {
    'use strict';

    function Shape2d() {

    }
    Shape2d.prototype.getArea = function() {
        return this.sides[0] * this.sides[1];
    }

    function Rectangle(width,height) {
        this.sides = [width, height, width, height];

    }
    Rectangle.prototype = new Shape2d();
    Rectangle.prototype.constructor = Rectangle;

    var myRect = new Rectangle(5,4);
    console.log(myRect.constructor.name);
    console.log(myRect.sides.length);
    console.log(myRect.getArea());
    console.log(myRect.hasOwnProperty('getArea'));

    function Square(sideLength) {
        this.sides = [sideLength,sideLength,sideLength,sideLength];
    }
    Square.prototype = new Shape2d();
    Square.prototype.constructor = Square;

    var mySquare = new Square(4);
    console.log(mySquare.sides.length);
    console.log(mySquare.getArea());

    function Triangle(sideALenght, sideBLength, sideCLenght) {
        this.getArea = function() {
            var semiperimeter = (sideALenght + sideBLength + sideCLenght) / 2;
            return Math.sqrt(semiperimeter * (semiperimeter - sideALenght) * (semiperimeter - sideBLength) * (semiperimeter -sideCLenght));

        }
    }

    Triangle.prototype = new Shape2d();
    Triangle.prototype.constructor = Triangle;

    var myTriangle = new Triangle(4,5,6);
    console.log(myTriangle.getArea());

}());