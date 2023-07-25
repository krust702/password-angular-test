import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthComponent),
      multi: true,
    },
  ],
})
export class PasswordStrengthComponent implements ControlValueAccessor {
  password: string = '';
  passwordStrength: string = '';
  showPassword: boolean = false;

  private onChange: any = () => {};
  private onTouch: any = () => {};

  updatePasswordStrength() {
    if (!this.password.length) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'easy';
    } else if (
      this.password.match(/[a-zA-Z]/) &&
      this.password.match(/[0-9]/) &&
      this.password.match(/[!@#$%^&*]/)
    ) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
    this.onChange(this.password);
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value !== undefined) {
      this.password = value;
      this.updatePasswordStrength();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }
  onKeyDown(event: KeyboardEvent) {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  }
}
