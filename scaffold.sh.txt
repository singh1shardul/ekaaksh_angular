#!/usr/bin/env bash
# ----------------------------------------------------------------------------
# Healthcare App – Angular Scaffold Generator
# Creates separate Angular feature modules + components (HTML/CSS) for ALL pages
# Patient, Physician, Admin flows (Desktop/Tablet/Mobile responsive by CSS)
# ----------------------------------------------------------------------------
# Usage:
#   1) Ensure Angular CLI is installed: npm i -g @angular/cli
#   2) Create project (if not already): ng new healthcare --routing --style=css
#   3) cd healthcare
#   4) Save this file as scaffold.sh and run: bash scaffold.sh
#   5) Start dev server: ng serve -o
# ----------------------------------------------------------------------------

set -e

# Root app config tweaks ------------------------------------------------------
# Add a top-level features folder
mkdir -p src/app/features

# Create a SharedModule for common UI bits (buttons, forms, pipes)
ng g m shared --flat --project .

# ------------------------------
# Helper: generate feature module + component + routing
# Args: feature_folder feature_name route_path selector
# ------------------------------
make_feature() {
  local folder="$1"       # ex: patient-landing
  local className="$2"    # ex: PatientLanding
  local route="$3"        # ex: patient/landing
  local selector="$4"     # ex: app-patient-landing

  ng g m features/${folder} --route ${route} --module app-routing.module.ts
  ng g c features/${folder} --export --skip-tests --selector=${selector}

  # Replace default component template with a minimal responsive scaffold
  cat > src/app/features/${folder}/${folder}.component.html <<'HTML'
<section class="page">
  <header class="page__header">
    <h1>{{ title }}</h1>
    <p class="subtitle">Replace with real content/layout for this screen.</p>
  </header>
  <main class="page__body">
    <div class="card">
      <p>Component works! Build UI here.</p>
    </div>
  </main>
</section>
HTML

  cat > src/app/features/${folder}/${folder}.component.css <<'CSS'
.page { padding: 24px; display: grid; gap: 16px; }
.page__header h1 { margin: 0 0 4px; font-size: 28px; }
.subtitle { color: #6b7280; }
.card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }

/* Simple responsive helpers */
@media (max-width: 1024px) {
  .page { padding: 16px; }
}
@media (max-width: 480px) {
  .page { padding: 12px; }
  .page__header h1 { font-size: 22px; }
}
CSS

  # Provide a basic title property in the component TS
  sed -i "s/export class ${className}Component {/export class ${className}Component {\n  title = '${className.replace(/([A-Z])/g, ' $1').trim()}';/" src/app/features/${folder}/${folder}.component.ts
}

# ---------------------------------------------------------------------------
# PAGES LIST (31 screens)
# Patient Flow
make_feature patient-landing PatientLanding patient/landing app-patient-landing
make_feature patient-login PatientLogin patient/login app-patient-login
make_feature patient-signup PatientSignup patient/signup app-patient-signup
make_feature patient-forgot-password PatientForgotPassword patient/forgot-password app-patient-forgot-password
make_feature patient-reset-password PatientResetPassword patient/reset-password app-patient-reset-password
make_feature patient-profile-step1 PatientProfileStep1 patient/profile/step-1 app-patient-profile-step1
make_feature patient-profile-step2 PatientProfileStep2 patient/profile/step-2 app-patient-profile-step2
make_feature patient-profile-step3 PatientProfileStep3 patient/profile/step-3 app-patient-profile-step3
make_feature patient-dashboard PatientDashboard patient/dashboard app-patient-dashboard
make_feature patient-chat-light PatientChatLight patient/chat/light app-patient-chat-light
make_feature patient-chat-dark PatientChatDark patient/chat/dark app-patient-chat-dark
make_feature patient-ai-summary PatientAiSummary patient/ai-summary app-patient-ai-summary
make_feature patient-payment PatientPayment patient/payment app-patient-payment
make_feature patient-payment-success PatientPaymentSuccess patient/payment-success app-patient-payment-success
make_feature patient-waiting-room PatientWaitingRoom patient/waiting-room app-patient-waiting-room
make_feature patient-consultation-detail PatientConsultationDetail patient/consultation-detail app-patient-consultation-detail

# Physician Flow
make_feature physician-login PhysicianLogin physician/login app-physician-login
make_feature physician-signup PhysicianSignup physician/signup app-physician-signup
make_feature physician-forgot-password PhysicianForgotPassword physician/forgot-password app-physician-forgot-password
make_feature physician-reset-password PhysicianResetPassword physician/reset-password app-physician-reset-password
make_feature physician-profile-step1 PhysicianProfileStep1 physician/profile/step-1 app-physician-profile-step1
make_feature physician-profile-step2 PhysicianProfileStep2 physician/profile/step-2 app-physician-profile-step2
make_feature physician-dashboard PhysicianDashboard physician/dashboard app-physician-dashboard
make_feature physician-consultation-list PhysicianConsultationList physician/consultations app-physician-consultation-list
make_feature physician-consultation-detail PhysicianConsultationDetail physician/consultation-detail app-physician-consultation-detail
make_feature physician-earnings PhysicianEarnings physician/earnings app-physician-earnings

# Admin Flow
make_feature admin-login AdminLogin admin/login app-admin-login
make_feature admin-dashboard AdminDashboard admin/dashboard app-admin-dashboard
make_feature admin-approvals AdminApprovals admin/approvals app-admin-approvals
make_feature admin-transactions AdminTransactions admin/transactions app-admin-transactions
make_feature admin-logs AdminLogs admin/logs app-admin-logs

