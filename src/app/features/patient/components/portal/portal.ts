import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import * as AOS from "aos";

interface Consultation {
  id: string;
  doctorName: string;
  specialty: string;
  date: Date;
  summary?: string;
}

@Component({
  selector: 'app-portal',
  imports: [CommonModule, RouterModule, DatePipe, SlicePipe],
  templateUrl: './portal.html',
  styleUrl: './portal.css'
})

export class Portal implements AfterViewInit{
  isDropdownOpen = false;

  constructor(private $route: Router) {

  }

  ongoingConsultations: Consultation[] = [
    {
      id: '1',
      doctorName: 'Dr. Ravi Sharma',
      specialty: 'Cardiology',
      date: new Date('2025-08-10T14:30:00')
    },
    {
      id: '2',
      doctorName: 'Dr. Anita Desai',
      specialty: 'Dermatology',
      date: new Date('2025-08-12T10:00:00')
    }
  ];

  pastConsultations: Consultation[] = [
    {
      id: '3',
      doctorName: 'Dr. Rajesh Kumar',
      specialty: 'Neurology',
      date: new Date('2025-07-30'),
      summary: 'Follow-up for migraine treatment successful with recommended medication changes.'
    },
    {
      id: '4',
      doctorName: 'Dr. Meera Nair',
      specialty: 'Psychiatry',
      date: new Date('2025-07-15'),
      summary: 'Consultation on anxiety management techniques and therapy plan proposed.'
    }
  ];

   ngAfterViewInit() {
    AOS.init({ duration: 800, once: true }); // Configure as needed
    AOS.refresh(); // Ensures new DOM is scanned
  }

  togglePasswordVisibility() {
    // if you implement password toggle in future forms
  }

  startNewConsultation() {
    // Navigate to new consultation page or open consultation modal
    console.log('Start a new consultation');
  }

  openConsultation(id: string) {
    // Navigate to ongoing consultation detail page
    console.log('Open consultation ID:', id);
  }

  viewDetails(id: string) {
    // Navigate to past consultation detailed view
    this.$route.navigate(['/patient/consultation-details', id]);
    console.log('View details of consultation ID:', id);
  }
}
