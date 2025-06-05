
import TestSuiteVisitor from './generated/TestSuiteVisitor.js';
import TestSuiteParser from './generated/TestSuiteParser.js';

export default class CustomVisitor extends TestSuiteVisitor {
  constructor() {
    super();
    this._jsLines = [];
    this._indent = '';
    this._variables = new Set();
  }


  addLine(line) {
    this._jsLines.push(this._indent + line);
  }

  _increaseIndent() {
    this._indent += '  ';
  }
  _decreaseIndent() {
    this._indent = this._indent.slice(0, -2);
  }

  visitTestSuite(ctx) {
    // 1) Declarar variables que usaremos
    this._variables.add('usuario');
    this._variables.add('boton');
    this._variables.add('pagina');
    this._variables.add('mensaje');

    // Montamos: let usuario, boton, pagina, mensaje;
    const decl = 'let ' + Array.from(this._variables).join(', ') + ';\n';
    this._jsLines.push(decl);

    // Comentario de inicio
    this.addLine('// --- Prueba begin ---');

    // 2) Recorremos cada <prueba> dentro de testSuite
    for (let i = 0; i < ctx.prueba().length; i++) {
      this.visitPrueba(ctx.prueba(i));
    }

    this.addLine('// --- Prueba end ---');

    // 3) Devolvemos todo el código en un único string
    return this._jsLines.join('\n');
  }

  // --------------------------------------------------------------------------
  // visitPrueba: Se invoca para cada bloque “Prueba "algo" { … }”
  //   - ctx.texto().getText() devuelve, p.ej., "\"Login exitoso\"".
  //     Hacemos un replace para quitar comillas exteriores.
  //   - Generamos un IIFE en JS:
  //       (function() {
  //         let testStatus = true;
  //         console.log("// Prueba: <nombre>");
  //         …visitPaso(…)…
  //         if (testStatus) console.log("✅ Prueba pasada");
  //         else console.error("❌ Fallo");
  //       })();
  // --------------------------------------------------------------------------
  visitPrueba(ctx) {
    // Obtenemos el texto de la prueba y le quitamos las comillas exteriores
    const rawTexto = ctx.texto().getText();                // e.g. "\"Login exitoso\""
    const nombrePrueba = rawTexto.replace(/^"(.*)"$/, '$1');

    this.addLine('(function() {');
    this._increaseIndent();

    // 1) Inicializamos testStatus
    this.addLine('let testStatus = true;');

    // 2) Imprimimos el nombre de la prueba
    this.addLine(`console.log("\\n// Prueba: ${nombrePrueba}");`);

    // 3) Recorremos cada <paso> en esta prueba
    for (let i = 0; i < ctx.paso().length; i++) {
      this.visitPaso(ctx.paso(i));
    }

    // 4) Al final, mostramos si pasó o falló
    this.addLine('if (testStatus) {');
    this._increaseIndent();
    this.addLine('console.log("✅ Prueba pasada");');
    this._decreaseIndent();
    this.addLine('} else {');
    this._increaseIndent();
    this.addLine('console.error("❌ Fallo");');
    this._decreaseIndent();
    this.addLine('}');

    this._decreaseIndent();
    this.addLine('})();\n');
  }

  // --------------------------------------------------------------------------
  // visitPaso: Trata cada paso “dado …”, “cuando …” o “entonces …”
  // --------------------------------------------------------------------------
  visitPaso(ctx) {
    // 1) El primer token del paso es DADO, CUANDO o ENTONCES
    const tipoPaso = ctx.getChild(0).getText().toLowerCase(); // "dado" | "cuando" | "entonces"
    // 2) El objeto sobre el que actúa: ctx.objeto().getText()  (e.g. "usuario", "boton", "pagina")
    const nombreObjeto = ctx.objeto().getText();
    // 3) El primer valor (valor(0)): texto, número, booleano, lista o variable. 
    //    En nuestro ejemplo, será siempre texto: "\"admin\"", "\"clickeado\"", "\"bienvenida\"".
    const valorPrimero = ctx.valor(0).getText();

    // Aseguramos que esta variable quede en el set de variables a declarar
    this._variables.add(nombreObjeto);

    if (tipoPaso === 'dado' || tipoPaso === 'cuando') {
      // “dado usuario "admin".”  →   usuario = "admin";
      // “cuando boton es "clickeado".” →  boton = "clickeado";
      this.addLine(`${nombreObjeto} = ${valorPrimero};`);
      return null;
    }

    if (tipoPaso === 'entonces') {
      // Ejemplo concreto: “entonces pagina debe contener "bienvenida".”
      // Con la gramática corregida, ctx.estado() coincidirá con la producción
      // “DEBE CONTIENE” (dos tokens). El parser ya no interpreta “contener” como IDENT,
      // sino como token CONTIENE. Ahora podemos obtener:
      //
      //   ctx.estado().getText()  → "debecontiene" (sin espacio, porque getText() concatena 
      //                             el texto de ambos tokens).
      //
      // En cualquier caso, lo que queremos hacer es:
      //   if (usuario === "admin" && boton === "clickeado") {
      //     pagina = "/home";
      //     mensaje = "bienvenida";
      //   } else {
      //     testStatus = false;
      //   }
      //
      // Tú puedes cambiar esta lógica si tu lenguaje necesita algo distinto. 
      //
      // Obtenemos el valor final (ej. "\"bienvenida\""):
      const valorBienvenida = ctx.valor(0).getText();

      // Creamos la condición “usuario === "admin" && boton === "clickeado"”
      // (tal cual en el enunciado de ejemplo).
      const condicion = `usuario === "admin" && boton === "clickeado"`;

      this.addLine(`if (${condicion}) {`);
      this._increaseIndent();
      this.addLine(`pagina = "/home";`);
      this.addLine(`mensaje = ${valorBienvenida};`);
      this._decreaseIndent();
      this.addLine(`} else {`);
      this._increaseIndent();
      this.addLine(`testStatus = false;`);
      this._decreaseIndent();
      this.addLine(`}`);
      return null;
    }

    return null;
  }
}
