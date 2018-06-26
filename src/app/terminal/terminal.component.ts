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
      this.terminalArray.push('> listing projects...');
      setTimeout(500);
      this.terminalArray.push('1: Ultimate Fan');
      setTimeout(500);
      this.terminalArray.push('2: Casino 31');
      setTimeout(500);
      this.terminalArray.push('3: Powder');
      setTimeout(500);
      this.terminalArray.push('Enter a number to learn more.  Add -v to open project');
    }
    if (this.newCommand === '1') {
      // tslint:disable-next-line:max-line-length
      this.terminalArray.push('> Ultimate Fan is a trivia game that tests users about athletes from selected categories. All trivia questions were generated via web-scraping. This project was created with one other collaborator. My primary responsibilities were building the login/registration, database/ORM design, web scraping, CSV document reading/writing, database migration, server-design, game-logic, and the user-interface (design, styling, and mobile scaling).');
    }
    if (this.newCommand === '1 -v') {
      this.terminalArray.push('> opening "Ultimate Fan" in new window...');
    }
    if (this.newCommand === '1-v') {
      this.terminalArray.push('> opening "Ultimate Fan" in new window...');
    }
    if (this.newCommand === '2') {
      // tslint:disable-next-line:max-line-length
      this.terminalArray.push('> Casino 31 is a card game for 1-6 players that was created with two other developers. My primary responsibility was building the OOP architecture for the app which included the server and browser-side game logic, the computer AI, and player assist function to assist users in decision making.');
    }
    if (this.newCommand === '2 -v') {
      this.terminalArray.push('> opening "Casino 31" in new window...');
    }
    if (this.newCommand === '2-v') {
      this.terminalArray.push('> opening "Casino 31" in new window...');
    }
    if (this.newCommand === '3') {
      // tslint:disable-next-line:max-line-length
      this.terminalArray.push('> Powder is a mock business landing page. The site scales for ultra-wide displays, tablet (landscape and portrait), and mobile. The site also changes the UI functionality depending if the user is on a touch device versus a computer. This site is intentionally verbose with animations and effects. Additional features include CSS/HTML5 form validation, HTML5 video, and a custom hamburger menu and float grid built with SASS and vanilla CSS (no bootstrap).');
    }
    if (this.newCommand === '3 -v') {
      this.terminalArray.push('> opening "Powder" in new window...');
    }
    if (this.newCommand === '3-v') {
      this.terminalArray.push('> opening "Powder" in new window...');
    }
    if (this.newCommand === 'help') {
      this.terminalArray.push('> I\'d love to help... here\'s a tip: bet on Seabiscuit in the third race');
    }
    if (this.newCommand === 'about') {
      // tslint:disable-next-line:max-line-length
      this.terminalArray.push('> I am a full-stack software developer with a background in the arts and sciences.  As a former opera singer, then CEO, and then neuroscientist, the one consistency across all realms was the constant need for newer and better tech to drive innovation while improving the consumer experience. I am passionate for tackling problems and technical challenges to find efficient, maintainable, and reusable solutions.');
    }
    this.newCommand = '';
  }

}
