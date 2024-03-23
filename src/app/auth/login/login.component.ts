import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StagiaireService } from '../../services/stagiaire.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(
    private router: Router,
    private stagiaireService: StagiaireService
  ) {}

  onSubmit() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;
    this.stagiaireService.getDataByEmail(email).subscribe(
      (data) => {
        if (data.password == password) {
          this.router.navigate(['dashboard']);
          alert('login success !!');
        } else {
          alert('votre mot de passe est fausse! verifier voter mot de passe');
        }
      },
      (error) => {}
    );
  }
}
