import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/card.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemForm!: FormGroup
  @Output() cancelarEvent = new EventEmitter<boolean>()

  constructor(private todo: TodoService) { }

  card!: Card 


  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      "titulo": new FormControl(null),
      "conteudo": new FormControl(null)
    })

    this.addItemForm.value.titulo = this.card.titulo
    this.addItemForm.value.conteudo = this.card.titulo

  }

  cancelar() {
    this.cancelarEvent.emit()

  }
  

  onSubmit() {
   this.card = {"titulo": this.addItemForm.value.titulo, conteudo: this.addItemForm.value.conteudo, lista : "todo"}
    this.todo.postCard(this.card).subscribe()
    this.cancelar()
  
  }

}
