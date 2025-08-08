import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Services } from "./services/services";
import { ServiceFlow } from "./service-flow/service-flow";
import { Hero } from "./hero/hero";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Services, ServiceFlow, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'freelance';
}
