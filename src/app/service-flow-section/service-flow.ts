import { Component } from '@angular/core';
import { FlowCard } from "./service-flow-card/flow-card";
import { ServiceFlowIcon } from './service-flow-icon/service-flow-icon';
@Component({
  selector: 'app-service-flow',
  imports: [FlowCard, ServiceFlowIcon],
  templateUrl: './service-flow.html',
  styleUrl: './service-flow.css'
})
export class ServiceFlow {
 
}
