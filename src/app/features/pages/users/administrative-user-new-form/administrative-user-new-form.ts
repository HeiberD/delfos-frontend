import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpAdministrativeUsers } from '../../../../core/services/http-administrative-users';

@Component({
  selector: 'app-administrative-user-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './administrative-user-new-form.html',
  styleUrl: './administrative-user-new-form.css',
})
export class AdministrativeUserNewForm {
  formData!: FormGroup;

  constructor(private fulanito: HttpAdministrativeUsers) {
    this.formData = new FormGroup({
      role: new FormControl('auditor'),
      nuip: new FormControl(''),
      names: new FormControl(''),
      lastName: new FormControl(''),
      secondLastName: new FormControl (''),
      jobTitle: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      status: new FormControl('inactive')
    })
  }

  onSubmit() {
    console.log(this.formData.value);
    // Llamanr al servicio para crear un usario usando un objeto observable
    this.fulanito.createAdministrativeUser(this.formData.value).subscribe({
      next: ( data ) => {
        console.log('Administrative user created', data);
      },
      error: ( error ) => {
        console.error('Error creating administrative user', error);
      },
      complete: () => {
        console.log('Limpie los campos del formulario.');
      }
    });
  }
}
