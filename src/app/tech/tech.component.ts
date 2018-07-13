import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
total_images = 28;
img = [];
images = [
  'angular',
  'aws',
  'bootstrap',
  'csharp',
  'css3',
  'django',
  'dotnet',
  'express',
  'firebase',
  'flask',
  'git',
  'github',
  'html5',
  'jquery',
  'javascript',
  'mongodb',
  'nodejs',
  'postman',
  'python',
  'react',
  'sass',
  'scikit-learn',
  'sql',
  'sqlite',
  'r',
  'ubuntu',
  'vim',
  'vscode'
];

blurb = {

  // tslint:disable-next-line:max-line-length
  'angular': 'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.',

  // tslint:disable-next-line:max-line-length
  'aws': 'Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing services from website hosting to storage and more.',

  // tslint:disable-next-line:max-line-length
  'bootstrap': 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.',

  // tslint:disable-next-line:max-line-length
  'csharp': 'C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented, and component-oriented prgramming disciplines.',

  // tslint:disable-next-line:max-line-length
  'css3': 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts',

  // tslint:disable-next-line:max-line-length
  'django': 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.',

  // tslint:disable-next-line:max-line-length
  'dotnet': 'ASP.NET Core is a free and open-source web framework, and the next generation of ASP.NET developed by the Microsoft. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core',

  // tslint:disable-next-line:max-line-length
  'firebase': '',

  // tslint:disable-next-line:max-line-length
  'flask': '',

  // tslint:disable-next-line:max-line-length
  'git': '',

  // tslint:disable-next-line:max-line-length
  'github': '',

  // tslint:disable-next-line:max-line-length
  'html5': '',

  // tslint:disable-next-line:max-line-length
  'jquery': '',

  // tslint:disable-next-line:max-line-length
  'javascript': '',

  // tslint:disable-next-line:max-line-length
  'mongodb': '',

  // tslint:disable-next-line:max-line-length
  'nodejs': '',

  // tslint:disable-next-line:max-line-length
  'postman': '',

  // tslint:disable-next-line:max-line-length
  'python': '',

  // tslint:disable-next-line:max-line-length
  'react': '',

  // tslint:disable-next-line:max-line-length
  'sass': '',

  // tslint:disable-next-line:max-line-length
  'scikit-learn': '',

  // tslint:disable-next-line:max-line-length
  'sql': '',

  // tslint:disable-next-line:max-line-length
  'sqlite': '',

  // tslint:disable-next-line:max-line-length
  'r': '',

  // tslint:disable-next-line:max-line-length
  'ubuntu': '',

  // tslint:disable-next-line:max-line-length
  'vim': '',

  // tslint:disable-next-line:max-line-length
  'vscode': ''
};

techDescription = '';

zoomImg = 'python';

  constructor() { }

  ngOnInit() {
    this.randomizeHexes();
  }

  randomizeHexes() {
    for (let i = 1; i <= this.total_images; i++) {
      this.img.push(i);
    }

    for (let i = 0; i < this.img.length; i++) {
      const swap = Math.floor(Math.random() * (i + 1));
      const temp = this.img[i];
      this.img[i] = this.img[swap];
      this.img[swap] = temp;
    }
  }

  zoom(e) {
    // console.log(this.images[e.target.innerHTML - 1]);
    this.zoomImg = this.images[e.target.innerHTML - 1];
    // console.log(this.blurb[this.zoomImg]);
    this.techDescription = this.blurb[this.zoomImg];
  }

}
