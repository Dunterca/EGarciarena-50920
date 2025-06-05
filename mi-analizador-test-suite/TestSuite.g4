grammar TestSuite;

testSuite
    : (prueba)* EOF
    ;

prueba
    : PRUEBA texto LBRACE (paso)* RBRACE
    ;

paso
    : (DADO | CUANDO | ENTONCES) objeto estado? valor (Y valor)* PUNTO
    ;

objeto
    : IDENT (PUNTO IDENT)*
    ;
estado
    : ES
    | NO_ES
    | CONTIENE
    | EXISTE
    | DEBE CONTIENE
    ;

valor
    : texto
    | numero
    | booleano
    | variable
    | lista
    ;

texto
    : STRING
    ;

lista
    : LBRACK valor (COMMA valor)* RBRACK
    ;

numero
    : NUM
    ;

booleano
    : VERDADERO
    | FALSO
    ;

variable
    : DOLLAR IDENT
    ; 
PRUEBA    : 'Prueba' | 'prueba';
DADO      : 'Dado'   | 'dado';
CUANDO    : 'Cuando' | 'cuando';
ENTONCES  : 'Entonces' | 'entonces';
ES        : 'Es' | 'es';
NO_ES     : 'No' WS? 'es' | 'no' WS? 'es';   
CONTIENE  : 'Contiene' | 'contiene';
EXISTE    : 'Existe'   | 'existe';
DEBE      : 'Debe'     | 'debe';
Y         : 'Y' | 'y';
PUNTO     : '.';
LBRACE    : '{';
RBRACE    : '}';
LBRACK    : '[';
RBRACK    : ']';
COMMA     : ',';
DOLLAR    : '$';
STRING    : '"' (~["\r\n])* '"'  
          | '\'' (~['\r\n])* '\''  
          ;
NUM       : [0-9]+ ;
VERDADERO : 'Verdadero' | 'verdadero';
FALSO     : 'Falso'     | 'falso';
IDENT     : [a-zA-Z_] [a-zA-Z0-9_]* ;
WS        : [ \t\r\n]+ -> skip ;
