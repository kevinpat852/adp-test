import { DisplayService } from './display.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public disServ: DisplayService) { }

  ngOnInit() {
    this.disServ.getTasks();
  }

}
