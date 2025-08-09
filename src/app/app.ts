import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Services } from "./service-section/services";
import { ServiceFlow } from "./service-flow-section/service-flow";
import { Hero } from "./hero/hero";
import { AboutMe } from "./about-me/about-me";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Services, ServiceFlow, Hero, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'freelance';
}
