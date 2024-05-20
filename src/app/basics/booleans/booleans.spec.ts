import { usuarioLoggeado } from './booleans';

describe('Pruebas de Booleanos', () => {
  it('Debe de retornar true', () => {
    const res = usuarioLoggeado();
    expect(res).toBeTruthy();
  });
});
