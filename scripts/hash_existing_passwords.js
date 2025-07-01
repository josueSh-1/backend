import 'dotenv/config';
import bcrypt from 'bcrypt';
import { pool } from '../src/db.js';

async function hashAllPasswords() {
  try {
    // Obtener todos los usuarios
    const { rows: users } = await pool.query('SELECT id_user, password FROM users');
    for (const user of users) {
      const password = user.password;
      // Si la contraseña ya está hasheada (bcrypt hash empieza con $2), saltar
      if (password && password.startsWith('$2')) continue;
      // Hashear la contraseña en texto plano
      const hashed = await bcrypt.hash(password, 10);
      await pool.query('UPDATE users SET password = $1 WHERE id_user = $2', [hashed, user.id_user]);
      console.log(`Contraseña actualizada para usuario id: ${user.id_user}`);
    }
    console.log('Todas las contraseñas han sido hasheadas.');
    process.exit(0);
  } catch (err) {
    console.error('Error actualizando contraseñas:', err);
    process.exit(1);
  }
}

hashAllPasswords();
