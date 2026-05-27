const fs = require('fs');
require('dotenv').config(); // Para leer el archivo .env local

// Si estamos en Vercel, usará process.env.BASE_URL. Si estás local, usará lo que haya en tu archivo .env
const baseUrl = process.env.BASE_URL || 'http://localhost:3003';

const targetPath = './src/environments/environment.ts';

const environmentFileContent = `
export const environment = {
  production: true,
  base_url: '${baseUrl}/api'
};
`;

fs.writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Target generated at ${targetPath}`);
});