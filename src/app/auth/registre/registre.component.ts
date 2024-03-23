import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StagiaireService } from '../../services/stagiaire.service';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.scss',
})
export class RegistreComponent {
  constructor(
    private formBuilder: FormBuilder,
    private stagiaireService: StagiaireService,
    private router: Router
  ) {}
  registerForm: any;
  ngOnInit(): void {}
  nameControl = new FormControl('');
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  phoneControl = new FormControl('');

  onSubmit() {
    const formData = {
      name: this.nameControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,
      phone: this.phoneControl.value,
    };

    this.stagiaireService.getDataByEmail(formData.email).subscribe((data) => {
      if (data == null) {
        this.stagiaireService.sendData(formData).subscribe(
          (data) => {
            alert('Inscription réussie');

            this.router.navigate(['/login']);
          },
          (error) => {
            console.error(
              "Erreur lors de l'enregistrement des données :",
              error
            );
            alert(
              "Une erreur est survenue lors de l'enregistrement des données. Veuillez réessayer."
            );
          }
        );
      } else {
        alert('Cet e-mail est déjà utilisé');
      }
    });
  }
}
