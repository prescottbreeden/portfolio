import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  terminalStatus = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTerminal() {
    this.terminalStatus = !this.terminalStatus;
  }
}
