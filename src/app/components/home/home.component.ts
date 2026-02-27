import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() nome!: string; // ! para indicar que a propriedade será inicializada posteriormente

  alerta() {
    alert(`Olá, ${this.nome}!`);
  }
}
