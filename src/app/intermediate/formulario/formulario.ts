import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormularioRegister {
  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
