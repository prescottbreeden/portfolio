import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
total_images = 35;
images = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.total_images; i++) {
      this.images.push(i);
    }
  }

}
