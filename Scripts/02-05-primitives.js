var demo_02_05;
(function (demo_02_05) {
    // any
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    var x = doSomething(5);
    // primitives
    var age = 21;
    var score = 30;
    var rating = 99;
    var hasData = true;
    var isReady = true;
    var isBald = function () { return 'yes'; };
    var hasHair = isBald; // function
    console.log(typeof hasHair);
    var hasHair2 = isBald(); // string
    console.log(typeof hasHair2);
    var hasHair3 = !!isBald(); // boolean
    console.log(typeof hasHair3);
    // string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['First', 'Middle', 'Last',];
    var firstPerson = names[0];
    // var firstPerson: string = names[0]; this is unnecessary since getArrayLength's parameter is already requiring a string
    console.log(getArrayLength(names));
    // value of null can be assigned to any primitive types
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //
    var quantity;
    var company = undefined;
    console.log(quantity);
    console.log(company);
})(demo_02_05 || (demo_02_05 = {}));
