import { Component } from '@angular/core';
import {routerTransition} from "./router.transitions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }

}
