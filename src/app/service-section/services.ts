import { Component } from '@angular/core';
import { Servicecard } from "./service-card/servicecard";

@Component({
  selector: 'app-services',
  imports: [Servicecard],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
