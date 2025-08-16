import { Component, OnInit } from '@angular/core';
import { Footer } from "../app-layout/footer/footer";
import { Header } from "../app-layout/header/header";
import * as AOS from 'aos';
import { AccountRoutingModule } from "../features/account/account-routing-module";

@Component({
  selector: 'app-landing-page',
  imports: [Footer, Header, AccountRoutingModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
