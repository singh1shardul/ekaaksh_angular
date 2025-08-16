import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AccountRoutingModule } from "../../../account/account-routing-module";
import { RouterModule } from '@angular/router';

interface Allergy { id: string; name: string; }
interface MedicalHistory { id: string; title: string; }
interface SurgicalHistory { id: string; title: string; }
interface Medication { id: string; name: string; }
interface VitalSign { id: string; type: string; value: string; unit: string; }
interface Patient {
  name: string;
  email: string;
  address: string;
  gender: string;
  dob: Date;
  avatarUrl?: string;
}

@Component({
  selector: 'app-profile-details',
  imports: [CommonModule, RouterModule, DatePipe, FormsModule, AccountRoutingModule],
  standalone: true,
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.css'
})
export class ProfileDetails {
  activeTab: string = 'basic';

  selectTab(tab: string) {
    console.log(tab);
    this.activeTab = tab;
  }
  loading = false; // For lazy loading data, show spinner
  savePending = false; // For auto-save status

  patient: Patient = {
    name: 'John Doe',
    email: 'john.doe@mail.com',
    address: '123 Health St, City',
    gender: 'Male',
    dob: new Date(1995, 3, 15),
    avatarUrl: 'assets/images/shadow-user.png'
  };

  allergies: Allergy[] = [
    // { id: '1', name: 'Penicillin' },
    // { id: '2', name: 'Peanuts' }
  ];
  medicalHistory: MedicalHistory[] = [
    { id: '1', title: 'Asthma' }
  ];
  surgicalHistory: SurgicalHistory[] = [
    { id: '1', title: 'Appendectomy' }
  ];
  medications: Medication[] = [
    { id: '1', name: 'Aspirin' }
  ];
  vitalSigns: VitalSign[] = [
    { id: '1', type: 'Blood Pressure', value: '120/80', unit: 'mmHg' },
    { id: '2', type: 'Temperature', value: '36.8', unit: '°C' }
  ];

  // Forms and modal state
  basicDetailsForm!: FormGroup;
  allergyForm!: FormGroup;
  medicalHistoryForm!: FormGroup;
  surgicalHistoryForm!: FormGroup;
  medicationForm!: FormGroup;
  vitalSignForm!: FormGroup;

  showEditBasicModal = false;
  showAddAllergyModal = false;
  showAddMedicalModal = false;
  showAddSurgicalModal = false;
  showAddMedicationModal = false;
  showAddVitalModal = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Initialize forms
    this.basicDetailsForm = this.fb.group({
      name: [this.patient.name, Validators.required],
      email: [this.patient.email, [Validators.required, Validators.email]],
      address: [this.patient.address, Validators.required],
      gender: [this.patient.gender, Validators.required],
      dob: [this.patient.dob, Validators.required]
    });

    // Example: auto-save feedback logic
    this.basicDetailsForm.valueChanges.subscribe(() => {
      this.savePending = true;
      // Simulate auto-save, debounce, and show alert
      setTimeout(() => {
        this.savePending = false;
        this.showAlert('Profile details saved!');
      }, 1000);
    });
  }

  // Modal open/close helpers
  editBasicDetails() { this.showEditBasicModal = true; }
  closeBasicModal() { this.showEditBasicModal = false; }
  addAllergy() { this.showAddAllergyModal = true; }
  addMedicalHistory() { this.showAddMedicalModal = true; }
  addSurgicalHistory() { this.showAddSurgicalModal = true; }
  addMedication() { this.showAddMedicationModal = true; }
  addVital() { this.showAddVitalModal = true; }

  // CRUD for Allergies
  editAllergy(allergy: Allergy) { /* Open modal, prefill form */ }
  deleteAllergy(allergy: Allergy) {
    this.allergies = this.allergies.filter(a => a.id !== allergy.id);
    this.showAlert('Allergy deleted');
  }

  // CRUD for Medical History
  editMedicalHistory(history: MedicalHistory) { /* Open modal, prefill form */ }
  deleteMedicalHistory(history: MedicalHistory) {
    this.medicalHistory = this.medicalHistory.filter(h => h.id !== history.id);
    this.showAlert('Medical history deleted');
  }

  // Surgical History
  editSurgicalHistory(surgery: SurgicalHistory) { /* Open modal, prefill form */ }
  deleteSurgicalHistory(surgery: SurgicalHistory) {
    this.surgicalHistory = this.surgicalHistory.filter(s => s.id !== surgery.id);
    this.showAlert('Surgical history deleted');
  }

  // Medication
  editMedication(med: Medication) { /* Open modal, prefill form */ }
  deleteMedication(med: Medication) {
    this.medications = this.medications.filter(m => m.id !== med.id);
    this.showAlert('Medication deleted');
  }

  // Vital Signs
  editVital(vital: VitalSign) { /* Open modal, prefill form */ }
  addVitalReading() { /* Open modal to add new vital */ }

  // Document upload
  uploadHealthDocument(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.showAlert('Document uploaded!');
      }, 1500);
    }
  }

  // Profile picture update
  changeProfilePicture() {
    // Open file dialog, change avatarUrl
    this.showAlert('Profile picture updated!');
  }

  // Reusable alert/notification for all actions (replace with real toast/snackbar)
  showAlert(msg: string) {
    alert(msg); // Replace with Angular Material Snackbar or custom toast for better UX
  }
}
