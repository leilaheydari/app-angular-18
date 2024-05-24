import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';



export const authRoutes: Routes = [
  {
    path: '', component: AuthenticationComponent, children: [
      { path: '', component: AuthenticationComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'reset-password', component: ForgotPasswordComponent },
      { path: 'verification', component: VerifyCodeComponent  },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
];
