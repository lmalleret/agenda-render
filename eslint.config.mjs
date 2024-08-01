import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    // Configuración para archivos JavaScript
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    rules: {
      // Aquí puedes agregar reglas específicas si es necesario
    },
    ...pluginJs.configs.recommended,
  },
  {
    ignores: [
      'node_modules/', // Ignora el directorio node_modules
      'dist/',        // Ignora el directorio build
      '*.test.js',     // Ignora archivos con extensión .test.js
      'src/ignore-this-directory/', // Ignora un directorio específico
    ],
  },
];
