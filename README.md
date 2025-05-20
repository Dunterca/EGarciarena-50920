# EGarciarena-50920
# Cron Analyzer

Un pequeño analizador de campos estilo cron escrito en JavaScript puro.

Divide una línea en “campos” separados por espacios y reconoce:
- **Valores numéricos** (`42`)
- **Rango** (`1-5`, opcionalmente con paso: `1-10/2`)
- **Paso sobre comodín** (`*/5`)
- **Listas** (`1,2,5-7`)
- **Comodines** (`*`)
- **Predefinidos** (`@daily`, `@weekly`, etc.)

---

## Estructura del proyecto

cron-analyzer/  
├── package.json  
├── src/  
│   ├── analyzer.js   ← lógica de parsing  
│   └── runner.js     ← lee archivos de `test/` y muestra resultados  
└── test/  
    ├── input1.txt    ← ejemplo válido  
    ├── input2.txt    ← ejemplo válido  
    ├── input3.txt    ← ejemplo con “?” inválido  
    └── input4.txt    ← ejemplo con “x” inválido  

---

## Prerrequisitos

- Node.js LTS (>=16)  
- npm (incluido con Node.js)  

> **Windows PowerShell**: si bloquea scripts, usa `npm.cmd` en lugar de `npm`.

---

## Instalación

1. Abre tu terminal en la carpeta del proyecto:  
   `cd C:\LaFaaaaacu\Sintaxis\analizador\cron-analyzer`  
2. Instala dependencias:  
   `npm install`  

---

## Uso

### Ejecutar un test individual

Dentro de la carpeta del proyecto, ejecuta uno de estos comandos:

- **Test 1** (input1.txt)  
  `npm run test1`  
- **Test 2** (input2.txt)  
  `npm run test2`  
- **Test 3** (input3.txt)  
  `npm run test3`  
- **Test 4** (input4.txt)  
  `npm run test4`  

#### Ejemplo de salida para Test 1

Línea de entrada:  
`15 8-10,14-16 * */5 6-9 1-3`

Salida en consola:  

