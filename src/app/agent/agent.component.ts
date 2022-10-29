import { Component, OnInit } from '@angular/core';
import { AgentListService, AgentInterface } from '../services/agent-list.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.sass']
})
export class AgentComponent implements OnInit {
  agent:AgentInterface;;

  constructor(private agentListService: AgentListService) { }

  ngOnInit() {
    this.getAgent();
  }
  getAgent() {
    this.agentListService.getAgent().subscribe((data:AgentInterface) =>{
      console.log("subscribe to agent", data);
      this.agent = data;
    })
  }

}
