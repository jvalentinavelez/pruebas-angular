import { Jugador2 } from './player2';

describe('Jugador 2 Emit', () => {
  let jugador: Jugador2;

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe de emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;

    jugador.hpChanges.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.receivesDamage(1000);

    expect(nuevoHP).toBe(0);
  });

  it('Debe de emitir un evento cuando recibe daño y sobrevivir', () => {
    let nuevoHP = 0;

    jugador.hpChanges.subscribe((hp) => {
      nuevoHP = hp;
    });

    jugador.receivesDamage(50);

    expect(nuevoHP).toBe(50);
  });
});
