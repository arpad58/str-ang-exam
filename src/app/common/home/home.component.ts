import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title2 = 'Heroes';
  title = 'To the Heroes';

  constructor() { }

  ngOnInit(): void {
  }

}
