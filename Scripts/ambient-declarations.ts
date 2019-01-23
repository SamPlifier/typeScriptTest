/// <reference path="./Typings/knockout.d.ts"/>
import 'knockout';

declare var ko: KnockoutStatic;

module demo_02_04 {
    const name = ko.observable('Sam D-C');
    const id = ko.observable(1);
    const person = {
            id: id,
            fullName: name
    };
    let value: string = person.fullName();//ts will show highlight error if () missing since, even if you don't know KO, you know that person.fullName was causing an error. Just so happens KO observable wraps name in a function.
    console.log(value);
}