# ---------------------------------------------------------------------------
# App-wide routing: ensure lazy modules are registered (app-routing.module.ts was generated by Angular new)
# We will replace the default routes with explicit top-level redirects.

cat > src/app/app-routing.module.ts <<'TS'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'patient/landing' },
  // Patient
  { path: 'patient/landing', loadChildren: () => import('./features/patient-landing/patient-landing.module').then(m => m.PatientLandingModule) },
  { path: 'patient/login', loadChildren: () => import('./features/patient-login/patient-login.module').then(m => m.PatientLoginModule) },
  { path: 'patient/signup', loadChildren: () => import('./features/patient-signup/patient-signup.module').then(m => m.PatientSignupModule) },
  { path: 'patient/forgot-password', loadChildren: () => import('./features/patient-forgot-password/patient-forgot-password.module').then(m => m.PatientForgotPasswordModule) },
  { path: 'patient/reset-password', loadChildren: () => import('./features/patient-reset-password/patient-reset-password.module').then(m => m.PatientResetPasswordModule) },
  { path: 'patient/profile/step-1', loadChildren: () => import('./features/patient-profile-step1/patient-profile-step1.module').then(m => m.PatientProfileStep1Module) },
  { path: 'patient/profile/step-2', loadChildren: () => import('./features/patient-profile-step2/patient-profile-step2.module').then(m => m.PatientProfileStep2Module) },
  { path: 'patient/profile/step-3', loadChildren: () => import('./features/patient-profile-step3/patient-profile-step3.module').then(m => m.PatientProfileStep3Module) },
  { path: 'patient/dashboard', loadChildren: () => import('./features/patient-dashboard/patient-dashboard.module').then(m => m.PatientDashboardModule) },
  { path: 'patient/chat/light', loadChildren: () => import('./features/patient-chat-light/patient-chat-light.module').then(m => m.PatientChatLightModule) },
  { path: 'patient/chat/dark', loadChildren: () => import('./features/patient-chat-dark/patient-chat-dark.module').then(m => m.PatientChatDarkModule) },
  { path: 'patient/ai-summary', loadChildren: () => import('./features/patient-ai-summary/patient-ai-summary.module').then(m => m.PatientAiSummaryModule) },
  { path: 'patient/payment', loadChildren: () => import('./features/patient-payment/patient-payment.module').then(m => m.PatientPaymentModule) },
  { path: 'patient/payment-success', loadChildren: () => import('./features/patient-payment-success/patient-payment-success.module').then(m => m.PatientPaymentSuccessModule) },
  { path: 'patient/waiting-room', loadChildren: () => import('./features/patient-waiting-room/patient-waiting-room.module').then(m => m.PatientWaitingRoomModule) },
  { path: 'patient/consultation-detail', loadChildren: () => import('./features/patient-consultation-detail/patient-consultation-detail.module').then(m => m.PatientConsultationDetailModule) },
  // Physician
  { path: 'physician/login', loadChildren: () => import('./features/physician-login/physician-login.module').then(m => m.PhysicianLoginModule) },
  { path: 'physician/signup', loadChildren: () => import('./features/physician-signup/physician-signup.module').then(m => m.PhysicianSignupModule) },
  { path: 'physician/forgot-password', loadChildren: () => import('./features/physician-forgot-password/physician-forgot-password.module').then(m => m.PhysicianForgotPasswordModule) },
  { path: 'physician/reset-password', loadChildren: () => import('./features/physician-reset-password/physician-reset-password.module').then(m => m.PhysicianResetPasswordModule) },
  { path: 'physician/profile/step-1', loadChildren: () => import('./features/physician-profile-step1/physician-profile-step1.module').then(m => m.PhysicianProfileStep1Module) },
  { path: 'physician/profile/step-2', loadChildren: () => import('./features/physician-profile-step2/physician-profile-step2.module').then(m => m.PhysicianProfileStep2Module) },
  { path: 'physician/dashboard', loadChildren: () => import('./features/physician-dashboard/physician-dashboard.module').then(m => m.PhysicianDashboardModule) },
  { path: 'physician/consultations', loadChildren: () => import('./features/physician-consultation-list/physician-consultation-list.module').then(m => m.PhysicianConsultationListModule) },
  { path: 'physician/consultation-detail', loadChildren: () => import('./features/physician-consultation-detail/physician-consultation-detail.module').then(m => m.PhysicianConsultationDetailModule) },
  { path: 'physician/earnings', loadChildren: () => import('./features/physician-earnings/physician-earnings.module').then(m => m.PhysicianEarningsModule) },
  // Admin
  { path: 'admin/login', loadChildren: () => import('./features/admin-login/admin-login.module').then(m => m.AdminLoginModule) },
  { path: 'admin/dashboard', loadChildren: () => import('./features/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
  { path: 'admin/approvals', loadChildren: () => import('./features/admin-approvals/admin-approvals.module').then(m => m.AdminApprovalsModule) },
  { path: 'admin/transactions', loadChildren: () => import('./features/admin-transactions/admin-transactions.module').then(m => m.AdminTransactionsModule) },
  { path: 'admin/logs', loadChildren: () => import('./features/admin-logs/admin-logs.module').then(m => m.AdminLogsModule) },
  // 404
  { path: '**', redirectTo: 'patient/landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
TS

# Done -----------------------------------------------------------------------
echo "\n✅ Scaffold complete! Run: ng serve -o"
