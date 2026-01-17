import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrative-user-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './administrative-user-new-form.html',
  styleUrl: './administrative-user-new-form.css',
})
export class AdministrativeUserNewForm {
  formData!: FormGroup;

  constructor() {
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
}
