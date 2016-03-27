import {Component} from 'angular2/core';
import {Regex} from './regex';

@Component ({
    selector: 'my-regex-test',
    templateUrl: 'app/regex-test.component.html',
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

    onPatternKey(event: any){
        this.regex.pattern = event.target.value;
    }
}