// Generated from TestSuite.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TestSuiteListener from './TestSuiteListener.js';
import TestSuiteVisitor from './TestSuiteVisitor.js';

const serializedATN = [4,1,23,100,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,
12,0,27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,35,8,1,10,1,12,1,38,9,1,1,1,1,1,
1,2,1,2,1,2,3,2,45,8,2,1,2,1,2,1,2,5,2,50,8,2,10,2,12,2,53,9,2,1,2,1,2,1,
3,1,3,1,3,5,3,60,8,3,10,3,12,3,63,9,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,71,8,4,
1,5,1,5,1,5,1,5,1,5,3,5,78,8,5,1,6,1,6,1,7,1,7,1,7,1,7,5,7,86,8,7,10,7,12,
7,89,9,7,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,
12,14,16,18,20,0,2,1,0,2,4,1,0,20,21,102,0,25,1,0,0,0,2,30,1,0,0,0,4,41,
1,0,0,0,6,56,1,0,0,0,8,70,1,0,0,0,10,77,1,0,0,0,12,79,1,0,0,0,14,81,1,0,
0,0,16,92,1,0,0,0,18,94,1,0,0,0,20,96,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,
0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,1,0,0,0,
28,29,5,0,0,1,29,1,1,0,0,0,30,31,5,1,0,0,31,32,3,12,6,0,32,36,5,12,0,0,33,
35,3,4,2,0,34,33,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,
1,0,0,0,38,36,1,0,0,0,39,40,5,13,0,0,40,3,1,0,0,0,41,42,7,0,0,0,42,44,3,
6,3,0,43,45,3,8,4,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,51,3,10,
5,0,47,48,5,10,0,0,48,50,3,10,5,0,49,47,1,0,0,0,50,53,1,0,0,0,51,49,1,0,
0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,11,0,0,55,5,1,0,0,
0,56,61,5,22,0,0,57,58,5,11,0,0,58,60,5,22,0,0,59,57,1,0,0,0,60,63,1,0,0,
0,61,59,1,0,0,0,61,62,1,0,0,0,62,7,1,0,0,0,63,61,1,0,0,0,64,71,5,5,0,0,65,
71,5,6,0,0,66,71,5,7,0,0,67,71,5,8,0,0,68,69,5,9,0,0,69,71,5,7,0,0,70,64,
1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,70,67,1,0,0,0,70,68,1,0,0,0,71,9,1,0,
0,0,72,78,3,12,6,0,73,78,3,16,8,0,74,78,3,18,9,0,75,78,3,20,10,0,76,78,3,
14,7,0,77,72,1,0,0,0,77,73,1,0,0,0,77,74,1,0,0,0,77,75,1,0,0,0,77,76,1,0,
0,0,78,11,1,0,0,0,79,80,5,18,0,0,80,13,1,0,0,0,81,82,5,14,0,0,82,87,3,10,
5,0,83,84,5,16,0,0,84,86,3,10,5,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,
0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,15,0,0,91,15,1,0,0,
0,92,93,5,19,0,0,93,17,1,0,0,0,94,95,7,1,0,0,95,19,1,0,0,0,96,97,5,17,0,
0,97,98,5,22,0,0,98,21,1,0,0,0,8,25,36,44,51,61,70,77,87];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TestSuiteParser extends antlr4.Parser {

    static grammarFileName = "TestSuite.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, "'.'", "'{'", "'}'", "'['", 
                            "']'", "','", "'$'" ];
    static symbolicNames = [ null, "PRUEBA", "DADO", "CUANDO", "ENTONCES", 
                             "ES", "NO_ES", "CONTIENE", "EXISTE", "DEBE", 
                             "Y", "PUNTO", "LBRACE", "RBRACE", "LBRACK", 
                             "RBRACK", "COMMA", "DOLLAR", "STRING", "NUM", 
                             "VERDADERO", "FALSO", "IDENT", "WS" ];
    static ruleNames = [ "testSuite", "prueba", "paso", "objeto", "estado", 
                         "valor", "texto", "lista", "numero", "booleano", 
                         "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TestSuiteParser.ruleNames;
        this.literalNames = TestSuiteParser.literalNames;
        this.symbolicNames = TestSuiteParser.symbolicNames;
    }



	testSuite() {
	    let localctx = new TestSuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TestSuiteParser.RULE_testSuite);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 22;
	            this.prueba();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
	        this.match(TestSuiteParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TestSuiteParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(TestSuiteParser.PRUEBA);
	        this.state = 31;
	        this.texto();
	        this.state = 32;
	        this.match(TestSuiteParser.LBRACE);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	            this.state = 33;
	            this.paso();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this.match(TestSuiteParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TestSuiteParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 42;
	        this.objeto();
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0)) {
	            this.state = 43;
	            this.estado();
	        }

	        this.state = 46;
	        this.valor();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 47;
	            this.match(TestSuiteParser.Y);
	            this.state = 48;
	            this.valor();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(TestSuiteParser.PUNTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TestSuiteParser.RULE_objeto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(TestSuiteParser.IDENT);
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 57;
	            this.match(TestSuiteParser.PUNTO);
	            this.state = 58;
	            this.match(TestSuiteParser.IDENT);
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TestSuiteParser.RULE_estado);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(TestSuiteParser.ES);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(TestSuiteParser.NO_ES);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(TestSuiteParser.CONTIENE);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.match(TestSuiteParser.EXISTE);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.match(TestSuiteParser.DEBE);
	            this.state = 69;
	            this.match(TestSuiteParser.CONTIENE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TestSuiteParser.RULE_valor);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.texto();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.numero();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 74;
	            this.booleano();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 75;
	            this.variable();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 76;
	            this.lista();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TestSuiteParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(TestSuiteParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TestSuiteParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(TestSuiteParser.LBRACK);
	        this.state = 82;
	        this.valor();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 83;
	            this.match(TestSuiteParser.COMMA);
	            this.state = 84;
	            this.valor();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(TestSuiteParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TestSuiteParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(TestSuiteParser.NUM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TestSuiteParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TestSuiteParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(TestSuiteParser.DOLLAR);
	        this.state = 97;
	        this.match(TestSuiteParser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TestSuiteParser.EOF = antlr4.Token.EOF;
TestSuiteParser.PRUEBA = 1;
TestSuiteParser.DADO = 2;
TestSuiteParser.CUANDO = 3;
TestSuiteParser.ENTONCES = 4;
TestSuiteParser.ES = 5;
TestSuiteParser.NO_ES = 6;
TestSuiteParser.CONTIENE = 7;
TestSuiteParser.EXISTE = 8;
TestSuiteParser.DEBE = 9;
TestSuiteParser.Y = 10;
TestSuiteParser.PUNTO = 11;
TestSuiteParser.LBRACE = 12;
TestSuiteParser.RBRACE = 13;
TestSuiteParser.LBRACK = 14;
TestSuiteParser.RBRACK = 15;
TestSuiteParser.COMMA = 16;
TestSuiteParser.DOLLAR = 17;
TestSuiteParser.STRING = 18;
TestSuiteParser.NUM = 19;
TestSuiteParser.VERDADERO = 20;
TestSuiteParser.FALSO = 21;
TestSuiteParser.IDENT = 22;
TestSuiteParser.WS = 23;

TestSuiteParser.RULE_testSuite = 0;
TestSuiteParser.RULE_prueba = 1;
TestSuiteParser.RULE_paso = 2;
TestSuiteParser.RULE_objeto = 3;
TestSuiteParser.RULE_estado = 4;
TestSuiteParser.RULE_valor = 5;
TestSuiteParser.RULE_texto = 6;
TestSuiteParser.RULE_lista = 7;
TestSuiteParser.RULE_numero = 8;
TestSuiteParser.RULE_booleano = 9;
TestSuiteParser.RULE_variable = 10;

class TestSuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_testSuite;
    }

	EOF() {
	    return this.getToken(TestSuiteParser.EOF, 0);
	};

	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterTestSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitTestSuite(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitTestSuite(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_prueba;
    }

	PRUEBA() {
	    return this.getToken(TestSuiteParser.PRUEBA, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	LBRACE() {
	    return this.getToken(TestSuiteParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(TestSuiteParser.RBRACE, 0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_paso;
    }

	objeto() {
	    return this.getTypedRuleContext(ObjetoContext,0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	PUNTO() {
	    return this.getToken(TestSuiteParser.PUNTO, 0);
	};

	DADO() {
	    return this.getToken(TestSuiteParser.DADO, 0);
	};

	CUANDO() {
	    return this.getToken(TestSuiteParser.CUANDO, 0);
	};

	ENTONCES() {
	    return this.getToken(TestSuiteParser.ENTONCES, 0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	Y = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestSuiteParser.Y);
	    } else {
	        return this.getToken(TestSuiteParser.Y, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_objeto;
    }

	IDENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestSuiteParser.IDENT);
	    } else {
	        return this.getToken(TestSuiteParser.IDENT, i);
	    }
	};


	PUNTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestSuiteParser.PUNTO);
	    } else {
	        return this.getToken(TestSuiteParser.PUNTO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_estado;
    }

	ES() {
	    return this.getToken(TestSuiteParser.ES, 0);
	};

	NO_ES() {
	    return this.getToken(TestSuiteParser.NO_ES, 0);
	};

	CONTIENE() {
	    return this.getToken(TestSuiteParser.CONTIENE, 0);
	};

	EXISTE() {
	    return this.getToken(TestSuiteParser.EXISTE, 0);
	};

	DEBE() {
	    return this.getToken(TestSuiteParser.DEBE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_texto;
    }

	STRING() {
	    return this.getToken(TestSuiteParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_lista;
    }

	LBRACK() {
	    return this.getToken(TestSuiteParser.LBRACK, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	RBRACK() {
	    return this.getToken(TestSuiteParser.RBRACK, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TestSuiteParser.COMMA);
	    } else {
	        return this.getToken(TestSuiteParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_numero;
    }

	NUM() {
	    return this.getToken(TestSuiteParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(TestSuiteParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(TestSuiteParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TestSuiteParser.RULE_variable;
    }

	DOLLAR() {
	    return this.getToken(TestSuiteParser.DOLLAR, 0);
	};

	IDENT() {
	    return this.getToken(TestSuiteParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TestSuiteListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TestSuiteVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TestSuiteParser.TestSuiteContext = TestSuiteContext; 
TestSuiteParser.PruebaContext = PruebaContext; 
TestSuiteParser.PasoContext = PasoContext; 
TestSuiteParser.ObjetoContext = ObjetoContext; 
TestSuiteParser.EstadoContext = EstadoContext; 
TestSuiteParser.ValorContext = ValorContext; 
TestSuiteParser.TextoContext = TextoContext; 
TestSuiteParser.ListaContext = ListaContext; 
TestSuiteParser.NumeroContext = NumeroContext; 
TestSuiteParser.BooleanoContext = BooleanoContext; 
TestSuiteParser.VariableContext = VariableContext; 
