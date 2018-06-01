import { TerminalComponent } from './terminal/terminal.component';
import { CubeComponent } from './cube/cube.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: CubeComponent},
    { path: 'terminal', component: TerminalComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
