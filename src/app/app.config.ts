import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerHandlerInterceptor } from './core/interceptors/header-handler.interceptor';
import { errorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([headerHandlerInterceptor, errorHandlerInterceptor, tokenInterceptor]), withFetch()),

    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
