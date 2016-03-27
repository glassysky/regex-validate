import {Component, Input} from 'angular2/core';
import {Regex} from './regex';

@Component ({
    selector: 'regex-pattern',
    templateUrl: 'app/regex-pattern.component.html',
    styleUrls: []
})

export class RegexPatternComponent {
    @Input() regex: Regex;

    onPatternKey(event: any) {
        this.regex.pattern = event.target.value;
    }
}