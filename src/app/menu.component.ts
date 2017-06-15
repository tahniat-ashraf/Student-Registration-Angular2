import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

context;
home;
register;
students;

  constructor() { }

  ngOnInit() {
    console.log('window.location.pathname : '+window.location.pathname);
    this.context=window.location.pathname;
    this.home='/home';
    this.register='/register';
    this.students='/students';
  }

}
