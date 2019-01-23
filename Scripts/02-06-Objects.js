var demo_02_06;
(function (demo_02_06) {
    // Objects
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2;
    points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h + this.w;
        }
    };
    console.log("Area: " + rectangle.calcArea());
    //  Functions
    var squareIt = function (x) {
        return x * x;
    };
    // var val1 = squareIt1('2');
    var squareIt2 = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        else {
            return rect.h * rect.w;
        }
    };
    var sq1a = squareIt2({ h: 10 });
    var sq2a = squareIt2({ h: 10, w: 40 });
    console.log("Rectangle having h & w of 10 = " + sq1a);
    console.log("Rectangle having h & w of 10 & 40 = " + sq2a);
})(demo_02_06 || (demo_02_06 = {}));
