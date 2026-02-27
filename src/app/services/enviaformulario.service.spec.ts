import { TestBed } from '@angular/core/testing';

import { EnviaformularioService } from './enviaformulario.service';

describe('EnviaformularioService', () => {
  let service: EnviaformularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaformularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
