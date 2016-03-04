import {Component} from 'angular2/core';
import * as _ from 'lodash';

var lodash_version = _.VERSION;

@Component({
  selector: 'my-app',
  template: JST['assets/templates/test.html']({ person: lodash_version })// '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { }