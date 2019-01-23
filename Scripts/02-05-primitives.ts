module demo_02_05 {
    // any
    let data: any;
    let info;
    var doSomething: any = function(arg) {
        return arg;
    }
    var x = doSomething(5);

    // primitives
    var age: number = 21;
    var score: number = 30;
    var rating = 99;
    var hasData: boolean = true;
    var isReady = true;
    var isBald = function() { return 'yes' };
    var hasHair: ()=> string = isBald; // function
    console.log(typeof hasHair);
    var hasHair2 = isBald(); // string
    console.log(typeof hasHair2);
    var hasHair3 = !!isBald(); // boolean
    console.log(typeof hasHair3);

    // string array
    function getArrayLength(x: string[]) {
        var len: number = x.length;
        return len;
    }
    var names: string[] = ['First','Middle','Last',];
    var firstPerson = names[0];
    // var firstPerson: string = names[0]; this is unnecessary since getArrayLength's parameter is already requiring a string
    console.log(getArrayLength(names));

    // value of null can be assigned to any primitive types
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //
    var quantity: number;
    var company = undefined;
    console.log(quantity);
    console.log(company);
}
