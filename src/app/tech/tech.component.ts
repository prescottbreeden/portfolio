import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
total_images = 28;
images = [];

  constructor() { }

  ngOnInit() {
    this.randomizeHexes();
  }

  randomizeHexes() {
    for (let i = 1; i <= this.total_images; i++) {
      this.images.push(i);
    }

    for (let i = 0; i < this.images.length; i++) {
      const swap = Math.floor(Math.random() * (i + 1));
      const temp = this.images[i];
      this.images[i] = this.images[swap];
      this.images[swap] = temp;
    }
  }

}
