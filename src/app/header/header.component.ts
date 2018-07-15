import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
name = '';
fullName = 'Prescott Breeden';

  constructor() {
  }

  ngOnInit() {
    let i = 0;
    setTimeout(() => {
    const timer = setInterval(() => {
      this.name += this.fullName[i];
      if (this.name.length === this.fullName.length) {
        clearInterval(timer);
      }
      i++;
    }, 100);
    }, 1000);
  }

}


