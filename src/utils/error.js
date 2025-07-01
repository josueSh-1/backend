// Centralización de errores comunes y utilidades para crear errores personalizados

// Utilidad para crear un error con status y mensaje
export function createError({ status = 500, message = 'Internal Server Error' }) {
  const error = new Error(message);
  error.status = status;
  return error;
}

// Errores comunes del proyecto
export const errors = {
  // Errores de autenticación
  unauthorized: {
    status: 401,
    message: 'Unauthorized: No user found',
  },
  invalidToken: {
    status: 401,
    message: 'Unauthorized: Invalid or expired token',
  },
  forbidden: {
    status: 403,
    message: 'Forbidden: You do not have permission',
  },
  // Errores de usuario
  userNotFound: {
    status: 404,
    message: 'User not found',
  },
  emailExists: {
    status: 400,
    message: 'Email already registered',
  },
  invalidCredentials: {
    status: 401,
    message: 'Invalid credentials',
  },
  // Errores de residentes
  residentNotFound: {
    status: 404,
    message: 'Resident not found',
  },
  // Errores de donaciones
  donationNotFound: {
    status: 404,
    message: 'Donation not found',
  },
  // Errores de eventos
  eventNotFound: {
    status: 404,
    message: 'Event not found',
  },
  // Errores de validación
  validation: {
    status: 400,
    message: 'Validation error',
  },
  // Otros
  internal: {
    status: 500,
    message: 'Internal Server Error',
  },
};
