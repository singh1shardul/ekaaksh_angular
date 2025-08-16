import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from './components/profile/profile';
import { Portal } from './components/portal/portal';
import { ConsultationDetails } from './components/consultation-details/consultation-details';
import { Patient } from './patient';
import { ProfileDetails } from './components/profile-details/profile-details';

const routes: Routes = [
  {
    path: '',
    component: Patient,
    children: [
      { path: 'profile', component: Profile },
      { path: 'portal', component: Portal },
      { path: 'profile-details', component: ProfileDetails },
      { path: 'consultation-details/:id', component: ConsultationDetails },
    ],
  },
  { path: '**', redirectTo: 'patient/portal' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
