import { Component } from '@angular/core';

@Component({
  selector: 'app-flow-card',
  imports: [],
  templateUrl: './flow-card.html',
  styleUrl: './flow-card.css'
})
export class FlowCard {
 flow = [{
    "service":"Website Design",
    "about": "Design's that fit you AND your business"
  },{
    "service":"Website Development",
    "about": "Fully Responsive on Desktop, Tablet, and Mobile"
  }
]
}
