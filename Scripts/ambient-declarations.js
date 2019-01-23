/// <reference path="Typings/knockout.d.ts"/>
var demo_02_04;
(function (demo_02_04) {
    var name = ko.observable('Sam D-C');
    var id = ko.observable(1);
    var person = {
        id: id,
        fullName: name
    };
    var value = person.fullName(); //ts will show highlight error if () missing since, even if you don't know KO, you know that person.fullName was causing an error. Just so happens KO observable wraps name in a function, thus () are required.
    console.log(value);
    console.log(ko);
})(demo_02_04 || (demo_02_04 = {}));
