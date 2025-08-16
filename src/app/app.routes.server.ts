import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'patient/consultation-details/:id',
    renderMode: RenderMode.Client,  // Or RenderMode.Client or RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Client,  // Your homepage rendered on client side
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
