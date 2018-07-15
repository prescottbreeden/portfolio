import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
techDescription = '';
zoomImg = 'python';
img = [];
total_images = 28;
images = ['angular', 'aws', 'bootstrap', 'csharp', 'css3', 'django', 'dotnet',
  'express', 'firebase', 'flask', 'git', 'github', 'html5', 'jquery',
  'javascript', 'mongodb', 'nodejs', 'postman', 'python', 'react', 'sass',
  'scikit-learn', 'sql', 'sqlite', 'r', 'ubuntu', 'vim', 'vscode'];

blurb = {

  'angular': `Angular is a TypeScript-based open-source front-end web
              application platform led by the Angular Team at Google and by a
              community of individuals and corporations.`,

  'aws': `Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides
          on-demand cloud computing services from website hosting to storage
          and more.`,

  'bootstrap': `Bootstrap is an open source toolkit for developing with HTML,
                CSS, and JS. Quickly prototype your ideas or build your entire
                app with our Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful plugins built on
                jQuery.`,

  'csharp': `C# is a multi-paradigm programming language encompassing strong
             typing, imperative, declarative, functional, generic,
             object-oriented, and component-oriented prgramming disciplines.`,

  'css3': `CSS3 is the latest evolution of the Cascading Style Sheets language
           and aims at extending CSS2.1. It brings a lot of long-awaited
           novelties, like rounded corners, shadows, gradients, transitions or
           animations, as well as new layouts like multi-columns, flexible box
           or grid layouts`,

  'django': `Django is a high-level Python Web framework that encourages rapid
             development and clean, pragmatic design. Built by experienced
             developers, it takes care of much of the hassle of Web development,
             so you can focus on writing your app without needing to reinvent
             the wheel. It’s free and open source.`,

  'dotnet': `ASP.NET Core is a free and open-source modular web framework, and
             the next generation of ASP.NET, developed by Microsoft.`,

  'express': `Express.js, or simply Express, is a web application framework for
              Node.js, released as free and open-source software under the MIT
              License. It is designed for building web applications and APIs.`,

  'firebase': `Firebase is a cloud-hosted NoSQL database that stores data in
               JSON format and syncs accross all clients in realtime.`,

  'flask': `Flask is a "batteries not included" microframework for Python that
            provides tremendous freedom in the layout and structure of a
            web-server.`,

  'git': `Git is a version control system for tracking changes in computer
          files and coordinating work on those files among multiple people.`,

  'github': `GitHub is a web-based hosting service for version control using
             Git. GitHub offers all of the distributed version control and
             source code management functionality of Git with some of its own
             features on top of it as well.`,

  'html5': `HTML5 is a markup language used for structuring and presenting
            content on the web.`,

  'jquery': `jQuery is a cross-platform JavaScript library designed to
             simplify the client-side scripting of HTML.`,

  'javascript': `JavaScript is a high-level, interpreted programming language.
                 It is a language which is also characterized as dynamic,
                 weakly typed, prototype-based and multi-paradigm.`,

  'mongodb': `MongoDB is a free and open-source cross-platform
              document-oriented database program. Classified as a NoSQL
              database program, MongoDB uses JSON-like documents with schemas.`,

  'nodejs': `Node.js is an open-source, cross-platform JavaScript run
             environment that executes JavaScript code outside the browser.`,

  'postman': `Postman is a development application for building, testing,
              and documenting APIs faster and more efficiently.`,

  'python': `Python is an interpreted high-level programming language for
             general-purpose programming. Created by Guido van Rossum and first
             released in 1991, Python has a design philosophy that emphasizes
             code readability, notably using significant whitespace.`,

  'react': `React is a JavaScript library for building user interfaces. It is
            maintained by Facebook and a community of individual developers and
            companies. React can be used as a base in the development of
            single-page or mobile applications.`,

  'sass': `SASS ('Syntactically Awesome Style Sheets') is a preprocessor
           scripting language that is interpreted or compiled into Cascading
           Style Sheets (CSS) and adds a number of progromatic features like
           functions, mixins, variables, and more to make writing CSS easier
           whether you are working solo or with a large team.`,

  'scikit-learn': `Scikit-learn is a free software machine learning library for
                   the Python programming language. It features various
                   classification, regression and clustering algorithms
                   including support vector machines, random forests, gradient
                   boosting, k-means and DBSCAN interoperating with NumPy and
                   SciPy libraries.`,

  'sql': `SQL is a domain-specific language used in programming and designed
          for managing data held in a relational database management system, or
          for stream processing in a relational data stream management system.`,

  'sqlite': `SQLite is a relational database management system contained in a C
             programming library. In contrast to many other database management
             systems, SQLite is not a client–server database engine. Rather, it
             is embedded into the end program.`,

  'r': `R is a vector-based programming language and free software environment
        for statistical computing and graphics that is supported by the R
        Foundation for Statistical Computing.`,

  'ubuntu': `Ubuntu is a free and open source operating system and Linux
             distribution based on Debian. Ubuntu is the most popular
             operating system across public and OpenStack clouds.`,

  'vim': `Vim is a highly configurable text editor for efficiently creating
          and changing any kind of text directly from the CLI.`,

  'vscode': `Visual Studio Code is a source code editor developed by Microsoft
             for Windows, Linux and macOS. It includes support for debugging,
             embedded Git control, syntax highlighting, intelligent code
             completion, snippets, and code refactoring.`
};


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
    // console.log(e);
    // console.log(this.images[e.target.children[0].innerHTML - 1]);
    this.zoomImg = this.images[e.target.children[0].innerHTML - 1];
    // console.log(this.blurb[this.zoomImg]);
    this.techDescription = this.blurb[this.zoomImg];
  }

}
