import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { LandingComponent } from './landing/landing.component';
import { AgentComponent } from './agent/agent.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'apod', component: ApodComponent },
  {path: "agent", component: AgentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
