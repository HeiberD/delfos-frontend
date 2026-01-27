import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-manager-user-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './client-manager-user-new-form.html',
  styleUrl: './client-manager-user-new-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ClientManagerUserNewForm {

  users!: Observable<any[]>;

  // Atributo para almacenar los datos del usuario
  public formData!: FormGroup;

  constructor() { }

  // Life cycle hooks
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  onSubmit() {
    console.log('onSubmit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  onReset() {
    console.log('onReset');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
