import {Component} from 'angular2/core';
import * as _ from 'lodash';

var lodash_version = _.VERSION;

@Component({
  selector: 'my-app',
  templateUrl: 'templates/homepage/app/app.component.html'
})
export class AppComponent { 
  emojis:string[] = [
    ":)",
    ":(",
    "%-)"
  ]
}