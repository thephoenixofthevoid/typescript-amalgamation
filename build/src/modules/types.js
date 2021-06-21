/* @internal */
export var Comparison;
(function (Comparison) {
    Comparison[Comparison["LessThan"] = -1] = "LessThan";
    Comparison[Comparison["EqualTo"] = 0] = "EqualTo";
    Comparison[Comparison["GreaterThan"] = 1] = "GreaterThan";
})(Comparison || (Comparison = {}));
// token > SyntaxKind.Identifier => token is a keyword
// Also, If you add a new SyntaxKind be sure to keep the `Markers` section at the bottom in sync
export var SyntaxKind;
(function (SyntaxKind) {
    SyntaxKind[SyntaxKind["Unknown"] = 0] = "Unknown";
    SyntaxKind[SyntaxKind["EndOfFileToken"] = 1] = "EndOfFileToken";
    SyntaxKind[SyntaxKind["SingleLineCommentTrivia"] = 2] = "SingleLineCommentTrivia";
    SyntaxKind[SyntaxKind["MultiLineCommentTrivia"] = 3] = "MultiLineCommentTrivia";
    SyntaxKind[SyntaxKind["NewLineTrivia"] = 4] = "NewLineTrivia";
    SyntaxKind[SyntaxKind["WhitespaceTrivia"] = 5] = "WhitespaceTrivia";
    // We detect and preserve #! on the first line
    SyntaxKind[SyntaxKind["ShebangTrivia"] = 6] = "ShebangTrivia";
    // We detect and provide better error recovery when we encounter a git merge marker.  This
    // allows us to edit files with git-conflict markers in them in a much more pleasant manner.
    SyntaxKind[SyntaxKind["ConflictMarkerTrivia"] = 7] = "ConflictMarkerTrivia";
    // Literals
    SyntaxKind[SyntaxKind["NumericLiteral"] = 8] = "NumericLiteral";
    SyntaxKind[SyntaxKind["BigIntLiteral"] = 9] = "BigIntLiteral";
    SyntaxKind[SyntaxKind["StringLiteral"] = 10] = "StringLiteral";
    SyntaxKind[SyntaxKind["JsxText"] = 11] = "JsxText";
    SyntaxKind[SyntaxKind["JsxTextAllWhiteSpaces"] = 12] = "JsxTextAllWhiteSpaces";
    SyntaxKind[SyntaxKind["RegularExpressionLiteral"] = 13] = "RegularExpressionLiteral";
    SyntaxKind[SyntaxKind["NoSubstitutionTemplateLiteral"] = 14] = "NoSubstitutionTemplateLiteral";
    // Pseudo-literals
    SyntaxKind[SyntaxKind["TemplateHead"] = 15] = "TemplateHead";
    SyntaxKind[SyntaxKind["TemplateMiddle"] = 16] = "TemplateMiddle";
    SyntaxKind[SyntaxKind["TemplateTail"] = 17] = "TemplateTail";
    // Punctuation
    SyntaxKind[SyntaxKind["OpenBraceToken"] = 18] = "OpenBraceToken";
    SyntaxKind[SyntaxKind["CloseBraceToken"] = 19] = "CloseBraceToken";
    SyntaxKind[SyntaxKind["OpenParenToken"] = 20] = "OpenParenToken";
    SyntaxKind[SyntaxKind["CloseParenToken"] = 21] = "CloseParenToken";
    SyntaxKind[SyntaxKind["OpenBracketToken"] = 22] = "OpenBracketToken";
    SyntaxKind[SyntaxKind["CloseBracketToken"] = 23] = "CloseBracketToken";
    SyntaxKind[SyntaxKind["DotToken"] = 24] = "DotToken";
    SyntaxKind[SyntaxKind["DotDotDotToken"] = 25] = "DotDotDotToken";
    SyntaxKind[SyntaxKind["SemicolonToken"] = 26] = "SemicolonToken";
    SyntaxKind[SyntaxKind["CommaToken"] = 27] = "CommaToken";
    SyntaxKind[SyntaxKind["QuestionDotToken"] = 28] = "QuestionDotToken";
    SyntaxKind[SyntaxKind["LessThanToken"] = 29] = "LessThanToken";
    SyntaxKind[SyntaxKind["LessThanSlashToken"] = 30] = "LessThanSlashToken";
    SyntaxKind[SyntaxKind["GreaterThanToken"] = 31] = "GreaterThanToken";
    SyntaxKind[SyntaxKind["LessThanEqualsToken"] = 32] = "LessThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanEqualsToken"] = 33] = "GreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["EqualsEqualsToken"] = 34] = "EqualsEqualsToken";
    SyntaxKind[SyntaxKind["ExclamationEqualsToken"] = 35] = "ExclamationEqualsToken";
    SyntaxKind[SyntaxKind["EqualsEqualsEqualsToken"] = 36] = "EqualsEqualsEqualsToken";
    SyntaxKind[SyntaxKind["ExclamationEqualsEqualsToken"] = 37] = "ExclamationEqualsEqualsToken";
    SyntaxKind[SyntaxKind["EqualsGreaterThanToken"] = 38] = "EqualsGreaterThanToken";
    SyntaxKind[SyntaxKind["PlusToken"] = 39] = "PlusToken";
    SyntaxKind[SyntaxKind["MinusToken"] = 40] = "MinusToken";
    SyntaxKind[SyntaxKind["AsteriskToken"] = 41] = "AsteriskToken";
    SyntaxKind[SyntaxKind["AsteriskAsteriskToken"] = 42] = "AsteriskAsteriskToken";
    SyntaxKind[SyntaxKind["SlashToken"] = 43] = "SlashToken";
    SyntaxKind[SyntaxKind["PercentToken"] = 44] = "PercentToken";
    SyntaxKind[SyntaxKind["PlusPlusToken"] = 45] = "PlusPlusToken";
    SyntaxKind[SyntaxKind["MinusMinusToken"] = 46] = "MinusMinusToken";
    SyntaxKind[SyntaxKind["LessThanLessThanToken"] = 47] = "LessThanLessThanToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanToken"] = 48] = "GreaterThanGreaterThanToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanToken"] = 49] = "GreaterThanGreaterThanGreaterThanToken";
    SyntaxKind[SyntaxKind["AmpersandToken"] = 50] = "AmpersandToken";
    SyntaxKind[SyntaxKind["BarToken"] = 51] = "BarToken";
    SyntaxKind[SyntaxKind["CaretToken"] = 52] = "CaretToken";
    SyntaxKind[SyntaxKind["ExclamationToken"] = 53] = "ExclamationToken";
    SyntaxKind[SyntaxKind["TildeToken"] = 54] = "TildeToken";
    SyntaxKind[SyntaxKind["AmpersandAmpersandToken"] = 55] = "AmpersandAmpersandToken";
    SyntaxKind[SyntaxKind["BarBarToken"] = 56] = "BarBarToken";
    SyntaxKind[SyntaxKind["QuestionToken"] = 57] = "QuestionToken";
    SyntaxKind[SyntaxKind["ColonToken"] = 58] = "ColonToken";
    SyntaxKind[SyntaxKind["AtToken"] = 59] = "AtToken";
    SyntaxKind[SyntaxKind["QuestionQuestionToken"] = 60] = "QuestionQuestionToken";
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    SyntaxKind[SyntaxKind["BacktickToken"] = 61] = "BacktickToken";
    // Assignments
    SyntaxKind[SyntaxKind["EqualsToken"] = 62] = "EqualsToken";
    SyntaxKind[SyntaxKind["PlusEqualsToken"] = 63] = "PlusEqualsToken";
    SyntaxKind[SyntaxKind["MinusEqualsToken"] = 64] = "MinusEqualsToken";
    SyntaxKind[SyntaxKind["AsteriskEqualsToken"] = 65] = "AsteriskEqualsToken";
    SyntaxKind[SyntaxKind["AsteriskAsteriskEqualsToken"] = 66] = "AsteriskAsteriskEqualsToken";
    SyntaxKind[SyntaxKind["SlashEqualsToken"] = 67] = "SlashEqualsToken";
    SyntaxKind[SyntaxKind["PercentEqualsToken"] = 68] = "PercentEqualsToken";
    SyntaxKind[SyntaxKind["LessThanLessThanEqualsToken"] = 69] = "LessThanLessThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanEqualsToken"] = 70] = "GreaterThanGreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["GreaterThanGreaterThanGreaterThanEqualsToken"] = 71] = "GreaterThanGreaterThanGreaterThanEqualsToken";
    SyntaxKind[SyntaxKind["AmpersandEqualsToken"] = 72] = "AmpersandEqualsToken";
    SyntaxKind[SyntaxKind["BarEqualsToken"] = 73] = "BarEqualsToken";
    SyntaxKind[SyntaxKind["BarBarEqualsToken"] = 74] = "BarBarEqualsToken";
    SyntaxKind[SyntaxKind["AmpersandAmpersandEqualsToken"] = 75] = "AmpersandAmpersandEqualsToken";
    SyntaxKind[SyntaxKind["QuestionQuestionEqualsToken"] = 76] = "QuestionQuestionEqualsToken";
    SyntaxKind[SyntaxKind["CaretEqualsToken"] = 77] = "CaretEqualsToken";
    // Identifiers and PrivateIdentifiers
    SyntaxKind[SyntaxKind["Identifier"] = 78] = "Identifier";
    SyntaxKind[SyntaxKind["PrivateIdentifier"] = 79] = "PrivateIdentifier";
    // Reserved words
    SyntaxKind[SyntaxKind["BreakKeyword"] = 80] = "BreakKeyword";
    SyntaxKind[SyntaxKind["CaseKeyword"] = 81] = "CaseKeyword";
    SyntaxKind[SyntaxKind["CatchKeyword"] = 82] = "CatchKeyword";
    SyntaxKind[SyntaxKind["ClassKeyword"] = 83] = "ClassKeyword";
    SyntaxKind[SyntaxKind["ConstKeyword"] = 84] = "ConstKeyword";
    SyntaxKind[SyntaxKind["ContinueKeyword"] = 85] = "ContinueKeyword";
    SyntaxKind[SyntaxKind["DebuggerKeyword"] = 86] = "DebuggerKeyword";
    SyntaxKind[SyntaxKind["DefaultKeyword"] = 87] = "DefaultKeyword";
    SyntaxKind[SyntaxKind["DeleteKeyword"] = 88] = "DeleteKeyword";
    SyntaxKind[SyntaxKind["DoKeyword"] = 89] = "DoKeyword";
    SyntaxKind[SyntaxKind["ElseKeyword"] = 90] = "ElseKeyword";
    SyntaxKind[SyntaxKind["EnumKeyword"] = 91] = "EnumKeyword";
    SyntaxKind[SyntaxKind["ExportKeyword"] = 92] = "ExportKeyword";
    SyntaxKind[SyntaxKind["ExtendsKeyword"] = 93] = "ExtendsKeyword";
    SyntaxKind[SyntaxKind["FalseKeyword"] = 94] = "FalseKeyword";
    SyntaxKind[SyntaxKind["FinallyKeyword"] = 95] = "FinallyKeyword";
    SyntaxKind[SyntaxKind["ForKeyword"] = 96] = "ForKeyword";
    SyntaxKind[SyntaxKind["FunctionKeyword"] = 97] = "FunctionKeyword";
    SyntaxKind[SyntaxKind["IfKeyword"] = 98] = "IfKeyword";
    SyntaxKind[SyntaxKind["ImportKeyword"] = 99] = "ImportKeyword";
    SyntaxKind[SyntaxKind["InKeyword"] = 100] = "InKeyword";
    SyntaxKind[SyntaxKind["InstanceOfKeyword"] = 101] = "InstanceOfKeyword";
    SyntaxKind[SyntaxKind["NewKeyword"] = 102] = "NewKeyword";
    SyntaxKind[SyntaxKind["NullKeyword"] = 103] = "NullKeyword";
    SyntaxKind[SyntaxKind["ReturnKeyword"] = 104] = "ReturnKeyword";
    SyntaxKind[SyntaxKind["SuperKeyword"] = 105] = "SuperKeyword";
    SyntaxKind[SyntaxKind["SwitchKeyword"] = 106] = "SwitchKeyword";
    SyntaxKind[SyntaxKind["ThisKeyword"] = 107] = "ThisKeyword";
    SyntaxKind[SyntaxKind["ThrowKeyword"] = 108] = "ThrowKeyword";
    SyntaxKind[SyntaxKind["TrueKeyword"] = 109] = "TrueKeyword";
    SyntaxKind[SyntaxKind["TryKeyword"] = 110] = "TryKeyword";
    SyntaxKind[SyntaxKind["TypeOfKeyword"] = 111] = "TypeOfKeyword";
    SyntaxKind[SyntaxKind["VarKeyword"] = 112] = "VarKeyword";
    SyntaxKind[SyntaxKind["VoidKeyword"] = 113] = "VoidKeyword";
    SyntaxKind[SyntaxKind["WhileKeyword"] = 114] = "WhileKeyword";
    SyntaxKind[SyntaxKind["WithKeyword"] = 115] = "WithKeyword";
    // Strict mode reserved words
    SyntaxKind[SyntaxKind["ImplementsKeyword"] = 116] = "ImplementsKeyword";
    SyntaxKind[SyntaxKind["InterfaceKeyword"] = 117] = "InterfaceKeyword";
    SyntaxKind[SyntaxKind["LetKeyword"] = 118] = "LetKeyword";
    SyntaxKind[SyntaxKind["PackageKeyword"] = 119] = "PackageKeyword";
    SyntaxKind[SyntaxKind["PrivateKeyword"] = 120] = "PrivateKeyword";
    SyntaxKind[SyntaxKind["ProtectedKeyword"] = 121] = "ProtectedKeyword";
    SyntaxKind[SyntaxKind["PublicKeyword"] = 122] = "PublicKeyword";
    SyntaxKind[SyntaxKind["StaticKeyword"] = 123] = "StaticKeyword";
    SyntaxKind[SyntaxKind["YieldKeyword"] = 124] = "YieldKeyword";
    // Contextual keywords
    SyntaxKind[SyntaxKind["AbstractKeyword"] = 125] = "AbstractKeyword";
    SyntaxKind[SyntaxKind["AsKeyword"] = 126] = "AsKeyword";
    SyntaxKind[SyntaxKind["AssertsKeyword"] = 127] = "AssertsKeyword";
    SyntaxKind[SyntaxKind["AnyKeyword"] = 128] = "AnyKeyword";
    SyntaxKind[SyntaxKind["AsyncKeyword"] = 129] = "AsyncKeyword";
    SyntaxKind[SyntaxKind["AwaitKeyword"] = 130] = "AwaitKeyword";
    SyntaxKind[SyntaxKind["BooleanKeyword"] = 131] = "BooleanKeyword";
    SyntaxKind[SyntaxKind["ConstructorKeyword"] = 132] = "ConstructorKeyword";
    SyntaxKind[SyntaxKind["DeclareKeyword"] = 133] = "DeclareKeyword";
    SyntaxKind[SyntaxKind["GetKeyword"] = 134] = "GetKeyword";
    SyntaxKind[SyntaxKind["InferKeyword"] = 135] = "InferKeyword";
    SyntaxKind[SyntaxKind["IntrinsicKeyword"] = 136] = "IntrinsicKeyword";
    SyntaxKind[SyntaxKind["IsKeyword"] = 137] = "IsKeyword";
    SyntaxKind[SyntaxKind["KeyOfKeyword"] = 138] = "KeyOfKeyword";
    SyntaxKind[SyntaxKind["ModuleKeyword"] = 139] = "ModuleKeyword";
    SyntaxKind[SyntaxKind["NamespaceKeyword"] = 140] = "NamespaceKeyword";
    SyntaxKind[SyntaxKind["NeverKeyword"] = 141] = "NeverKeyword";
    SyntaxKind[SyntaxKind["ReadonlyKeyword"] = 142] = "ReadonlyKeyword";
    SyntaxKind[SyntaxKind["RequireKeyword"] = 143] = "RequireKeyword";
    SyntaxKind[SyntaxKind["NumberKeyword"] = 144] = "NumberKeyword";
    SyntaxKind[SyntaxKind["ObjectKeyword"] = 145] = "ObjectKeyword";
    SyntaxKind[SyntaxKind["SetKeyword"] = 146] = "SetKeyword";
    SyntaxKind[SyntaxKind["StringKeyword"] = 147] = "StringKeyword";
    SyntaxKind[SyntaxKind["SymbolKeyword"] = 148] = "SymbolKeyword";
    SyntaxKind[SyntaxKind["TypeKeyword"] = 149] = "TypeKeyword";
    SyntaxKind[SyntaxKind["UndefinedKeyword"] = 150] = "UndefinedKeyword";
    SyntaxKind[SyntaxKind["UniqueKeyword"] = 151] = "UniqueKeyword";
    SyntaxKind[SyntaxKind["UnknownKeyword"] = 152] = "UnknownKeyword";
    SyntaxKind[SyntaxKind["FromKeyword"] = 153] = "FromKeyword";
    SyntaxKind[SyntaxKind["GlobalKeyword"] = 154] = "GlobalKeyword";
    SyntaxKind[SyntaxKind["BigIntKeyword"] = 155] = "BigIntKeyword";
    SyntaxKind[SyntaxKind["OverrideKeyword"] = 156] = "OverrideKeyword";
    SyntaxKind[SyntaxKind["OfKeyword"] = 157] = "OfKeyword";
    // Parse tree nodes
    // Names
    SyntaxKind[SyntaxKind["QualifiedName"] = 158] = "QualifiedName";
    SyntaxKind[SyntaxKind["ComputedPropertyName"] = 159] = "ComputedPropertyName";
    // Signature elements
    SyntaxKind[SyntaxKind["TypeParameter"] = 160] = "TypeParameter";
    SyntaxKind[SyntaxKind["Parameter"] = 161] = "Parameter";
    SyntaxKind[SyntaxKind["Decorator"] = 162] = "Decorator";
    // TypeMember
    SyntaxKind[SyntaxKind["PropertySignature"] = 163] = "PropertySignature";
    SyntaxKind[SyntaxKind["PropertyDeclaration"] = 164] = "PropertyDeclaration";
    SyntaxKind[SyntaxKind["MethodSignature"] = 165] = "MethodSignature";
    SyntaxKind[SyntaxKind["MethodDeclaration"] = 166] = "MethodDeclaration";
    SyntaxKind[SyntaxKind["Constructor"] = 167] = "Constructor";
    SyntaxKind[SyntaxKind["GetAccessor"] = 168] = "GetAccessor";
    SyntaxKind[SyntaxKind["SetAccessor"] = 169] = "SetAccessor";
    SyntaxKind[SyntaxKind["CallSignature"] = 170] = "CallSignature";
    SyntaxKind[SyntaxKind["ConstructSignature"] = 171] = "ConstructSignature";
    SyntaxKind[SyntaxKind["IndexSignature"] = 172] = "IndexSignature";
    // Type
    SyntaxKind[SyntaxKind["TypePredicate"] = 173] = "TypePredicate";
    SyntaxKind[SyntaxKind["TypeReference"] = 174] = "TypeReference";
    SyntaxKind[SyntaxKind["FunctionType"] = 175] = "FunctionType";
    SyntaxKind[SyntaxKind["ConstructorType"] = 176] = "ConstructorType";
    SyntaxKind[SyntaxKind["TypeQuery"] = 177] = "TypeQuery";
    SyntaxKind[SyntaxKind["TypeLiteral"] = 178] = "TypeLiteral";
    SyntaxKind[SyntaxKind["ArrayType"] = 179] = "ArrayType";
    SyntaxKind[SyntaxKind["TupleType"] = 180] = "TupleType";
    SyntaxKind[SyntaxKind["OptionalType"] = 181] = "OptionalType";
    SyntaxKind[SyntaxKind["RestType"] = 182] = "RestType";
    SyntaxKind[SyntaxKind["UnionType"] = 183] = "UnionType";
    SyntaxKind[SyntaxKind["IntersectionType"] = 184] = "IntersectionType";
    SyntaxKind[SyntaxKind["ConditionalType"] = 185] = "ConditionalType";
    SyntaxKind[SyntaxKind["InferType"] = 186] = "InferType";
    SyntaxKind[SyntaxKind["ParenthesizedType"] = 187] = "ParenthesizedType";
    SyntaxKind[SyntaxKind["ThisType"] = 188] = "ThisType";
    SyntaxKind[SyntaxKind["TypeOperator"] = 189] = "TypeOperator";
    SyntaxKind[SyntaxKind["IndexedAccessType"] = 190] = "IndexedAccessType";
    SyntaxKind[SyntaxKind["MappedType"] = 191] = "MappedType";
    SyntaxKind[SyntaxKind["LiteralType"] = 192] = "LiteralType";
    SyntaxKind[SyntaxKind["NamedTupleMember"] = 193] = "NamedTupleMember";
    SyntaxKind[SyntaxKind["TemplateLiteralType"] = 194] = "TemplateLiteralType";
    SyntaxKind[SyntaxKind["TemplateLiteralTypeSpan"] = 195] = "TemplateLiteralTypeSpan";
    SyntaxKind[SyntaxKind["ImportType"] = 196] = "ImportType";
    // Binding patterns
    SyntaxKind[SyntaxKind["ObjectBindingPattern"] = 197] = "ObjectBindingPattern";
    SyntaxKind[SyntaxKind["ArrayBindingPattern"] = 198] = "ArrayBindingPattern";
    SyntaxKind[SyntaxKind["BindingElement"] = 199] = "BindingElement";
    // Expression
    SyntaxKind[SyntaxKind["ArrayLiteralExpression"] = 200] = "ArrayLiteralExpression";
    SyntaxKind[SyntaxKind["ObjectLiteralExpression"] = 201] = "ObjectLiteralExpression";
    SyntaxKind[SyntaxKind["PropertyAccessExpression"] = 202] = "PropertyAccessExpression";
    SyntaxKind[SyntaxKind["ElementAccessExpression"] = 203] = "ElementAccessExpression";
    SyntaxKind[SyntaxKind["CallExpression"] = 204] = "CallExpression";
    SyntaxKind[SyntaxKind["NewExpression"] = 205] = "NewExpression";
    SyntaxKind[SyntaxKind["TaggedTemplateExpression"] = 206] = "TaggedTemplateExpression";
    SyntaxKind[SyntaxKind["TypeAssertionExpression"] = 207] = "TypeAssertionExpression";
    SyntaxKind[SyntaxKind["ParenthesizedExpression"] = 208] = "ParenthesizedExpression";
    SyntaxKind[SyntaxKind["FunctionExpression"] = 209] = "FunctionExpression";
    SyntaxKind[SyntaxKind["ArrowFunction"] = 210] = "ArrowFunction";
    SyntaxKind[SyntaxKind["DeleteExpression"] = 211] = "DeleteExpression";
    SyntaxKind[SyntaxKind["TypeOfExpression"] = 212] = "TypeOfExpression";
    SyntaxKind[SyntaxKind["VoidExpression"] = 213] = "VoidExpression";
    SyntaxKind[SyntaxKind["AwaitExpression"] = 214] = "AwaitExpression";
    SyntaxKind[SyntaxKind["PrefixUnaryExpression"] = 215] = "PrefixUnaryExpression";
    SyntaxKind[SyntaxKind["PostfixUnaryExpression"] = 216] = "PostfixUnaryExpression";
    SyntaxKind[SyntaxKind["BinaryExpression"] = 217] = "BinaryExpression";
    SyntaxKind[SyntaxKind["ConditionalExpression"] = 218] = "ConditionalExpression";
    SyntaxKind[SyntaxKind["TemplateExpression"] = 219] = "TemplateExpression";
    SyntaxKind[SyntaxKind["YieldExpression"] = 220] = "YieldExpression";
    SyntaxKind[SyntaxKind["SpreadElement"] = 221] = "SpreadElement";
    SyntaxKind[SyntaxKind["ClassExpression"] = 222] = "ClassExpression";
    SyntaxKind[SyntaxKind["OmittedExpression"] = 223] = "OmittedExpression";
    SyntaxKind[SyntaxKind["ExpressionWithTypeArguments"] = 224] = "ExpressionWithTypeArguments";
    SyntaxKind[SyntaxKind["AsExpression"] = 225] = "AsExpression";
    SyntaxKind[SyntaxKind["NonNullExpression"] = 226] = "NonNullExpression";
    SyntaxKind[SyntaxKind["MetaProperty"] = 227] = "MetaProperty";
    SyntaxKind[SyntaxKind["SyntheticExpression"] = 228] = "SyntheticExpression";
    // Misc
    SyntaxKind[SyntaxKind["TemplateSpan"] = 229] = "TemplateSpan";
    SyntaxKind[SyntaxKind["SemicolonClassElement"] = 230] = "SemicolonClassElement";
    // Element
    SyntaxKind[SyntaxKind["Block"] = 231] = "Block";
    SyntaxKind[SyntaxKind["EmptyStatement"] = 232] = "EmptyStatement";
    SyntaxKind[SyntaxKind["VariableStatement"] = 233] = "VariableStatement";
    SyntaxKind[SyntaxKind["ExpressionStatement"] = 234] = "ExpressionStatement";
    SyntaxKind[SyntaxKind["IfStatement"] = 235] = "IfStatement";
    SyntaxKind[SyntaxKind["DoStatement"] = 236] = "DoStatement";
    SyntaxKind[SyntaxKind["WhileStatement"] = 237] = "WhileStatement";
    SyntaxKind[SyntaxKind["ForStatement"] = 238] = "ForStatement";
    SyntaxKind[SyntaxKind["ForInStatement"] = 239] = "ForInStatement";
    SyntaxKind[SyntaxKind["ForOfStatement"] = 240] = "ForOfStatement";
    SyntaxKind[SyntaxKind["ContinueStatement"] = 241] = "ContinueStatement";
    SyntaxKind[SyntaxKind["BreakStatement"] = 242] = "BreakStatement";
    SyntaxKind[SyntaxKind["ReturnStatement"] = 243] = "ReturnStatement";
    SyntaxKind[SyntaxKind["WithStatement"] = 244] = "WithStatement";
    SyntaxKind[SyntaxKind["SwitchStatement"] = 245] = "SwitchStatement";
    SyntaxKind[SyntaxKind["LabeledStatement"] = 246] = "LabeledStatement";
    SyntaxKind[SyntaxKind["ThrowStatement"] = 247] = "ThrowStatement";
    SyntaxKind[SyntaxKind["TryStatement"] = 248] = "TryStatement";
    SyntaxKind[SyntaxKind["DebuggerStatement"] = 249] = "DebuggerStatement";
    SyntaxKind[SyntaxKind["VariableDeclaration"] = 250] = "VariableDeclaration";
    SyntaxKind[SyntaxKind["VariableDeclarationList"] = 251] = "VariableDeclarationList";
    SyntaxKind[SyntaxKind["FunctionDeclaration"] = 252] = "FunctionDeclaration";
    SyntaxKind[SyntaxKind["ClassDeclaration"] = 253] = "ClassDeclaration";
    SyntaxKind[SyntaxKind["InterfaceDeclaration"] = 254] = "InterfaceDeclaration";
    SyntaxKind[SyntaxKind["TypeAliasDeclaration"] = 255] = "TypeAliasDeclaration";
    SyntaxKind[SyntaxKind["EnumDeclaration"] = 256] = "EnumDeclaration";
    SyntaxKind[SyntaxKind["ModuleDeclaration"] = 257] = "ModuleDeclaration";
    SyntaxKind[SyntaxKind["ModuleBlock"] = 258] = "ModuleBlock";
    SyntaxKind[SyntaxKind["CaseBlock"] = 259] = "CaseBlock";
    SyntaxKind[SyntaxKind["NamespaceExportDeclaration"] = 260] = "NamespaceExportDeclaration";
    SyntaxKind[SyntaxKind["ImportEqualsDeclaration"] = 261] = "ImportEqualsDeclaration";
    SyntaxKind[SyntaxKind["ImportDeclaration"] = 262] = "ImportDeclaration";
    SyntaxKind[SyntaxKind["ImportClause"] = 263] = "ImportClause";
    SyntaxKind[SyntaxKind["NamespaceImport"] = 264] = "NamespaceImport";
    SyntaxKind[SyntaxKind["NamedImports"] = 265] = "NamedImports";
    SyntaxKind[SyntaxKind["ImportSpecifier"] = 266] = "ImportSpecifier";
    SyntaxKind[SyntaxKind["ExportAssignment"] = 267] = "ExportAssignment";
    SyntaxKind[SyntaxKind["ExportDeclaration"] = 268] = "ExportDeclaration";
    SyntaxKind[SyntaxKind["NamedExports"] = 269] = "NamedExports";
    SyntaxKind[SyntaxKind["NamespaceExport"] = 270] = "NamespaceExport";
    SyntaxKind[SyntaxKind["ExportSpecifier"] = 271] = "ExportSpecifier";
    SyntaxKind[SyntaxKind["MissingDeclaration"] = 272] = "MissingDeclaration";
    // Module references
    SyntaxKind[SyntaxKind["ExternalModuleReference"] = 273] = "ExternalModuleReference";
    // JSX
    SyntaxKind[SyntaxKind["JsxElement"] = 274] = "JsxElement";
    SyntaxKind[SyntaxKind["JsxSelfClosingElement"] = 275] = "JsxSelfClosingElement";
    SyntaxKind[SyntaxKind["JsxOpeningElement"] = 276] = "JsxOpeningElement";
    SyntaxKind[SyntaxKind["JsxClosingElement"] = 277] = "JsxClosingElement";
    SyntaxKind[SyntaxKind["JsxFragment"] = 278] = "JsxFragment";
    SyntaxKind[SyntaxKind["JsxOpeningFragment"] = 279] = "JsxOpeningFragment";
    SyntaxKind[SyntaxKind["JsxClosingFragment"] = 280] = "JsxClosingFragment";
    SyntaxKind[SyntaxKind["JsxAttribute"] = 281] = "JsxAttribute";
    SyntaxKind[SyntaxKind["JsxAttributes"] = 282] = "JsxAttributes";
    SyntaxKind[SyntaxKind["JsxSpreadAttribute"] = 283] = "JsxSpreadAttribute";
    SyntaxKind[SyntaxKind["JsxExpression"] = 284] = "JsxExpression";
    // Clauses
    SyntaxKind[SyntaxKind["CaseClause"] = 285] = "CaseClause";
    SyntaxKind[SyntaxKind["DefaultClause"] = 286] = "DefaultClause";
    SyntaxKind[SyntaxKind["HeritageClause"] = 287] = "HeritageClause";
    SyntaxKind[SyntaxKind["CatchClause"] = 288] = "CatchClause";
    // Property assignments
    SyntaxKind[SyntaxKind["PropertyAssignment"] = 289] = "PropertyAssignment";
    SyntaxKind[SyntaxKind["ShorthandPropertyAssignment"] = 290] = "ShorthandPropertyAssignment";
    SyntaxKind[SyntaxKind["SpreadAssignment"] = 291] = "SpreadAssignment";
    // Enum
    SyntaxKind[SyntaxKind["EnumMember"] = 292] = "EnumMember";
    // Unparsed
    SyntaxKind[SyntaxKind["UnparsedPrologue"] = 293] = "UnparsedPrologue";
    SyntaxKind[SyntaxKind["UnparsedPrepend"] = 294] = "UnparsedPrepend";
    SyntaxKind[SyntaxKind["UnparsedText"] = 295] = "UnparsedText";
    SyntaxKind[SyntaxKind["UnparsedInternalText"] = 296] = "UnparsedInternalText";
    SyntaxKind[SyntaxKind["UnparsedSyntheticReference"] = 297] = "UnparsedSyntheticReference";
    // Top-level nodes
    SyntaxKind[SyntaxKind["SourceFile"] = 298] = "SourceFile";
    SyntaxKind[SyntaxKind["Bundle"] = 299] = "Bundle";
    SyntaxKind[SyntaxKind["UnparsedSource"] = 300] = "UnparsedSource";
    SyntaxKind[SyntaxKind["InputFiles"] = 301] = "InputFiles";
    // JSDoc nodes
    SyntaxKind[SyntaxKind["JSDocTypeExpression"] = 302] = "JSDocTypeExpression";
    SyntaxKind[SyntaxKind["JSDocNameReference"] = 303] = "JSDocNameReference";
    SyntaxKind[SyntaxKind["JSDocAllType"] = 304] = "JSDocAllType";
    SyntaxKind[SyntaxKind["JSDocUnknownType"] = 305] = "JSDocUnknownType";
    SyntaxKind[SyntaxKind["JSDocNullableType"] = 306] = "JSDocNullableType";
    SyntaxKind[SyntaxKind["JSDocNonNullableType"] = 307] = "JSDocNonNullableType";
    SyntaxKind[SyntaxKind["JSDocOptionalType"] = 308] = "JSDocOptionalType";
    SyntaxKind[SyntaxKind["JSDocFunctionType"] = 309] = "JSDocFunctionType";
    SyntaxKind[SyntaxKind["JSDocVariadicType"] = 310] = "JSDocVariadicType";
    SyntaxKind[SyntaxKind["JSDocNamepathType"] = 311] = "JSDocNamepathType";
    SyntaxKind[SyntaxKind["JSDocComment"] = 312] = "JSDocComment";
    SyntaxKind[SyntaxKind["JSDocText"] = 313] = "JSDocText";
    SyntaxKind[SyntaxKind["JSDocTypeLiteral"] = 314] = "JSDocTypeLiteral";
    SyntaxKind[SyntaxKind["JSDocSignature"] = 315] = "JSDocSignature";
    SyntaxKind[SyntaxKind["JSDocLink"] = 316] = "JSDocLink";
    SyntaxKind[SyntaxKind["JSDocTag"] = 317] = "JSDocTag";
    SyntaxKind[SyntaxKind["JSDocAugmentsTag"] = 318] = "JSDocAugmentsTag";
    SyntaxKind[SyntaxKind["JSDocImplementsTag"] = 319] = "JSDocImplementsTag";
    SyntaxKind[SyntaxKind["JSDocAuthorTag"] = 320] = "JSDocAuthorTag";
    SyntaxKind[SyntaxKind["JSDocDeprecatedTag"] = 321] = "JSDocDeprecatedTag";
    SyntaxKind[SyntaxKind["JSDocClassTag"] = 322] = "JSDocClassTag";
    SyntaxKind[SyntaxKind["JSDocPublicTag"] = 323] = "JSDocPublicTag";
    SyntaxKind[SyntaxKind["JSDocPrivateTag"] = 324] = "JSDocPrivateTag";
    SyntaxKind[SyntaxKind["JSDocProtectedTag"] = 325] = "JSDocProtectedTag";
    SyntaxKind[SyntaxKind["JSDocReadonlyTag"] = 326] = "JSDocReadonlyTag";
    SyntaxKind[SyntaxKind["JSDocOverrideTag"] = 327] = "JSDocOverrideTag";
    SyntaxKind[SyntaxKind["JSDocCallbackTag"] = 328] = "JSDocCallbackTag";
    SyntaxKind[SyntaxKind["JSDocEnumTag"] = 329] = "JSDocEnumTag";
    SyntaxKind[SyntaxKind["JSDocParameterTag"] = 330] = "JSDocParameterTag";
    SyntaxKind[SyntaxKind["JSDocReturnTag"] = 331] = "JSDocReturnTag";
    SyntaxKind[SyntaxKind["JSDocThisTag"] = 332] = "JSDocThisTag";
    SyntaxKind[SyntaxKind["JSDocTypeTag"] = 333] = "JSDocTypeTag";
    SyntaxKind[SyntaxKind["JSDocTemplateTag"] = 334] = "JSDocTemplateTag";
    SyntaxKind[SyntaxKind["JSDocTypedefTag"] = 335] = "JSDocTypedefTag";
    SyntaxKind[SyntaxKind["JSDocSeeTag"] = 336] = "JSDocSeeTag";
    SyntaxKind[SyntaxKind["JSDocPropertyTag"] = 337] = "JSDocPropertyTag";
    // Synthesized list
    SyntaxKind[SyntaxKind["SyntaxList"] = 338] = "SyntaxList";
    // Transformation nodes
    SyntaxKind[SyntaxKind["NotEmittedStatement"] = 339] = "NotEmittedStatement";
    SyntaxKind[SyntaxKind["PartiallyEmittedExpression"] = 340] = "PartiallyEmittedExpression";
    SyntaxKind[SyntaxKind["CommaListExpression"] = 341] = "CommaListExpression";
    SyntaxKind[SyntaxKind["MergeDeclarationMarker"] = 342] = "MergeDeclarationMarker";
    SyntaxKind[SyntaxKind["EndOfDeclarationMarker"] = 343] = "EndOfDeclarationMarker";
    SyntaxKind[SyntaxKind["SyntheticReferenceExpression"] = 344] = "SyntheticReferenceExpression";
    // Enum value count
    SyntaxKind[SyntaxKind["Count"] = 345] = "Count";
    // Markers
    SyntaxKind[SyntaxKind["FirstAssignment"] = 62] = "FirstAssignment";
    SyntaxKind[SyntaxKind["LastAssignment"] = 77] = "LastAssignment";
    SyntaxKind[SyntaxKind["FirstCompoundAssignment"] = 63] = "FirstCompoundAssignment";
    SyntaxKind[SyntaxKind["LastCompoundAssignment"] = 77] = "LastCompoundAssignment";
    SyntaxKind[SyntaxKind["FirstReservedWord"] = 80] = "FirstReservedWord";
    SyntaxKind[SyntaxKind["LastReservedWord"] = 115] = "LastReservedWord";
    SyntaxKind[SyntaxKind["FirstKeyword"] = 80] = "FirstKeyword";
    SyntaxKind[SyntaxKind["LastKeyword"] = 157] = "LastKeyword";
    SyntaxKind[SyntaxKind["FirstFutureReservedWord"] = 116] = "FirstFutureReservedWord";
    SyntaxKind[SyntaxKind["LastFutureReservedWord"] = 124] = "LastFutureReservedWord";
    SyntaxKind[SyntaxKind["FirstTypeNode"] = 173] = "FirstTypeNode";
    SyntaxKind[SyntaxKind["LastTypeNode"] = 196] = "LastTypeNode";
    SyntaxKind[SyntaxKind["FirstPunctuation"] = 18] = "FirstPunctuation";
    SyntaxKind[SyntaxKind["LastPunctuation"] = 77] = "LastPunctuation";
    SyntaxKind[SyntaxKind["FirstToken"] = 0] = "FirstToken";
    SyntaxKind[SyntaxKind["LastToken"] = 157] = "LastToken";
    SyntaxKind[SyntaxKind["FirstTriviaToken"] = 2] = "FirstTriviaToken";
    SyntaxKind[SyntaxKind["LastTriviaToken"] = 7] = "LastTriviaToken";
    SyntaxKind[SyntaxKind["FirstLiteralToken"] = 8] = "FirstLiteralToken";
    SyntaxKind[SyntaxKind["LastLiteralToken"] = 14] = "LastLiteralToken";
    SyntaxKind[SyntaxKind["FirstTemplateToken"] = 14] = "FirstTemplateToken";
    SyntaxKind[SyntaxKind["LastTemplateToken"] = 17] = "LastTemplateToken";
    SyntaxKind[SyntaxKind["FirstBinaryOperator"] = 29] = "FirstBinaryOperator";
    SyntaxKind[SyntaxKind["LastBinaryOperator"] = 77] = "LastBinaryOperator";
    SyntaxKind[SyntaxKind["FirstStatement"] = 233] = "FirstStatement";
    SyntaxKind[SyntaxKind["LastStatement"] = 249] = "LastStatement";
    SyntaxKind[SyntaxKind["FirstNode"] = 158] = "FirstNode";
    SyntaxKind[SyntaxKind["FirstJSDocNode"] = 302] = "FirstJSDocNode";
    SyntaxKind[SyntaxKind["LastJSDocNode"] = 337] = "LastJSDocNode";
    SyntaxKind[SyntaxKind["FirstJSDocTagNode"] = 317] = "FirstJSDocTagNode";
    SyntaxKind[SyntaxKind["LastJSDocTagNode"] = 337] = "LastJSDocTagNode";
    /* @internal */ SyntaxKind[SyntaxKind["FirstContextualKeyword"] = 125] = "FirstContextualKeyword";
    /* @internal */ SyntaxKind[SyntaxKind["LastContextualKeyword"] = 157] = "LastContextualKeyword";
})(SyntaxKind || (SyntaxKind = {}));
export var NodeFlags;
(function (NodeFlags) {
    NodeFlags[NodeFlags["None"] = 0] = "None";
    NodeFlags[NodeFlags["Let"] = 1] = "Let";
    NodeFlags[NodeFlags["Const"] = 2] = "Const";
    NodeFlags[NodeFlags["NestedNamespace"] = 4] = "NestedNamespace";
    NodeFlags[NodeFlags["Synthesized"] = 8] = "Synthesized";
    NodeFlags[NodeFlags["Namespace"] = 16] = "Namespace";
    NodeFlags[NodeFlags["OptionalChain"] = 32] = "OptionalChain";
    NodeFlags[NodeFlags["ExportContext"] = 64] = "ExportContext";
    NodeFlags[NodeFlags["ContainsThis"] = 128] = "ContainsThis";
    NodeFlags[NodeFlags["HasImplicitReturn"] = 256] = "HasImplicitReturn";
    NodeFlags[NodeFlags["HasExplicitReturn"] = 512] = "HasExplicitReturn";
    NodeFlags[NodeFlags["GlobalAugmentation"] = 1024] = "GlobalAugmentation";
    NodeFlags[NodeFlags["HasAsyncFunctions"] = 2048] = "HasAsyncFunctions";
    NodeFlags[NodeFlags["DisallowInContext"] = 4096] = "DisallowInContext";
    NodeFlags[NodeFlags["YieldContext"] = 8192] = "YieldContext";
    NodeFlags[NodeFlags["DecoratorContext"] = 16384] = "DecoratorContext";
    NodeFlags[NodeFlags["AwaitContext"] = 32768] = "AwaitContext";
    NodeFlags[NodeFlags["ThisNodeHasError"] = 65536] = "ThisNodeHasError";
    NodeFlags[NodeFlags["JavaScriptFile"] = 131072] = "JavaScriptFile";
    NodeFlags[NodeFlags["ThisNodeOrAnySubNodesHasError"] = 262144] = "ThisNodeOrAnySubNodesHasError";
    NodeFlags[NodeFlags["HasAggregatedChildData"] = 524288] = "HasAggregatedChildData";
    // These flags will be set when the parser encounters a dynamic import expression or 'import.meta' to avoid
    // walking the tree if the flags are not set. However, these flags are just a approximation
    // (hence why it's named "PossiblyContainsDynamicImport") because once set, the flags never get cleared.
    // During editing, if a dynamic import is removed, incremental parsing will *NOT* clear this flag.
    // This means that the tree will always be traversed during module resolution, or when looking for external module indicators.
    // However, the removal operation should not occur often and in the case of the
    // removal, it is likely that users will add the import anyway.
    // The advantage of this approach is its simplicity. For the case of batch compilation,
    // we guarantee that users won't have to pay the price of walking the tree if a dynamic import isn't used.
    /* @internal */ NodeFlags[NodeFlags["PossiblyContainsDynamicImport"] = 1048576] = "PossiblyContainsDynamicImport";
    /* @internal */ NodeFlags[NodeFlags["PossiblyContainsImportMeta"] = 2097152] = "PossiblyContainsImportMeta";
    NodeFlags[NodeFlags["JSDoc"] = 4194304] = "JSDoc";
    /* @internal */ NodeFlags[NodeFlags["Ambient"] = 8388608] = "Ambient";
    /* @internal */ NodeFlags[NodeFlags["InWithStatement"] = 16777216] = "InWithStatement";
    NodeFlags[NodeFlags["JsonFile"] = 33554432] = "JsonFile";
    /* @internal */ NodeFlags[NodeFlags["TypeCached"] = 67108864] = "TypeCached";
    /* @internal */ NodeFlags[NodeFlags["Deprecated"] = 134217728] = "Deprecated";
    NodeFlags[NodeFlags["BlockScoped"] = 3] = "BlockScoped";
    NodeFlags[NodeFlags["ReachabilityCheckFlags"] = 768] = "ReachabilityCheckFlags";
    NodeFlags[NodeFlags["ReachabilityAndEmitFlags"] = 2816] = "ReachabilityAndEmitFlags";
    // Parsing context flags
    NodeFlags[NodeFlags["ContextFlags"] = 25358336] = "ContextFlags";
    // Exclude these flags when parsing a Type
    NodeFlags[NodeFlags["TypeExcludesFlags"] = 40960] = "TypeExcludesFlags";
    // Represents all flags that are potentially set once and
    // never cleared on SourceFiles which get re-used in between incremental parses.
    // See the comment above on `PossiblyContainsDynamicImport` and `PossiblyContainsImportMeta`.
    /* @internal */ NodeFlags[NodeFlags["PermanentlySetIncrementalFlags"] = 3145728] = "PermanentlySetIncrementalFlags";
})(NodeFlags || (NodeFlags = {}));
export var ModifierFlags;
(function (ModifierFlags) {
    ModifierFlags[ModifierFlags["None"] = 0] = "None";
    ModifierFlags[ModifierFlags["Export"] = 1] = "Export";
    ModifierFlags[ModifierFlags["Ambient"] = 2] = "Ambient";
    ModifierFlags[ModifierFlags["Public"] = 4] = "Public";
    ModifierFlags[ModifierFlags["Private"] = 8] = "Private";
    ModifierFlags[ModifierFlags["Protected"] = 16] = "Protected";
    ModifierFlags[ModifierFlags["Static"] = 32] = "Static";
    ModifierFlags[ModifierFlags["Readonly"] = 64] = "Readonly";
    ModifierFlags[ModifierFlags["Abstract"] = 128] = "Abstract";
    ModifierFlags[ModifierFlags["Async"] = 256] = "Async";
    ModifierFlags[ModifierFlags["Default"] = 512] = "Default";
    ModifierFlags[ModifierFlags["Const"] = 2048] = "Const";
    ModifierFlags[ModifierFlags["HasComputedJSDocModifiers"] = 4096] = "HasComputedJSDocModifiers";
    ModifierFlags[ModifierFlags["Deprecated"] = 8192] = "Deprecated";
    ModifierFlags[ModifierFlags["Override"] = 16384] = "Override";
    ModifierFlags[ModifierFlags["HasComputedFlags"] = 536870912] = "HasComputedFlags";
    ModifierFlags[ModifierFlags["AccessibilityModifier"] = 28] = "AccessibilityModifier";
    // Accessibility modifiers and 'readonly' can be attached to a parameter in a constructor to make it a property.
    ModifierFlags[ModifierFlags["ParameterPropertyModifier"] = 16476] = "ParameterPropertyModifier";
    ModifierFlags[ModifierFlags["NonPublicAccessibilityModifier"] = 24] = "NonPublicAccessibilityModifier";
    ModifierFlags[ModifierFlags["TypeScriptModifier"] = 18654] = "TypeScriptModifier";
    ModifierFlags[ModifierFlags["ExportDefault"] = 513] = "ExportDefault";
    ModifierFlags[ModifierFlags["All"] = 27647] = "All";
})(ModifierFlags || (ModifierFlags = {}));
export var JsxFlags;
(function (JsxFlags) {
    JsxFlags[JsxFlags["None"] = 0] = "None";
    /** An element from a named property of the JSX.IntrinsicElements interface */
    JsxFlags[JsxFlags["IntrinsicNamedElement"] = 1] = "IntrinsicNamedElement";
    /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
    JsxFlags[JsxFlags["IntrinsicIndexedElement"] = 2] = "IntrinsicIndexedElement";
    JsxFlags[JsxFlags["IntrinsicElement"] = 3] = "IntrinsicElement";
})(JsxFlags || (JsxFlags = {}));
/* @internal */
export var RelationComparisonResult;
(function (RelationComparisonResult) {
    RelationComparisonResult[RelationComparisonResult["Succeeded"] = 1] = "Succeeded";
    RelationComparisonResult[RelationComparisonResult["Failed"] = 2] = "Failed";
    RelationComparisonResult[RelationComparisonResult["Reported"] = 4] = "Reported";
    RelationComparisonResult[RelationComparisonResult["ReportsUnmeasurable"] = 8] = "ReportsUnmeasurable";
    RelationComparisonResult[RelationComparisonResult["ReportsUnreliable"] = 16] = "ReportsUnreliable";
    RelationComparisonResult[RelationComparisonResult["ReportsMask"] = 24] = "ReportsMask";
})(RelationComparisonResult || (RelationComparisonResult = {}));
export var GeneratedIdentifierFlags;
(function (GeneratedIdentifierFlags) {
    // Kinds
    GeneratedIdentifierFlags[GeneratedIdentifierFlags["None"] = 0] = "None";
    /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Auto"] = 1] = "Auto";
    /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Loop"] = 2] = "Loop";
    /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Unique"] = 3] = "Unique";
    /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["Node"] = 4] = "Node";
    /*@internal*/ GeneratedIdentifierFlags[GeneratedIdentifierFlags["KindMask"] = 7] = "KindMask";
    // Flags
    GeneratedIdentifierFlags[GeneratedIdentifierFlags["ReservedInNestedScopes"] = 8] = "ReservedInNestedScopes";
    GeneratedIdentifierFlags[GeneratedIdentifierFlags["Optimistic"] = 16] = "Optimistic";
    GeneratedIdentifierFlags[GeneratedIdentifierFlags["FileLevel"] = 32] = "FileLevel";
    GeneratedIdentifierFlags[GeneratedIdentifierFlags["AllowNameSubstitution"] = 64] = "AllowNameSubstitution";
})(GeneratedIdentifierFlags || (GeneratedIdentifierFlags = {}));
export var TokenFlags;
(function (TokenFlags) {
    TokenFlags[TokenFlags["None"] = 0] = "None";
    /* @internal */
    TokenFlags[TokenFlags["PrecedingLineBreak"] = 1] = "PrecedingLineBreak";
    /* @internal */
    TokenFlags[TokenFlags["PrecedingJSDocComment"] = 2] = "PrecedingJSDocComment";
    /* @internal */
    TokenFlags[TokenFlags["Unterminated"] = 4] = "Unterminated";
    /* @internal */
    TokenFlags[TokenFlags["ExtendedUnicodeEscape"] = 8] = "ExtendedUnicodeEscape";
    TokenFlags[TokenFlags["Scientific"] = 16] = "Scientific";
    TokenFlags[TokenFlags["Octal"] = 32] = "Octal";
    TokenFlags[TokenFlags["HexSpecifier"] = 64] = "HexSpecifier";
    TokenFlags[TokenFlags["BinarySpecifier"] = 128] = "BinarySpecifier";
    TokenFlags[TokenFlags["OctalSpecifier"] = 256] = "OctalSpecifier";
    /* @internal */
    TokenFlags[TokenFlags["ContainsSeparator"] = 512] = "ContainsSeparator";
    /* @internal */
    TokenFlags[TokenFlags["UnicodeEscape"] = 1024] = "UnicodeEscape";
    /* @internal */
    TokenFlags[TokenFlags["ContainsInvalidEscape"] = 2048] = "ContainsInvalidEscape";
    /* @internal */
    TokenFlags[TokenFlags["BinaryOrOctalSpecifier"] = 384] = "BinaryOrOctalSpecifier";
    /* @internal */
    TokenFlags[TokenFlags["NumericLiteralFlags"] = 1008] = "NumericLiteralFlags";
    /* @internal */
    TokenFlags[TokenFlags["TemplateLiteralLikeFlags"] = 2048] = "TemplateLiteralLikeFlags";
})(TokenFlags || (TokenFlags = {}));
// NOTE: Ensure this is up-to-date with src/debug/debug.ts
export var FlowFlags;
(function (FlowFlags) {
    FlowFlags[FlowFlags["Unreachable"] = 1] = "Unreachable";
    FlowFlags[FlowFlags["Start"] = 2] = "Start";
    FlowFlags[FlowFlags["BranchLabel"] = 4] = "BranchLabel";
    FlowFlags[FlowFlags["LoopLabel"] = 8] = "LoopLabel";
    FlowFlags[FlowFlags["Assignment"] = 16] = "Assignment";
    FlowFlags[FlowFlags["TrueCondition"] = 32] = "TrueCondition";
    FlowFlags[FlowFlags["FalseCondition"] = 64] = "FalseCondition";
    FlowFlags[FlowFlags["SwitchClause"] = 128] = "SwitchClause";
    FlowFlags[FlowFlags["ArrayMutation"] = 256] = "ArrayMutation";
    FlowFlags[FlowFlags["Call"] = 512] = "Call";
    FlowFlags[FlowFlags["ReduceLabel"] = 1024] = "ReduceLabel";
    FlowFlags[FlowFlags["Referenced"] = 2048] = "Referenced";
    FlowFlags[FlowFlags["Shared"] = 4096] = "Shared";
    FlowFlags[FlowFlags["Label"] = 12] = "Label";
    FlowFlags[FlowFlags["Condition"] = 96] = "Condition";
})(FlowFlags || (FlowFlags = {}));
/* @internal */
export var CommentDirectiveType;
(function (CommentDirectiveType) {
    CommentDirectiveType[CommentDirectiveType["ExpectError"] = 0] = "ExpectError";
    CommentDirectiveType[CommentDirectiveType["Ignore"] = 1] = "Ignore";
})(CommentDirectiveType || (CommentDirectiveType = {}));
export class OperationCanceledException {
}
/*@internal*/
export var FileIncludeKind;
(function (FileIncludeKind) {
    FileIncludeKind[FileIncludeKind["RootFile"] = 0] = "RootFile";
    FileIncludeKind[FileIncludeKind["SourceFromProjectReference"] = 1] = "SourceFromProjectReference";
    FileIncludeKind[FileIncludeKind["OutputFromProjectReference"] = 2] = "OutputFromProjectReference";
    FileIncludeKind[FileIncludeKind["Import"] = 3] = "Import";
    FileIncludeKind[FileIncludeKind["ReferenceFile"] = 4] = "ReferenceFile";
    FileIncludeKind[FileIncludeKind["TypeReferenceDirective"] = 5] = "TypeReferenceDirective";
    FileIncludeKind[FileIncludeKind["LibFile"] = 6] = "LibFile";
    FileIncludeKind[FileIncludeKind["LibReferenceDirective"] = 7] = "LibReferenceDirective";
    FileIncludeKind[FileIncludeKind["AutomaticTypeDirectiveFile"] = 8] = "AutomaticTypeDirectiveFile";
})(FileIncludeKind || (FileIncludeKind = {}));
/*@internal*/
export var FilePreprocessingDiagnosticsKind;
(function (FilePreprocessingDiagnosticsKind) {
    FilePreprocessingDiagnosticsKind[FilePreprocessingDiagnosticsKind["FilePreprocessingReferencedDiagnostic"] = 0] = "FilePreprocessingReferencedDiagnostic";
    FilePreprocessingDiagnosticsKind[FilePreprocessingDiagnosticsKind["FilePreprocessingFileExplainingDiagnostic"] = 1] = "FilePreprocessingFileExplainingDiagnostic";
})(FilePreprocessingDiagnosticsKind || (FilePreprocessingDiagnosticsKind = {}));
/* @internal */
export var StructureIsReused;
(function (StructureIsReused) {
    StructureIsReused[StructureIsReused["Not"] = 0] = "Not";
    StructureIsReused[StructureIsReused["SafeModules"] = 1] = "SafeModules";
    StructureIsReused[StructureIsReused["Completely"] = 2] = "Completely";
})(StructureIsReused || (StructureIsReused = {}));
/** Return code used by getEmitOutput function to indicate status of the function */
export var ExitStatus;
(function (ExitStatus) {
    // Compiler ran successfully.  Either this was a simple do-nothing compilation (for example,
    // when -version or -help was provided, or this was a normal compilation, no diagnostics
    // were produced, and all outputs were generated successfully.
    ExitStatus[ExitStatus["Success"] = 0] = "Success";
    // Diagnostics were produced and because of them no code was generated.
    ExitStatus[ExitStatus["DiagnosticsPresent_OutputsSkipped"] = 1] = "DiagnosticsPresent_OutputsSkipped";
    // Diagnostics were produced and outputs were generated in spite of them.
    ExitStatus[ExitStatus["DiagnosticsPresent_OutputsGenerated"] = 2] = "DiagnosticsPresent_OutputsGenerated";
    // When build skipped because passed in project is invalid
    ExitStatus[ExitStatus["InvalidProject_OutputsSkipped"] = 3] = "InvalidProject_OutputsSkipped";
    // When build is skipped because project references form cycle
    ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkipped"] = 4] = "ProjectReferenceCycle_OutputsSkipped";
    /** @deprecated Use ProjectReferenceCycle_OutputsSkipped instead. */
    ExitStatus[ExitStatus["ProjectReferenceCycle_OutputsSkupped"] = 4] = "ProjectReferenceCycle_OutputsSkupped";
})(ExitStatus || (ExitStatus = {}));
/* @internal */
export var UnionReduction;
(function (UnionReduction) {
    UnionReduction[UnionReduction["None"] = 0] = "None";
    UnionReduction[UnionReduction["Literal"] = 1] = "Literal";
    UnionReduction[UnionReduction["Subtype"] = 2] = "Subtype";
})(UnionReduction || (UnionReduction = {}));
/* @internal */
export var ContextFlags;
(function (ContextFlags) {
    ContextFlags[ContextFlags["None"] = 0] = "None";
    ContextFlags[ContextFlags["Signature"] = 1] = "Signature";
    ContextFlags[ContextFlags["NoConstraints"] = 2] = "NoConstraints";
    ContextFlags[ContextFlags["Completions"] = 4] = "Completions";
    ContextFlags[ContextFlags["SkipBindingPatterns"] = 8] = "SkipBindingPatterns";
})(ContextFlags || (ContextFlags = {}));
// NOTE: If modifying this enum, must modify `TypeFormatFlags` too!
export var NodeBuilderFlags;
(function (NodeBuilderFlags) {
    NodeBuilderFlags[NodeBuilderFlags["None"] = 0] = "None";
    // Options
    NodeBuilderFlags[NodeBuilderFlags["NoTruncation"] = 1] = "NoTruncation";
    NodeBuilderFlags[NodeBuilderFlags["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
    NodeBuilderFlags[NodeBuilderFlags["GenerateNamesForShadowedTypeParams"] = 4] = "GenerateNamesForShadowedTypeParams";
    NodeBuilderFlags[NodeBuilderFlags["UseStructuralFallback"] = 8] = "UseStructuralFallback";
    NodeBuilderFlags[NodeBuilderFlags["ForbidIndexedAccessSymbolReferences"] = 16] = "ForbidIndexedAccessSymbolReferences";
    NodeBuilderFlags[NodeBuilderFlags["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
    NodeBuilderFlags[NodeBuilderFlags["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
    NodeBuilderFlags[NodeBuilderFlags["UseOnlyExternalAliasing"] = 128] = "UseOnlyExternalAliasing";
    NodeBuilderFlags[NodeBuilderFlags["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
    NodeBuilderFlags[NodeBuilderFlags["WriteTypeParametersInQualifiedName"] = 512] = "WriteTypeParametersInQualifiedName";
    NodeBuilderFlags[NodeBuilderFlags["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
    NodeBuilderFlags[NodeBuilderFlags["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
    NodeBuilderFlags[NodeBuilderFlags["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
    NodeBuilderFlags[NodeBuilderFlags["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
    NodeBuilderFlags[NodeBuilderFlags["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
    NodeBuilderFlags[NodeBuilderFlags["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
    NodeBuilderFlags[NodeBuilderFlags["NoTypeReduction"] = 536870912] = "NoTypeReduction";
    NodeBuilderFlags[NodeBuilderFlags["NoUndefinedOptionalParameterType"] = 1073741824] = "NoUndefinedOptionalParameterType";
    // Error handling
    NodeBuilderFlags[NodeBuilderFlags["AllowThisInObjectLiteral"] = 32768] = "AllowThisInObjectLiteral";
    NodeBuilderFlags[NodeBuilderFlags["AllowQualifiedNameInPlaceOfIdentifier"] = 65536] = "AllowQualifiedNameInPlaceOfIdentifier";
    /** @deprecated AllowQualifedNameInPlaceOfIdentifier. Use AllowQualifiedNameInPlaceOfIdentifier instead. */
    NodeBuilderFlags[NodeBuilderFlags["AllowQualifedNameInPlaceOfIdentifier"] = 65536] = "AllowQualifedNameInPlaceOfIdentifier";
    NodeBuilderFlags[NodeBuilderFlags["AllowAnonymousIdentifier"] = 131072] = "AllowAnonymousIdentifier";
    NodeBuilderFlags[NodeBuilderFlags["AllowEmptyUnionOrIntersection"] = 262144] = "AllowEmptyUnionOrIntersection";
    NodeBuilderFlags[NodeBuilderFlags["AllowEmptyTuple"] = 524288] = "AllowEmptyTuple";
    NodeBuilderFlags[NodeBuilderFlags["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
    NodeBuilderFlags[NodeBuilderFlags["AllowEmptyIndexInfoType"] = 2097152] = "AllowEmptyIndexInfoType";
    // Errors (cont.)
    NodeBuilderFlags[NodeBuilderFlags["AllowNodeModulesRelativePaths"] = 67108864] = "AllowNodeModulesRelativePaths";
    /* @internal */ NodeBuilderFlags[NodeBuilderFlags["DoNotIncludeSymbolChain"] = 134217728] = "DoNotIncludeSymbolChain";
    NodeBuilderFlags[NodeBuilderFlags["IgnoreErrors"] = 70221824] = "IgnoreErrors";
    // State
    NodeBuilderFlags[NodeBuilderFlags["InObjectTypeLiteral"] = 4194304] = "InObjectTypeLiteral";
    NodeBuilderFlags[NodeBuilderFlags["InTypeAlias"] = 8388608] = "InTypeAlias";
    NodeBuilderFlags[NodeBuilderFlags["InInitialEntityName"] = 16777216] = "InInitialEntityName";
})(NodeBuilderFlags || (NodeBuilderFlags = {}));
// Ensure the shared flags between this and `NodeBuilderFlags` stay in alignment
export var TypeFormatFlags;
(function (TypeFormatFlags) {
    TypeFormatFlags[TypeFormatFlags["None"] = 0] = "None";
    TypeFormatFlags[TypeFormatFlags["NoTruncation"] = 1] = "NoTruncation";
    TypeFormatFlags[TypeFormatFlags["WriteArrayAsGenericType"] = 2] = "WriteArrayAsGenericType";
    // hole because there's a hole in node builder flags
    TypeFormatFlags[TypeFormatFlags["UseStructuralFallback"] = 8] = "UseStructuralFallback";
    // hole because there's a hole in node builder flags
    TypeFormatFlags[TypeFormatFlags["WriteTypeArgumentsOfSignature"] = 32] = "WriteTypeArgumentsOfSignature";
    TypeFormatFlags[TypeFormatFlags["UseFullyQualifiedType"] = 64] = "UseFullyQualifiedType";
    // hole because `UseOnlyExternalAliasing` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` instead
    TypeFormatFlags[TypeFormatFlags["SuppressAnyReturnType"] = 256] = "SuppressAnyReturnType";
    // hole because `WriteTypeParametersInQualifiedName` is here in node builder flags, but functions which take old flags use `SymbolFormatFlags` for this instead
    TypeFormatFlags[TypeFormatFlags["MultilineObjectLiterals"] = 1024] = "MultilineObjectLiterals";
    TypeFormatFlags[TypeFormatFlags["WriteClassExpressionAsTypeLiteral"] = 2048] = "WriteClassExpressionAsTypeLiteral";
    TypeFormatFlags[TypeFormatFlags["UseTypeOfFunction"] = 4096] = "UseTypeOfFunction";
    TypeFormatFlags[TypeFormatFlags["OmitParameterModifiers"] = 8192] = "OmitParameterModifiers";
    TypeFormatFlags[TypeFormatFlags["UseAliasDefinedOutsideCurrentScope"] = 16384] = "UseAliasDefinedOutsideCurrentScope";
    TypeFormatFlags[TypeFormatFlags["UseSingleQuotesForStringLiteralType"] = 268435456] = "UseSingleQuotesForStringLiteralType";
    TypeFormatFlags[TypeFormatFlags["NoTypeReduction"] = 536870912] = "NoTypeReduction";
    // Error Handling
    TypeFormatFlags[TypeFormatFlags["AllowUniqueESSymbolType"] = 1048576] = "AllowUniqueESSymbolType";
    // TypeFormatFlags exclusive
    TypeFormatFlags[TypeFormatFlags["AddUndefined"] = 131072] = "AddUndefined";
    TypeFormatFlags[TypeFormatFlags["WriteArrowStyleSignature"] = 262144] = "WriteArrowStyleSignature";
    // State
    TypeFormatFlags[TypeFormatFlags["InArrayType"] = 524288] = "InArrayType";
    TypeFormatFlags[TypeFormatFlags["InElementType"] = 2097152] = "InElementType";
    TypeFormatFlags[TypeFormatFlags["InFirstTypeArgument"] = 4194304] = "InFirstTypeArgument";
    TypeFormatFlags[TypeFormatFlags["InTypeAlias"] = 8388608] = "InTypeAlias";
    /** @deprecated */ TypeFormatFlags[TypeFormatFlags["WriteOwnNameForAnyLike"] = 0] = "WriteOwnNameForAnyLike";
    TypeFormatFlags[TypeFormatFlags["NodeBuilderFlagsMask"] = 814775659] = "NodeBuilderFlagsMask";
})(TypeFormatFlags || (TypeFormatFlags = {}));
export var SymbolFormatFlags;
(function (SymbolFormatFlags) {
    SymbolFormatFlags[SymbolFormatFlags["None"] = 0] = "None";
    // Write symbols's type argument if it is instantiated symbol
    // eg. class C<T> { p: T }   <-- Show p as C<T>.p here
    //     var a: C<number>;
    //     var p = a.p; <--- Here p is property of C<number> so show it as C<number>.p instead of just C.p
    SymbolFormatFlags[SymbolFormatFlags["WriteTypeParametersOrArguments"] = 1] = "WriteTypeParametersOrArguments";
    // Use only external alias information to get the symbol name in the given context
    // eg.  module m { export class c { } } import x = m.c;
    // When this flag is specified m.c will be used to refer to the class instead of alias symbol x
    SymbolFormatFlags[SymbolFormatFlags["UseOnlyExternalAliasing"] = 2] = "UseOnlyExternalAliasing";
    // Build symbol name using any nodes needed, instead of just components of an entity name
    SymbolFormatFlags[SymbolFormatFlags["AllowAnyNodeKind"] = 4] = "AllowAnyNodeKind";
    // Prefer aliases which are not directly visible
    SymbolFormatFlags[SymbolFormatFlags["UseAliasDefinedOutsideCurrentScope"] = 8] = "UseAliasDefinedOutsideCurrentScope";
    // Skip building an accessible symbol chain
    /* @internal */ SymbolFormatFlags[SymbolFormatFlags["DoNotIncludeSymbolChain"] = 16] = "DoNotIncludeSymbolChain";
})(SymbolFormatFlags || (SymbolFormatFlags = {}));
/* @internal */
export var SymbolAccessibility;
(function (SymbolAccessibility) {
    SymbolAccessibility[SymbolAccessibility["Accessible"] = 0] = "Accessible";
    SymbolAccessibility[SymbolAccessibility["NotAccessible"] = 1] = "NotAccessible";
    SymbolAccessibility[SymbolAccessibility["CannotBeNamed"] = 2] = "CannotBeNamed";
})(SymbolAccessibility || (SymbolAccessibility = {}));
/* @internal */
export var SyntheticSymbolKind;
(function (SyntheticSymbolKind) {
    SyntheticSymbolKind[SyntheticSymbolKind["UnionOrIntersection"] = 0] = "UnionOrIntersection";
    SyntheticSymbolKind[SyntheticSymbolKind["Spread"] = 1] = "Spread";
})(SyntheticSymbolKind || (SyntheticSymbolKind = {}));
export var TypePredicateKind;
(function (TypePredicateKind) {
    TypePredicateKind[TypePredicateKind["This"] = 0] = "This";
    TypePredicateKind[TypePredicateKind["Identifier"] = 1] = "Identifier";
    TypePredicateKind[TypePredicateKind["AssertsThis"] = 2] = "AssertsThis";
    TypePredicateKind[TypePredicateKind["AssertsIdentifier"] = 3] = "AssertsIdentifier";
})(TypePredicateKind || (TypePredicateKind = {}));
/** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
/* @internal */
export var TypeReferenceSerializationKind;
(function (TypeReferenceSerializationKind) {
    // The TypeReferenceNode could not be resolved.
    // The type name should be emitted using a safe fallback.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["Unknown"] = 0] = "Unknown";
    // The TypeReferenceNode resolves to a type with a constructor
    // function that can be reached at runtime (e.g. a `class`
    // declaration or a `var` declaration for the static side
    // of a type, such as the global `Promise` type in lib.d.ts).
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithConstructSignatureAndValue"] = 1] = "TypeWithConstructSignatureAndValue";
    // The TypeReferenceNode resolves to a Void-like, Nullable, or Never type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["VoidNullableOrNeverType"] = 2] = "VoidNullableOrNeverType";
    // The TypeReferenceNode resolves to a Number-like type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["NumberLikeType"] = 3] = "NumberLikeType";
    // The TypeReferenceNode resolves to a BigInt-like type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["BigIntLikeType"] = 4] = "BigIntLikeType";
    // The TypeReferenceNode resolves to a String-like type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["StringLikeType"] = 5] = "StringLikeType";
    // The TypeReferenceNode resolves to a Boolean-like type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["BooleanType"] = 6] = "BooleanType";
    // The TypeReferenceNode resolves to an Array-like type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["ArrayLikeType"] = 7] = "ArrayLikeType";
    // The TypeReferenceNode resolves to the ESSymbol type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["ESSymbolType"] = 8] = "ESSymbolType";
    // The TypeReferenceNode resolved to the global Promise constructor symbol.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["Promise"] = 9] = "Promise";
    // The TypeReferenceNode resolves to a Function type or a type with call signatures.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["TypeWithCallSignature"] = 10] = "TypeWithCallSignature";
    // The TypeReferenceNode resolves to any other type.
    TypeReferenceSerializationKind[TypeReferenceSerializationKind["ObjectType"] = 11] = "ObjectType";
})(TypeReferenceSerializationKind || (TypeReferenceSerializationKind = {}));
export var SymbolFlags;
(function (SymbolFlags) {
    SymbolFlags[SymbolFlags["None"] = 0] = "None";
    SymbolFlags[SymbolFlags["FunctionScopedVariable"] = 1] = "FunctionScopedVariable";
    SymbolFlags[SymbolFlags["BlockScopedVariable"] = 2] = "BlockScopedVariable";
    SymbolFlags[SymbolFlags["Property"] = 4] = "Property";
    SymbolFlags[SymbolFlags["EnumMember"] = 8] = "EnumMember";
    SymbolFlags[SymbolFlags["Function"] = 16] = "Function";
    SymbolFlags[SymbolFlags["Class"] = 32] = "Class";
    SymbolFlags[SymbolFlags["Interface"] = 64] = "Interface";
    SymbolFlags[SymbolFlags["ConstEnum"] = 128] = "ConstEnum";
    SymbolFlags[SymbolFlags["RegularEnum"] = 256] = "RegularEnum";
    SymbolFlags[SymbolFlags["ValueModule"] = 512] = "ValueModule";
    SymbolFlags[SymbolFlags["NamespaceModule"] = 1024] = "NamespaceModule";
    SymbolFlags[SymbolFlags["TypeLiteral"] = 2048] = "TypeLiteral";
    SymbolFlags[SymbolFlags["ObjectLiteral"] = 4096] = "ObjectLiteral";
    SymbolFlags[SymbolFlags["Method"] = 8192] = "Method";
    SymbolFlags[SymbolFlags["Constructor"] = 16384] = "Constructor";
    SymbolFlags[SymbolFlags["GetAccessor"] = 32768] = "GetAccessor";
    SymbolFlags[SymbolFlags["SetAccessor"] = 65536] = "SetAccessor";
    SymbolFlags[SymbolFlags["Signature"] = 131072] = "Signature";
    SymbolFlags[SymbolFlags["TypeParameter"] = 262144] = "TypeParameter";
    SymbolFlags[SymbolFlags["TypeAlias"] = 524288] = "TypeAlias";
    SymbolFlags[SymbolFlags["ExportValue"] = 1048576] = "ExportValue";
    SymbolFlags[SymbolFlags["Alias"] = 2097152] = "Alias";
    SymbolFlags[SymbolFlags["Prototype"] = 4194304] = "Prototype";
    SymbolFlags[SymbolFlags["ExportStar"] = 8388608] = "ExportStar";
    SymbolFlags[SymbolFlags["Optional"] = 16777216] = "Optional";
    SymbolFlags[SymbolFlags["Transient"] = 33554432] = "Transient";
    SymbolFlags[SymbolFlags["Assignment"] = 67108864] = "Assignment";
    SymbolFlags[SymbolFlags["ModuleExports"] = 134217728] = "ModuleExports";
    /* @internal */
    SymbolFlags[SymbolFlags["All"] = 67108863] = "All";
    SymbolFlags[SymbolFlags["Enum"] = 384] = "Enum";
    SymbolFlags[SymbolFlags["Variable"] = 3] = "Variable";
    SymbolFlags[SymbolFlags["Value"] = 111551] = "Value";
    SymbolFlags[SymbolFlags["Type"] = 788968] = "Type";
    SymbolFlags[SymbolFlags["Namespace"] = 1920] = "Namespace";
    SymbolFlags[SymbolFlags["Module"] = 1536] = "Module";
    SymbolFlags[SymbolFlags["Accessor"] = 98304] = "Accessor";
    // Variables can be redeclared, but can not redeclare a block-scoped declaration with the
    // same name, or any other value that is not a variable, e.g. ValueModule or Class
    SymbolFlags[SymbolFlags["FunctionScopedVariableExcludes"] = 111550] = "FunctionScopedVariableExcludes";
    // Block-scoped declarations are not allowed to be re-declared
    // they can not merge with anything in the value space
    SymbolFlags[SymbolFlags["BlockScopedVariableExcludes"] = 111551] = "BlockScopedVariableExcludes";
    SymbolFlags[SymbolFlags["ParameterExcludes"] = 111551] = "ParameterExcludes";
    SymbolFlags[SymbolFlags["PropertyExcludes"] = 0] = "PropertyExcludes";
    SymbolFlags[SymbolFlags["EnumMemberExcludes"] = 900095] = "EnumMemberExcludes";
    SymbolFlags[SymbolFlags["FunctionExcludes"] = 110991] = "FunctionExcludes";
    SymbolFlags[SymbolFlags["ClassExcludes"] = 899503] = "ClassExcludes";
    SymbolFlags[SymbolFlags["InterfaceExcludes"] = 788872] = "InterfaceExcludes";
    SymbolFlags[SymbolFlags["RegularEnumExcludes"] = 899327] = "RegularEnumExcludes";
    SymbolFlags[SymbolFlags["ConstEnumExcludes"] = 899967] = "ConstEnumExcludes";
    SymbolFlags[SymbolFlags["ValueModuleExcludes"] = 110735] = "ValueModuleExcludes";
    SymbolFlags[SymbolFlags["NamespaceModuleExcludes"] = 0] = "NamespaceModuleExcludes";
    SymbolFlags[SymbolFlags["MethodExcludes"] = 103359] = "MethodExcludes";
    SymbolFlags[SymbolFlags["GetAccessorExcludes"] = 46015] = "GetAccessorExcludes";
    SymbolFlags[SymbolFlags["SetAccessorExcludes"] = 78783] = "SetAccessorExcludes";
    SymbolFlags[SymbolFlags["TypeParameterExcludes"] = 526824] = "TypeParameterExcludes";
    SymbolFlags[SymbolFlags["TypeAliasExcludes"] = 788968] = "TypeAliasExcludes";
    SymbolFlags[SymbolFlags["AliasExcludes"] = 2097152] = "AliasExcludes";
    SymbolFlags[SymbolFlags["ModuleMember"] = 2623475] = "ModuleMember";
    SymbolFlags[SymbolFlags["ExportHasLocal"] = 944] = "ExportHasLocal";
    SymbolFlags[SymbolFlags["BlockScoped"] = 418] = "BlockScoped";
    SymbolFlags[SymbolFlags["PropertyOrAccessor"] = 98308] = "PropertyOrAccessor";
    SymbolFlags[SymbolFlags["ClassMember"] = 106500] = "ClassMember";
    /* @internal */
    SymbolFlags[SymbolFlags["ExportSupportsDefaultModifier"] = 112] = "ExportSupportsDefaultModifier";
    /* @internal */
    SymbolFlags[SymbolFlags["ExportDoesNotSupportDefaultModifier"] = -113] = "ExportDoesNotSupportDefaultModifier";
    /* @internal */
    // The set of things we consider semantically classifiable.  Used to speed up the LS during
    // classification.
    SymbolFlags[SymbolFlags["Classifiable"] = 2885600] = "Classifiable";
    /* @internal */
    SymbolFlags[SymbolFlags["LateBindingContainer"] = 6256] = "LateBindingContainer";
})(SymbolFlags || (SymbolFlags = {}));
/* @internal */
export var EnumKind;
(function (EnumKind) {
    EnumKind[EnumKind["Numeric"] = 0] = "Numeric";
    EnumKind[EnumKind["Literal"] = 1] = "Literal"; // Literal enum (each member has a TypeFlags.EnumLiteral type)
})(EnumKind || (EnumKind = {}));
/* @internal */
export var CheckFlags;
(function (CheckFlags) {
    CheckFlags[CheckFlags["Instantiated"] = 1] = "Instantiated";
    CheckFlags[CheckFlags["SyntheticProperty"] = 2] = "SyntheticProperty";
    CheckFlags[CheckFlags["SyntheticMethod"] = 4] = "SyntheticMethod";
    CheckFlags[CheckFlags["Readonly"] = 8] = "Readonly";
    CheckFlags[CheckFlags["ReadPartial"] = 16] = "ReadPartial";
    CheckFlags[CheckFlags["WritePartial"] = 32] = "WritePartial";
    CheckFlags[CheckFlags["HasNonUniformType"] = 64] = "HasNonUniformType";
    CheckFlags[CheckFlags["HasLiteralType"] = 128] = "HasLiteralType";
    CheckFlags[CheckFlags["ContainsPublic"] = 256] = "ContainsPublic";
    CheckFlags[CheckFlags["ContainsProtected"] = 512] = "ContainsProtected";
    CheckFlags[CheckFlags["ContainsPrivate"] = 1024] = "ContainsPrivate";
    CheckFlags[CheckFlags["ContainsStatic"] = 2048] = "ContainsStatic";
    CheckFlags[CheckFlags["Late"] = 4096] = "Late";
    CheckFlags[CheckFlags["ReverseMapped"] = 8192] = "ReverseMapped";
    CheckFlags[CheckFlags["OptionalParameter"] = 16384] = "OptionalParameter";
    CheckFlags[CheckFlags["RestParameter"] = 32768] = "RestParameter";
    CheckFlags[CheckFlags["DeferredType"] = 65536] = "DeferredType";
    CheckFlags[CheckFlags["HasNeverType"] = 131072] = "HasNeverType";
    CheckFlags[CheckFlags["Mapped"] = 262144] = "Mapped";
    CheckFlags[CheckFlags["StripOptional"] = 524288] = "StripOptional";
    CheckFlags[CheckFlags["Synthetic"] = 6] = "Synthetic";
    CheckFlags[CheckFlags["Discriminant"] = 192] = "Discriminant";
    CheckFlags[CheckFlags["Partial"] = 48] = "Partial";
})(CheckFlags || (CheckFlags = {}));
export var InternalSymbolName;
(function (InternalSymbolName) {
    InternalSymbolName["Call"] = "__call";
    InternalSymbolName["Constructor"] = "__constructor";
    InternalSymbolName["New"] = "__new";
    InternalSymbolName["Index"] = "__index";
    InternalSymbolName["ExportStar"] = "__export";
    InternalSymbolName["Global"] = "__global";
    InternalSymbolName["Missing"] = "__missing";
    InternalSymbolName["Type"] = "__type";
    InternalSymbolName["Object"] = "__object";
    InternalSymbolName["JSXAttributes"] = "__jsxAttributes";
    InternalSymbolName["Class"] = "__class";
    InternalSymbolName["Function"] = "__function";
    InternalSymbolName["Computed"] = "__computed";
    InternalSymbolName["Resolving"] = "__resolving__";
    InternalSymbolName["ExportEquals"] = "export=";
    InternalSymbolName["Default"] = "default";
    InternalSymbolName["This"] = "this";
})(InternalSymbolName || (InternalSymbolName = {}));
/* @internal */
export var NodeCheckFlags;
(function (NodeCheckFlags) {
    NodeCheckFlags[NodeCheckFlags["TypeChecked"] = 1] = "TypeChecked";
    NodeCheckFlags[NodeCheckFlags["LexicalThis"] = 2] = "LexicalThis";
    NodeCheckFlags[NodeCheckFlags["CaptureThis"] = 4] = "CaptureThis";
    NodeCheckFlags[NodeCheckFlags["CaptureNewTarget"] = 8] = "CaptureNewTarget";
    NodeCheckFlags[NodeCheckFlags["SuperInstance"] = 256] = "SuperInstance";
    NodeCheckFlags[NodeCheckFlags["SuperStatic"] = 512] = "SuperStatic";
    NodeCheckFlags[NodeCheckFlags["ContextChecked"] = 1024] = "ContextChecked";
    NodeCheckFlags[NodeCheckFlags["AsyncMethodWithSuper"] = 2048] = "AsyncMethodWithSuper";
    NodeCheckFlags[NodeCheckFlags["AsyncMethodWithSuperBinding"] = 4096] = "AsyncMethodWithSuperBinding";
    NodeCheckFlags[NodeCheckFlags["CaptureArguments"] = 8192] = "CaptureArguments";
    NodeCheckFlags[NodeCheckFlags["EnumValuesComputed"] = 16384] = "EnumValuesComputed";
    NodeCheckFlags[NodeCheckFlags["LexicalModuleMergesWithClass"] = 32768] = "LexicalModuleMergesWithClass";
    NodeCheckFlags[NodeCheckFlags["LoopWithCapturedBlockScopedBinding"] = 65536] = "LoopWithCapturedBlockScopedBinding";
    NodeCheckFlags[NodeCheckFlags["ContainsCapturedBlockScopeBinding"] = 131072] = "ContainsCapturedBlockScopeBinding";
    NodeCheckFlags[NodeCheckFlags["CapturedBlockScopedBinding"] = 262144] = "CapturedBlockScopedBinding";
    NodeCheckFlags[NodeCheckFlags["BlockScopedBindingInLoop"] = 524288] = "BlockScopedBindingInLoop";
    NodeCheckFlags[NodeCheckFlags["ClassWithBodyScopedClassBinding"] = 1048576] = "ClassWithBodyScopedClassBinding";
    NodeCheckFlags[NodeCheckFlags["BodyScopedClassBinding"] = 2097152] = "BodyScopedClassBinding";
    NodeCheckFlags[NodeCheckFlags["NeedsLoopOutParameter"] = 4194304] = "NeedsLoopOutParameter";
    NodeCheckFlags[NodeCheckFlags["AssignmentsMarked"] = 8388608] = "AssignmentsMarked";
    NodeCheckFlags[NodeCheckFlags["ClassWithConstructorReference"] = 16777216] = "ClassWithConstructorReference";
    NodeCheckFlags[NodeCheckFlags["ConstructorReferenceInClass"] = 33554432] = "ConstructorReferenceInClass";
    NodeCheckFlags[NodeCheckFlags["ContainsClassWithPrivateIdentifiers"] = 67108864] = "ContainsClassWithPrivateIdentifiers";
})(NodeCheckFlags || (NodeCheckFlags = {}));
export var TypeFlags;
(function (TypeFlags) {
    TypeFlags[TypeFlags["Any"] = 1] = "Any";
    TypeFlags[TypeFlags["Unknown"] = 2] = "Unknown";
    TypeFlags[TypeFlags["String"] = 4] = "String";
    TypeFlags[TypeFlags["Number"] = 8] = "Number";
    TypeFlags[TypeFlags["Boolean"] = 16] = "Boolean";
    TypeFlags[TypeFlags["Enum"] = 32] = "Enum";
    TypeFlags[TypeFlags["BigInt"] = 64] = "BigInt";
    TypeFlags[TypeFlags["StringLiteral"] = 128] = "StringLiteral";
    TypeFlags[TypeFlags["NumberLiteral"] = 256] = "NumberLiteral";
    TypeFlags[TypeFlags["BooleanLiteral"] = 512] = "BooleanLiteral";
    TypeFlags[TypeFlags["EnumLiteral"] = 1024] = "EnumLiteral";
    TypeFlags[TypeFlags["BigIntLiteral"] = 2048] = "BigIntLiteral";
    TypeFlags[TypeFlags["ESSymbol"] = 4096] = "ESSymbol";
    TypeFlags[TypeFlags["UniqueESSymbol"] = 8192] = "UniqueESSymbol";
    TypeFlags[TypeFlags["Void"] = 16384] = "Void";
    TypeFlags[TypeFlags["Undefined"] = 32768] = "Undefined";
    TypeFlags[TypeFlags["Null"] = 65536] = "Null";
    TypeFlags[TypeFlags["Never"] = 131072] = "Never";
    TypeFlags[TypeFlags["TypeParameter"] = 262144] = "TypeParameter";
    TypeFlags[TypeFlags["Object"] = 524288] = "Object";
    TypeFlags[TypeFlags["Union"] = 1048576] = "Union";
    TypeFlags[TypeFlags["Intersection"] = 2097152] = "Intersection";
    TypeFlags[TypeFlags["Index"] = 4194304] = "Index";
    TypeFlags[TypeFlags["IndexedAccess"] = 8388608] = "IndexedAccess";
    TypeFlags[TypeFlags["Conditional"] = 16777216] = "Conditional";
    TypeFlags[TypeFlags["Substitution"] = 33554432] = "Substitution";
    TypeFlags[TypeFlags["NonPrimitive"] = 67108864] = "NonPrimitive";
    TypeFlags[TypeFlags["TemplateLiteral"] = 134217728] = "TemplateLiteral";
    TypeFlags[TypeFlags["StringMapping"] = 268435456] = "StringMapping";
    /* @internal */
    TypeFlags[TypeFlags["AnyOrUnknown"] = 3] = "AnyOrUnknown";
    /* @internal */
    TypeFlags[TypeFlags["Nullable"] = 98304] = "Nullable";
    TypeFlags[TypeFlags["Literal"] = 2944] = "Literal";
    TypeFlags[TypeFlags["Unit"] = 109440] = "Unit";
    TypeFlags[TypeFlags["StringOrNumberLiteral"] = 384] = "StringOrNumberLiteral";
    /* @internal */
    TypeFlags[TypeFlags["StringOrNumberLiteralOrUnique"] = 8576] = "StringOrNumberLiteralOrUnique";
    /* @internal */
    TypeFlags[TypeFlags["DefinitelyFalsy"] = 117632] = "DefinitelyFalsy";
    TypeFlags[TypeFlags["PossiblyFalsy"] = 117724] = "PossiblyFalsy";
    /* @internal */
    TypeFlags[TypeFlags["Intrinsic"] = 67359327] = "Intrinsic";
    /* @internal */
    TypeFlags[TypeFlags["Primitive"] = 131068] = "Primitive";
    TypeFlags[TypeFlags["StringLike"] = 402653316] = "StringLike";
    TypeFlags[TypeFlags["NumberLike"] = 296] = "NumberLike";
    TypeFlags[TypeFlags["BigIntLike"] = 2112] = "BigIntLike";
    TypeFlags[TypeFlags["BooleanLike"] = 528] = "BooleanLike";
    TypeFlags[TypeFlags["EnumLike"] = 1056] = "EnumLike";
    TypeFlags[TypeFlags["ESSymbolLike"] = 12288] = "ESSymbolLike";
    TypeFlags[TypeFlags["VoidLike"] = 49152] = "VoidLike";
    /* @internal */
    TypeFlags[TypeFlags["DisjointDomains"] = 469892092] = "DisjointDomains";
    TypeFlags[TypeFlags["UnionOrIntersection"] = 3145728] = "UnionOrIntersection";
    TypeFlags[TypeFlags["StructuredType"] = 3670016] = "StructuredType";
    TypeFlags[TypeFlags["TypeVariable"] = 8650752] = "TypeVariable";
    TypeFlags[TypeFlags["InstantiableNonPrimitive"] = 58982400] = "InstantiableNonPrimitive";
    TypeFlags[TypeFlags["InstantiablePrimitive"] = 406847488] = "InstantiablePrimitive";
    TypeFlags[TypeFlags["Instantiable"] = 465829888] = "Instantiable";
    TypeFlags[TypeFlags["StructuredOrInstantiable"] = 469499904] = "StructuredOrInstantiable";
    /* @internal */
    TypeFlags[TypeFlags["ObjectFlagsType"] = 3899393] = "ObjectFlagsType";
    /* @internal */
    TypeFlags[TypeFlags["Simplifiable"] = 25165824] = "Simplifiable";
    /* @internal */
    TypeFlags[TypeFlags["Substructure"] = 469237760] = "Substructure";
    // 'Narrowable' types are types where narrowing actually narrows.
    // This *should* be every type other than null, undefined, void, and never
    TypeFlags[TypeFlags["Narrowable"] = 536624127] = "Narrowable";
    /* @internal */
    TypeFlags[TypeFlags["NotPrimitiveUnion"] = 468598819] = "NotPrimitiveUnion";
    // The following flags are aggregated during union and intersection type construction
    /* @internal */
    TypeFlags[TypeFlags["IncludesMask"] = 205258751] = "IncludesMask";
    // The following flags are used for different purposes during union and intersection type construction
    /* @internal */
    TypeFlags[TypeFlags["IncludesStructuredOrInstantiable"] = 262144] = "IncludesStructuredOrInstantiable";
    /* @internal */
    TypeFlags[TypeFlags["IncludesNonWideningType"] = 4194304] = "IncludesNonWideningType";
    /* @internal */
    TypeFlags[TypeFlags["IncludesWildcard"] = 8388608] = "IncludesWildcard";
    /* @internal */
    TypeFlags[TypeFlags["IncludesEmptyObject"] = 16777216] = "IncludesEmptyObject";
})(TypeFlags || (TypeFlags = {}));
// Types included in TypeFlags.ObjectFlagsType have an objectFlags property. Some ObjectFlags
// are specific to certain types and reuse the same bit position. Those ObjectFlags require a check
// for a certain TypeFlags value to determine their meaning.
export var ObjectFlags;
(function (ObjectFlags) {
    ObjectFlags[ObjectFlags["Class"] = 1] = "Class";
    ObjectFlags[ObjectFlags["Interface"] = 2] = "Interface";
    ObjectFlags[ObjectFlags["Reference"] = 4] = "Reference";
    ObjectFlags[ObjectFlags["Tuple"] = 8] = "Tuple";
    ObjectFlags[ObjectFlags["Anonymous"] = 16] = "Anonymous";
    ObjectFlags[ObjectFlags["Mapped"] = 32] = "Mapped";
    ObjectFlags[ObjectFlags["Instantiated"] = 64] = "Instantiated";
    ObjectFlags[ObjectFlags["ObjectLiteral"] = 128] = "ObjectLiteral";
    ObjectFlags[ObjectFlags["EvolvingArray"] = 256] = "EvolvingArray";
    ObjectFlags[ObjectFlags["ObjectLiteralPatternWithComputedProperties"] = 512] = "ObjectLiteralPatternWithComputedProperties";
    ObjectFlags[ObjectFlags["ReverseMapped"] = 1024] = "ReverseMapped";
    ObjectFlags[ObjectFlags["JsxAttributes"] = 2048] = "JsxAttributes";
    ObjectFlags[ObjectFlags["MarkerType"] = 4096] = "MarkerType";
    ObjectFlags[ObjectFlags["JSLiteral"] = 8192] = "JSLiteral";
    ObjectFlags[ObjectFlags["FreshLiteral"] = 16384] = "FreshLiteral";
    ObjectFlags[ObjectFlags["ArrayLiteral"] = 32768] = "ArrayLiteral";
    /* @internal */
    ObjectFlags[ObjectFlags["PrimitiveUnion"] = 65536] = "PrimitiveUnion";
    /* @internal */
    ObjectFlags[ObjectFlags["ContainsWideningType"] = 131072] = "ContainsWideningType";
    /* @internal */
    ObjectFlags[ObjectFlags["ContainsObjectOrArrayLiteral"] = 262144] = "ContainsObjectOrArrayLiteral";
    /* @internal */
    ObjectFlags[ObjectFlags["NonInferrableType"] = 524288] = "NonInferrableType";
    /* @internal */
    ObjectFlags[ObjectFlags["CouldContainTypeVariablesComputed"] = 1048576] = "CouldContainTypeVariablesComputed";
    /* @internal */
    ObjectFlags[ObjectFlags["CouldContainTypeVariables"] = 2097152] = "CouldContainTypeVariables";
    ObjectFlags[ObjectFlags["ClassOrInterface"] = 3] = "ClassOrInterface";
    /* @internal */
    ObjectFlags[ObjectFlags["RequiresWidening"] = 393216] = "RequiresWidening";
    /* @internal */
    ObjectFlags[ObjectFlags["PropagatingFlags"] = 917504] = "PropagatingFlags";
    // Object flags that uniquely identify the kind of ObjectType
    /* @internal */
    ObjectFlags[ObjectFlags["ObjectTypeKindMask"] = 1343] = "ObjectTypeKindMask";
    // Flags that require TypeFlags.Object
    ObjectFlags[ObjectFlags["ContainsSpread"] = 4194304] = "ContainsSpread";
    ObjectFlags[ObjectFlags["ObjectRestType"] = 8388608] = "ObjectRestType";
    /* @internal */
    ObjectFlags[ObjectFlags["IsClassInstanceClone"] = 16777216] = "IsClassInstanceClone";
    // Flags that require TypeFlags.Object and ObjectFlags.Reference
    /* @internal */
    ObjectFlags[ObjectFlags["IdenticalBaseTypeCalculated"] = 33554432] = "IdenticalBaseTypeCalculated";
    /* @internal */
    ObjectFlags[ObjectFlags["IdenticalBaseTypeExists"] = 67108864] = "IdenticalBaseTypeExists";
    // Flags that require TypeFlags.UnionOrIntersection or TypeFlags.Substitution
    /* @internal */
    ObjectFlags[ObjectFlags["IsGenericObjectTypeComputed"] = 4194304] = "IsGenericObjectTypeComputed";
    /* @internal */
    ObjectFlags[ObjectFlags["IsGenericObjectType"] = 8388608] = "IsGenericObjectType";
    /* @internal */
    ObjectFlags[ObjectFlags["IsGenericIndexTypeComputed"] = 16777216] = "IsGenericIndexTypeComputed";
    /* @internal */
    ObjectFlags[ObjectFlags["IsGenericIndexType"] = 33554432] = "IsGenericIndexType";
    // Flags that require TypeFlags.Union
    /* @internal */
    ObjectFlags[ObjectFlags["ContainsIntersections"] = 67108864] = "ContainsIntersections";
    // Flags that require TypeFlags.Intersection
    /* @internal */
    ObjectFlags[ObjectFlags["IsNeverIntersectionComputed"] = 67108864] = "IsNeverIntersectionComputed";
    /* @internal */
    ObjectFlags[ObjectFlags["IsNeverIntersection"] = 134217728] = "IsNeverIntersection";
})(ObjectFlags || (ObjectFlags = {}));
/* @internal */
export var VarianceFlags;
(function (VarianceFlags) {
    VarianceFlags[VarianceFlags["Invariant"] = 0] = "Invariant";
    VarianceFlags[VarianceFlags["Covariant"] = 1] = "Covariant";
    VarianceFlags[VarianceFlags["Contravariant"] = 2] = "Contravariant";
    VarianceFlags[VarianceFlags["Bivariant"] = 3] = "Bivariant";
    VarianceFlags[VarianceFlags["Independent"] = 4] = "Independent";
    VarianceFlags[VarianceFlags["VarianceMask"] = 7] = "VarianceMask";
    VarianceFlags[VarianceFlags["Unmeasurable"] = 8] = "Unmeasurable";
    VarianceFlags[VarianceFlags["Unreliable"] = 16] = "Unreliable";
    VarianceFlags[VarianceFlags["AllowsStructuralFallback"] = 24] = "AllowsStructuralFallback";
})(VarianceFlags || (VarianceFlags = {}));
export var ElementFlags;
(function (ElementFlags) {
    ElementFlags[ElementFlags["Required"] = 1] = "Required";
    ElementFlags[ElementFlags["Optional"] = 2] = "Optional";
    ElementFlags[ElementFlags["Rest"] = 4] = "Rest";
    ElementFlags[ElementFlags["Variadic"] = 8] = "Variadic";
    ElementFlags[ElementFlags["Fixed"] = 3] = "Fixed";
    ElementFlags[ElementFlags["Variable"] = 12] = "Variable";
    ElementFlags[ElementFlags["NonRequired"] = 14] = "NonRequired";
    ElementFlags[ElementFlags["NonRest"] = 11] = "NonRest";
})(ElementFlags || (ElementFlags = {}));
/* @internal */
export var JsxReferenceKind;
(function (JsxReferenceKind) {
    JsxReferenceKind[JsxReferenceKind["Component"] = 0] = "Component";
    JsxReferenceKind[JsxReferenceKind["Function"] = 1] = "Function";
    JsxReferenceKind[JsxReferenceKind["Mixed"] = 2] = "Mixed";
})(JsxReferenceKind || (JsxReferenceKind = {}));
export var SignatureKind;
(function (SignatureKind) {
    SignatureKind[SignatureKind["Call"] = 0] = "Call";
    SignatureKind[SignatureKind["Construct"] = 1] = "Construct";
})(SignatureKind || (SignatureKind = {}));
/* @internal */
export var SignatureFlags;
(function (SignatureFlags) {
    SignatureFlags[SignatureFlags["None"] = 0] = "None";
    // Propagating flags
    SignatureFlags[SignatureFlags["HasRestParameter"] = 1] = "HasRestParameter";
    SignatureFlags[SignatureFlags["HasLiteralTypes"] = 2] = "HasLiteralTypes";
    SignatureFlags[SignatureFlags["Abstract"] = 4] = "Abstract";
    // Non-propagating flags
    SignatureFlags[SignatureFlags["IsInnerCallChain"] = 8] = "IsInnerCallChain";
    SignatureFlags[SignatureFlags["IsOuterCallChain"] = 16] = "IsOuterCallChain";
    SignatureFlags[SignatureFlags["IsUntypedSignatureInJSFile"] = 32] = "IsUntypedSignatureInJSFile";
    // We do not propagate `IsInnerCallChain` or `IsOuterCallChain` to instantiated signatures, as that would result in us
    // attempting to add `| undefined` on each recursive call to `getReturnTypeOfSignature` when
    // instantiating the return type.
    SignatureFlags[SignatureFlags["PropagatingFlags"] = 39] = "PropagatingFlags";
    SignatureFlags[SignatureFlags["CallChainFlags"] = 24] = "CallChainFlags";
})(SignatureFlags || (SignatureFlags = {}));
export var IndexKind;
(function (IndexKind) {
    IndexKind[IndexKind["String"] = 0] = "String";
    IndexKind[IndexKind["Number"] = 1] = "Number";
})(IndexKind || (IndexKind = {}));
/* @internal */
export var TypeMapKind;
(function (TypeMapKind) {
    TypeMapKind[TypeMapKind["Simple"] = 0] = "Simple";
    TypeMapKind[TypeMapKind["Array"] = 1] = "Array";
    TypeMapKind[TypeMapKind["Function"] = 2] = "Function";
    TypeMapKind[TypeMapKind["Composite"] = 3] = "Composite";
    TypeMapKind[TypeMapKind["Merged"] = 4] = "Merged";
})(TypeMapKind || (TypeMapKind = {}));
export var InferencePriority;
(function (InferencePriority) {
    InferencePriority[InferencePriority["NakedTypeVariable"] = 1] = "NakedTypeVariable";
    InferencePriority[InferencePriority["SpeculativeTuple"] = 2] = "SpeculativeTuple";
    InferencePriority[InferencePriority["SubstituteSource"] = 4] = "SubstituteSource";
    InferencePriority[InferencePriority["HomomorphicMappedType"] = 8] = "HomomorphicMappedType";
    InferencePriority[InferencePriority["PartialHomomorphicMappedType"] = 16] = "PartialHomomorphicMappedType";
    InferencePriority[InferencePriority["MappedTypeConstraint"] = 32] = "MappedTypeConstraint";
    InferencePriority[InferencePriority["ContravariantConditional"] = 64] = "ContravariantConditional";
    InferencePriority[InferencePriority["ReturnType"] = 128] = "ReturnType";
    InferencePriority[InferencePriority["LiteralKeyof"] = 256] = "LiteralKeyof";
    InferencePriority[InferencePriority["NoConstraints"] = 512] = "NoConstraints";
    InferencePriority[InferencePriority["AlwaysStrict"] = 1024] = "AlwaysStrict";
    InferencePriority[InferencePriority["MaxValue"] = 2048] = "MaxValue";
    InferencePriority[InferencePriority["PriorityImpliesCombination"] = 416] = "PriorityImpliesCombination";
    InferencePriority[InferencePriority["Circularity"] = -1] = "Circularity";
})(InferencePriority || (InferencePriority = {}));
/* @internal */
export var InferenceFlags;
(function (InferenceFlags) {
    InferenceFlags[InferenceFlags["None"] = 0] = "None";
    InferenceFlags[InferenceFlags["NoDefault"] = 1] = "NoDefault";
    InferenceFlags[InferenceFlags["AnyDefault"] = 2] = "AnyDefault";
    InferenceFlags[InferenceFlags["SkippedGenericFunction"] = 4] = "SkippedGenericFunction";
})(InferenceFlags || (InferenceFlags = {}));
/**
 * Ternary values are defined such that
 * x & y picks the lesser in the order False < Unknown < Maybe < True, and
 * x | y picks the greater in the order False < Unknown < Maybe < True.
 * Generally, Ternary.Maybe is used as the result of a relation that depends on itself, and
 * Ternary.Unknown is used as the result of a variance check that depends on itself. We make
 * a distinction because we don't want to cache circular variance check results.
 */
/* @internal */
export var Ternary;
(function (Ternary) {
    Ternary[Ternary["False"] = 0] = "False";
    Ternary[Ternary["Unknown"] = 1] = "Unknown";
    Ternary[Ternary["Maybe"] = 3] = "Maybe";
    Ternary[Ternary["True"] = -1] = "True";
})(Ternary || (Ternary = {}));
/* @internal */
export var AssignmentDeclarationKind;
(function (AssignmentDeclarationKind) {
    AssignmentDeclarationKind[AssignmentDeclarationKind["None"] = 0] = "None";
    /// exports.name = expr
    /// module.exports.name = expr
    AssignmentDeclarationKind[AssignmentDeclarationKind["ExportsProperty"] = 1] = "ExportsProperty";
    /// module.exports = expr
    AssignmentDeclarationKind[AssignmentDeclarationKind["ModuleExports"] = 2] = "ModuleExports";
    /// className.prototype.name = expr
    AssignmentDeclarationKind[AssignmentDeclarationKind["PrototypeProperty"] = 3] = "PrototypeProperty";
    /// this.name = expr
    AssignmentDeclarationKind[AssignmentDeclarationKind["ThisProperty"] = 4] = "ThisProperty";
    // F.name = expr
    AssignmentDeclarationKind[AssignmentDeclarationKind["Property"] = 5] = "Property";
    // F.prototype = { ... }
    AssignmentDeclarationKind[AssignmentDeclarationKind["Prototype"] = 6] = "Prototype";
    // Object.defineProperty(x, 'name', { value: any, writable?: boolean (false by default) });
    // Object.defineProperty(x, 'name', { get: Function, set: Function });
    // Object.defineProperty(x, 'name', { get: Function });
    // Object.defineProperty(x, 'name', { set: Function });
    AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePropertyValue"] = 7] = "ObjectDefinePropertyValue";
    // Object.defineProperty(exports || module.exports, 'name', ...);
    AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePropertyExports"] = 8] = "ObjectDefinePropertyExports";
    // Object.defineProperty(Foo.prototype, 'name', ...);
    AssignmentDeclarationKind[AssignmentDeclarationKind["ObjectDefinePrototypeProperty"] = 9] = "ObjectDefinePrototypeProperty";
})(AssignmentDeclarationKind || (AssignmentDeclarationKind = {}));
export var DiagnosticCategory;
(function (DiagnosticCategory) {
    DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
    DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
    DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
})(DiagnosticCategory || (DiagnosticCategory = {}));
/* @internal */
export function diagnosticCategoryName(d, lowerCase = true) {
    const name = DiagnosticCategory[d.category];
    return lowerCase ? name.toLowerCase() : name;
}
export var ModuleResolutionKind;
(function (ModuleResolutionKind) {
    ModuleResolutionKind[ModuleResolutionKind["Classic"] = 1] = "Classic";
    ModuleResolutionKind[ModuleResolutionKind["NodeJs"] = 2] = "NodeJs";
})(ModuleResolutionKind || (ModuleResolutionKind = {}));
export var WatchFileKind;
(function (WatchFileKind) {
    WatchFileKind[WatchFileKind["FixedPollingInterval"] = 0] = "FixedPollingInterval";
    WatchFileKind[WatchFileKind["PriorityPollingInterval"] = 1] = "PriorityPollingInterval";
    WatchFileKind[WatchFileKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
    WatchFileKind[WatchFileKind["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
    WatchFileKind[WatchFileKind["UseFsEvents"] = 4] = "UseFsEvents";
    WatchFileKind[WatchFileKind["UseFsEventsOnParentDirectory"] = 5] = "UseFsEventsOnParentDirectory";
})(WatchFileKind || (WatchFileKind = {}));
export var WatchDirectoryKind;
(function (WatchDirectoryKind) {
    WatchDirectoryKind[WatchDirectoryKind["UseFsEvents"] = 0] = "UseFsEvents";
    WatchDirectoryKind[WatchDirectoryKind["FixedPollingInterval"] = 1] = "FixedPollingInterval";
    WatchDirectoryKind[WatchDirectoryKind["DynamicPriorityPolling"] = 2] = "DynamicPriorityPolling";
    WatchDirectoryKind[WatchDirectoryKind["FixedChunkSizePolling"] = 3] = "FixedChunkSizePolling";
})(WatchDirectoryKind || (WatchDirectoryKind = {}));
export var PollingWatchKind;
(function (PollingWatchKind) {
    PollingWatchKind[PollingWatchKind["FixedInterval"] = 0] = "FixedInterval";
    PollingWatchKind[PollingWatchKind["PriorityInterval"] = 1] = "PriorityInterval";
    PollingWatchKind[PollingWatchKind["DynamicPriority"] = 2] = "DynamicPriority";
    PollingWatchKind[PollingWatchKind["FixedChunkSize"] = 3] = "FixedChunkSize";
})(PollingWatchKind || (PollingWatchKind = {}));
export var ModuleKind;
(function (ModuleKind) {
    ModuleKind[ModuleKind["None"] = 0] = "None";
    ModuleKind[ModuleKind["CommonJS"] = 1] = "CommonJS";
    ModuleKind[ModuleKind["AMD"] = 2] = "AMD";
    ModuleKind[ModuleKind["UMD"] = 3] = "UMD";
    ModuleKind[ModuleKind["System"] = 4] = "System";
    // NOTE: ES module kinds should be contiguous to more easily check whether a module kind is *any* ES module kind.
    //       Non-ES module kinds should not come between ES2015 (the earliest ES module kind) and ESNext (the last ES
    //       module kind).
    ModuleKind[ModuleKind["ES2015"] = 5] = "ES2015";
    ModuleKind[ModuleKind["ES2020"] = 6] = "ES2020";
    ModuleKind[ModuleKind["ESNext"] = 99] = "ESNext";
})(ModuleKind || (ModuleKind = {}));
export var JsxEmit;
(function (JsxEmit) {
    JsxEmit[JsxEmit["None"] = 0] = "None";
    JsxEmit[JsxEmit["Preserve"] = 1] = "Preserve";
    JsxEmit[JsxEmit["React"] = 2] = "React";
    JsxEmit[JsxEmit["ReactNative"] = 3] = "ReactNative";
    JsxEmit[JsxEmit["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit[JsxEmit["ReactJSXDev"] = 5] = "ReactJSXDev";
})(JsxEmit || (JsxEmit = {}));
export var ImportsNotUsedAsValues;
(function (ImportsNotUsedAsValues) {
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Remove"] = 0] = "Remove";
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Preserve"] = 1] = "Preserve";
    ImportsNotUsedAsValues[ImportsNotUsedAsValues["Error"] = 2] = "Error";
})(ImportsNotUsedAsValues || (ImportsNotUsedAsValues = {}));
export var NewLineKind;
(function (NewLineKind) {
    NewLineKind[NewLineKind["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind[NewLineKind["LineFeed"] = 1] = "LineFeed";
})(NewLineKind || (NewLineKind = {}));
export var ScriptKind;
(function (ScriptKind) {
    ScriptKind[ScriptKind["Unknown"] = 0] = "Unknown";
    ScriptKind[ScriptKind["JS"] = 1] = "JS";
    ScriptKind[ScriptKind["JSX"] = 2] = "JSX";
    ScriptKind[ScriptKind["TS"] = 3] = "TS";
    ScriptKind[ScriptKind["TSX"] = 4] = "TSX";
    ScriptKind[ScriptKind["External"] = 5] = "External";
    ScriptKind[ScriptKind["JSON"] = 6] = "JSON";
    /**
     * Used on extensions that doesn't define the ScriptKind but the content defines it.
     * Deferred extensions are going to be included in all project contexts.
     */
    ScriptKind[ScriptKind["Deferred"] = 7] = "Deferred";
})(ScriptKind || (ScriptKind = {}));
export var ScriptTarget;
(function (ScriptTarget) {
    ScriptTarget[ScriptTarget["ES3"] = 0] = "ES3";
    ScriptTarget[ScriptTarget["ES5"] = 1] = "ES5";
    ScriptTarget[ScriptTarget["ES2015"] = 2] = "ES2015";
    ScriptTarget[ScriptTarget["ES2016"] = 3] = "ES2016";
    ScriptTarget[ScriptTarget["ES2017"] = 4] = "ES2017";
    ScriptTarget[ScriptTarget["ES2018"] = 5] = "ES2018";
    ScriptTarget[ScriptTarget["ES2019"] = 6] = "ES2019";
    ScriptTarget[ScriptTarget["ES2020"] = 7] = "ES2020";
    ScriptTarget[ScriptTarget["ES2021"] = 8] = "ES2021";
    ScriptTarget[ScriptTarget["ESNext"] = 99] = "ESNext";
    ScriptTarget[ScriptTarget["JSON"] = 100] = "JSON";
    ScriptTarget[ScriptTarget["Latest"] = 99] = "Latest";
})(ScriptTarget || (ScriptTarget = {}));
export var LanguageVariant;
(function (LanguageVariant) {
    LanguageVariant[LanguageVariant["Standard"] = 0] = "Standard";
    LanguageVariant[LanguageVariant["JSX"] = 1] = "JSX";
})(LanguageVariant || (LanguageVariant = {}));
export var WatchDirectoryFlags;
(function (WatchDirectoryFlags) {
    WatchDirectoryFlags[WatchDirectoryFlags["None"] = 0] = "None";
    WatchDirectoryFlags[WatchDirectoryFlags["Recursive"] = 1] = "Recursive";
})(WatchDirectoryFlags || (WatchDirectoryFlags = {}));
/* @internal */
export var CharacterCodes;
(function (CharacterCodes) {
    CharacterCodes[CharacterCodes["nullCharacter"] = 0] = "nullCharacter";
    CharacterCodes[CharacterCodes["maxAsciiCharacter"] = 127] = "maxAsciiCharacter";
    CharacterCodes[CharacterCodes["lineFeed"] = 10] = "lineFeed";
    CharacterCodes[CharacterCodes["carriageReturn"] = 13] = "carriageReturn";
    CharacterCodes[CharacterCodes["lineSeparator"] = 8232] = "lineSeparator";
    CharacterCodes[CharacterCodes["paragraphSeparator"] = 8233] = "paragraphSeparator";
    CharacterCodes[CharacterCodes["nextLine"] = 133] = "nextLine";
    // Unicode 3.0 space characters
    CharacterCodes[CharacterCodes["space"] = 32] = "space";
    CharacterCodes[CharacterCodes["nonBreakingSpace"] = 160] = "nonBreakingSpace";
    CharacterCodes[CharacterCodes["enQuad"] = 8192] = "enQuad";
    CharacterCodes[CharacterCodes["emQuad"] = 8193] = "emQuad";
    CharacterCodes[CharacterCodes["enSpace"] = 8194] = "enSpace";
    CharacterCodes[CharacterCodes["emSpace"] = 8195] = "emSpace";
    CharacterCodes[CharacterCodes["threePerEmSpace"] = 8196] = "threePerEmSpace";
    CharacterCodes[CharacterCodes["fourPerEmSpace"] = 8197] = "fourPerEmSpace";
    CharacterCodes[CharacterCodes["sixPerEmSpace"] = 8198] = "sixPerEmSpace";
    CharacterCodes[CharacterCodes["figureSpace"] = 8199] = "figureSpace";
    CharacterCodes[CharacterCodes["punctuationSpace"] = 8200] = "punctuationSpace";
    CharacterCodes[CharacterCodes["thinSpace"] = 8201] = "thinSpace";
    CharacterCodes[CharacterCodes["hairSpace"] = 8202] = "hairSpace";
    CharacterCodes[CharacterCodes["zeroWidthSpace"] = 8203] = "zeroWidthSpace";
    CharacterCodes[CharacterCodes["narrowNoBreakSpace"] = 8239] = "narrowNoBreakSpace";
    CharacterCodes[CharacterCodes["ideographicSpace"] = 12288] = "ideographicSpace";
    CharacterCodes[CharacterCodes["mathematicalSpace"] = 8287] = "mathematicalSpace";
    CharacterCodes[CharacterCodes["ogham"] = 5760] = "ogham";
    CharacterCodes[CharacterCodes["_"] = 95] = "_";
    CharacterCodes[CharacterCodes["$"] = 36] = "$";
    CharacterCodes[CharacterCodes["_0"] = 48] = "_0";
    CharacterCodes[CharacterCodes["_1"] = 49] = "_1";
    CharacterCodes[CharacterCodes["_2"] = 50] = "_2";
    CharacterCodes[CharacterCodes["_3"] = 51] = "_3";
    CharacterCodes[CharacterCodes["_4"] = 52] = "_4";
    CharacterCodes[CharacterCodes["_5"] = 53] = "_5";
    CharacterCodes[CharacterCodes["_6"] = 54] = "_6";
    CharacterCodes[CharacterCodes["_7"] = 55] = "_7";
    CharacterCodes[CharacterCodes["_8"] = 56] = "_8";
    CharacterCodes[CharacterCodes["_9"] = 57] = "_9";
    CharacterCodes[CharacterCodes["a"] = 97] = "a";
    CharacterCodes[CharacterCodes["b"] = 98] = "b";
    CharacterCodes[CharacterCodes["c"] = 99] = "c";
    CharacterCodes[CharacterCodes["d"] = 100] = "d";
    CharacterCodes[CharacterCodes["e"] = 101] = "e";
    CharacterCodes[CharacterCodes["f"] = 102] = "f";
    CharacterCodes[CharacterCodes["g"] = 103] = "g";
    CharacterCodes[CharacterCodes["h"] = 104] = "h";
    CharacterCodes[CharacterCodes["i"] = 105] = "i";
    CharacterCodes[CharacterCodes["j"] = 106] = "j";
    CharacterCodes[CharacterCodes["k"] = 107] = "k";
    CharacterCodes[CharacterCodes["l"] = 108] = "l";
    CharacterCodes[CharacterCodes["m"] = 109] = "m";
    CharacterCodes[CharacterCodes["n"] = 110] = "n";
    CharacterCodes[CharacterCodes["o"] = 111] = "o";
    CharacterCodes[CharacterCodes["p"] = 112] = "p";
    CharacterCodes[CharacterCodes["q"] = 113] = "q";
    CharacterCodes[CharacterCodes["r"] = 114] = "r";
    CharacterCodes[CharacterCodes["s"] = 115] = "s";
    CharacterCodes[CharacterCodes["t"] = 116] = "t";
    CharacterCodes[CharacterCodes["u"] = 117] = "u";
    CharacterCodes[CharacterCodes["v"] = 118] = "v";
    CharacterCodes[CharacterCodes["w"] = 119] = "w";
    CharacterCodes[CharacterCodes["x"] = 120] = "x";
    CharacterCodes[CharacterCodes["y"] = 121] = "y";
    CharacterCodes[CharacterCodes["z"] = 122] = "z";
    CharacterCodes[CharacterCodes["A"] = 65] = "A";
    CharacterCodes[CharacterCodes["B"] = 66] = "B";
    CharacterCodes[CharacterCodes["C"] = 67] = "C";
    CharacterCodes[CharacterCodes["D"] = 68] = "D";
    CharacterCodes[CharacterCodes["E"] = 69] = "E";
    CharacterCodes[CharacterCodes["F"] = 70] = "F";
    CharacterCodes[CharacterCodes["G"] = 71] = "G";
    CharacterCodes[CharacterCodes["H"] = 72] = "H";
    CharacterCodes[CharacterCodes["I"] = 73] = "I";
    CharacterCodes[CharacterCodes["J"] = 74] = "J";
    CharacterCodes[CharacterCodes["K"] = 75] = "K";
    CharacterCodes[CharacterCodes["L"] = 76] = "L";
    CharacterCodes[CharacterCodes["M"] = 77] = "M";
    CharacterCodes[CharacterCodes["N"] = 78] = "N";
    CharacterCodes[CharacterCodes["O"] = 79] = "O";
    CharacterCodes[CharacterCodes["P"] = 80] = "P";
    CharacterCodes[CharacterCodes["Q"] = 81] = "Q";
    CharacterCodes[CharacterCodes["R"] = 82] = "R";
    CharacterCodes[CharacterCodes["S"] = 83] = "S";
    CharacterCodes[CharacterCodes["T"] = 84] = "T";
    CharacterCodes[CharacterCodes["U"] = 85] = "U";
    CharacterCodes[CharacterCodes["V"] = 86] = "V";
    CharacterCodes[CharacterCodes["W"] = 87] = "W";
    CharacterCodes[CharacterCodes["X"] = 88] = "X";
    CharacterCodes[CharacterCodes["Y"] = 89] = "Y";
    CharacterCodes[CharacterCodes["Z"] = 90] = "Z";
    CharacterCodes[CharacterCodes["ampersand"] = 38] = "ampersand";
    CharacterCodes[CharacterCodes["asterisk"] = 42] = "asterisk";
    CharacterCodes[CharacterCodes["at"] = 64] = "at";
    CharacterCodes[CharacterCodes["backslash"] = 92] = "backslash";
    CharacterCodes[CharacterCodes["backtick"] = 96] = "backtick";
    CharacterCodes[CharacterCodes["bar"] = 124] = "bar";
    CharacterCodes[CharacterCodes["caret"] = 94] = "caret";
    CharacterCodes[CharacterCodes["closeBrace"] = 125] = "closeBrace";
    CharacterCodes[CharacterCodes["closeBracket"] = 93] = "closeBracket";
    CharacterCodes[CharacterCodes["closeParen"] = 41] = "closeParen";
    CharacterCodes[CharacterCodes["colon"] = 58] = "colon";
    CharacterCodes[CharacterCodes["comma"] = 44] = "comma";
    CharacterCodes[CharacterCodes["dot"] = 46] = "dot";
    CharacterCodes[CharacterCodes["doubleQuote"] = 34] = "doubleQuote";
    CharacterCodes[CharacterCodes["equals"] = 61] = "equals";
    CharacterCodes[CharacterCodes["exclamation"] = 33] = "exclamation";
    CharacterCodes[CharacterCodes["greaterThan"] = 62] = "greaterThan";
    CharacterCodes[CharacterCodes["hash"] = 35] = "hash";
    CharacterCodes[CharacterCodes["lessThan"] = 60] = "lessThan";
    CharacterCodes[CharacterCodes["minus"] = 45] = "minus";
    CharacterCodes[CharacterCodes["openBrace"] = 123] = "openBrace";
    CharacterCodes[CharacterCodes["openBracket"] = 91] = "openBracket";
    CharacterCodes[CharacterCodes["openParen"] = 40] = "openParen";
    CharacterCodes[CharacterCodes["percent"] = 37] = "percent";
    CharacterCodes[CharacterCodes["plus"] = 43] = "plus";
    CharacterCodes[CharacterCodes["question"] = 63] = "question";
    CharacterCodes[CharacterCodes["semicolon"] = 59] = "semicolon";
    CharacterCodes[CharacterCodes["singleQuote"] = 39] = "singleQuote";
    CharacterCodes[CharacterCodes["slash"] = 47] = "slash";
    CharacterCodes[CharacterCodes["tilde"] = 126] = "tilde";
    CharacterCodes[CharacterCodes["backspace"] = 8] = "backspace";
    CharacterCodes[CharacterCodes["formFeed"] = 12] = "formFeed";
    CharacterCodes[CharacterCodes["byteOrderMark"] = 65279] = "byteOrderMark";
    CharacterCodes[CharacterCodes["tab"] = 9] = "tab";
    CharacterCodes[CharacterCodes["verticalTab"] = 11] = "verticalTab";
})(CharacterCodes || (CharacterCodes = {}));
export var Extension;
(function (Extension) {
    Extension["Ts"] = ".ts";
    Extension["Tsx"] = ".tsx";
    Extension["Dts"] = ".d.ts";
    Extension["Js"] = ".js";
    Extension["Jsx"] = ".jsx";
    Extension["Json"] = ".json";
    Extension["TsBuildInfo"] = ".tsbuildinfo";
})(Extension || (Extension = {}));
/* @internal */
export var TransformFlags;
(function (TransformFlags) {
    TransformFlags[TransformFlags["None"] = 0] = "None";
    // Facts
    // - Flags used to indicate that a node or subtree contains syntax that requires transformation.
    TransformFlags[TransformFlags["ContainsTypeScript"] = 1] = "ContainsTypeScript";
    TransformFlags[TransformFlags["ContainsJsx"] = 2] = "ContainsJsx";
    TransformFlags[TransformFlags["ContainsESNext"] = 4] = "ContainsESNext";
    TransformFlags[TransformFlags["ContainsES2021"] = 8] = "ContainsES2021";
    TransformFlags[TransformFlags["ContainsES2020"] = 16] = "ContainsES2020";
    TransformFlags[TransformFlags["ContainsES2019"] = 32] = "ContainsES2019";
    TransformFlags[TransformFlags["ContainsES2018"] = 64] = "ContainsES2018";
    TransformFlags[TransformFlags["ContainsES2017"] = 128] = "ContainsES2017";
    TransformFlags[TransformFlags["ContainsES2016"] = 256] = "ContainsES2016";
    TransformFlags[TransformFlags["ContainsES2015"] = 512] = "ContainsES2015";
    TransformFlags[TransformFlags["ContainsGenerator"] = 1024] = "ContainsGenerator";
    TransformFlags[TransformFlags["ContainsDestructuringAssignment"] = 2048] = "ContainsDestructuringAssignment";
    // Markers
    // - Flags used to indicate that a subtree contains a specific transformation.
    TransformFlags[TransformFlags["ContainsTypeScriptClassSyntax"] = 4096] = "ContainsTypeScriptClassSyntax";
    TransformFlags[TransformFlags["ContainsLexicalThis"] = 8192] = "ContainsLexicalThis";
    TransformFlags[TransformFlags["ContainsRestOrSpread"] = 16384] = "ContainsRestOrSpread";
    TransformFlags[TransformFlags["ContainsObjectRestOrSpread"] = 32768] = "ContainsObjectRestOrSpread";
    TransformFlags[TransformFlags["ContainsComputedPropertyName"] = 65536] = "ContainsComputedPropertyName";
    TransformFlags[TransformFlags["ContainsBlockScopedBinding"] = 131072] = "ContainsBlockScopedBinding";
    TransformFlags[TransformFlags["ContainsBindingPattern"] = 262144] = "ContainsBindingPattern";
    TransformFlags[TransformFlags["ContainsYield"] = 524288] = "ContainsYield";
    TransformFlags[TransformFlags["ContainsAwait"] = 1048576] = "ContainsAwait";
    TransformFlags[TransformFlags["ContainsHoistedDeclarationOrCompletion"] = 2097152] = "ContainsHoistedDeclarationOrCompletion";
    TransformFlags[TransformFlags["ContainsDynamicImport"] = 4194304] = "ContainsDynamicImport";
    TransformFlags[TransformFlags["ContainsClassFields"] = 8388608] = "ContainsClassFields";
    TransformFlags[TransformFlags["ContainsPossibleTopLevelAwait"] = 16777216] = "ContainsPossibleTopLevelAwait";
    // Please leave this as 1 << 29.
    // It is the maximum bit we can set before we outgrow the size of a v8 small integer (SMI) on an x86 system.
    // It is a good reminder of how much room we have left
    TransformFlags[TransformFlags["HasComputedFlags"] = 536870912] = "HasComputedFlags";
    // Assertions
    // - Bitmasks that are used to assert facts about the syntax of a node and its subtree.
    TransformFlags[TransformFlags["AssertTypeScript"] = 1] = "AssertTypeScript";
    TransformFlags[TransformFlags["AssertJsx"] = 2] = "AssertJsx";
    TransformFlags[TransformFlags["AssertESNext"] = 4] = "AssertESNext";
    TransformFlags[TransformFlags["AssertES2021"] = 8] = "AssertES2021";
    TransformFlags[TransformFlags["AssertES2020"] = 16] = "AssertES2020";
    TransformFlags[TransformFlags["AssertES2019"] = 32] = "AssertES2019";
    TransformFlags[TransformFlags["AssertES2018"] = 64] = "AssertES2018";
    TransformFlags[TransformFlags["AssertES2017"] = 128] = "AssertES2017";
    TransformFlags[TransformFlags["AssertES2016"] = 256] = "AssertES2016";
    TransformFlags[TransformFlags["AssertES2015"] = 512] = "AssertES2015";
    TransformFlags[TransformFlags["AssertGenerator"] = 1024] = "AssertGenerator";
    TransformFlags[TransformFlags["AssertDestructuringAssignment"] = 2048] = "AssertDestructuringAssignment";
    // Scope Exclusions
    // - Bitmasks that exclude flags from propagating out of a specific context
    //   into the subtree flags of their container.
    TransformFlags[TransformFlags["OuterExpressionExcludes"] = 536870912] = "OuterExpressionExcludes";
    TransformFlags[TransformFlags["PropertyAccessExcludes"] = 536870912] = "PropertyAccessExcludes";
    TransformFlags[TransformFlags["NodeExcludes"] = 536870912] = "NodeExcludes";
    TransformFlags[TransformFlags["ArrowFunctionExcludes"] = 557748224] = "ArrowFunctionExcludes";
    TransformFlags[TransformFlags["FunctionExcludes"] = 557756416] = "FunctionExcludes";
    TransformFlags[TransformFlags["ConstructorExcludes"] = 557752320] = "ConstructorExcludes";
    TransformFlags[TransformFlags["MethodOrAccessorExcludes"] = 540975104] = "MethodOrAccessorExcludes";
    TransformFlags[TransformFlags["PropertyExcludes"] = 536879104] = "PropertyExcludes";
    TransformFlags[TransformFlags["ClassExcludes"] = 536940544] = "ClassExcludes";
    TransformFlags[TransformFlags["ModuleExcludes"] = 555888640] = "ModuleExcludes";
    TransformFlags[TransformFlags["TypeExcludes"] = -2] = "TypeExcludes";
    TransformFlags[TransformFlags["ObjectLiteralExcludes"] = 536973312] = "ObjectLiteralExcludes";
    TransformFlags[TransformFlags["ArrayLiteralOrCallOrNewExcludes"] = 536887296] = "ArrayLiteralOrCallOrNewExcludes";
    TransformFlags[TransformFlags["VariableDeclarationListExcludes"] = 537165824] = "VariableDeclarationListExcludes";
    TransformFlags[TransformFlags["ParameterExcludes"] = 536870912] = "ParameterExcludes";
    TransformFlags[TransformFlags["CatchClauseExcludes"] = 536903680] = "CatchClauseExcludes";
    TransformFlags[TransformFlags["BindingPatternExcludes"] = 536887296] = "BindingPatternExcludes";
    // Propagating flags
    // - Bitmasks for flags that should propagate from a child
    TransformFlags[TransformFlags["PropertyNamePropagatingFlags"] = 8192] = "PropertyNamePropagatingFlags";
    // Masks
    // - Additional bitmasks
})(TransformFlags || (TransformFlags = {}));
export var EmitFlags;
(function (EmitFlags) {
    EmitFlags[EmitFlags["None"] = 0] = "None";
    EmitFlags[EmitFlags["SingleLine"] = 1] = "SingleLine";
    EmitFlags[EmitFlags["AdviseOnEmitNode"] = 2] = "AdviseOnEmitNode";
    EmitFlags[EmitFlags["NoSubstitution"] = 4] = "NoSubstitution";
    EmitFlags[EmitFlags["CapturesThis"] = 8] = "CapturesThis";
    EmitFlags[EmitFlags["NoLeadingSourceMap"] = 16] = "NoLeadingSourceMap";
    EmitFlags[EmitFlags["NoTrailingSourceMap"] = 32] = "NoTrailingSourceMap";
    EmitFlags[EmitFlags["NoSourceMap"] = 48] = "NoSourceMap";
    EmitFlags[EmitFlags["NoNestedSourceMaps"] = 64] = "NoNestedSourceMaps";
    EmitFlags[EmitFlags["NoTokenLeadingSourceMaps"] = 128] = "NoTokenLeadingSourceMaps";
    EmitFlags[EmitFlags["NoTokenTrailingSourceMaps"] = 256] = "NoTokenTrailingSourceMaps";
    EmitFlags[EmitFlags["NoTokenSourceMaps"] = 384] = "NoTokenSourceMaps";
    EmitFlags[EmitFlags["NoLeadingComments"] = 512] = "NoLeadingComments";
    EmitFlags[EmitFlags["NoTrailingComments"] = 1024] = "NoTrailingComments";
    EmitFlags[EmitFlags["NoComments"] = 1536] = "NoComments";
    EmitFlags[EmitFlags["NoNestedComments"] = 2048] = "NoNestedComments";
    EmitFlags[EmitFlags["HelperName"] = 4096] = "HelperName";
    EmitFlags[EmitFlags["ExportName"] = 8192] = "ExportName";
    EmitFlags[EmitFlags["LocalName"] = 16384] = "LocalName";
    EmitFlags[EmitFlags["InternalName"] = 32768] = "InternalName";
    EmitFlags[EmitFlags["Indented"] = 65536] = "Indented";
    EmitFlags[EmitFlags["NoIndentation"] = 131072] = "NoIndentation";
    EmitFlags[EmitFlags["AsyncFunctionBody"] = 262144] = "AsyncFunctionBody";
    EmitFlags[EmitFlags["ReuseTempVariableScope"] = 524288] = "ReuseTempVariableScope";
    EmitFlags[EmitFlags["CustomPrologue"] = 1048576] = "CustomPrologue";
    EmitFlags[EmitFlags["NoHoisting"] = 2097152] = "NoHoisting";
    EmitFlags[EmitFlags["HasEndOfDeclarationMarker"] = 4194304] = "HasEndOfDeclarationMarker";
    EmitFlags[EmitFlags["Iterator"] = 8388608] = "Iterator";
    EmitFlags[EmitFlags["NoAsciiEscaping"] = 16777216] = "NoAsciiEscaping";
    /*@internal*/ EmitFlags[EmitFlags["TypeScriptClassWrapper"] = 33554432] = "TypeScriptClassWrapper";
    /*@internal*/ EmitFlags[EmitFlags["NeverApplyImportHelper"] = 67108864] = "NeverApplyImportHelper";
    /*@internal*/ EmitFlags[EmitFlags["IgnoreSourceNewlines"] = 134217728] = "IgnoreSourceNewlines";
})(EmitFlags || (EmitFlags = {}));
/**
 * Used by the checker, this enum keeps track of external emit helpers that should be type
 * checked.
 */
/* @internal */
export var ExternalEmitHelpers;
(function (ExternalEmitHelpers) {
    ExternalEmitHelpers[ExternalEmitHelpers["Extends"] = 1] = "Extends";
    ExternalEmitHelpers[ExternalEmitHelpers["Assign"] = 2] = "Assign";
    ExternalEmitHelpers[ExternalEmitHelpers["Rest"] = 4] = "Rest";
    ExternalEmitHelpers[ExternalEmitHelpers["Decorate"] = 8] = "Decorate";
    ExternalEmitHelpers[ExternalEmitHelpers["Metadata"] = 16] = "Metadata";
    ExternalEmitHelpers[ExternalEmitHelpers["Param"] = 32] = "Param";
    ExternalEmitHelpers[ExternalEmitHelpers["Awaiter"] = 64] = "Awaiter";
    ExternalEmitHelpers[ExternalEmitHelpers["Generator"] = 128] = "Generator";
    ExternalEmitHelpers[ExternalEmitHelpers["Values"] = 256] = "Values";
    ExternalEmitHelpers[ExternalEmitHelpers["Read"] = 512] = "Read";
    ExternalEmitHelpers[ExternalEmitHelpers["SpreadArray"] = 1024] = "SpreadArray";
    ExternalEmitHelpers[ExternalEmitHelpers["Await"] = 2048] = "Await";
    ExternalEmitHelpers[ExternalEmitHelpers["AsyncGenerator"] = 4096] = "AsyncGenerator";
    ExternalEmitHelpers[ExternalEmitHelpers["AsyncDelegator"] = 8192] = "AsyncDelegator";
    ExternalEmitHelpers[ExternalEmitHelpers["AsyncValues"] = 16384] = "AsyncValues";
    ExternalEmitHelpers[ExternalEmitHelpers["ExportStar"] = 32768] = "ExportStar";
    ExternalEmitHelpers[ExternalEmitHelpers["ImportStar"] = 65536] = "ImportStar";
    ExternalEmitHelpers[ExternalEmitHelpers["ImportDefault"] = 131072] = "ImportDefault";
    ExternalEmitHelpers[ExternalEmitHelpers["MakeTemplateObject"] = 262144] = "MakeTemplateObject";
    ExternalEmitHelpers[ExternalEmitHelpers["ClassPrivateFieldGet"] = 524288] = "ClassPrivateFieldGet";
    ExternalEmitHelpers[ExternalEmitHelpers["ClassPrivateFieldSet"] = 1048576] = "ClassPrivateFieldSet";
    ExternalEmitHelpers[ExternalEmitHelpers["CreateBinding"] = 2097152] = "CreateBinding";
    ExternalEmitHelpers[ExternalEmitHelpers["FirstEmitHelper"] = 1] = "FirstEmitHelper";
    ExternalEmitHelpers[ExternalEmitHelpers["LastEmitHelper"] = 2097152] = "LastEmitHelper";
    // Helpers included by ES2015 for..of
    ExternalEmitHelpers[ExternalEmitHelpers["ForOfIncludes"] = 256] = "ForOfIncludes";
    // Helpers included by ES2017 for..await..of
    ExternalEmitHelpers[ExternalEmitHelpers["ForAwaitOfIncludes"] = 16384] = "ForAwaitOfIncludes";
    // Helpers included by ES2017 async generators
    ExternalEmitHelpers[ExternalEmitHelpers["AsyncGeneratorIncludes"] = 6144] = "AsyncGeneratorIncludes";
    // Helpers included by yield* in ES2017 async generators
    ExternalEmitHelpers[ExternalEmitHelpers["AsyncDelegatorIncludes"] = 26624] = "AsyncDelegatorIncludes";
    // Helpers included by ES2015 spread
    ExternalEmitHelpers[ExternalEmitHelpers["SpreadIncludes"] = 1536] = "SpreadIncludes";
})(ExternalEmitHelpers || (ExternalEmitHelpers = {}));
export var EmitHint;
(function (EmitHint) {
    EmitHint[EmitHint["SourceFile"] = 0] = "SourceFile";
    EmitHint[EmitHint["Expression"] = 1] = "Expression";
    EmitHint[EmitHint["IdentifierName"] = 2] = "IdentifierName";
    EmitHint[EmitHint["MappedTypeParameter"] = 3] = "MappedTypeParameter";
    EmitHint[EmitHint["Unspecified"] = 4] = "Unspecified";
    EmitHint[EmitHint["EmbeddedStatement"] = 5] = "EmbeddedStatement";
    EmitHint[EmitHint["JsxAttributeValue"] = 6] = "JsxAttributeValue";
})(EmitHint || (EmitHint = {}));
export var OuterExpressionKinds;
(function (OuterExpressionKinds) {
    OuterExpressionKinds[OuterExpressionKinds["Parentheses"] = 1] = "Parentheses";
    OuterExpressionKinds[OuterExpressionKinds["TypeAssertions"] = 2] = "TypeAssertions";
    OuterExpressionKinds[OuterExpressionKinds["NonNullAssertions"] = 4] = "NonNullAssertions";
    OuterExpressionKinds[OuterExpressionKinds["PartiallyEmittedExpressions"] = 8] = "PartiallyEmittedExpressions";
    OuterExpressionKinds[OuterExpressionKinds["Assertions"] = 6] = "Assertions";
    OuterExpressionKinds[OuterExpressionKinds["All"] = 15] = "All";
})(OuterExpressionKinds || (OuterExpressionKinds = {}));
/* @internal */
export var LexicalEnvironmentFlags;
(function (LexicalEnvironmentFlags) {
    LexicalEnvironmentFlags[LexicalEnvironmentFlags["None"] = 0] = "None";
    LexicalEnvironmentFlags[LexicalEnvironmentFlags["InParameters"] = 1] = "InParameters";
    LexicalEnvironmentFlags[LexicalEnvironmentFlags["VariablesHoistedInParameters"] = 2] = "VariablesHoistedInParameters"; // a temp variable was hoisted while visiting a parameter list
})(LexicalEnvironmentFlags || (LexicalEnvironmentFlags = {}));
/*@internal*/
export var BundleFileSectionKind;
(function (BundleFileSectionKind) {
    BundleFileSectionKind["Prologue"] = "prologue";
    BundleFileSectionKind["EmitHelpers"] = "emitHelpers";
    BundleFileSectionKind["NoDefaultLib"] = "no-default-lib";
    BundleFileSectionKind["Reference"] = "reference";
    BundleFileSectionKind["Type"] = "type";
    BundleFileSectionKind["Lib"] = "lib";
    BundleFileSectionKind["Prepend"] = "prepend";
    BundleFileSectionKind["Text"] = "text";
    BundleFileSectionKind["Internal"] = "internal";
    // comments?
})(BundleFileSectionKind || (BundleFileSectionKind = {}));
export var ListFormat;
(function (ListFormat) {
    ListFormat[ListFormat["None"] = 0] = "None";
    // Line separators
    ListFormat[ListFormat["SingleLine"] = 0] = "SingleLine";
    ListFormat[ListFormat["MultiLine"] = 1] = "MultiLine";
    ListFormat[ListFormat["PreserveLines"] = 2] = "PreserveLines";
    ListFormat[ListFormat["LinesMask"] = 3] = "LinesMask";
    // Delimiters
    ListFormat[ListFormat["NotDelimited"] = 0] = "NotDelimited";
    ListFormat[ListFormat["BarDelimited"] = 4] = "BarDelimited";
    ListFormat[ListFormat["AmpersandDelimited"] = 8] = "AmpersandDelimited";
    ListFormat[ListFormat["CommaDelimited"] = 16] = "CommaDelimited";
    ListFormat[ListFormat["AsteriskDelimited"] = 32] = "AsteriskDelimited";
    ListFormat[ListFormat["DelimitersMask"] = 60] = "DelimitersMask";
    ListFormat[ListFormat["AllowTrailingComma"] = 64] = "AllowTrailingComma";
    // Whitespace
    ListFormat[ListFormat["Indented"] = 128] = "Indented";
    ListFormat[ListFormat["SpaceBetweenBraces"] = 256] = "SpaceBetweenBraces";
    ListFormat[ListFormat["SpaceBetweenSiblings"] = 512] = "SpaceBetweenSiblings";
    // Brackets/Braces
    ListFormat[ListFormat["Braces"] = 1024] = "Braces";
    ListFormat[ListFormat["Parenthesis"] = 2048] = "Parenthesis";
    ListFormat[ListFormat["AngleBrackets"] = 4096] = "AngleBrackets";
    ListFormat[ListFormat["SquareBrackets"] = 8192] = "SquareBrackets";
    ListFormat[ListFormat["BracketsMask"] = 15360] = "BracketsMask";
    ListFormat[ListFormat["OptionalIfUndefined"] = 16384] = "OptionalIfUndefined";
    ListFormat[ListFormat["OptionalIfEmpty"] = 32768] = "OptionalIfEmpty";
    ListFormat[ListFormat["Optional"] = 49152] = "Optional";
    // Other
    ListFormat[ListFormat["PreferNewLine"] = 65536] = "PreferNewLine";
    ListFormat[ListFormat["NoTrailingNewLine"] = 131072] = "NoTrailingNewLine";
    ListFormat[ListFormat["NoInterveningComments"] = 262144] = "NoInterveningComments";
    ListFormat[ListFormat["NoSpaceIfEmpty"] = 524288] = "NoSpaceIfEmpty";
    ListFormat[ListFormat["SingleElement"] = 1048576] = "SingleElement";
    ListFormat[ListFormat["SpaceAfterList"] = 2097152] = "SpaceAfterList";
    // Precomputed Formats
    ListFormat[ListFormat["Modifiers"] = 262656] = "Modifiers";
    ListFormat[ListFormat["HeritageClauses"] = 512] = "HeritageClauses";
    ListFormat[ListFormat["SingleLineTypeLiteralMembers"] = 768] = "SingleLineTypeLiteralMembers";
    ListFormat[ListFormat["MultiLineTypeLiteralMembers"] = 32897] = "MultiLineTypeLiteralMembers";
    ListFormat[ListFormat["SingleLineTupleTypeElements"] = 528] = "SingleLineTupleTypeElements";
    ListFormat[ListFormat["MultiLineTupleTypeElements"] = 657] = "MultiLineTupleTypeElements";
    ListFormat[ListFormat["UnionTypeConstituents"] = 516] = "UnionTypeConstituents";
    ListFormat[ListFormat["IntersectionTypeConstituents"] = 520] = "IntersectionTypeConstituents";
    ListFormat[ListFormat["ObjectBindingPatternElements"] = 525136] = "ObjectBindingPatternElements";
    ListFormat[ListFormat["ArrayBindingPatternElements"] = 524880] = "ArrayBindingPatternElements";
    ListFormat[ListFormat["ObjectLiteralExpressionProperties"] = 526226] = "ObjectLiteralExpressionProperties";
    ListFormat[ListFormat["ArrayLiteralExpressionElements"] = 8914] = "ArrayLiteralExpressionElements";
    ListFormat[ListFormat["CommaListElements"] = 528] = "CommaListElements";
    ListFormat[ListFormat["CallExpressionArguments"] = 2576] = "CallExpressionArguments";
    ListFormat[ListFormat["NewExpressionArguments"] = 18960] = "NewExpressionArguments";
    ListFormat[ListFormat["TemplateExpressionSpans"] = 262144] = "TemplateExpressionSpans";
    ListFormat[ListFormat["SingleLineBlockStatements"] = 768] = "SingleLineBlockStatements";
    ListFormat[ListFormat["MultiLineBlockStatements"] = 129] = "MultiLineBlockStatements";
    ListFormat[ListFormat["VariableDeclarationList"] = 528] = "VariableDeclarationList";
    ListFormat[ListFormat["SingleLineFunctionBodyStatements"] = 768] = "SingleLineFunctionBodyStatements";
    ListFormat[ListFormat["MultiLineFunctionBodyStatements"] = 1] = "MultiLineFunctionBodyStatements";
    ListFormat[ListFormat["ClassHeritageClauses"] = 0] = "ClassHeritageClauses";
    ListFormat[ListFormat["ClassMembers"] = 129] = "ClassMembers";
    ListFormat[ListFormat["InterfaceMembers"] = 129] = "InterfaceMembers";
    ListFormat[ListFormat["EnumMembers"] = 145] = "EnumMembers";
    ListFormat[ListFormat["CaseBlockClauses"] = 129] = "CaseBlockClauses";
    ListFormat[ListFormat["NamedImportsOrExportsElements"] = 525136] = "NamedImportsOrExportsElements";
    ListFormat[ListFormat["JsxElementOrFragmentChildren"] = 262144] = "JsxElementOrFragmentChildren";
    ListFormat[ListFormat["JsxElementAttributes"] = 262656] = "JsxElementAttributes";
    ListFormat[ListFormat["CaseOrDefaultClauseStatements"] = 163969] = "CaseOrDefaultClauseStatements";
    ListFormat[ListFormat["HeritageClauseTypes"] = 528] = "HeritageClauseTypes";
    ListFormat[ListFormat["SourceFileStatements"] = 131073] = "SourceFileStatements";
    ListFormat[ListFormat["Decorators"] = 2146305] = "Decorators";
    ListFormat[ListFormat["TypeArguments"] = 53776] = "TypeArguments";
    ListFormat[ListFormat["TypeParameters"] = 53776] = "TypeParameters";
    ListFormat[ListFormat["Parameters"] = 2576] = "Parameters";
    ListFormat[ListFormat["IndexSignatureParameters"] = 8848] = "IndexSignatureParameters";
    ListFormat[ListFormat["JSDocComment"] = 33] = "JSDocComment";
})(ListFormat || (ListFormat = {}));
/* @internal */
export var PragmaKindFlags;
(function (PragmaKindFlags) {
    PragmaKindFlags[PragmaKindFlags["None"] = 0] = "None";
    /**
     * Triple slash comment of the form
     * /// <pragma-name argname="value" />
     */
    PragmaKindFlags[PragmaKindFlags["TripleSlashXML"] = 1] = "TripleSlashXML";
    /**
     * Single line comment of the form
     * // @pragma-name argval1 argval2
     * or
     * /// @pragma-name argval1 argval2
     */
    PragmaKindFlags[PragmaKindFlags["SingleLine"] = 2] = "SingleLine";
    /**
     * Multiline non-jsdoc pragma of the form
     * /* @pragma-name argval1 argval2 * /
     */
    PragmaKindFlags[PragmaKindFlags["MultiLine"] = 4] = "MultiLine";
    PragmaKindFlags[PragmaKindFlags["All"] = 7] = "All";
    PragmaKindFlags[PragmaKindFlags["Default"] = 7] = "Default";
})(PragmaKindFlags || (PragmaKindFlags = {}));
// While not strictly a type, this is here because `PragmaMap` needs to be here to be used with `SourceFile`, and we don't
//  fancy effectively defining it twice, once in value-space and once in type-space
/* @internal */
export const commentPragmas = {
    "reference": {
        args: [
            { name: "types", optional: true, captureSpan: true },
            { name: "lib", optional: true, captureSpan: true },
            { name: "path", optional: true, captureSpan: true },
            { name: "no-default-lib", optional: true }
        ],
        kind: 1 /* TripleSlashXML */
    },
    "amd-dependency": {
        args: [{ name: "path" }, { name: "name", optional: true }],
        kind: 1 /* TripleSlashXML */
    },
    "amd-module": {
        args: [{ name: "name" }],
        kind: 1 /* TripleSlashXML */
    },
    "ts-check": {
        kind: 2 /* SingleLine */
    },
    "ts-nocheck": {
        kind: 2 /* SingleLine */
    },
    "jsx": {
        args: [{ name: "factory" }],
        kind: 4 /* MultiLine */
    },
    "jsxfrag": {
        args: [{ name: "factory" }],
        kind: 4 /* MultiLine */
    },
    "jsximportsource": {
        args: [{ name: "factory" }],
        kind: 4 /* MultiLine */
    },
    "jsxruntime": {
        args: [{ name: "factory" }],
        kind: 4 /* MultiLine */
    },
};
export var BuilderFileEmit;
(function (BuilderFileEmit) {
    BuilderFileEmit[BuilderFileEmit["DtsOnly"] = 0] = "DtsOnly";
    BuilderFileEmit[BuilderFileEmit["Full"] = 1] = "Full";
})(BuilderFileEmit || (BuilderFileEmit = {}));
export var PrivateIdentifierKind;
(function (PrivateIdentifierKind) {
    PrivateIdentifierKind["Field"] = "f";
    PrivateIdentifierKind["Method"] = "m";
    PrivateIdentifierKind["Accessor"] = "a";
})(PrivateIdentifierKind || (PrivateIdentifierKind = {}));
//# sourceMappingURL=types.js.map