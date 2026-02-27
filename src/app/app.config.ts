import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configura a detecção de mudanças para ser mais eficiente, coalescendo eventos para reduzir o número de verificações de mudança
    provideRouter(routes), // Fornece o roteamento para a aplicação, permitindo a navegação entre componentes com base nas rotas definidas
    provideHttpClient() // Fornece o HttpClient para toda a aplicação, permitindo que os componentes façam requisições HTTP
  ]
};
