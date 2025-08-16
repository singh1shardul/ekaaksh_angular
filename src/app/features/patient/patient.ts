import { Component, HostListener } from '@angular/core';
import { AccountRoutingModule } from "../account/account-routing-module";

@Component({
  selector: 'app-patient',
  imports: [AccountRoutingModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class Patient {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  logout() {
    // Implement your logout logic here, e.g. clear tokens, redirect
    console.log('Logging out...');
  }
}
