import { TerminalComponent } from './terminal/terminal.component';
import { CubeComponent } from './cube/cube.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    // { path: '', component: CubeComponent},
    { path: '', component: HomeComponent},

    { path: 'terminal', component: TerminalComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
