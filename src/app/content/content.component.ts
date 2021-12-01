import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  addItemShow: boolean = false
  constructor() { }

  ngOnInit(): void {



  }
  

  addItem() {
    this.addItemShow = !this.addItemShow



  }

}
