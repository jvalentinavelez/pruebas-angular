import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con 2 campos: email y password', () => {
    expect(componente.myForm.contains('email')).toBeTruthy();
    expect(componente.myForm.contains('password')).toBeTruthy();
  });

  it('El email debe de ser obligatorio', () => {
    const control = componente.myForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy;
  });
  it('El email debe de ser un correo válido', () => {
    const control = componente.myForm.get('email');
    control?.setValue('fernando@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});
