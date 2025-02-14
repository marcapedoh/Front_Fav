import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token'); // Vérifier si un token est stocké
  const router = new Router(); // Créer une instance de Router

  if (token) {
    return true; // Autoriser l'accès si l'utilisateur est connecté
  } else {
    router.navigate(['/login']); // Rediriger vers la page de connexion
    return false;
  }
};
