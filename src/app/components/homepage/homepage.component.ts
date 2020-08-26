import {Component, OnInit} from '@angular/core';
import {PAGES} from '../../constants/constants';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  pages = PAGES;

  constructor() {
  }


  ngOnInit() {
  }


}
