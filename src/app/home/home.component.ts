import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total_images = 35;
  images = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.total_images; i++) {
      this.images.push(i);
    }
  }

}
