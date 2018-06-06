import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {
collapse = false;
expand = false;
stack = false;
examine = false;

  constructor() { }

  ngOnInit() {
  }

  collapseCube() {
    console.log('clicked collapse');
    this.collapse = !this.collapse;
    this.expand = false;
    this.stack = false;
    this.examine = false;
  }

  expandCube() {
    console.log('clicked expand');
    this.collapse = false;
    this.expand = !this.expand;
    this.stack = false;
    this.examine = false;
  }

  stackCube() {
    console.log('clicked stack');
    this.collapse = false;
    this.expand = false;
    this.stack = !this.stack;
    this.examine = false;
  }

  examineCube() {
    console.log('clicked examine');
    this.collapse =  false;
    this.expand = false;
    this.stack = false;
    this.examine = !this.examine;
  }

}
