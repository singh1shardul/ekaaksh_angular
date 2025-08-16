import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
   step = 1;

  // Example data binding model
  profileData = {
    fullName: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
    address: ''
  };

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  submitProfile() {
    console.log('Profile Data Submitted:', this.profileData);
    alert('Profile setup complete!');
  }
}
