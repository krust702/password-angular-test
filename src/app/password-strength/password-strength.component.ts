import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = '';
  showPassword: boolean = false;

  updatePasswordStrength() {
    if (!this.password.length) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'easy';
    } else if (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*]/)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
