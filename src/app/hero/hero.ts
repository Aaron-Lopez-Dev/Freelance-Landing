import { Component } from '@angular/core';
import { HeroIcon } from "../hero-icon/hero-icon";

@Component({
  selector: 'app-hero',
  imports: [HeroIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
