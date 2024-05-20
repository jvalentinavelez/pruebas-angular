import { Jugador } from './classes';

xdescribe('Pruebas de clase', () => {
  let jugador = new Jugador();

  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });
  afterAll(() => {
    console.log('afterAll');
  });
  afterEach(() => {
    console.log('afterEach');
  });

  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {
    const resp = jugador.receivesDamage(20);
    expect(resp).toBe(80);
  });
  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {
    console.log('Esta prueba no va a fallar');
    const resp = jugador.receivesDamage(50);
    expect(resp).toBe(50);
  });
  xit('Debe de retornar 0 de hp, si recibe 100 de daño o más', () => {
    console.log('Esta prueba no va a fallar');
    const resp = jugador.receivesDamage(100);
    expect(resp).toBe(0);
  });
});
