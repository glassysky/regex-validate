import {Component} from 'angular2/core';
import {Regex} from './regex';
import {RegexPatternComponent} from "./regex-pattern.component";

@Component ({
    selector: 'my-regex-test',
    templateUrl: 'app/regex-test.component.html',
    directives: [RegexPatternComponent]
})

export class RegexTestComponent {
    regex: Regex;

    keyMessage = "";

    constructor(){
        this.regex = {
            "pattern": "",
            "text": ""
        };
    }

}