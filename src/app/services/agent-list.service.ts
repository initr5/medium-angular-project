import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

export interface AgentInterface {
  id: string;
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentListService {
  private configUrl: string;
  constructor(private http: HttpClient) { }
  getAgent(): Observable<AgentInterface> {
    this.configUrl = `${environment.agentUrl}`;
    const agent = this.http.get<AgentInterface>(this.configUrl);
    return agent;
  }
}
