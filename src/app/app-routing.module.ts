import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TerminalComponent } from './terminal/terminal.component';
import { CubeComponent } from './cube/cube.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';


const routes: Routes = [
    // { path: '', component: CubeComponent},
    { path: '', component: HomeComponent},
    { path: 'tech', component: TechComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'terminal', component: TerminalComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
