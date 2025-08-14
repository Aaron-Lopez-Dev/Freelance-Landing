import { Component } from '@angular/core';

@Component({
  selector: 'app-flow-card',
  imports: [],
  templateUrl: './flow-card.html',
  styleUrl: './flow-card.css'
})
export class FlowCard {
 flow = [{
  "service": "Website Design",
  "about": "I create custom website designs that reflect your unique style, engage your audience, and strengthen your brand identity. Every layout is crafted to be visually stunning, user-friendly, and tailored to your business goals."
},
{
  "service": "Website Development",
  "about": "Website development services ensure your site is fully responsive, optimized for speed, and functions flawlessly on desktop, tablet, and mobile devices. We focus on clean code, seamless navigation, and an exceptional user experience."
},
{
  "service": "Hosting",
  "about": "Enjoy fast, secure, and reliable website hosting with 99.9% uptime. We handle the technical details so your site stays online and performs smoothly, allowing you to focus on running your business without worrying about downtime."
}

]
}
