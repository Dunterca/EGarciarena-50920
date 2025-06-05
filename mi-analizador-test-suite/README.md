# Analizador de Pruebas con ANTLR4

## Requisitos
- Node.js >= 16
- Java Runtime Environment (JRE)
- ANTLR4

## Instalación
```bash
npm install antlr4
npm run generate
(en caso de no tener los archivos ejecutar: java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -o generated TestSuite.g4)
npm start
(en caso de querer cambiar el input ir a la linea 10 y modificar el numero de input)