import {Component, Input} from 'angular2/core';
import {Regex} from './regex';

@Component ({
    selector: 'regex-text',
    templateUrl: 'app/regex-text.component.html',
    styleUrls: []
})

export class RegexTextComponent {
    @Input() regex: Regex;
    
    OnTextKey(event: any) {
        this.regex.text = event.target.value;
    }
}

