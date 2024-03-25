import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Xiaomi", descricao: "Xiaomi Redmi 9", esgotado: false },
    { id: 2, nome: "Iphone", descricao: "Iphone 14", esgotado: true },
    { id: 3, nome: "Samsung", descricao: "Samsung Galaxy", esgotado: false },
    { id: 4, nome: "Celular Normal", esgotado: true }
  ]

}
