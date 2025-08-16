import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark = false;

  constructor() {
    // Load user preference if stored
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.enableDark();
      }
    }
  }

  toggleTheme() {
    this.isDark ? this.enableLight() : this.enableDark();
  }

  enableDark() {
    document.body.classList.add('dark-theme');
    this.isDark = true;
    localStorage.setItem('theme', 'dark');
  }

  enableLight() {
    document.body.classList.remove('dark-theme');
    this.isDark = false;
    localStorage.setItem('theme', 'light');
  }

  isDarkMode(): boolean {
    return this.isDark;
  }
  
  /** ✅ Check if running in browser (not server) */
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
