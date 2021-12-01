import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Card } from '../card.interface';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.apiUrl
  auth = localStorage.getItem('auth')
  headers = { "Content-Type": 'application/json', "Authorization": `Bearer ${this.auth}` }







  constructor(private http: HttpClient) {

    this.login()


  }



  autorizacao() {



    return {}
  }

  login() {

    this.http.post(`${this.apiUrl}/login/`, { "login": "letscode", "senha": "lets@123" }).subscribe((data) => {

      localStorage.setItem("auth", data.toString())

    })


  }






  postCard(card: Card) {

    return this.http.post<Card>(`${this.apiUrl}/cards/`, card, { headers: this.headers })
  }


  getCards() {

    return this.http.get<Card[]>(`${this.apiUrl}/cards/`, { headers: this.headers })

  }

  putCard(card:Card){
    return this.http.put<Card>(`${this.apiUrl}/cards/${card.id}`,card, { headers: this.headers })
  }

  deleteCard(card:Card){

    return this.http.delete<Card>(`${this.apiUrl}/cards/${card.id}` , { headers: this.headers })

  }


}
