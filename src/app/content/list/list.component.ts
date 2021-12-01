import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/card.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lista!: string
  cards!: Card[] 
  /* cards!: Card[]  */
  constructor(private todo: TodoService) {

  }

  ngOnInit() {

    this.chama()

   
  }
  
  

  chama() {
    this.todo.getCards().subscribe((data) => {
      this.cards = data
    })
  } 

}
