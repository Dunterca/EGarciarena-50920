

import fs from 'fs';
import antlr4 from 'antlr4';
import TestSuiteLexer from './generated/TestSuiteLexer.js';
import TestSuiteParser from './generated/TestSuiteParser.js';
import CustomVisitor from './CustomVisitor.js';

console.log('=== INICIANDO ANALIZADOR ===');
const inputText = fs.readFileSync('input.txt', 'utf8'); // esta parte modificar para los distintos input
console.log('Leyendo input.txt...');
console.log('Contenido de input.txt:\n' + inputText);

const chars = new antlr4.InputStream(inputText);
const lexer = new TestSuiteLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new TestSuiteParser(tokens);
parser.buildParseTrees = true;

console.log('\nLexer creado');
console.log('\nTokens reconocidos:');
tokens.fill();
for (let t of tokens.tokens) {
  console.log(`${TestSuiteLexer.symbolicNames[t.type]} \t ${t.text}`);
}

console.log('\nParser creado');
const tree = parser.testSuite();
console.log('\nÁrbol de análisis creado:', tree.toStringTree(parser.ruleNames));

console.log('\nRecorriendo árbol con CustomVisitor...');
const visitor = new CustomVisitor();
const jsCode = visitor.visit(tree);

console.log('\n=== Código JavaScript generado ===\n');
console.log(jsCode);

console.log('\nEjecutando código generado...\n');
try {
  eval(jsCode);
} catch (e) {
  console.error('ERROR GLOBAL durante la ejecución del JS generado:', e);
}
