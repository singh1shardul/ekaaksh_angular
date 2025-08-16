import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderService } from './shared/loader';
import { Loader } from "./common/loader/loader";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Ekaaksh Healthcare');
  theme: 'light' | 'dark' = 'light';
  constructor(private router: Router, private loaderService: LoaderService, @Inject(PLATFORM_ID) private platformId: any) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.hide();
      }
    });
  }

  ngOnInit() {
     if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme') || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    }
    // Load from storage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    this.theme = savedTheme || 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    document.body.classList.add(`theme-${this.theme}`);
  }

  toggleTheme() {
    document.body.classList.remove(`theme-${this.theme}`);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.add(`theme-${this.theme}`);
    localStorage.setItem('theme', this.theme);
  }
}
