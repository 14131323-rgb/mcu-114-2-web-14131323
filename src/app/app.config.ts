import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ProductService } from './services/product.service';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ProductAzureService } from './services/product-azure.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: ProductService, useClass: ProductAzureService },
  ],
};
