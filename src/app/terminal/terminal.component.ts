import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
terminalArray = [
  'Welcome to my website! Use the terminal below to navigate!'
];

newCommand = '';

  constructor() { }

  ngOnInit() {
  }

  runCommand = () => {
    if (this.newCommand === 'ls') {
      this.terminalArray.push('listing current projects');
    }
    if (this.newCommand === 'help') {
      this.terminalArray.push('I\'d love to help, here are some commands you can use');
    }
    this.newCommand = '';
  }

}
