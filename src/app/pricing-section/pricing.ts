import { Component } from '@angular/core';
import { PricingCard } from "./pricing-card/pricing-card";

@Component({
  selector: 'app-pricing',
  imports: [PricingCard],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {

}
