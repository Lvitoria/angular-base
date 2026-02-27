import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaformularioService {

  constructor() { }

  enviarFormulario(dados: any) {
    console.log('Dados do formulário enviados:', dados);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo, usando HttpClient
  }
}
