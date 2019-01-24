var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        else {
            return rect.h * rect.h;
        }
    };
    ;
    var p = {
        name: 'Person1',
        age: 49,
        kids: 2,
        calcPets: function () {
            return this.kids;
        },
        makeYounger: function (years) {
            return this.age -= years;
        },
        greet: function (msg) {
            return msg + ", " + this.name;
        }
    };
    var pets = p.calcPets();
    console.log(pets);
    p.makeYounger(6);
    var newAge = p.age;
    console.log(newAge);
    var msg = p.greet('Hey');
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        ;
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(5);
    s.addRating(5);
    console.log(s.calcRating());
})(demo_02_08 || (demo_02_08 = {}));
