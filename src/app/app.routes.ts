import { Routes } from '@angular/router';
import { PanelLayoutComponent } from './layouts/panel-layout/panel-layout.component';

export const routes: Routes = [
  {
    path: '', component: PanelLayoutComponent, loadChildren: () =>
      import('./panel/panel.routes').then(r => r.panelRoutes),
      // canActivate: [authGuard] 
  },
  {
    path: 'authentication',
    loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes),
  },
];
