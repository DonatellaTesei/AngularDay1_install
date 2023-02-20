import { Component } from '@angular/core';//import statement

@Component({
  selector: 'app-root', //annotation
  templateUrl: './app.component.html', //view of the component
  styleUrls: ['./app.component.scss'] //style of the component
})
export class AppComponent {
  title = 'Code Factory'; //class declaration
}
