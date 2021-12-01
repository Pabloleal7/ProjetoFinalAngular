import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEdit, faTrash, faCaretSquareLeft, faCaretSquareRight, faSave } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/card.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  faEdit = faEdit
  faTrash = faTrash
  faCaretSquareLeft = faCaretSquareLeft
  faCaretSquareRight = faCaretSquareRight
  faSave= faSave

  editMode:boolean = false

  @Input() card!: Card
  addItemForm!:  FormGroup

  constructor(private todo: TodoService) { }

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      "titulo": new FormControl(null),
      "conteudo": new FormControl(null)
    })
  }
  onSubmit(){
    this.card = {id:this.card.id ,"titulo": this.addItemForm.value.titulo, conteudo: this.addItemForm.value.conteudo, lista : this.card.lista}
    this.todo.putCard(this.card).subscribe(()=>{
      this.editModeChange()
    })
    

  }

  editModeChange(){
    this.editMode = !this.editMode
  }

  alterarLista() {
    this.todo.putCard(this.card).subscribe()
  }

  excluir() {
    this.todo.deleteCard(this.card).subscribe()
  }

  right() {

    switch (this.card.lista) {
      case "todo": this.card.lista = "doing"
      this.alterarLista()
        break;
      case "doing": this.card.lista = "done"
      this.alterarLista()
        break;
      default:
        break;
    }

  }

  left() {
    switch (this.card.lista) {
      case "doing": this.card.lista = "todo"
      this.alterarLista()
        break;
      case "done": this.card.lista = "doing"
      this.alterarLista()
        break;
      default:
        break;
    }

  }

}
