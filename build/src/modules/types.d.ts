/**
 * Type of objects whose values are all of the same type.
 * The `in` and `for-in` operators can *not* be safely used,
 * since `Object.prototype` may be modified by outside code.
 */
export interface MapLike<T> {
    [index: string]: T;
}
/** Represents a "prefix*suffix" pattern. */
export interface Pattern {
    prefix: string;
    suffix: string;
}
export interface MultiMap<K, V> extends ESMap<K, V[]> {
    /**
     * Adds the value to an array of values associated with the key, and returns the array.
     * Creates the array if it does not already exist.
     */
    add(key: K, value: V): V[];
    /**
     * Removes a value from an array of values associated with the key.
     * Does not preserve the order of those values.
     * Does nothing if `key` is not in `map`, or `value` is not in `map[key]`.
     */
    remove(key: K, value: V): void;
}
export interface SortedReadonlyArray<T> extends ReadonlyArray<T> {
    " __sortedArrayBrand": any;
}
export interface SortedArray<T> extends Array<T> {
    " __sortedArrayBrand": any;
}
/** Common read methods for ES6 Map/Set. */
export interface ReadonlyCollection<K> {
    readonly size: number;
    has(key: K): boolean;
    keys(): Iterator<K>;
}
/** Common write methods for ES6 Map/Set. */
export interface Collection<K> extends ReadonlyCollection<K> {
    delete(key: K): boolean;
    clear(): void;
}
/** ES6 Map interface, only read methods included. */
export interface ReadonlyESMap<K, V> extends ReadonlyCollection<K> {
    get(key: K): V | undefined;
    values(): Iterator<V>;
    entries(): Iterator<[K, V]>;
    forEach(action: (value: V, key: K) => void): void;
}
/**
 * ES6 Map interface, only read methods included.
 */
export interface ReadonlyMap<T> extends ReadonlyESMap<string, T> {
}
/** ES6 Map interface. */
export interface ESMap<K, V> extends ReadonlyESMap<K, V>, Collection<K> {
    set(key: K, value: V): this;
}
/**
 * ES6 Map interface.
 */
export interface Map<T> extends ESMap<string, T> {
}
export interface MapConstructor {
    new <K, V>(iterable?: readonly (readonly [K, V])[] | ReadonlyESMap<K, V>): ESMap<K, V>;
}
/** ES6 Set interface, only read methods included. */
export interface ReadonlySet<T> extends ReadonlyCollection<T> {
    has(value: T): boolean;
    values(): Iterator<T>;
    entries(): Iterator<[T, T]>;
    forEach(action: (value: T, key: T) => void): void;
}
/** ES6 Set interface. */
export interface Set<T> extends ReadonlySet<T>, Collection<T> {
    add(value: T): this;
    delete(value: T): boolean;
}
export interface SetConstructor {
    new <T>(iterable?: readonly T[] | ReadonlySet<T>): Set<T>;
}
/** ES6 Iterator type. */
export interface Iterator<T> {
    next(): {
        value: T;
        done?: false;
    } | {
        value: void;
        done: true;
    };
}
/** Array that is only intended to be pushed to, never read. */
export interface Push<T> {
    push(...values: T[]): void;
    readonly length: number;
}
export declare type EqualityComparer<T> = (a: T, b: T) => boolean;
export declare type Comparer<T> = (a: T, b: T) => Comparison;
export declare const enum Comparison {
    LessThan = -1,
    EqualTo = 0,
    GreaterThan = 1
}
/**
<file /src/compiler/types.ts>
**/
export declare type Path = string & {
    __pathBrand: any;
};
export declare type MatchingKeys<TRecord, TMatch, K extends keyof TRecord = keyof TRecord> = K extends (TRecord[K] extends TMatch ? K : never) ? K : never;
export interface TextRange {
    pos: number;
    end: number;
}
export interface ReadonlyTextRange {
    readonly pos: number;
    readonly end: number;
}
export declare const enum SyntaxKind {
    Unknown = 0,
    EndOfFileToken = 1,
    SingleLineCommentTrivia = 2,
    MultiLineCommentTrivia = 3,
    NewLineTrivia = 4,
    WhitespaceTrivia = 5,
    ShebangTrivia = 6,
    ConflictMarkerTrivia = 7,
    NumericLiteral = 8,
    BigIntLiteral = 9,
    StringLiteral = 10,
    JsxText = 11,
    JsxTextAllWhiteSpaces = 12,
    RegularExpressionLiteral = 13,
    NoSubstitutionTemplateLiteral = 14,
    TemplateHead = 15,
    TemplateMiddle = 16,
    TemplateTail = 17,
    OpenBraceToken = 18,
    CloseBraceToken = 19,
    OpenParenToken = 20,
    CloseParenToken = 21,
    OpenBracketToken = 22,
    CloseBracketToken = 23,
    DotToken = 24,
    DotDotDotToken = 25,
    SemicolonToken = 26,
    CommaToken = 27,
    QuestionDotToken = 28,
    LessThanToken = 29,
    LessThanSlashToken = 30,
    GreaterThanToken = 31,
    LessThanEqualsToken = 32,
    GreaterThanEqualsToken = 33,
    EqualsEqualsToken = 34,
    ExclamationEqualsToken = 35,
    EqualsEqualsEqualsToken = 36,
    ExclamationEqualsEqualsToken = 37,
    EqualsGreaterThanToken = 38,
    PlusToken = 39,
    MinusToken = 40,
    AsteriskToken = 41,
    AsteriskAsteriskToken = 42,
    SlashToken = 43,
    PercentToken = 44,
    PlusPlusToken = 45,
    MinusMinusToken = 46,
    LessThanLessThanToken = 47,
    GreaterThanGreaterThanToken = 48,
    GreaterThanGreaterThanGreaterThanToken = 49,
    AmpersandToken = 50,
    BarToken = 51,
    CaretToken = 52,
    ExclamationToken = 53,
    TildeToken = 54,
    AmpersandAmpersandToken = 55,
    BarBarToken = 56,
    QuestionToken = 57,
    ColonToken = 58,
    AtToken = 59,
    QuestionQuestionToken = 60,
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    BacktickToken = 61,
    EqualsToken = 62,
    PlusEqualsToken = 63,
    MinusEqualsToken = 64,
    AsteriskEqualsToken = 65,
    AsteriskAsteriskEqualsToken = 66,
    SlashEqualsToken = 67,
    PercentEqualsToken = 68,
    LessThanLessThanEqualsToken = 69,
    GreaterThanGreaterThanEqualsToken = 70,
    GreaterThanGreaterThanGreaterThanEqualsToken = 71,
    AmpersandEqualsToken = 72,
    BarEqualsToken = 73,
    BarBarEqualsToken = 74,
    AmpersandAmpersandEqualsToken = 75,
    QuestionQuestionEqualsToken = 76,
    CaretEqualsToken = 77,
    Identifier = 78,
    PrivateIdentifier = 79,
    BreakKeyword = 80,
    CaseKeyword = 81,
    CatchKeyword = 82,
    ClassKeyword = 83,
    ConstKeyword = 84,
    ContinueKeyword = 85,
    DebuggerKeyword = 86,
    DefaultKeyword = 87,
    DeleteKeyword = 88,
    DoKeyword = 89,
    ElseKeyword = 90,
    EnumKeyword = 91,
    ExportKeyword = 92,
    ExtendsKeyword = 93,
    FalseKeyword = 94,
    FinallyKeyword = 95,
    ForKeyword = 96,
    FunctionKeyword = 97,
    IfKeyword = 98,
    ImportKeyword = 99,
    InKeyword = 100,
    InstanceOfKeyword = 101,
    NewKeyword = 102,
    NullKeyword = 103,
    ReturnKeyword = 104,
    SuperKeyword = 105,
    SwitchKeyword = 106,
    ThisKeyword = 107,
    ThrowKeyword = 108,
    TrueKeyword = 109,
    TryKeyword = 110,
    TypeOfKeyword = 111,
    VarKeyword = 112,
    VoidKeyword = 113,
    WhileKeyword = 114,
    WithKeyword = 115,
    ImplementsKeyword = 116,
    InterfaceKeyword = 117,
    LetKeyword = 118,
    PackageKeyword = 119,
    PrivateKeyword = 120,
    ProtectedKeyword = 121,
    PublicKeyword = 122,
    StaticKeyword = 123,
    YieldKeyword = 124,
    AbstractKeyword = 125,
    AsKeyword = 126,
    AssertsKeyword = 127,
    AnyKeyword = 128,
    AsyncKeyword = 129,
    AwaitKeyword = 130,
    BooleanKeyword = 131,
    ConstructorKeyword = 132,
    DeclareKeyword = 133,
    GetKeyword = 134,
    InferKeyword = 135,
    IntrinsicKeyword = 136,
    IsKeyword = 137,
    KeyOfKeyword = 138,
    ModuleKeyword = 139,
    NamespaceKeyword = 140,
    NeverKeyword = 141,
    ReadonlyKeyword = 142,
    RequireKeyword = 143,
    NumberKeyword = 144,
    ObjectKeyword = 145,
    SetKeyword = 146,
    StringKeyword = 147,
    SymbolKeyword = 148,
    TypeKeyword = 149,
    UndefinedKeyword = 150,
    UniqueKeyword = 151,
    UnknownKeyword = 152,
    FromKeyword = 153,
    GlobalKeyword = 154,
    BigIntKeyword = 155,
    OverrideKeyword = 156,
    OfKeyword = 157,
    QualifiedName = 158,
    ComputedPropertyName = 159,
    TypeParameter = 160,
    Parameter = 161,
    Decorator = 162,
    PropertySignature = 163,
    PropertyDeclaration = 164,
    MethodSignature = 165,
    MethodDeclaration = 166,
    Constructor = 167,
    GetAccessor = 168,
    SetAccessor = 169,
    CallSignature = 170,
    ConstructSignature = 171,
    IndexSignature = 172,
    TypePredicate = 173,
    TypeReference = 174,
    FunctionType = 175,
    ConstructorType = 176,
    TypeQuery = 177,
    TypeLiteral = 178,
    ArrayType = 179,
    TupleType = 180,
    OptionalType = 181,
    RestType = 182,
    UnionType = 183,
    IntersectionType = 184,
    ConditionalType = 185,
    InferType = 186,
    ParenthesizedType = 187,
    ThisType = 188,
    TypeOperator = 189,
    IndexedAccessType = 190,
    MappedType = 191,
    LiteralType = 192,
    NamedTupleMember = 193,
    TemplateLiteralType = 194,
    TemplateLiteralTypeSpan = 195,
    ImportType = 196,
    ObjectBindingPattern = 197,
    ArrayBindingPattern = 198,
    BindingElement = 199,
    ArrayLiteralExpression = 200,
    ObjectLiteralExpression = 201,
    PropertyAccessExpression = 202,
    ElementAccessExpression = 203,
    CallExpression = 204,
    NewExpression = 205,
    TaggedTemplateExpression = 206,
    TypeAssertionExpression = 207,
    ParenthesizedExpression = 208,
    FunctionExpression = 209,
    ArrowFunction = 210,
    DeleteExpression = 211,
    TypeOfExpression = 212,
    VoidExpression = 213,
    AwaitExpression = 214,
    PrefixUnaryExpression = 215,
    PostfixUnaryExpression = 216,
    BinaryExpression = 217,
    ConditionalExpression = 218,
    TemplateExpression = 219,
    YieldExpression = 220,
    SpreadElement = 221,
    ClassExpression = 222,
    OmittedExpression = 223,
    ExpressionWithTypeArguments = 224,
    AsExpression = 225,
    NonNullExpression = 226,
    MetaProperty = 227,
    SyntheticExpression = 228,
    TemplateSpan = 229,
    SemicolonClassElement = 230,
    Block = 231,
    EmptyStatement = 232,
    VariableStatement = 233,
    ExpressionStatement = 234,
    IfStatement = 235,
    DoStatement = 236,
    WhileStatement = 237,
    ForStatement = 238,
    ForInStatement = 239,
    ForOfStatement = 240,
    ContinueStatement = 241,
    BreakStatement = 242,
    ReturnStatement = 243,
    WithStatement = 244,
    SwitchStatement = 245,
    LabeledStatement = 246,
    ThrowStatement = 247,
    TryStatement = 248,
    DebuggerStatement = 249,
    VariableDeclaration = 250,
    VariableDeclarationList = 251,
    FunctionDeclaration = 252,
    ClassDeclaration = 253,
    InterfaceDeclaration = 254,
    TypeAliasDeclaration = 255,
    EnumDeclaration = 256,
    ModuleDeclaration = 257,
    ModuleBlock = 258,
    CaseBlock = 259,
    NamespaceExportDeclaration = 260,
    ImportEqualsDeclaration = 261,
    ImportDeclaration = 262,
    ImportClause = 263,
    NamespaceImport = 264,
    NamedImports = 265,
    ImportSpecifier = 266,
    ExportAssignment = 267,
    ExportDeclaration = 268,
    NamedExports = 269,
    NamespaceExport = 270,
    ExportSpecifier = 271,
    MissingDeclaration = 272,
    ExternalModuleReference = 273,
    JsxElement = 274,
    JsxSelfClosingElement = 275,
    JsxOpeningElement = 276,
    JsxClosingElement = 277,
    JsxFragment = 278,
    JsxOpeningFragment = 279,
    JsxClosingFragment = 280,
    JsxAttribute = 281,
    JsxAttributes = 282,
    JsxSpreadAttribute = 283,
    JsxExpression = 284,
    CaseClause = 285,
    DefaultClause = 286,
    HeritageClause = 287,
    CatchClause = 288,
    PropertyAssignment = 289,
    ShorthandPropertyAssignment = 290,
    SpreadAssignment = 291,
    EnumMember = 292,
    UnparsedPrologue = 293,
    UnparsedPrepend = 294,
    UnparsedText = 295,
    UnparsedInternalText = 296,
    UnparsedSyntheticReference = 297,
    SourceFile = 298,
    Bundle = 299,
    UnparsedSource = 300,
    InputFiles = 301,
    JSDocTypeExpression = 302,
    JSDocNameReference = 303,
    JSDocAllType = 304,
    JSDocUnknownType = 305,
    JSDocNullableType = 306,
    JSDocNonNullableType = 307,
    JSDocOptionalType = 308,
    JSDocFunctionType = 309,
    JSDocVariadicType = 310,
    JSDocNamepathType = 311,
    JSDocComment = 312,
    JSDocText = 313,
    JSDocTypeLiteral = 314,
    JSDocSignature = 315,
    JSDocLink = 316,
    JSDocTag = 317,
    JSDocAugmentsTag = 318,
    JSDocImplementsTag = 319,
    JSDocAuthorTag = 320,
    JSDocDeprecatedTag = 321,
    JSDocClassTag = 322,
    JSDocPublicTag = 323,
    JSDocPrivateTag = 324,
    JSDocProtectedTag = 325,
    JSDocReadonlyTag = 326,
    JSDocOverrideTag = 327,
    JSDocCallbackTag = 328,
    JSDocEnumTag = 329,
    JSDocParameterTag = 330,
    JSDocReturnTag = 331,
    JSDocThisTag = 332,
    JSDocTypeTag = 333,
    JSDocTemplateTag = 334,
    JSDocTypedefTag = 335,
    JSDocSeeTag = 336,
    JSDocPropertyTag = 337,
    SyntaxList = 338,
    NotEmittedStatement = 339,
    PartiallyEmittedExpression = 340,
    CommaListExpression = 341,
    MergeDeclarationMarker = 342,
    EndOfDeclarationMarker = 343,
    SyntheticReferenceExpression = 344,
    Count = 345,
    FirstAssignment = 62,
    LastAssignment = 77,
    FirstCompoundAssignment = 63,
    LastCompoundAssignment = 77,
    FirstReservedWord = 80,
    LastReservedWord = 115,
    FirstKeyword = 80,
    LastKeyword = 157,
    FirstFutureReservedWord = 116,
    LastFutureReservedWord = 124,
    FirstTypeNode = 173,
    LastTypeNode = 196,
    FirstPunctuation = 18,
    LastPunctuation = 77,
    FirstToken = 0,
    LastToken = 157,
    FirstTriviaToken = 2,
    LastTriviaToken = 7,
    FirstLiteralToken = 8,
    LastLiteralToken = 14,
    FirstTemplateToken = 14,
    LastTemplateToken = 17,
    FirstBinaryOperator = 29,
    LastBinaryOperator = 77,
    FirstStatement = 233,
    LastStatement = 249,
    FirstNode = 158,
    FirstJSDocNode = 302,
    LastJSDocNode = 337,
    FirstJSDocTagNode = 317,
    LastJSDocTagNode = 337,
    FirstContextualKeyword = 125,
    LastContextualKeyword = 157
}
export declare type TriviaSyntaxKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia | SyntaxKind.NewLineTrivia | SyntaxKind.WhitespaceTrivia | SyntaxKind.ShebangTrivia | SyntaxKind.ConflictMarkerTrivia;
export declare type LiteralSyntaxKind = SyntaxKind.NumericLiteral | SyntaxKind.BigIntLiteral | SyntaxKind.StringLiteral | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.RegularExpressionLiteral | SyntaxKind.NoSubstitutionTemplateLiteral;
export declare type PseudoLiteralSyntaxKind = SyntaxKind.TemplateHead | SyntaxKind.TemplateMiddle | SyntaxKind.TemplateTail;
export declare type PunctuationSyntaxKind = SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.OpenParenToken | SyntaxKind.CloseParenToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.DotToken | SyntaxKind.DotDotDotToken | SyntaxKind.SemicolonToken | SyntaxKind.CommaToken | SyntaxKind.QuestionDotToken | SyntaxKind.LessThanToken | SyntaxKind.LessThanSlashToken | SyntaxKind.GreaterThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.EqualsEqualsToken | SyntaxKind.ExclamationEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.EqualsGreaterThanToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.AsteriskToken | SyntaxKind.AsteriskAsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken | SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken | SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken | SyntaxKind.ExclamationToken | SyntaxKind.TildeToken | SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken | SyntaxKind.QuestionQuestionToken | SyntaxKind.QuestionToken | SyntaxKind.ColonToken | SyntaxKind.AtToken | SyntaxKind.BacktickToken | SyntaxKind.EqualsToken | SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken;
export declare type KeywordSyntaxKind = SyntaxKind.AbstractKeyword | SyntaxKind.AnyKeyword | SyntaxKind.AsKeyword | SyntaxKind.AssertsKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.AwaitKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.BreakKeyword | SyntaxKind.CaseKeyword | SyntaxKind.CatchKeyword | SyntaxKind.ClassKeyword | SyntaxKind.ConstKeyword | SyntaxKind.ConstructorKeyword | SyntaxKind.ContinueKeyword | SyntaxKind.DebuggerKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.DeleteKeyword | SyntaxKind.DoKeyword | SyntaxKind.ElseKeyword | SyntaxKind.EnumKeyword | SyntaxKind.ExportKeyword | SyntaxKind.ExtendsKeyword | SyntaxKind.FalseKeyword | SyntaxKind.FinallyKeyword | SyntaxKind.ForKeyword | SyntaxKind.FromKeyword | SyntaxKind.FunctionKeyword | SyntaxKind.GetKeyword | SyntaxKind.GlobalKeyword | SyntaxKind.IfKeyword | SyntaxKind.ImplementsKeyword | SyntaxKind.ImportKeyword | SyntaxKind.InferKeyword | SyntaxKind.InKeyword | SyntaxKind.InstanceOfKeyword | SyntaxKind.InterfaceKeyword | SyntaxKind.IntrinsicKeyword | SyntaxKind.IsKeyword | SyntaxKind.KeyOfKeyword | SyntaxKind.LetKeyword | SyntaxKind.ModuleKeyword | SyntaxKind.NamespaceKeyword | SyntaxKind.NeverKeyword | SyntaxKind.NewKeyword | SyntaxKind.NullKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.OfKeyword | SyntaxKind.PackageKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.OverrideKeyword | SyntaxKind.RequireKeyword | SyntaxKind.ReturnKeyword | SyntaxKind.SetKeyword | SyntaxKind.StaticKeyword | SyntaxKind.StringKeyword | SyntaxKind.SuperKeyword | SyntaxKind.SwitchKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.ThisKeyword | SyntaxKind.ThrowKeyword | SyntaxKind.TrueKeyword | SyntaxKind.TryKeyword | SyntaxKind.TypeKeyword | SyntaxKind.TypeOfKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.VarKeyword | SyntaxKind.VoidKeyword | SyntaxKind.WhileKeyword | SyntaxKind.WithKeyword | SyntaxKind.YieldKeyword;
export declare type ModifierSyntaxKind = SyntaxKind.AbstractKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.ConstKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.ExportKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.OverrideKeyword | SyntaxKind.StaticKeyword;
export declare type KeywordTypeSyntaxKind = SyntaxKind.AnyKeyword | SyntaxKind.BigIntKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.IntrinsicKeyword | SyntaxKind.NeverKeyword | SyntaxKind.NumberKeyword | SyntaxKind.ObjectKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.UnknownKeyword | SyntaxKind.VoidKeyword;
export declare type TypeNodeSyntaxKind = KeywordTypeSyntaxKind | SyntaxKind.TypePredicate | SyntaxKind.TypeReference | SyntaxKind.FunctionType | SyntaxKind.ConstructorType | SyntaxKind.TypeQuery | SyntaxKind.TypeLiteral | SyntaxKind.ArrayType | SyntaxKind.TupleType | SyntaxKind.NamedTupleMember | SyntaxKind.OptionalType | SyntaxKind.RestType | SyntaxKind.UnionType | SyntaxKind.IntersectionType | SyntaxKind.ConditionalType | SyntaxKind.InferType | SyntaxKind.ParenthesizedType | SyntaxKind.ThisType | SyntaxKind.TypeOperator | SyntaxKind.IndexedAccessType | SyntaxKind.MappedType | SyntaxKind.LiteralType | SyntaxKind.TemplateLiteralType | SyntaxKind.TemplateLiteralTypeSpan | SyntaxKind.ImportType | SyntaxKind.ExpressionWithTypeArguments | SyntaxKind.JSDocTypeExpression | SyntaxKind.JSDocAllType | SyntaxKind.JSDocUnknownType | SyntaxKind.JSDocNonNullableType | SyntaxKind.JSDocNullableType | SyntaxKind.JSDocOptionalType | SyntaxKind.JSDocFunctionType | SyntaxKind.JSDocVariadicType | SyntaxKind.JSDocNamepathType | SyntaxKind.JSDocSignature | SyntaxKind.JSDocTypeLiteral;
export declare type TokenSyntaxKind = SyntaxKind.Unknown | SyntaxKind.EndOfFileToken | TriviaSyntaxKind | LiteralSyntaxKind | PseudoLiteralSyntaxKind | PunctuationSyntaxKind | SyntaxKind.Identifier | KeywordSyntaxKind;
export declare type JsxTokenSyntaxKind = SyntaxKind.LessThanSlashToken | SyntaxKind.EndOfFileToken | SyntaxKind.ConflictMarkerTrivia | SyntaxKind.JsxText | SyntaxKind.JsxTextAllWhiteSpaces | SyntaxKind.OpenBraceToken | SyntaxKind.LessThanToken;
export declare type JSDocSyntaxKind = SyntaxKind.EndOfFileToken | SyntaxKind.WhitespaceTrivia | SyntaxKind.AtToken | SyntaxKind.NewLineTrivia | SyntaxKind.AsteriskToken | SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.LessThanToken | SyntaxKind.GreaterThanToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.EqualsToken | SyntaxKind.CommaToken | SyntaxKind.DotToken | SyntaxKind.Identifier | SyntaxKind.BacktickToken | SyntaxKind.Unknown | KeywordSyntaxKind;
export declare const enum NodeFlags {
    None = 0,
    Let = 1,
    Const = 2,
    NestedNamespace = 4,
    Synthesized = 8,
    Namespace = 16,
    OptionalChain = 32,
    ExportContext = 64,
    ContainsThis = 128,
    HasImplicitReturn = 256,
    HasExplicitReturn = 512,
    GlobalAugmentation = 1024,
    HasAsyncFunctions = 2048,
    DisallowInContext = 4096,
    YieldContext = 8192,
    DecoratorContext = 16384,
    AwaitContext = 32768,
    ThisNodeHasError = 65536,
    JavaScriptFile = 131072,
    ThisNodeOrAnySubNodesHasError = 262144,
    HasAggregatedChildData = 524288,
    PossiblyContainsDynamicImport = 1048576,
    PossiblyContainsImportMeta = 2097152,
    JSDoc = 4194304,
    Ambient = 8388608,
    InWithStatement = 16777216,
    JsonFile = 33554432,
    TypeCached = 67108864,
    Deprecated = 134217728,
    BlockScoped = 3,
    ReachabilityCheckFlags = 768,
    ReachabilityAndEmitFlags = 2816,
    ContextFlags = 25358336,
    TypeExcludesFlags = 40960,
    PermanentlySetIncrementalFlags = 3145728
}
export declare const enum ModifierFlags {
    None = 0,
    Export = 1,
    Ambient = 2,
    Public = 4,
    Private = 8,
    Protected = 16,
    Static = 32,
    Readonly = 64,
    Abstract = 128,
    Async = 256,
    Default = 512,
    Const = 2048,
    HasComputedJSDocModifiers = 4096,
    Deprecated = 8192,
    Override = 16384,
    HasComputedFlags = 536870912,
    AccessibilityModifier = 28,
    ParameterPropertyModifier = 16476,
    NonPublicAccessibilityModifier = 24,
    TypeScriptModifier = 18654,
    ExportDefault = 513,
    All = 27647
}
export declare const enum JsxFlags {
    None = 0,
    /** An element from a named property of the JSX.IntrinsicElements interface */
    IntrinsicNamedElement = 1,
    /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
    IntrinsicIndexedElement = 2,
    IntrinsicElement = 3
}
export declare const enum RelationComparisonResult {
    Succeeded = 1,
    Failed = 2,
    Reported = 4,
    ReportsUnmeasurable = 8,
    ReportsUnreliable = 16,
    ReportsMask = 24
}
export declare type NodeId = number;
export interface Node extends ReadonlyTextRange {
    readonly kind: SyntaxKind;
    readonly flags: NodeFlags;
    modifierFlagsCache: ModifierFlags;
    readonly transformFlags: TransformFlags;
    readonly decorators?: NodeArray<Decorator>;
    readonly modifiers?: ModifiersArray;
    id?: NodeId;
    readonly parent: Node;
    original?: Node;
    symbol: Symbol;
    locals?: SymbolTable;
    nextContainer?: Node;
    localSymbol?: Symbol;
    flowNode?: FlowNode;
    emitNode?: EmitNode;
    contextualType?: Type;
    inferenceContext?: InferenceContext;
}
export interface JSDocContainer {
    jsDoc?: JSDoc[];
    jsDocCache?: readonly JSDocTag[];
}
export declare type HasJSDoc = ParameterDeclaration | CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | PropertySignature | ArrowFunction | ParenthesizedExpression | SpreadAssignment | ShorthandPropertyAssignment | PropertyAssignment | FunctionExpression | EmptyStatement | DebuggerStatement | Block | VariableStatement | ExpressionStatement | IfStatement | DoStatement | WhileStatement | ForStatement | ForInStatement | ForOfStatement | BreakStatement | ContinueStatement | ReturnStatement | WithStatement | SwitchStatement | LabeledStatement | ThrowStatement | TryStatement | FunctionDeclaration | ConstructorDeclaration | MethodDeclaration | VariableDeclaration | PropertyDeclaration | AccessorDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | EnumMember | EnumDeclaration | ModuleDeclaration | ImportEqualsDeclaration | ImportDeclaration | NamespaceExportDeclaration | ExportAssignment | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | ExportDeclaration | NamedTupleMember | EndOfFileToken;
export declare type HasType = SignatureDeclaration | VariableDeclaration | ParameterDeclaration | PropertySignature | PropertyDeclaration | TypePredicateNode | ParenthesizedTypeNode | TypeOperatorNode | MappedTypeNode | AssertionExpression | TypeAliasDeclaration | JSDocTypeExpression | JSDocNonNullableType | JSDocNullableType | JSDocOptionalType | JSDocVariadicType;
export declare type HasTypeArguments = CallExpression | NewExpression | TaggedTemplateExpression | JsxOpeningElement | JsxSelfClosingElement;
export declare type HasInitializer = HasExpressionInitializer | ForStatement | ForInStatement | ForOfStatement | JsxAttribute;
export declare type HasExpressionInitializer = VariableDeclaration | ParameterDeclaration | BindingElement | PropertySignature | PropertyDeclaration | PropertyAssignment | EnumMember;
export declare type HasModifiers = ParameterDeclaration | PropertySignature | PropertyDeclaration | MethodSignature | MethodDeclaration | ConstructorDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | IndexSignatureDeclaration | FunctionExpression | ArrowFunction | ClassExpression | VariableStatement | FunctionDeclaration | ClassDeclaration | InterfaceDeclaration | TypeAliasDeclaration | EnumDeclaration | ModuleDeclaration | ImportEqualsDeclaration | ImportDeclaration | ExportAssignment | ExportDeclaration;
export declare type MutableNodeArray<T extends Node> = NodeArray<T> & T[];
export interface NodeArray<T extends Node> extends ReadonlyArray<T>, ReadonlyTextRange {
    hasTrailingComma?: boolean;
    transformFlags: TransformFlags;
}
export interface Token<TKind extends SyntaxKind> extends Node {
    readonly kind: TKind;
}
export declare type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> & JSDocContainer;
export interface PunctuationToken<TKind extends PunctuationSyntaxKind> extends Token<TKind> {
}
export declare type DotToken = PunctuationToken<SyntaxKind.DotToken>;
export declare type DotDotDotToken = PunctuationToken<SyntaxKind.DotDotDotToken>;
export declare type QuestionToken = PunctuationToken<SyntaxKind.QuestionToken>;
export declare type ExclamationToken = PunctuationToken<SyntaxKind.ExclamationToken>;
export declare type ColonToken = PunctuationToken<SyntaxKind.ColonToken>;
export declare type EqualsToken = PunctuationToken<SyntaxKind.EqualsToken>;
export declare type AsteriskToken = PunctuationToken<SyntaxKind.AsteriskToken>;
export declare type EqualsGreaterThanToken = PunctuationToken<SyntaxKind.EqualsGreaterThanToken>;
export declare type PlusToken = PunctuationToken<SyntaxKind.PlusToken>;
export declare type MinusToken = PunctuationToken<SyntaxKind.MinusToken>;
export declare type QuestionDotToken = PunctuationToken<SyntaxKind.QuestionDotToken>;
export interface KeywordToken<TKind extends KeywordSyntaxKind> extends Token<TKind> {
}
export declare type AssertsKeyword = KeywordToken<SyntaxKind.AssertsKeyword>;
export declare type AwaitKeyword = KeywordToken<SyntaxKind.AwaitKeyword>;
/** @deprecated Use `AwaitKeyword` instead. */
export declare type AwaitKeywordToken = AwaitKeyword;
/** @deprecated Use `AssertsKeyword` instead. */
export declare type AssertsToken = AssertsKeyword;
export interface ModifierToken<TKind extends ModifierSyntaxKind> extends KeywordToken<TKind> {
}
export declare type AbstractKeyword = ModifierToken<SyntaxKind.AbstractKeyword>;
export declare type AsyncKeyword = ModifierToken<SyntaxKind.AsyncKeyword>;
export declare type ConstKeyword = ModifierToken<SyntaxKind.ConstKeyword>;
export declare type DeclareKeyword = ModifierToken<SyntaxKind.DeclareKeyword>;
export declare type DefaultKeyword = ModifierToken<SyntaxKind.DefaultKeyword>;
export declare type ExportKeyword = ModifierToken<SyntaxKind.ExportKeyword>;
export declare type PrivateKeyword = ModifierToken<SyntaxKind.PrivateKeyword>;
export declare type ProtectedKeyword = ModifierToken<SyntaxKind.ProtectedKeyword>;
export declare type PublicKeyword = ModifierToken<SyntaxKind.PublicKeyword>;
export declare type ReadonlyKeyword = ModifierToken<SyntaxKind.ReadonlyKeyword>;
export declare type OverrideKeyword = ModifierToken<SyntaxKind.OverrideKeyword>;
export declare type StaticKeyword = ModifierToken<SyntaxKind.StaticKeyword>;
/** @deprecated Use `ReadonlyKeyword` instead. */
export declare type ReadonlyToken = ReadonlyKeyword;
export declare type Modifier = AbstractKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
export declare type AccessibilityModifier = PublicKeyword | PrivateKeyword | ProtectedKeyword;
export declare type ParameterPropertyModifier = AccessibilityModifier | ReadonlyKeyword;
export declare type ClassMemberModifier = AccessibilityModifier | ReadonlyKeyword | StaticKeyword;
export declare type ModifiersArray = NodeArray<Modifier>;
export declare const enum GeneratedIdentifierFlags {
    None = 0,
    Auto = 1,
    Loop = 2,
    Unique = 3,
    Node = 4,
    KindMask = 7,
    ReservedInNestedScopes = 8,
    Optimistic = 16,
    FileLevel = 32,
    AllowNameSubstitution = 64
}
export interface Identifier extends PrimaryExpression, Declaration {
    readonly kind: SyntaxKind.Identifier;
    /**
     * Prefer to use `id.unescapedText`. (Note: This is available only in services, not internally to the TypeScript compiler.)
     * Text of identifier, but if the identifier begins with two underscores, this will begin with three.
     */
    readonly escapedText: __String;
    readonly originalKeywordKind?: SyntaxKind;
    readonly autoGenerateFlags?: GeneratedIdentifierFlags;
    readonly autoGenerateId?: number;
    generatedImportReference?: ImportSpecifier;
    isInJSDocNamespace?: boolean;
    typeArguments?: NodeArray<TypeNode | TypeParameterDeclaration>;
    jsdocDotPos?: number;
}
export interface TransientIdentifier extends Identifier {
    resolvedSymbol: Symbol;
}
export interface GeneratedIdentifier extends Identifier {
    autoGenerateFlags: GeneratedIdentifierFlags;
}
export interface QualifiedName extends Node {
    readonly kind: SyntaxKind.QualifiedName;
    readonly left: EntityName;
    readonly right: Identifier;
    jsdocDotPos?: number;
}
export declare type EntityName = Identifier | QualifiedName;
export declare type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName | PrivateIdentifier;
export declare type MemberName = Identifier | PrivateIdentifier;
export declare type DeclarationName = Identifier | PrivateIdentifier | StringLiteralLike | NumericLiteral | ComputedPropertyName | ElementAccessExpression | BindingPattern | EntityNameExpression;
export interface Declaration extends Node {
    _declarationBrand: any;
}
export interface NamedDeclaration extends Declaration {
    readonly name?: DeclarationName;
}
export interface DynamicNamedDeclaration extends NamedDeclaration {
    readonly name: ComputedPropertyName;
}
export interface DynamicNamedBinaryExpression extends BinaryExpression {
    readonly left: ElementAccessExpression;
}
export interface LateBoundDeclaration extends DynamicNamedDeclaration {
    readonly name: LateBoundName;
}
export interface LateBoundBinaryExpressionDeclaration extends DynamicNamedBinaryExpression {
    readonly left: LateBoundElementAccessExpression;
}
export interface LateBoundElementAccessExpression extends ElementAccessExpression {
    readonly argumentExpression: EntityNameExpression;
}
export interface DeclarationStatement extends NamedDeclaration, Statement {
    readonly name?: Identifier | StringLiteral | NumericLiteral;
}
export interface ComputedPropertyName extends Node {
    readonly kind: SyntaxKind.ComputedPropertyName;
    readonly parent: Declaration;
    readonly expression: Expression;
}
export interface PrivateIdentifier extends Node {
    readonly kind: SyntaxKind.PrivateIdentifier;
    readonly escapedText: __String;
}
export interface LateBoundName extends ComputedPropertyName {
    readonly expression: EntityNameExpression;
}
export interface Decorator extends Node {
    readonly kind: SyntaxKind.Decorator;
    readonly parent: NamedDeclaration;
    readonly expression: LeftHandSideExpression;
}
export interface TypeParameterDeclaration extends NamedDeclaration {
    readonly kind: SyntaxKind.TypeParameter;
    readonly parent: DeclarationWithTypeParameterChildren | InferTypeNode;
    readonly name: Identifier;
    /** Note: Consider calling `getEffectiveConstraintOfTypeParameter` */
    readonly constraint?: TypeNode;
    readonly default?: TypeNode;
    expression?: Expression;
}
export interface SignatureDeclarationBase extends NamedDeclaration, JSDocContainer {
    readonly kind: SignatureDeclaration["kind"];
    readonly name?: PropertyName;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly parameters: NodeArray<ParameterDeclaration>;
    readonly type?: TypeNode;
    typeArguments?: NodeArray<TypeNode>;
}
export declare type SignatureDeclaration = CallSignatureDeclaration | ConstructSignatureDeclaration | MethodSignature | IndexSignatureDeclaration | FunctionTypeNode | ConstructorTypeNode | JSDocFunctionType | FunctionDeclaration | MethodDeclaration | ConstructorDeclaration | AccessorDeclaration | FunctionExpression | ArrowFunction;
export interface CallSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
    readonly kind: SyntaxKind.CallSignature;
}
export interface ConstructSignatureDeclaration extends SignatureDeclarationBase, TypeElement {
    readonly kind: SyntaxKind.ConstructSignature;
}
export declare type BindingName = Identifier | BindingPattern;
export interface VariableDeclaration extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.VariableDeclaration;
    readonly parent: VariableDeclarationList | CatchClause;
    readonly name: BindingName;
    readonly exclamationToken?: ExclamationToken;
    readonly type?: TypeNode;
    readonly initializer?: Expression;
}
export declare type InitializedVariableDeclaration = VariableDeclaration & {
    readonly initializer: Expression;
};
export interface VariableDeclarationList extends Node {
    readonly kind: SyntaxKind.VariableDeclarationList;
    readonly parent: VariableStatement | ForStatement | ForOfStatement | ForInStatement;
    readonly declarations: NodeArray<VariableDeclaration>;
}
export interface ParameterDeclaration extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.Parameter;
    readonly parent: SignatureDeclaration;
    readonly dotDotDotToken?: DotDotDotToken;
    readonly name: BindingName;
    readonly questionToken?: QuestionToken;
    readonly type?: TypeNode;
    readonly initializer?: Expression;
}
export interface BindingElement extends NamedDeclaration {
    readonly kind: SyntaxKind.BindingElement;
    readonly parent: BindingPattern;
    readonly propertyName?: PropertyName;
    readonly dotDotDotToken?: DotDotDotToken;
    readonly name: BindingName;
    readonly initializer?: Expression;
}
export declare type BindingElementGrandparent = BindingElement["parent"]["parent"];
export interface PropertySignature extends TypeElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertySignature;
    readonly name: PropertyName;
    readonly questionToken?: QuestionToken;
    readonly type?: TypeNode;
    initializer?: Expression;
}
export interface PropertyDeclaration extends ClassElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertyDeclaration;
    readonly parent: ClassLikeDeclaration;
    readonly name: PropertyName;
    readonly questionToken?: QuestionToken;
    readonly exclamationToken?: ExclamationToken;
    readonly type?: TypeNode;
    readonly initializer?: Expression;
}
export interface PrivateIdentifierPropertyDeclaration extends PropertyDeclaration {
    name: PrivateIdentifier;
}
export interface PrivateIdentifierMethodDeclaration extends MethodDeclaration {
    name: PrivateIdentifier;
}
export interface PrivateIdentifierGetAccessorDeclaration extends GetAccessorDeclaration {
    name: PrivateIdentifier;
}
export interface PrivateIdentifierSetAccessorDeclaration extends SetAccessorDeclaration {
    name: PrivateIdentifier;
}
export declare type PrivateIdentifierAccessorDeclaration = PrivateIdentifierGetAccessorDeclaration | PrivateIdentifierSetAccessorDeclaration;
export declare type PrivateClassElementDeclaration = PrivateIdentifierPropertyDeclaration | PrivateIdentifierMethodDeclaration | PrivateIdentifierGetAccessorDeclaration | PrivateIdentifierSetAccessorDeclaration;
export declare type InitializedPropertyDeclaration = PropertyDeclaration & {
    readonly initializer: Expression;
};
export interface ObjectLiteralElement extends NamedDeclaration {
    _objectLiteralBrand: any;
    readonly name?: PropertyName;
}
/** Unlike ObjectLiteralElement, excludes JSXAttribute and JSXSpreadAttribute. */
export declare type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | MethodDeclaration | AccessorDeclaration;
export interface PropertyAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.PropertyAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly name: PropertyName;
    readonly questionToken?: QuestionToken;
    readonly exclamationToken?: ExclamationToken;
    readonly initializer: Expression;
}
export interface ShorthandPropertyAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.ShorthandPropertyAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly name: Identifier;
    readonly questionToken?: QuestionToken;
    readonly exclamationToken?: ExclamationToken;
    readonly equalsToken?: EqualsToken;
    readonly objectAssignmentInitializer?: Expression;
}
export interface SpreadAssignment extends ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.SpreadAssignment;
    readonly parent: ObjectLiteralExpression;
    readonly expression: Expression;
}
export declare type VariableLikeDeclaration = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyDeclaration | PropertyAssignment | PropertySignature | JsxAttribute | ShorthandPropertyAssignment | EnumMember | JSDocPropertyTag | JSDocParameterTag;
export interface PropertyLikeDeclaration extends NamedDeclaration {
    readonly name: PropertyName;
}
export interface ObjectBindingPattern extends Node {
    readonly kind: SyntaxKind.ObjectBindingPattern;
    readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
    readonly elements: NodeArray<BindingElement>;
}
export interface ArrayBindingPattern extends Node {
    readonly kind: SyntaxKind.ArrayBindingPattern;
    readonly parent: VariableDeclaration | ParameterDeclaration | BindingElement;
    readonly elements: NodeArray<ArrayBindingElement>;
}
export declare type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
export declare type ArrayBindingElement = BindingElement | OmittedExpression;
/**
 * Several node kinds share function-like features such as a signature,
 * a name, and a body. These nodes should extend FunctionLikeDeclarationBase.
 * Examples:
 * - FunctionDeclaration
 * - MethodDeclaration
 * - AccessorDeclaration
 */
export interface FunctionLikeDeclarationBase extends SignatureDeclarationBase {
    _functionLikeDeclarationBrand: any;
    readonly asteriskToken?: AsteriskToken;
    readonly questionToken?: QuestionToken;
    readonly exclamationToken?: ExclamationToken;
    readonly body?: Block | Expression;
    endFlowNode?: FlowNode;
    returnFlowNode?: FlowNode;
}
export declare type FunctionLikeDeclaration = FunctionDeclaration | MethodDeclaration | GetAccessorDeclaration | SetAccessorDeclaration | ConstructorDeclaration | FunctionExpression | ArrowFunction;
/** @deprecated Use SignatureDeclaration */
export declare type FunctionLike = SignatureDeclaration;
export interface FunctionDeclaration extends FunctionLikeDeclarationBase, DeclarationStatement {
    readonly kind: SyntaxKind.FunctionDeclaration;
    readonly name?: Identifier;
    readonly body?: FunctionBody;
}
export interface MethodSignature extends SignatureDeclarationBase, TypeElement {
    readonly kind: SyntaxKind.MethodSignature;
    readonly parent: ObjectTypeDeclaration;
    readonly name: PropertyName;
}
export interface MethodDeclaration extends FunctionLikeDeclarationBase, ClassElement, ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.MethodDeclaration;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression;
    readonly name: PropertyName;
    readonly body?: FunctionBody;
    exclamationToken?: ExclamationToken;
}
export interface ConstructorDeclaration extends FunctionLikeDeclarationBase, ClassElement, JSDocContainer {
    readonly kind: SyntaxKind.Constructor;
    readonly parent: ClassLikeDeclaration;
    readonly body?: FunctionBody;
    typeParameters?: NodeArray<TypeParameterDeclaration>;
    type?: TypeNode;
}
/** For when we encounter a semicolon in a class declaration. ES6 allows these as class elements. */
export interface SemicolonClassElement extends ClassElement {
    readonly kind: SyntaxKind.SemicolonClassElement;
    readonly parent: ClassLikeDeclaration;
}
export interface GetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.GetAccessor;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
    readonly name: PropertyName;
    readonly body?: FunctionBody;
    typeParameters?: NodeArray<TypeParameterDeclaration>;
}
export interface SetAccessorDeclaration extends FunctionLikeDeclarationBase, ClassElement, TypeElement, ObjectLiteralElement, JSDocContainer {
    readonly kind: SyntaxKind.SetAccessor;
    readonly parent: ClassLikeDeclaration | ObjectLiteralExpression | TypeLiteralNode | InterfaceDeclaration;
    readonly name: PropertyName;
    readonly body?: FunctionBody;
    typeParameters?: NodeArray<TypeParameterDeclaration>;
    type?: TypeNode;
}
export declare type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;
export interface IndexSignatureDeclaration extends SignatureDeclarationBase, ClassElement, TypeElement {
    readonly kind: SyntaxKind.IndexSignature;
    readonly parent: ObjectTypeDeclaration;
    readonly type: TypeNode;
}
export interface TypeNode extends Node {
    _typeNodeBrand: any;
}
export interface TypeNode extends Node {
    readonly kind: TypeNodeSyntaxKind;
}
export interface KeywordTypeNode<TKind extends KeywordTypeSyntaxKind = KeywordTypeSyntaxKind> extends KeywordToken<TKind>, TypeNode {
    readonly kind: TKind;
}
export interface ImportTypeNode extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.ImportType;
    readonly isTypeOf: boolean;
    readonly argument: TypeNode;
    readonly qualifier?: EntityName;
}
export declare type LiteralImportTypeNode = ImportTypeNode & {
    readonly argument: LiteralTypeNode & {
        readonly literal: StringLiteral;
    };
};
export interface ThisTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ThisType;
}
export declare type FunctionOrConstructorTypeNode = FunctionTypeNode | ConstructorTypeNode;
export interface FunctionOrConstructorTypeNodeBase extends TypeNode, SignatureDeclarationBase {
    readonly kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType;
    readonly type: TypeNode;
}
export interface FunctionTypeNode extends FunctionOrConstructorTypeNodeBase {
    readonly kind: SyntaxKind.FunctionType;
}
export interface ConstructorTypeNode extends FunctionOrConstructorTypeNodeBase {
    readonly kind: SyntaxKind.ConstructorType;
}
export interface NodeWithTypeArguments extends TypeNode {
    readonly typeArguments?: NodeArray<TypeNode>;
}
export declare type TypeReferenceType = TypeReferenceNode | ExpressionWithTypeArguments;
export interface TypeReferenceNode extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.TypeReference;
    readonly typeName: EntityName;
}
export interface TypePredicateNode extends TypeNode {
    readonly kind: SyntaxKind.TypePredicate;
    readonly parent: SignatureDeclaration | JSDocTypeExpression;
    readonly assertsModifier?: AssertsToken;
    readonly parameterName: Identifier | ThisTypeNode;
    readonly type?: TypeNode;
}
export interface TypeQueryNode extends TypeNode {
    readonly kind: SyntaxKind.TypeQuery;
    readonly exprName: EntityName;
}
export interface TypeLiteralNode extends TypeNode, Declaration {
    readonly kind: SyntaxKind.TypeLiteral;
    readonly members: NodeArray<TypeElement>;
}
export interface ArrayTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ArrayType;
    readonly elementType: TypeNode;
}
export interface TupleTypeNode extends TypeNode {
    readonly kind: SyntaxKind.TupleType;
    readonly elements: NodeArray<TypeNode | NamedTupleMember>;
}
export interface NamedTupleMember extends TypeNode, JSDocContainer, Declaration {
    readonly kind: SyntaxKind.NamedTupleMember;
    readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
    readonly name: Identifier;
    readonly questionToken?: Token<SyntaxKind.QuestionToken>;
    readonly type: TypeNode;
}
export interface OptionalTypeNode extends TypeNode {
    readonly kind: SyntaxKind.OptionalType;
    readonly type: TypeNode;
}
export interface RestTypeNode extends TypeNode {
    readonly kind: SyntaxKind.RestType;
    readonly type: TypeNode;
}
export declare type UnionOrIntersectionTypeNode = UnionTypeNode | IntersectionTypeNode;
export interface UnionTypeNode extends TypeNode {
    readonly kind: SyntaxKind.UnionType;
    readonly types: NodeArray<TypeNode>;
}
export interface IntersectionTypeNode extends TypeNode {
    readonly kind: SyntaxKind.IntersectionType;
    readonly types: NodeArray<TypeNode>;
}
export interface ConditionalTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ConditionalType;
    readonly checkType: TypeNode;
    readonly extendsType: TypeNode;
    readonly trueType: TypeNode;
    readonly falseType: TypeNode;
}
export interface InferTypeNode extends TypeNode {
    readonly kind: SyntaxKind.InferType;
    readonly typeParameter: TypeParameterDeclaration;
}
export interface ParenthesizedTypeNode extends TypeNode {
    readonly kind: SyntaxKind.ParenthesizedType;
    readonly type: TypeNode;
}
export interface TypeOperatorNode extends TypeNode {
    readonly kind: SyntaxKind.TypeOperator;
    readonly operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword;
    readonly type: TypeNode;
}
export interface UniqueTypeOperatorNode extends TypeOperatorNode {
    readonly operator: SyntaxKind.UniqueKeyword;
}
export interface IndexedAccessTypeNode extends TypeNode {
    readonly kind: SyntaxKind.IndexedAccessType;
    readonly objectType: TypeNode;
    readonly indexType: TypeNode;
}
export interface MappedTypeNode extends TypeNode, Declaration {
    readonly kind: SyntaxKind.MappedType;
    readonly readonlyToken?: ReadonlyToken | PlusToken | MinusToken;
    readonly typeParameter: TypeParameterDeclaration;
    readonly nameType?: TypeNode;
    readonly questionToken?: QuestionToken | PlusToken | MinusToken;
    readonly type?: TypeNode;
}
export interface LiteralTypeNode extends TypeNode {
    readonly kind: SyntaxKind.LiteralType;
    readonly literal: NullLiteral | BooleanLiteral | LiteralExpression | PrefixUnaryExpression;
}
export interface StringLiteral extends LiteralExpression, Declaration {
    readonly kind: SyntaxKind.StringLiteral;
    readonly textSourceNode?: Identifier | StringLiteralLike | NumericLiteral;
    /** Note: this is only set when synthesizing a node, not during parsing. */
    readonly singleQuote?: boolean;
}
export declare type StringLiteralLike = StringLiteral | NoSubstitutionTemplateLiteral;
export declare type PropertyNameLiteral = Identifier | StringLiteralLike | NumericLiteral;
export interface TemplateLiteralTypeNode extends TypeNode {
    kind: SyntaxKind.TemplateLiteralType;
    readonly head: TemplateHead;
    readonly templateSpans: NodeArray<TemplateLiteralTypeSpan>;
}
export interface TemplateLiteralTypeSpan extends TypeNode {
    readonly kind: SyntaxKind.TemplateLiteralTypeSpan;
    readonly parent: TemplateLiteralTypeNode;
    readonly type: TypeNode;
    readonly literal: TemplateMiddle | TemplateTail;
}
export interface Expression extends Node {
    _expressionBrand: any;
}
export interface OmittedExpression extends Expression {
    readonly kind: SyntaxKind.OmittedExpression;
}
export interface PartiallyEmittedExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.PartiallyEmittedExpression;
    readonly expression: Expression;
}
export interface UnaryExpression extends Expression {
    _unaryExpressionBrand: any;
}
/** Deprecated, please use UpdateExpression */
export declare type IncrementExpression = UpdateExpression;
export interface UpdateExpression extends UnaryExpression {
    _updateExpressionBrand: any;
}
export declare type PrefixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.TildeToken | SyntaxKind.ExclamationToken;
export interface PrefixUnaryExpression extends UpdateExpression {
    readonly kind: SyntaxKind.PrefixUnaryExpression;
    readonly operator: PrefixUnaryOperator;
    readonly operand: UnaryExpression;
}
export declare type PostfixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken;
export interface PostfixUnaryExpression extends UpdateExpression {
    readonly kind: SyntaxKind.PostfixUnaryExpression;
    readonly operand: LeftHandSideExpression;
    readonly operator: PostfixUnaryOperator;
}
export interface LeftHandSideExpression extends UpdateExpression {
    _leftHandSideExpressionBrand: any;
}
export interface MemberExpression extends LeftHandSideExpression {
    _memberExpressionBrand: any;
}
export interface PrimaryExpression extends MemberExpression {
    _primaryExpressionBrand: any;
}
export interface NullLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.NullKeyword;
}
export interface TrueLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.TrueKeyword;
}
export interface FalseLiteral extends PrimaryExpression {
    readonly kind: SyntaxKind.FalseKeyword;
}
export declare type BooleanLiteral = TrueLiteral | FalseLiteral;
export interface ThisExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.ThisKeyword;
}
export interface SuperExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.SuperKeyword;
}
export interface ImportExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.ImportKeyword;
}
export interface DeleteExpression extends UnaryExpression {
    readonly kind: SyntaxKind.DeleteExpression;
    readonly expression: UnaryExpression;
}
export interface TypeOfExpression extends UnaryExpression {
    readonly kind: SyntaxKind.TypeOfExpression;
    readonly expression: UnaryExpression;
}
export interface VoidExpression extends UnaryExpression {
    readonly kind: SyntaxKind.VoidExpression;
    readonly expression: UnaryExpression;
}
export interface AwaitExpression extends UnaryExpression {
    readonly kind: SyntaxKind.AwaitExpression;
    readonly expression: UnaryExpression;
}
export interface YieldExpression extends Expression {
    readonly kind: SyntaxKind.YieldExpression;
    readonly asteriskToken?: AsteriskToken;
    readonly expression?: Expression;
}
export interface SyntheticExpression extends Expression {
    readonly kind: SyntaxKind.SyntheticExpression;
    readonly isSpread: boolean;
    readonly type: Type;
    readonly tupleNameSource?: ParameterDeclaration | NamedTupleMember;
}
export declare type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
export declare type MultiplicativeOperator = SyntaxKind.AsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken;
export declare type MultiplicativeOperatorOrHigher = ExponentiationOperator | MultiplicativeOperator;
export declare type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
export declare type AdditiveOperatorOrHigher = MultiplicativeOperatorOrHigher | AdditiveOperator;
export declare type ShiftOperator = SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
export declare type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
export declare type RelationalOperator = SyntaxKind.LessThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.InstanceOfKeyword | SyntaxKind.InKeyword;
export declare type RelationalOperatorOrHigher = ShiftOperatorOrHigher | RelationalOperator;
export declare type EqualityOperator = SyntaxKind.EqualsEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.ExclamationEqualsToken;
export declare type EqualityOperatorOrHigher = RelationalOperatorOrHigher | EqualityOperator;
export declare type BitwiseOperator = SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken;
export declare type BitwiseOperatorOrHigher = EqualityOperatorOrHigher | BitwiseOperator;
export declare type LogicalOperator = SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken;
export declare type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
export declare type CompoundAssignmentOperator = SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken | SyntaxKind.BarBarEqualsToken | SyntaxKind.AmpersandAmpersandEqualsToken | SyntaxKind.QuestionQuestionEqualsToken;
export declare type AssignmentOperator = SyntaxKind.EqualsToken | CompoundAssignmentOperator;
export declare type AssignmentOperatorOrHigher = SyntaxKind.QuestionQuestionToken | LogicalOperatorOrHigher | AssignmentOperator;
export declare type BinaryOperator = AssignmentOperatorOrHigher | SyntaxKind.CommaToken;
export declare type LogicalOrCoalescingAssignmentOperator = SyntaxKind.AmpersandAmpersandEqualsToken | SyntaxKind.BarBarEqualsToken | SyntaxKind.QuestionQuestionEqualsToken;
export declare type BinaryOperatorToken = Token<BinaryOperator>;
export interface BinaryExpression extends Expression, Declaration {
    readonly kind: SyntaxKind.BinaryExpression;
    readonly left: Expression;
    readonly operatorToken: BinaryOperatorToken;
    readonly right: Expression;
}
export declare type AssignmentOperatorToken = Token<AssignmentOperator>;
export interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
    readonly left: LeftHandSideExpression;
    readonly operatorToken: TOperator;
}
export interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
    readonly left: ObjectLiteralExpression;
}
export interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
    readonly left: ArrayLiteralExpression;
}
export declare type DestructuringAssignment = ObjectDestructuringAssignment | ArrayDestructuringAssignment;
export declare type BindingOrAssignmentElement = VariableDeclaration | ParameterDeclaration | ObjectBindingOrAssignmentElement | ArrayBindingOrAssignmentElement;
export declare type ObjectBindingOrAssignmentElement = BindingElement | PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment;
export declare type ArrayBindingOrAssignmentElement = BindingElement | OmittedExpression | SpreadElement | ArrayLiteralExpression | ObjectLiteralExpression | AssignmentExpression<EqualsToken> | Identifier | PropertyAccessExpression | ElementAccessExpression;
export declare type BindingOrAssignmentElementRestIndicator = DotDotDotToken | SpreadElement | SpreadAssignment;
export declare type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Identifier | PropertyAccessExpression | ElementAccessExpression | OmittedExpression;
export declare type ObjectBindingOrAssignmentPattern = ObjectBindingPattern | ObjectLiteralExpression;
export declare type ArrayBindingOrAssignmentPattern = ArrayBindingPattern | ArrayLiteralExpression;
export declare type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;
export declare type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;
export interface ConditionalExpression extends Expression {
    readonly kind: SyntaxKind.ConditionalExpression;
    readonly condition: Expression;
    readonly questionToken: QuestionToken;
    readonly whenTrue: Expression;
    readonly colonToken: ColonToken;
    readonly whenFalse: Expression;
}
export declare type FunctionBody = Block;
export declare type ConciseBody = FunctionBody | Expression;
export interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclarationBase, JSDocContainer {
    readonly kind: SyntaxKind.FunctionExpression;
    readonly name?: Identifier;
    readonly body: FunctionBody;
}
export interface ArrowFunction extends Expression, FunctionLikeDeclarationBase, JSDocContainer {
    readonly kind: SyntaxKind.ArrowFunction;
    readonly equalsGreaterThanToken: EqualsGreaterThanToken;
    readonly body: ConciseBody;
    readonly name: never;
}
export interface LiteralLikeNode extends Node {
    text: string;
    isUnterminated?: boolean;
    hasExtendedUnicodeEscape?: boolean;
}
export interface TemplateLiteralLikeNode extends LiteralLikeNode {
    rawText?: string;
    templateFlags?: TokenFlags;
}
export interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
    _literalExpressionBrand: any;
}
export interface RegularExpressionLiteral extends LiteralExpression {
    readonly kind: SyntaxKind.RegularExpressionLiteral;
}
export interface NoSubstitutionTemplateLiteral extends LiteralExpression, TemplateLiteralLikeNode, Declaration {
    readonly kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    templateFlags?: TokenFlags;
}
export declare const enum TokenFlags {
    None = 0,
    PrecedingLineBreak = 1,
    PrecedingJSDocComment = 2,
    Unterminated = 4,
    ExtendedUnicodeEscape = 8,
    Scientific = 16,
    Octal = 32,
    HexSpecifier = 64,
    BinarySpecifier = 128,
    OctalSpecifier = 256,
    ContainsSeparator = 512,
    UnicodeEscape = 1024,
    ContainsInvalidEscape = 2048,
    BinaryOrOctalSpecifier = 384,
    NumericLiteralFlags = 1008,
    TemplateLiteralLikeFlags = 2048
}
export interface NumericLiteral extends LiteralExpression, Declaration {
    readonly kind: SyntaxKind.NumericLiteral;
    readonly numericLiteralFlags: TokenFlags;
}
export interface BigIntLiteral extends LiteralExpression {
    readonly kind: SyntaxKind.BigIntLiteral;
}
export declare type LiteralToken = NumericLiteral | BigIntLiteral | StringLiteral | JsxText | RegularExpressionLiteral | NoSubstitutionTemplateLiteral;
export interface TemplateHead extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateHead;
    readonly parent: TemplateExpression | TemplateLiteralTypeNode;
    templateFlags?: TokenFlags;
}
export interface TemplateMiddle extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateMiddle;
    readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    templateFlags?: TokenFlags;
}
export interface TemplateTail extends TemplateLiteralLikeNode {
    readonly kind: SyntaxKind.TemplateTail;
    readonly parent: TemplateSpan | TemplateLiteralTypeSpan;
    templateFlags?: TokenFlags;
}
export declare type PseudoLiteralToken = TemplateHead | TemplateMiddle | TemplateTail;
export declare type TemplateLiteralToken = NoSubstitutionTemplateLiteral | PseudoLiteralToken;
export interface TemplateExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.TemplateExpression;
    readonly head: TemplateHead;
    readonly templateSpans: NodeArray<TemplateSpan>;
}
export declare type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;
export interface TemplateSpan extends Node {
    readonly kind: SyntaxKind.TemplateSpan;
    readonly parent: TemplateExpression;
    readonly expression: Expression;
    readonly literal: TemplateMiddle | TemplateTail;
}
export interface ParenthesizedExpression extends PrimaryExpression, JSDocContainer {
    readonly kind: SyntaxKind.ParenthesizedExpression;
    readonly expression: Expression;
}
export interface ArrayLiteralExpression extends PrimaryExpression {
    readonly kind: SyntaxKind.ArrayLiteralExpression;
    readonly elements: NodeArray<Expression>;
    multiLine?: boolean;
}
export interface SpreadElement extends Expression {
    readonly kind: SyntaxKind.SpreadElement;
    readonly parent: ArrayLiteralExpression | CallExpression | NewExpression;
    readonly expression: Expression;
}
/**
 * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
 * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
 * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
 * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
 */
export interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
    readonly properties: NodeArray<T>;
}
export interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike> {
    readonly kind: SyntaxKind.ObjectLiteralExpression;
    multiLine?: boolean;
}
export declare type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression;
export declare type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
export declare type AccessExpression = PropertyAccessExpression | ElementAccessExpression;
export interface PropertyAccessExpression extends MemberExpression, NamedDeclaration {
    readonly kind: SyntaxKind.PropertyAccessExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly name: MemberName;
}
export interface PrivateIdentifierPropertyAccessExpression extends PropertyAccessExpression {
    readonly name: PrivateIdentifier;
}
export interface PropertyAccessChain extends PropertyAccessExpression {
    _optionalChainBrand: any;
    readonly name: MemberName;
}
export interface PropertyAccessChainRoot extends PropertyAccessChain {
    readonly questionDotToken: QuestionDotToken;
}
export interface SuperPropertyAccessExpression extends PropertyAccessExpression {
    readonly expression: SuperExpression;
}
/** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
export interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
    _propertyAccessExpressionLikeQualifiedNameBrand?: any;
    readonly expression: EntityNameExpression;
    readonly name: Identifier;
}
export interface ElementAccessExpression extends MemberExpression {
    readonly kind: SyntaxKind.ElementAccessExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly argumentExpression: Expression;
}
export interface ElementAccessChain extends ElementAccessExpression {
    _optionalChainBrand: any;
}
export interface ElementAccessChainRoot extends ElementAccessChain {
    readonly questionDotToken: QuestionDotToken;
}
export interface SuperElementAccessExpression extends ElementAccessExpression {
    readonly expression: SuperExpression;
}
export declare type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;
export interface CallExpression extends LeftHandSideExpression, Declaration {
    readonly kind: SyntaxKind.CallExpression;
    readonly expression: LeftHandSideExpression;
    readonly questionDotToken?: QuestionDotToken;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly arguments: NodeArray<Expression>;
}
export interface CallChain extends CallExpression {
    _optionalChainBrand: any;
}
export interface CallChainRoot extends CallChain {
    readonly questionDotToken: QuestionDotToken;
}
export declare type OptionalChain = PropertyAccessChain | ElementAccessChain | CallChain | NonNullChain;
export declare type OptionalChainRoot = PropertyAccessChainRoot | ElementAccessChainRoot | CallChainRoot;
/** @internal */
export declare type BindableObjectDefinePropertyCall = CallExpression & {
    readonly arguments: readonly [BindableStaticNameExpression, StringLiteralLike | NumericLiteral, ObjectLiteralExpression] & Readonly<TextRange>;
};
/** @internal */
export declare type BindableStaticNameExpression = EntityNameExpression | BindableStaticElementAccessExpression;
/** @internal */
export declare type LiteralLikeElementAccessExpression = ElementAccessExpression & Declaration & {
    readonly argumentExpression: StringLiteralLike | NumericLiteral;
};
/** @internal */
export declare type BindableStaticElementAccessExpression = LiteralLikeElementAccessExpression & {
    readonly expression: BindableStaticNameExpression;
};
/** @internal */
export declare type BindableElementAccessExpression = ElementAccessExpression & {
    readonly expression: BindableStaticNameExpression;
};
/** @internal */
export declare type BindableStaticAccessExpression = PropertyAccessEntityNameExpression | BindableStaticElementAccessExpression;
/** @internal */
export declare type BindableAccessExpression = PropertyAccessEntityNameExpression | BindableElementAccessExpression;
/** @internal */
export interface BindableStaticPropertyAssignmentExpression extends BinaryExpression {
    readonly left: BindableStaticAccessExpression;
}
/** @internal */
export interface BindablePropertyAssignmentExpression extends BinaryExpression {
    readonly left: BindableAccessExpression;
}
export interface SuperCall extends CallExpression {
    readonly expression: SuperExpression;
}
export interface ImportCall extends CallExpression {
    readonly expression: ImportExpression;
}
export interface ExpressionWithTypeArguments extends NodeWithTypeArguments {
    readonly kind: SyntaxKind.ExpressionWithTypeArguments;
    readonly parent: HeritageClause | JSDocAugmentsTag | JSDocImplementsTag;
    readonly expression: LeftHandSideExpression;
}
export interface NewExpression extends PrimaryExpression, Declaration {
    readonly kind: SyntaxKind.NewExpression;
    readonly expression: LeftHandSideExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly arguments?: NodeArray<Expression>;
}
export interface TaggedTemplateExpression extends MemberExpression {
    readonly kind: SyntaxKind.TaggedTemplateExpression;
    readonly tag: LeftHandSideExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly template: TemplateLiteral;
    questionDotToken?: QuestionDotToken;
}
export declare type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator | JsxOpeningLikeElement;
export interface AsExpression extends Expression {
    readonly kind: SyntaxKind.AsExpression;
    readonly expression: Expression;
    readonly type: TypeNode;
}
export interface TypeAssertion extends UnaryExpression {
    readonly kind: SyntaxKind.TypeAssertionExpression;
    readonly type: TypeNode;
    readonly expression: UnaryExpression;
}
export declare type AssertionExpression = TypeAssertion | AsExpression;
export interface NonNullExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.NonNullExpression;
    readonly expression: Expression;
}
export interface NonNullChain extends NonNullExpression {
    _optionalChainBrand: any;
}
export interface MetaProperty extends PrimaryExpression {
    readonly kind: SyntaxKind.MetaProperty;
    readonly keywordToken: SyntaxKind.NewKeyword | SyntaxKind.ImportKeyword;
    readonly name: Identifier;
}
export interface ImportMetaProperty extends MetaProperty {
    readonly keywordToken: SyntaxKind.ImportKeyword;
    readonly name: Identifier & {
        readonly escapedText: __String & "meta";
    };
}
export interface JsxElement extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxElement;
    readonly openingElement: JsxOpeningElement;
    readonly children: NodeArray<JsxChild>;
    readonly closingElement: JsxClosingElement;
}
export declare type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
export declare type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
export declare type JsxTagNameExpression = Identifier | ThisExpression | JsxTagNamePropertyAccess;
export interface JsxTagNamePropertyAccess extends PropertyAccessExpression {
    readonly expression: JsxTagNameExpression;
}
export interface JsxAttributes extends ObjectLiteralExpressionBase<JsxAttributeLike> {
    readonly kind: SyntaxKind.JsxAttributes;
    readonly parent: JsxOpeningLikeElement;
}
export interface JsxOpeningElement extends Expression {
    readonly kind: SyntaxKind.JsxOpeningElement;
    readonly parent: JsxElement;
    readonly tagName: JsxTagNameExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly attributes: JsxAttributes;
}
export interface JsxSelfClosingElement extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxSelfClosingElement;
    readonly tagName: JsxTagNameExpression;
    readonly typeArguments?: NodeArray<TypeNode>;
    readonly attributes: JsxAttributes;
}
export interface JsxFragment extends PrimaryExpression {
    readonly kind: SyntaxKind.JsxFragment;
    readonly openingFragment: JsxOpeningFragment;
    readonly children: NodeArray<JsxChild>;
    readonly closingFragment: JsxClosingFragment;
}
export interface JsxOpeningFragment extends Expression {
    readonly kind: SyntaxKind.JsxOpeningFragment;
    readonly parent: JsxFragment;
}
export interface JsxClosingFragment extends Expression {
    readonly kind: SyntaxKind.JsxClosingFragment;
    readonly parent: JsxFragment;
}
export interface JsxAttribute extends ObjectLiteralElement {
    readonly kind: SyntaxKind.JsxAttribute;
    readonly parent: JsxAttributes;
    readonly name: Identifier;
    readonly initializer?: StringLiteral | JsxExpression;
}
export interface JsxSpreadAttribute extends ObjectLiteralElement {
    readonly kind: SyntaxKind.JsxSpreadAttribute;
    readonly parent: JsxAttributes;
    readonly expression: Expression;
}
export interface JsxClosingElement extends Node {
    readonly kind: SyntaxKind.JsxClosingElement;
    readonly parent: JsxElement;
    readonly tagName: JsxTagNameExpression;
}
export interface JsxExpression extends Expression {
    readonly kind: SyntaxKind.JsxExpression;
    readonly parent: JsxElement | JsxAttributeLike;
    readonly dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>;
    readonly expression?: Expression;
}
export interface JsxText extends LiteralLikeNode {
    readonly kind: SyntaxKind.JsxText;
    readonly parent: JsxElement;
    readonly containsOnlyTriviaWhiteSpaces: boolean;
}
export declare type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement | JsxFragment;
export interface Statement extends Node, JSDocContainer {
    _statementBrand: any;
}
export interface NotEmittedStatement extends Statement {
    readonly kind: SyntaxKind.NotEmittedStatement;
}
/**
 * Marks the end of transformed declaration to properly emit exports.
 */
export interface EndOfDeclarationMarker extends Statement {
    readonly kind: SyntaxKind.EndOfDeclarationMarker;
}
/**
 * A list of comma-separated expressions. This node is only created by transformations.
 */
export interface CommaListExpression extends Expression {
    readonly kind: SyntaxKind.CommaListExpression;
    readonly elements: NodeArray<Expression>;
}
/**
 * Marks the beginning of a merged transformed declaration.
 */
export interface MergeDeclarationMarker extends Statement {
    readonly kind: SyntaxKind.MergeDeclarationMarker;
}
export interface SyntheticReferenceExpression extends LeftHandSideExpression {
    readonly kind: SyntaxKind.SyntheticReferenceExpression;
    readonly expression: Expression;
    readonly thisArg: Expression;
}
export interface EmptyStatement extends Statement {
    readonly kind: SyntaxKind.EmptyStatement;
}
export interface DebuggerStatement extends Statement {
    readonly kind: SyntaxKind.DebuggerStatement;
}
export interface MissingDeclaration extends DeclarationStatement {
    decorators?: NodeArray<Decorator>;
    modifiers?: ModifiersArray;
    readonly kind: SyntaxKind.MissingDeclaration;
    readonly name?: Identifier;
}
export declare type BlockLike = SourceFile | Block | ModuleBlock | CaseOrDefaultClause;
export interface Block extends Statement {
    readonly kind: SyntaxKind.Block;
    readonly statements: NodeArray<Statement>;
    multiLine?: boolean;
}
export interface VariableStatement extends Statement {
    decorators?: NodeArray<Decorator>;
    readonly kind: SyntaxKind.VariableStatement;
    readonly declarationList: VariableDeclarationList;
}
export interface ExpressionStatement extends Statement {
    readonly kind: SyntaxKind.ExpressionStatement;
    readonly expression: Expression;
}
export interface PrologueDirective extends ExpressionStatement {
    readonly expression: StringLiteral;
}
export interface IfStatement extends Statement {
    readonly kind: SyntaxKind.IfStatement;
    readonly expression: Expression;
    readonly thenStatement: Statement;
    readonly elseStatement?: Statement;
}
export interface IterationStatement extends Statement {
    readonly statement: Statement;
}
export interface DoStatement extends IterationStatement {
    readonly kind: SyntaxKind.DoStatement;
    readonly expression: Expression;
}
export interface WhileStatement extends IterationStatement {
    readonly kind: SyntaxKind.WhileStatement;
    readonly expression: Expression;
}
export declare type ForInitializer = VariableDeclarationList | Expression;
export interface ForStatement extends IterationStatement {
    readonly kind: SyntaxKind.ForStatement;
    readonly initializer?: ForInitializer;
    readonly condition?: Expression;
    readonly incrementor?: Expression;
}
export declare type ForInOrOfStatement = ForInStatement | ForOfStatement;
export interface ForInStatement extends IterationStatement {
    readonly kind: SyntaxKind.ForInStatement;
    readonly initializer: ForInitializer;
    readonly expression: Expression;
}
export interface ForOfStatement extends IterationStatement {
    readonly kind: SyntaxKind.ForOfStatement;
    readonly awaitModifier?: AwaitKeywordToken;
    readonly initializer: ForInitializer;
    readonly expression: Expression;
}
export interface BreakStatement extends Statement {
    readonly kind: SyntaxKind.BreakStatement;
    readonly label?: Identifier;
}
export interface ContinueStatement extends Statement {
    readonly kind: SyntaxKind.ContinueStatement;
    readonly label?: Identifier;
}
export declare type BreakOrContinueStatement = BreakStatement | ContinueStatement;
export interface ReturnStatement extends Statement {
    readonly kind: SyntaxKind.ReturnStatement;
    readonly expression?: Expression;
}
export interface WithStatement extends Statement {
    readonly kind: SyntaxKind.WithStatement;
    readonly expression: Expression;
    readonly statement: Statement;
}
export interface SwitchStatement extends Statement {
    readonly kind: SyntaxKind.SwitchStatement;
    readonly expression: Expression;
    readonly caseBlock: CaseBlock;
    possiblyExhaustive?: boolean;
}
export interface CaseBlock extends Node {
    readonly kind: SyntaxKind.CaseBlock;
    readonly parent: SwitchStatement;
    readonly clauses: NodeArray<CaseOrDefaultClause>;
}
export interface CaseClause extends Node {
    readonly kind: SyntaxKind.CaseClause;
    readonly parent: CaseBlock;
    readonly expression: Expression;
    readonly statements: NodeArray<Statement>;
    fallthroughFlowNode?: FlowNode;
}
export interface DefaultClause extends Node {
    readonly kind: SyntaxKind.DefaultClause;
    readonly parent: CaseBlock;
    readonly statements: NodeArray<Statement>;
    fallthroughFlowNode?: FlowNode;
}
export declare type CaseOrDefaultClause = CaseClause | DefaultClause;
export interface LabeledStatement extends Statement {
    readonly kind: SyntaxKind.LabeledStatement;
    readonly label: Identifier;
    readonly statement: Statement;
}
export interface ThrowStatement extends Statement {
    readonly kind: SyntaxKind.ThrowStatement;
    readonly expression: Expression;
}
export interface TryStatement extends Statement {
    readonly kind: SyntaxKind.TryStatement;
    readonly tryBlock: Block;
    readonly catchClause?: CatchClause;
    readonly finallyBlock?: Block;
}
export interface CatchClause extends Node {
    readonly kind: SyntaxKind.CatchClause;
    readonly parent: TryStatement;
    readonly variableDeclaration?: VariableDeclaration;
    readonly block: Block;
}
export declare type ObjectTypeDeclaration = ClassLikeDeclaration | InterfaceDeclaration | TypeLiteralNode;
export declare type DeclarationWithTypeParameters = DeclarationWithTypeParameterChildren | JSDocTypedefTag | JSDocCallbackTag | JSDocSignature;
export declare type DeclarationWithTypeParameterChildren = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration | JSDocTemplateTag;
export interface ClassLikeDeclarationBase extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression;
    readonly name?: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly heritageClauses?: NodeArray<HeritageClause>;
    readonly members: NodeArray<ClassElement>;
}
export interface ClassDeclaration extends ClassLikeDeclarationBase, DeclarationStatement {
    readonly kind: SyntaxKind.ClassDeclaration;
    /** May be undefined in `export default class { ... }`. */
    readonly name?: Identifier;
}
export interface ClassExpression extends ClassLikeDeclarationBase, PrimaryExpression {
    readonly kind: SyntaxKind.ClassExpression;
}
export declare type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
export interface ClassElement extends NamedDeclaration {
    _classElementBrand: any;
    readonly name?: PropertyName;
}
export interface TypeElement extends NamedDeclaration {
    _typeElementBrand: any;
    readonly name?: PropertyName;
    readonly questionToken?: QuestionToken;
}
export interface InterfaceDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.InterfaceDeclaration;
    readonly name: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly heritageClauses?: NodeArray<HeritageClause>;
    readonly members: NodeArray<TypeElement>;
}
export interface HeritageClause extends Node {
    readonly kind: SyntaxKind.HeritageClause;
    readonly parent: InterfaceDeclaration | ClassLikeDeclaration;
    readonly token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword;
    readonly types: NodeArray<ExpressionWithTypeArguments>;
}
export interface TypeAliasDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.TypeAliasDeclaration;
    readonly name: Identifier;
    readonly typeParameters?: NodeArray<TypeParameterDeclaration>;
    readonly type: TypeNode;
}
export interface EnumMember extends NamedDeclaration, JSDocContainer {
    readonly kind: SyntaxKind.EnumMember;
    readonly parent: EnumDeclaration;
    readonly name: PropertyName;
    readonly initializer?: Expression;
}
export interface EnumDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.EnumDeclaration;
    readonly name: Identifier;
    readonly members: NodeArray<EnumMember>;
}
export declare type ModuleName = Identifier | StringLiteral;
export declare type ModuleBody = NamespaceBody | JSDocNamespaceBody;
export interface AmbientModuleDeclaration extends ModuleDeclaration {
    readonly body?: ModuleBlock;
}
export interface ModuleDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ModuleDeclaration;
    readonly parent: ModuleBody | SourceFile;
    readonly name: ModuleName;
    readonly body?: ModuleBody | JSDocNamespaceDeclaration;
}
export declare type NamespaceBody = ModuleBlock | NamespaceDeclaration;
export interface NamespaceDeclaration extends ModuleDeclaration {
    readonly name: Identifier;
    readonly body: NamespaceBody;
}
export declare type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
export interface JSDocNamespaceDeclaration extends ModuleDeclaration {
    readonly name: Identifier;
    readonly body?: JSDocNamespaceBody;
}
export interface ModuleBlock extends Node, Statement {
    readonly kind: SyntaxKind.ModuleBlock;
    readonly parent: ModuleDeclaration;
    readonly statements: NodeArray<Statement>;
}
export declare type ModuleReference = EntityName | ExternalModuleReference;
/**
 * One of:
 * - import x = require("mod");
 * - import x = M.x;
 */
export interface ImportEqualsDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ImportEqualsDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly name: Identifier;
    readonly isTypeOnly: boolean;
    readonly moduleReference: ModuleReference;
}
export interface ExternalModuleReference extends Node {
    readonly kind: SyntaxKind.ExternalModuleReference;
    readonly parent: ImportEqualsDeclaration;
    readonly expression: Expression;
}
export interface ImportDeclaration extends Statement {
    readonly kind: SyntaxKind.ImportDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly importClause?: ImportClause;
    /** If this is not a StringLiteral it will be a grammar error. */
    readonly moduleSpecifier: Expression;
}
export declare type NamedImportBindings = NamespaceImport | NamedImports;
export declare type NamedExportBindings = NamespaceExport | NamedExports;
export interface ImportClause extends NamedDeclaration {
    readonly kind: SyntaxKind.ImportClause;
    readonly parent: ImportDeclaration;
    readonly isTypeOnly: boolean;
    readonly name?: Identifier;
    readonly namedBindings?: NamedImportBindings;
}
export interface NamespaceImport extends NamedDeclaration {
    readonly kind: SyntaxKind.NamespaceImport;
    readonly parent: ImportClause;
    readonly name: Identifier;
}
export interface NamespaceExport extends NamedDeclaration {
    readonly kind: SyntaxKind.NamespaceExport;
    readonly parent: ExportDeclaration;
    readonly name: Identifier;
}
export interface NamespaceExportDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.NamespaceExportDeclaration;
    readonly name: Identifier;
    decorators?: NodeArray<Decorator>;
    modifiers?: ModifiersArray;
}
export interface ExportDeclaration extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ExportDeclaration;
    readonly parent: SourceFile | ModuleBlock;
    readonly isTypeOnly: boolean;
    /** Will not be assigned in the case of `export * from "foo";` */
    readonly exportClause?: NamedExportBindings;
    /** If this is not a StringLiteral it will be a grammar error. */
    readonly moduleSpecifier?: Expression;
}
export interface NamedImports extends Node {
    readonly kind: SyntaxKind.NamedImports;
    readonly parent: ImportClause;
    readonly elements: NodeArray<ImportSpecifier>;
}
export interface NamedExports extends Node {
    readonly kind: SyntaxKind.NamedExports;
    readonly parent: ExportDeclaration;
    readonly elements: NodeArray<ExportSpecifier>;
}
export declare type NamedImportsOrExports = NamedImports | NamedExports;
export interface ImportSpecifier extends NamedDeclaration {
    readonly kind: SyntaxKind.ImportSpecifier;
    readonly parent: NamedImports;
    readonly propertyName?: Identifier;
    readonly name: Identifier;
}
export interface ExportSpecifier extends NamedDeclaration {
    readonly kind: SyntaxKind.ExportSpecifier;
    readonly parent: NamedExports;
    readonly propertyName?: Identifier;
    readonly name: Identifier;
}
export declare type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
export declare type TypeOnlyCompatibleAliasDeclaration = ImportClause | ImportEqualsDeclaration | NamespaceImport | ImportOrExportSpecifier;
/**
 * This is either an `export =` or an `export default` declaration.
 * Unless `isExportEquals` is set, this node was parsed as an `export default`.
 */
export interface ExportAssignment extends DeclarationStatement, JSDocContainer {
    readonly kind: SyntaxKind.ExportAssignment;
    readonly parent: SourceFile;
    readonly isExportEquals?: boolean;
    readonly expression: Expression;
}
export interface FileReference extends TextRange {
    fileName: string;
}
export interface CheckJsDirective extends TextRange {
    enabled: boolean;
}
export declare type CommentKind = SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia;
export interface CommentRange extends TextRange {
    hasTrailingNewLine?: boolean;
    kind: CommentKind;
}
export interface SynthesizedComment extends CommentRange {
    text: string;
    pos: -1;
    end: -1;
    hasLeadingNewline?: boolean;
}
export interface JSDocTypeExpression extends TypeNode {
    readonly kind: SyntaxKind.JSDocTypeExpression;
    readonly type: TypeNode;
}
export interface JSDocNameReference extends Node {
    readonly kind: SyntaxKind.JSDocNameReference;
    readonly name: EntityName;
}
export interface JSDocType extends TypeNode {
    _jsDocTypeBrand: any;
}
export interface JSDocAllType extends JSDocType {
    readonly kind: SyntaxKind.JSDocAllType;
}
export interface JSDocUnknownType extends JSDocType {
    readonly kind: SyntaxKind.JSDocUnknownType;
}
export interface JSDocNonNullableType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNonNullableType;
    readonly type: TypeNode;
}
export interface JSDocNullableType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNullableType;
    readonly type: TypeNode;
}
export interface JSDocOptionalType extends JSDocType {
    readonly kind: SyntaxKind.JSDocOptionalType;
    readonly type: TypeNode;
}
export interface JSDocFunctionType extends JSDocType, SignatureDeclarationBase {
    readonly kind: SyntaxKind.JSDocFunctionType;
}
export interface JSDocVariadicType extends JSDocType {
    readonly kind: SyntaxKind.JSDocVariadicType;
    readonly type: TypeNode;
}
export interface JSDocNamepathType extends JSDocType {
    readonly kind: SyntaxKind.JSDocNamepathType;
    readonly type: TypeNode;
}
export declare type JSDocTypeReferencingNode = JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;
export interface JSDoc extends Node {
    readonly kind: SyntaxKind.JSDocComment;
    readonly parent: HasJSDoc;
    readonly tags?: NodeArray<JSDocTag>;
    readonly comment?: string | NodeArray<JSDocText | JSDocLink>;
}
export interface JSDocTag extends Node {
    readonly parent: JSDoc | JSDocTypeLiteral;
    readonly tagName: Identifier;
    readonly comment?: string | NodeArray<JSDocText | JSDocLink>;
}
export interface JSDocLink extends Node {
    readonly kind: SyntaxKind.JSDocLink;
    readonly name?: EntityName;
    text: string;
}
export interface JSDocText extends Node {
    readonly kind: SyntaxKind.JSDocText;
    text: string;
}
export interface JSDocUnknownTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTag;
}
/**
 * Note that `@extends` is a synonym of `@augments`.
 * Both tags are represented by this interface.
 */
export interface JSDocAugmentsTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocAugmentsTag;
    readonly class: ExpressionWithTypeArguments & {
        readonly expression: Identifier | PropertyAccessEntityNameExpression;
    };
}
export interface JSDocImplementsTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocImplementsTag;
    readonly class: ExpressionWithTypeArguments & {
        readonly expression: Identifier | PropertyAccessEntityNameExpression;
    };
}
export interface JSDocAuthorTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocAuthorTag;
}
export interface JSDocDeprecatedTag extends JSDocTag {
    kind: SyntaxKind.JSDocDeprecatedTag;
}
export interface JSDocClassTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocClassTag;
}
export interface JSDocPublicTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocPublicTag;
}
export interface JSDocPrivateTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocPrivateTag;
}
export interface JSDocProtectedTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocProtectedTag;
}
export interface JSDocReadonlyTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocReadonlyTag;
}
export interface JSDocOverrideTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocOverrideTag;
}
export interface JSDocEnumTag extends JSDocTag, Declaration {
    readonly kind: SyntaxKind.JSDocEnumTag;
    readonly parent: JSDoc;
    readonly typeExpression: JSDocTypeExpression;
}
export interface JSDocThisTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocThisTag;
    readonly typeExpression: JSDocTypeExpression;
}
export interface JSDocTemplateTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTemplateTag;
    readonly constraint: JSDocTypeExpression | undefined;
    readonly typeParameters: NodeArray<TypeParameterDeclaration>;
}
export interface JSDocSeeTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocSeeTag;
    readonly name?: JSDocNameReference;
}
export interface JSDocReturnTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocReturnTag;
    readonly typeExpression?: JSDocTypeExpression;
}
export interface JSDocTypeTag extends JSDocTag {
    readonly kind: SyntaxKind.JSDocTypeTag;
    readonly typeExpression: JSDocTypeExpression;
}
export interface JSDocTypedefTag extends JSDocTag, NamedDeclaration {
    readonly kind: SyntaxKind.JSDocTypedefTag;
    readonly parent: JSDoc;
    readonly fullName?: JSDocNamespaceDeclaration | Identifier;
    readonly name?: Identifier;
    readonly typeExpression?: JSDocTypeExpression | JSDocTypeLiteral;
}
export interface JSDocCallbackTag extends JSDocTag, NamedDeclaration {
    readonly kind: SyntaxKind.JSDocCallbackTag;
    readonly parent: JSDoc;
    readonly fullName?: JSDocNamespaceDeclaration | Identifier;
    readonly name?: Identifier;
    readonly typeExpression: JSDocSignature;
}
export interface JSDocSignature extends JSDocType, Declaration {
    readonly kind: SyntaxKind.JSDocSignature;
    readonly typeParameters?: readonly JSDocTemplateTag[];
    readonly parameters: readonly JSDocParameterTag[];
    readonly type: JSDocReturnTag | undefined;
}
export interface JSDocPropertyLikeTag extends JSDocTag, Declaration {
    readonly parent: JSDoc;
    readonly name: EntityName;
    readonly typeExpression?: JSDocTypeExpression;
    /** Whether the property name came before the type -- non-standard for JSDoc, but Typescript-like */
    readonly isNameFirst: boolean;
    readonly isBracketed: boolean;
}
export interface JSDocPropertyTag extends JSDocPropertyLikeTag {
    readonly kind: SyntaxKind.JSDocPropertyTag;
}
export interface JSDocParameterTag extends JSDocPropertyLikeTag {
    readonly kind: SyntaxKind.JSDocParameterTag;
}
export interface JSDocTypeLiteral extends JSDocType {
    readonly kind: SyntaxKind.JSDocTypeLiteral;
    readonly jsDocPropertyTags?: readonly JSDocPropertyLikeTag[];
    /** If true, then this type literal represents an *array* of its type. */
    readonly isArrayType: boolean;
}
export declare const enum FlowFlags {
    Unreachable = 1,
    Start = 2,
    BranchLabel = 4,
    LoopLabel = 8,
    Assignment = 16,
    TrueCondition = 32,
    FalseCondition = 64,
    SwitchClause = 128,
    ArrayMutation = 256,
    Call = 512,
    ReduceLabel = 1024,
    Referenced = 2048,
    Shared = 4096,
    Label = 12,
    Condition = 96
}
export declare type FlowNode = FlowStart | FlowLabel | FlowAssignment | FlowCall | FlowCondition | FlowSwitchClause | FlowArrayMutation | FlowCall | FlowReduceLabel;
export interface FlowNodeBase {
    flags: FlowFlags;
    id?: number;
}
export interface FlowStart extends FlowNodeBase {
    node?: FunctionExpression | ArrowFunction | MethodDeclaration;
}
export interface FlowLabel extends FlowNodeBase {
    antecedents: FlowNode[] | undefined;
}
export interface FlowAssignment extends FlowNodeBase {
    node: Expression | VariableDeclaration | BindingElement;
    antecedent: FlowNode;
}
export interface FlowCall extends FlowNodeBase {
    node: CallExpression;
    antecedent: FlowNode;
}
export interface FlowCondition extends FlowNodeBase {
    node: Expression;
    antecedent: FlowNode;
}
export interface FlowSwitchClause extends FlowNodeBase {
    switchStatement: SwitchStatement;
    clauseStart: number;
    clauseEnd: number;
    antecedent: FlowNode;
}
export interface FlowArrayMutation extends FlowNodeBase {
    node: CallExpression | BinaryExpression;
    antecedent: FlowNode;
}
export interface FlowReduceLabel extends FlowNodeBase {
    target: FlowLabel;
    antecedents: FlowNode[];
    antecedent: FlowNode;
}
export declare type FlowType = Type | IncompleteType;
export interface IncompleteType {
    flags: TypeFlags;
    type: Type;
}
export interface AmdDependency {
    path: string;
    name?: string;
}
/**
 * Subset of properties from SourceFile that are used in multiple utility functions
 */
export interface SourceFileLike {
    readonly text: string;
    lineMap?: readonly number[];
    getPositionOfLineAndCharacter?(line: number, character: number, allowEdits?: true): number;
}
export interface RedirectInfo {
    /** Source file this redirects to. */
    readonly redirectTarget: SourceFile;
    /**
     * Source file for the duplicate package. This will not be used by the Program,
     * but we need to keep this around so we can watch for changes in underlying.
     */
    readonly unredirected: SourceFile;
}
export interface SourceFile extends Declaration {
    readonly kind: SyntaxKind.SourceFile;
    readonly statements: NodeArray<Statement>;
    readonly endOfFileToken: Token<SyntaxKind.EndOfFileToken>;
    fileName: string;
    path: Path;
    text: string;
    /** Resolved path can be different from path property,
     * when file is included through project reference is mapped to its output instead of source
     * in that case resolvedPath = path to output file
     * path = input file's path
     */
    resolvedPath: Path;
    /** Original file name that can be different from fileName,
     * when file is included through project reference is mapped to its output instead of source
     * in that case originalFileName = name of input file
     * fileName = output file's name
     */
    originalFileName: string;
    /**
     * If two source files are for the same version of the same package, one will redirect to the other.
     * (See `createRedirectSourceFile` in program.ts.)
     * The redirect will have this set. The redirected-to source file will be in `redirectTargetsMap`.
     */
    redirectInfo?: RedirectInfo;
    amdDependencies: readonly AmdDependency[];
    moduleName?: string;
    referencedFiles: readonly FileReference[];
    typeReferenceDirectives: readonly FileReference[];
    libReferenceDirectives: readonly FileReference[];
    languageVariant: LanguageVariant;
    isDeclarationFile: boolean;
    renamedDependencies?: ReadonlyESMap<string, string>;
    /**
     * lib.d.ts should have a reference comment like
     *
     *  /// <reference no-default-lib="true"/>
     *
     * If any other file has this comment, it signals not to include lib.d.ts
     * because this containing file is intended to act as a default library.
     */
    hasNoDefaultLib: boolean;
    languageVersion: ScriptTarget;
    scriptKind: ScriptKind;
    /**
     * The first "most obvious" node that makes a file an external module.
     * This is intended to be the first top-level import/export,
     * but could be arbitrarily nested (e.g. `import.meta`).
     */
    externalModuleIndicator?: Node;
    commonJsModuleIndicator?: Node;
    jsGlobalAugmentations?: SymbolTable;
    identifiers: ESMap<string, string>;
    nodeCount: number;
    identifierCount: number;
    symbolCount: number;
    parseDiagnostics: DiagnosticWithLocation[];
    bindDiagnostics: DiagnosticWithLocation[];
    bindSuggestionDiagnostics?: DiagnosticWithLocation[];
    jsDocDiagnostics?: DiagnosticWithLocation[];
    additionalSyntacticDiagnostics?: readonly DiagnosticWithLocation[];
    lineMap: readonly number[];
    classifiableNames?: ReadonlySet<__String>;
    commentDirectives?: CommentDirective[];
    resolvedModules?: ESMap<string, ResolvedModuleFull | undefined>;
    resolvedTypeReferenceDirectiveNames: ESMap<string, ResolvedTypeReferenceDirective | undefined>;
    imports: readonly StringLiteralLike[];
    moduleAugmentations: readonly (StringLiteral | Identifier)[];
    patternAmbientModules?: PatternAmbientModule[];
    ambientModuleNames: readonly string[];
    checkJsDirective?: CheckJsDirective;
    version: string;
    pragmas: ReadonlyPragmaMap;
    localJsxNamespace?: __String;
    localJsxFragmentNamespace?: __String;
    localJsxFactory?: EntityName;
    localJsxFragmentFactory?: EntityName;
    exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
    endFlowNode?: FlowNode;
}
export interface CommentDirective {
    range: TextRange;
    type: CommentDirectiveType;
}
export declare const enum CommentDirectiveType {
    ExpectError = 0,
    Ignore = 1
}
export declare type ExportedModulesFromDeclarationEmit = readonly Symbol[];
export interface Bundle extends Node {
    readonly kind: SyntaxKind.Bundle;
    readonly prepends: readonly (InputFiles | UnparsedSource)[];
    readonly sourceFiles: readonly SourceFile[];
    syntheticFileReferences?: readonly FileReference[];
    syntheticTypeReferences?: readonly FileReference[];
    syntheticLibReferences?: readonly FileReference[];
    hasNoDefaultLib?: boolean;
}
export interface InputFiles extends Node {
    readonly kind: SyntaxKind.InputFiles;
    javascriptPath?: string;
    javascriptText: string;
    javascriptMapPath?: string;
    javascriptMapText?: string;
    declarationPath?: string;
    declarationText: string;
    declarationMapPath?: string;
    declarationMapText?: string;
    buildInfoPath?: string;
    buildInfo?: BuildInfo;
    oldFileOfCurrentEmit?: boolean;
}
export interface UnparsedSource extends Node {
    readonly kind: SyntaxKind.UnparsedSource;
    fileName: string;
    text: string;
    readonly prologues: readonly UnparsedPrologue[];
    helpers: readonly UnscopedEmitHelper[] | undefined;
    referencedFiles: readonly FileReference[];
    typeReferenceDirectives: readonly string[] | undefined;
    libReferenceDirectives: readonly FileReference[];
    hasNoDefaultLib?: boolean;
    sourceMapPath?: string;
    sourceMapText?: string;
    readonly syntheticReferences?: readonly UnparsedSyntheticReference[];
    readonly texts: readonly UnparsedSourceText[];
    oldFileOfCurrentEmit?: boolean;
    parsedSourceMap?: RawSourceMap | false | undefined;
    getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
}
export declare type UnparsedSourceText = UnparsedPrepend | UnparsedTextLike;
export declare type UnparsedNode = UnparsedPrologue | UnparsedSourceText | UnparsedSyntheticReference;
export interface UnparsedSection extends Node {
    readonly kind: SyntaxKind;
    readonly parent: UnparsedSource;
    readonly data?: string;
}
export interface UnparsedPrologue extends UnparsedSection {
    readonly kind: SyntaxKind.UnparsedPrologue;
    readonly parent: UnparsedSource;
    readonly data: string;
}
export interface UnparsedPrepend extends UnparsedSection {
    readonly kind: SyntaxKind.UnparsedPrepend;
    readonly parent: UnparsedSource;
    readonly data: string;
    readonly texts: readonly UnparsedTextLike[];
}
export interface UnparsedTextLike extends UnparsedSection {
    readonly kind: SyntaxKind.UnparsedText | SyntaxKind.UnparsedInternalText;
    readonly parent: UnparsedSource;
}
export interface UnparsedSyntheticReference extends UnparsedSection {
    readonly kind: SyntaxKind.UnparsedSyntheticReference;
    readonly parent: UnparsedSource;
    readonly section: BundleFileHasNoDefaultLib | BundleFileReference;
}
export interface JsonSourceFile extends SourceFile {
    readonly statements: NodeArray<JsonObjectExpressionStatement>;
}
export interface TsConfigSourceFile extends JsonSourceFile {
    extendedSourceFiles?: string[];
    configFileSpecs?: ConfigFileSpecs;
}
export interface JsonMinusNumericLiteral extends PrefixUnaryExpression {
    readonly kind: SyntaxKind.PrefixUnaryExpression;
    readonly operator: SyntaxKind.MinusToken;
    readonly operand: NumericLiteral;
}
export declare type JsonObjectExpression = ObjectLiteralExpression | ArrayLiteralExpression | JsonMinusNumericLiteral | NumericLiteral | StringLiteral | BooleanLiteral | NullLiteral;
export interface JsonObjectExpressionStatement extends ExpressionStatement {
    readonly expression: JsonObjectExpression;
}
export interface ScriptReferenceHost {
    getCompilerOptions(): CompilerOptions;
    getSourceFile(fileName: string): SourceFile | undefined;
    getSourceFileByPath(path: Path): SourceFile | undefined;
    getCurrentDirectory(): string;
}
export interface ParseConfigHost {
    useCaseSensitiveFileNames: boolean;
    readDirectory(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): readonly string[];
    /**
     * Gets a value indicating whether the specified path exists and is a file.
     * @param path The path to test.
     */
    fileExists(path: string): boolean;
    readFile(path: string): string | undefined;
    trace?(s: string): void;
}
/**
 * Branded string for keeping track of when we've turned an ambiguous path
 * specified like "./blah" to an absolute path to an actual
 * tsconfig file, e.g. "/root/blah/tsconfig.json"
 */
export declare type ResolvedConfigFileName = string & {
    _isResolvedConfigFileName: never;
};
export declare type WriteFileCallback = (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: readonly SourceFile[]) => void;
export declare class OperationCanceledException {
}
export interface CancellationToken {
    isCancellationRequested(): boolean;
    /** @throws OperationCanceledException if isCancellationRequested is true */
    throwIfCancellationRequested(): void;
}
export declare enum FileIncludeKind {
    RootFile = 0,
    SourceFromProjectReference = 1,
    OutputFromProjectReference = 2,
    Import = 3,
    ReferenceFile = 4,
    TypeReferenceDirective = 5,
    LibFile = 6,
    LibReferenceDirective = 7,
    AutomaticTypeDirectiveFile = 8
}
export interface RootFile {
    kind: FileIncludeKind.RootFile;
    index: number;
}
export interface LibFile {
    kind: FileIncludeKind.LibFile;
    index?: number;
}
export declare type ProjectReferenceFileKind = FileIncludeKind.SourceFromProjectReference | FileIncludeKind.OutputFromProjectReference;
export interface ProjectReferenceFile {
    kind: ProjectReferenceFileKind;
    index: number;
}
export declare type ReferencedFileKind = FileIncludeKind.Import | FileIncludeKind.ReferenceFile | FileIncludeKind.TypeReferenceDirective | FileIncludeKind.LibReferenceDirective;
export interface ReferencedFile {
    kind: ReferencedFileKind;
    file: Path;
    index: number;
}
export interface AutomaticTypeDirectiveFile {
    kind: FileIncludeKind.AutomaticTypeDirectiveFile;
    typeReference: string;
    packageId: PackageId | undefined;
}
export declare type FileIncludeReason = RootFile | LibFile | ProjectReferenceFile | ReferencedFile | AutomaticTypeDirectiveFile;
export declare const enum FilePreprocessingDiagnosticsKind {
    FilePreprocessingReferencedDiagnostic = 0,
    FilePreprocessingFileExplainingDiagnostic = 1
}
export interface FilePreprocessingReferencedDiagnostic {
    kind: FilePreprocessingDiagnosticsKind.FilePreprocessingReferencedDiagnostic;
    reason: ReferencedFile;
    diagnostic: DiagnosticMessage;
    args?: (string | number | undefined)[];
}
export interface FilePreprocessingFileExplainingDiagnostic {
    kind: FilePreprocessingDiagnosticsKind.FilePreprocessingFileExplainingDiagnostic;
    file?: Path;
    fileProcessingReason: FileIncludeReason;
    diagnostic: DiagnosticMessage;
    args?: (string | number | undefined)[];
}
export declare type FilePreprocessingDiagnostics = FilePreprocessingReferencedDiagnostic | FilePreprocessingFileExplainingDiagnostic;
export interface Program extends ScriptReferenceHost {
    getCurrentDirectory(): string;
    /**
     * Get a list of root file names that were passed to a 'createProgram'
     */
    getRootFileNames(): readonly string[];
    /**
     * Get a list of files in the program
     */
    getSourceFiles(): readonly SourceFile[];
    /**
     * Get a list of file names that were passed to 'createProgram' or referenced in a
     * program source file but could not be located.
     */
    getMissingFilePaths(): readonly Path[];
    getFilesByNameMap(): ESMap<string, SourceFile | false | undefined>;
    /**
     * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
     * the JavaScript and declaration files will be produced for all the files in this program.
     * If targetSourceFile is specified, then only the JavaScript and declaration for that
     * specific file will be generated.
     *
     * If writeFile is not specified then the writeFile callback from the compiler host will be
     * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
     * will be invoked when writing the JavaScript and declaration files.
     */
    emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers): EmitResult;
    emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean, customTransformers?: CustomTransformers, forceDtsEmit?: boolean): EmitResult;
    getOptionsDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
    getGlobalDiagnostics(cancellationToken?: CancellationToken): readonly Diagnostic[];
    getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
    /** The first time this is called, it will return global diagnostics (no location). */
    getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
    getConfigFileParsingDiagnostics(): readonly Diagnostic[];
    getSuggestionDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
    getBindAndCheckDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    getProgramDiagnostics(sourceFile: SourceFile, cancellationToken?: CancellationToken): readonly Diagnostic[];
    /**
     * Gets a type checker that can be used to semantically analyze source files in the program.
     */
    getTypeChecker(): TypeChecker;
    getCommonSourceDirectory(): string;
    getDiagnosticsProducingTypeChecker(): TypeChecker;
    dropDiagnosticsProducingTypeChecker(): void;
    getCachedSemanticDiagnostics(sourceFile?: SourceFile): readonly Diagnostic[] | undefined;
    getClassifiableNames(): Set<__String>;
    getNodeCount(): number;
    getIdentifierCount(): number;
    getSymbolCount(): number;
    getTypeCount(): number;
    getInstantiationCount(): number;
    getRelationCacheSizes(): {
        assignable: number;
        identity: number;
        subtype: number;
        strictSubtype: number;
    };
    getFileProcessingDiagnostics(): FilePreprocessingDiagnostics[] | undefined;
    getResolvedTypeReferenceDirectives(): ESMap<string, ResolvedTypeReferenceDirective | undefined>;
    isSourceFileFromExternalLibrary(file: SourceFile): boolean;
    isSourceFileDefaultLibrary(file: SourceFile): boolean;
    readonly structureIsReused: StructureIsReused;
    getSourceFileFromReference(referencingFile: SourceFile | UnparsedSource, ref: FileReference): SourceFile | undefined;
    getLibFileFromReference(ref: FileReference): SourceFile | undefined;
    /** Given a source file, get the name of the package it was imported from. */
    sourceFileToPackageName: ESMap<string, string>;
    /** Set of all source files that some other source file redirects to. */
    redirectTargetsMap: MultiMap<string, string>;
    /** Is the file emitted file */
    isEmittedFile(file: string): boolean;
    getFileIncludeReasons(): MultiMap<Path, FileIncludeReason>;
    useCaseSensitiveFileNames(): boolean;
    getResolvedModuleWithFailedLookupLocationsFromCache(moduleName: string, containingFile: string): ResolvedModuleWithFailedLookupLocations | undefined;
    getProjectReferences(): readonly ProjectReference[] | undefined;
    getResolvedProjectReferences(): readonly (ResolvedProjectReference | undefined)[] | undefined;
    getProjectReferenceRedirect(fileName: string): string | undefined;
    getResolvedProjectReferenceToRedirect(fileName: string): ResolvedProjectReference | undefined;
    forEachResolvedProjectReference<T>(cb: (resolvedProjectReference: ResolvedProjectReference) => T | undefined): T | undefined;
    getResolvedProjectReferenceByPath(projectReferencePath: Path): ResolvedProjectReference | undefined;
    isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    getProgramBuildInfo?(): ProgramBuildInfo | undefined;
    emitBuildInfo(writeFile?: WriteFileCallback, cancellationToken?: CancellationToken): EmitResult;
    /**
     * This implementation handles file exists to be true if file is source of project reference redirect when program is created using useSourceOfProjectReferenceRedirect
     */
    fileExists(fileName: string): boolean;
}
export interface Program extends TypeCheckerHost, ModuleSpecifierResolutionHost {
}
export declare type RedirectTargetsMap = ReadonlyESMap<string, readonly string[]>;
export interface ResolvedProjectReference {
    commandLine: ParsedCommandLine;
    sourceFile: SourceFile;
    references?: readonly (ResolvedProjectReference | undefined)[];
}
export declare const enum StructureIsReused {
    Not = 0,
    SafeModules = 1,
    Completely = 2
}
export declare type CustomTransformerFactory = (context: TransformationContext) => CustomTransformer;
export interface CustomTransformer {
    transformSourceFile(node: SourceFile): SourceFile;
    transformBundle(node: Bundle): Bundle;
}
export interface CustomTransformers {
    /** Custom transformers to evaluate before built-in .js transformations. */
    before?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
    /** Custom transformers to evaluate after built-in .js transformations. */
    after?: (TransformerFactory<SourceFile> | CustomTransformerFactory)[];
    /** Custom transformers to evaluate after built-in .d.ts transformations. */
    afterDeclarations?: (TransformerFactory<Bundle | SourceFile> | CustomTransformerFactory)[];
}
export interface EmitTransformers {
    scriptTransformers: readonly TransformerFactory<SourceFile | Bundle>[];
    declarationTransformers: readonly TransformerFactory<SourceFile | Bundle>[];
}
export interface SourceMapSpan {
    /** Line number in the .js file. */
    emittedLine: number;
    /** Column number in the .js file. */
    emittedColumn: number;
    /** Line number in the .ts file. */
    sourceLine: number;
    /** Column number in the .ts file. */
    sourceColumn: number;
    /** Optional name (index into names array) associated with this span. */
    nameIndex?: number;
    /** .ts file (index into sources array) associated with this span */
    sourceIndex: number;
}
export interface SourceMapEmitResult {
    inputSourceFileNames: readonly string[];
    sourceMap: RawSourceMap;
}
/** Return code used by getEmitOutput function to indicate status of the function */
export declare enum ExitStatus {
    Success = 0,
    DiagnosticsPresent_OutputsSkipped = 1,
    DiagnosticsPresent_OutputsGenerated = 2,
    InvalidProject_OutputsSkipped = 3,
    ProjectReferenceCycle_OutputsSkipped = 4,
    /** @deprecated Use ProjectReferenceCycle_OutputsSkipped instead. */
    ProjectReferenceCycle_OutputsSkupped = 4
}
export interface EmitResult {
    emitSkipped: boolean;
    /** Contains declaration emit diagnostics */
    diagnostics: readonly Diagnostic[];
    emittedFiles?: string[];
    sourceMaps?: SourceMapEmitResult[];
    exportedModulesFromDeclarationEmit?: ExportedModulesFromDeclarationEmit;
}
export interface TypeCheckerHost extends ModuleSpecifierResolutionHost {
    getCompilerOptions(): CompilerOptions;
    getSourceFiles(): readonly SourceFile[];
    getSourceFile(fileName: string): SourceFile | undefined;
    getResolvedTypeReferenceDirectives(): ReadonlyESMap<string, ResolvedTypeReferenceDirective | undefined>;
    getProjectReferenceRedirect(fileName: string): string | undefined;
    isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    readonly redirectTargetsMap: RedirectTargetsMap;
}
export interface TypeChecker {
    getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
    getDeclaredTypeOfSymbol(symbol: Symbol): Type;
    getPropertiesOfType(type: Type): Symbol[];
    getPropertyOfType(type: Type, propertyName: string): Symbol | undefined;
    getPrivateIdentifierPropertyOfType(leftType: Type, name: string, location: Node): Symbol | undefined;
    getTypeOfPropertyOfType(type: Type, propertyName: string): Type | undefined;
    getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | undefined;
    getSignaturesOfType(type: Type, kind: SignatureKind): readonly Signature[];
    getIndexTypeOfType(type: Type, kind: IndexKind): Type | undefined;
    getBaseTypes(type: InterfaceType): BaseType[];
    getBaseTypeOfLiteralType(type: Type): Type;
    getWidenedType(type: Type): Type;
    getPromisedTypeOfPromise(promise: Type, errorNode?: Node): Type | undefined;
    getAwaitedType(type: Type): Type | undefined;
    getReturnTypeOfSignature(signature: Signature): Type;
    /**
     * Gets the type of a parameter at a given position in a signature.
     * Returns `any` if the index is not valid.
     */
    getParameterType(signature: Signature, parameterIndex: number): Type;
    getNullableType(type: Type, flags: TypeFlags): Type;
    getNonNullableType(type: Type): Type;
    getNonOptionalType(type: Type): Type;
    isNullableType(type: Type): boolean;
    getTypeArguments(type: TypeReference): readonly Type[];
    /** Note that the resulting nodes cannot be checked. */
    typeToTypeNode(type: Type, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeNode | undefined;
    typeToTypeNode(type: Type, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): TypeNode | undefined;
    /** Note that the resulting nodes cannot be checked. */
    signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): SignatureDeclaration & {
        typeArguments?: NodeArray<TypeNode>;
    } | undefined;
    signatureToSignatureDeclaration(signature: Signature, kind: SyntaxKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): SignatureDeclaration & {
        typeArguments?: NodeArray<TypeNode>;
    } | undefined;
    /** Note that the resulting nodes cannot be checked. */
    indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): IndexSignatureDeclaration | undefined;
    indexInfoToIndexSignatureDeclaration(indexInfo: IndexInfo, kind: IndexKind, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined, tracker?: SymbolTracker): IndexSignatureDeclaration | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToEntityName(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): EntityName | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToExpression(symbol: Symbol, meaning: SymbolFlags, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): Expression | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToTypeParameterDeclarations(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): NodeArray<TypeParameterDeclaration> | undefined;
    /** Note that the resulting nodes cannot be checked. */
    symbolToParameterDeclaration(symbol: Symbol, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): ParameterDeclaration | undefined;
    /** Note that the resulting nodes cannot be checked. */
    typeParameterToDeclaration(parameter: TypeParameter, enclosingDeclaration: Node | undefined, flags: NodeBuilderFlags | undefined): TypeParameterDeclaration | undefined;
    getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
    getSymbolAtLocation(node: Node): Symbol | undefined;
    getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
    /**
     * The function returns the value (local variable) symbol of an identifier in the short-hand property assignment.
     * This is necessary as an identifier in short-hand property assignment can contains two meaning: property name and property value.
     */
    getShorthandAssignmentValueSymbol(location: Node | undefined): Symbol | undefined;
    getExportSpecifierLocalTargetSymbol(location: ExportSpecifier | Identifier): Symbol | undefined;
    /**
     * If a symbol is a local symbol with an associated exported symbol, returns the exported symbol.
     * Otherwise returns its input.
     * For example, at `export type T = number;`:
     *     - `getSymbolAtLocation` at the location `T` will return the exported symbol for `T`.
     *     - But the result of `getSymbolsInScope` will contain the *local* symbol for `T`, not the exported symbol.
     *     - Calling `getExportSymbolOfSymbol` on that local symbol will return the exported symbol.
     */
    getExportSymbolOfSymbol(symbol: Symbol): Symbol;
    getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol | undefined;
    getTypeOfAssignmentPattern(pattern: AssignmentPattern): Type;
    getTypeAtLocation(node: Node): Type;
    getTypeFromTypeNode(node: TypeNode): Type;
    signatureToString(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): string;
    typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
    symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): string;
    typePredicateToString(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
    writeSignature(signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind, writer?: EmitTextWriter): string;
    writeType(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags, writer?: EmitTextWriter): string;
    writeSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags, writer?: EmitTextWriter): string;
    writeTypePredicate(predicate: TypePredicate, enclosingDeclaration?: Node, flags?: TypeFormatFlags, writer?: EmitTextWriter): string;
    getFullyQualifiedName(symbol: Symbol): string;
    getAugmentedPropertiesOfType(type: Type): Symbol[];
    getRootSymbols(symbol: Symbol): readonly Symbol[];
    getSymbolOfExpando(node: Node, allowDeclaration: boolean): Symbol | undefined;
    getContextualType(node: Expression): Type | undefined;
    getContextualType(node: Expression, contextFlags?: ContextFlags): Type | undefined;
    getContextualTypeForObjectLiteralElement(element: ObjectLiteralElementLike): Type | undefined;
    getContextualTypeForArgumentAtIndex(call: CallLikeExpression, argIndex: number): Type | undefined;
    getContextualTypeForJsxAttribute(attribute: JsxAttribute | JsxSpreadAttribute): Type | undefined;
    isContextSensitive(node: Expression | MethodDeclaration | ObjectLiteralElementLike | JsxAttributeLike): boolean;
    getTypeOfPropertyOfContextualType(type: Type, name: __String): Type | undefined;
    /**
     * returns unknownSignature in the case of an error.
     * returns undefined if the node is not valid.
     * @param argumentCount Apparent number of arguments, passed in case of a possibly incomplete call. This should come from an ArgumentListInfo. See `signatureHelp.ts`.
     */
    getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
    getResolvedSignatureForSignatureHelp(node: CallLikeExpression, candidatesOutArray?: Signature[], argumentCount?: number): Signature | undefined;
    getExpandedParameters(sig: Signature): readonly (readonly Symbol[])[];
    hasEffectiveRestParameter(sig: Signature): boolean;
    getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature | undefined;
    isImplementationOfOverload(node: SignatureDeclaration): boolean | undefined;
    isUndefinedSymbol(symbol: Symbol): boolean;
    isArgumentsSymbol(symbol: Symbol): boolean;
    isUnknownSymbol(symbol: Symbol): boolean;
    getMergedSymbol(symbol: Symbol): Symbol;
    getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
    isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName | ImportTypeNode, propertyName: string): boolean;
    /** Exclude accesses to private properties or methods with a `this` parameter that `type` doesn't satisfy. */
    isValidPropertyAccessForCompletions(node: PropertyAccessExpression | ImportTypeNode | QualifiedName, type: Type, property: Symbol): boolean;
    /** Follow all aliases to get the original symbol. */
    getAliasedSymbol(symbol: Symbol): Symbol;
    /** Follow a *single* alias to get the immediately aliased symbol. */
    getImmediateAliasedSymbol(symbol: Symbol): Symbol | undefined;
    getExportsOfModule(moduleSymbol: Symbol): Symbol[];
    /** Unlike `getExportsOfModule`, this includes properties of an `export =` value. */
    getExportsAndPropertiesOfModule(moduleSymbol: Symbol): Symbol[];
    getJsxIntrinsicTagNamesAt(location: Node): Symbol[];
    isOptionalParameter(node: ParameterDeclaration): boolean;
    getAmbientModules(): Symbol[];
    tryGetMemberInModuleExports(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
    /**
     * Unlike `tryGetMemberInModuleExports`, this includes properties of an `export =` value.
     * Does *not* return properties of primitive types.
     */
    tryGetMemberInModuleExportsAndProperties(memberName: string, moduleSymbol: Symbol): Symbol | undefined;
    getApparentType(type: Type): Type;
    getSuggestedSymbolForNonexistentProperty(name: MemberName | string, containingType: Type): Symbol | undefined;
    getSuggestedSymbolForNonexistentJSXAttribute(name: Identifier | string, containingType: Type): Symbol | undefined;
    getSuggestionForNonexistentProperty(name: MemberName | string, containingType: Type): string | undefined;
    getSuggestedSymbolForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): Symbol | undefined;
    getSuggestionForNonexistentSymbol(location: Node, name: string, meaning: SymbolFlags): string | undefined;
    getSuggestedSymbolForNonexistentModule(node: Identifier, target: Symbol): Symbol | undefined;
    getSuggestionForNonexistentExport(node: Identifier, target: Symbol): string | undefined;
    getBaseConstraintOfType(type: Type): Type | undefined;
    getDefaultFromTypeParameter(type: Type): Type | undefined;
    getAnyType(): Type;
    getStringType(): Type;
    getNumberType(): Type;
    getBooleanType(): Type;
    getFalseType(fresh?: boolean): Type;
    getTrueType(fresh?: boolean): Type;
    getVoidType(): Type;
    getUndefinedType(): Type;
    getNullType(): Type;
    getESSymbolType(): Type;
    getNeverType(): Type;
    getOptionalType(): Type;
    getUnionType(types: Type[], subtypeReduction?: UnionReduction): Type;
    createArrayType(elementType: Type): Type;
    getElementTypeOfArrayType(arrayType: Type): Type | undefined;
    createPromiseType(type: Type): Type;
    isTypeAssignableTo(source: Type, target: Type): boolean;
    createAnonymousType(symbol: Symbol | undefined, members: SymbolTable, callSignatures: Signature[], constructSignatures: Signature[], stringIndexInfo: IndexInfo | undefined, numberIndexInfo: IndexInfo | undefined): Type;
    createSignature(declaration: SignatureDeclaration, typeParameters: readonly TypeParameter[] | undefined, thisParameter: Symbol | undefined, parameters: readonly Symbol[], resolvedReturnType: Type, typePredicate: TypePredicate | undefined, minArgumentCount: number, flags: SignatureFlags): Signature;
    createSymbol(flags: SymbolFlags, name: __String): TransientSymbol;
    createIndexInfo(type: Type, isReadonly: boolean, declaration?: SignatureDeclaration): IndexInfo;
    isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
    tryFindAmbientModule(moduleName: string): Symbol | undefined;
    tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol | undefined;
    getSymbolWalker(accept?: (symbol: Symbol) => boolean): SymbolWalker;
    getDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
    getGlobalDiagnostics(): Diagnostic[];
    getEmitResolver(sourceFile?: SourceFile, cancellationToken?: CancellationToken): EmitResolver;
    getNodeCount(): number;
    getIdentifierCount(): number;
    getSymbolCount(): number;
    getTypeCount(): number;
    getInstantiationCount(): number;
    getRelationCacheSizes(): {
        assignable: number;
        identity: number;
        subtype: number;
        strictSubtype: number;
    };
    getRecursionIdentity(type: Type): object | undefined;
    isArrayType(type: Type): boolean;
    isTupleType(type: Type): boolean;
    isArrayLikeType(type: Type): boolean;
    /**
     * True if `contextualType` should not be considered for completions because
     * e.g. it specifies `kind: "a"` and obj has `kind: "b"`.
     */
    isTypeInvalidDueToUnionDiscriminant(contextualType: Type, obj: ObjectLiteralExpression | JsxAttributes): boolean;
    /**
     * For a union, will include a property if it's defined in *any* of the member types.
     * So for `{ a } | { b }`, this will include both `a` and `b`.
     * Does not include properties of primitive types.
     */
    getAllPossiblePropertiesOfTypes(type: readonly Type[]): Symbol[];
    resolveName(name: string, location: Node | undefined, meaning: SymbolFlags, excludeGlobals: boolean): Symbol | undefined;
    getJsxNamespace(location?: Node): string;
    getJsxFragmentFactory(location: Node): string | undefined;
    /**
     * Note that this will return undefined in the following case:
     *     // a.ts
     *     export namespace N { export class C { } }
     *     // b.ts
     *     <<enclosingDeclaration>>
     * Where `C` is the symbol we're looking for.
     * This should be called in a loop climbing parents of the symbol, so we'll get `N`.
     */
    getAccessibleSymbolChain(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags, useOnlyExternalAliasing: boolean): Symbol[] | undefined;
    getTypePredicateOfSignature(signature: Signature): TypePredicate | undefined;
    resolveExternalModuleName(moduleSpecifier: Expression): Symbol | undefined;
    /**
     * An external module with an 'export =' declaration resolves to the target of the 'export =' declaration,
     * and an external module with no 'export =' declaration resolves to the module itself.
     */
    resolveExternalModuleSymbol(symbol: Symbol): Symbol;
    /** @param node A location where we might consider accessing `this`. Not necessarily a ThisExpression. */
    tryGetThisTypeAt(node: Node, includeGlobalThis?: boolean): Type | undefined;
    getTypeArgumentConstraint(node: TypeNode): Type | undefined;
    /**
     * Does *not* get *all* suggestion diagnostics, just the ones that were convenient to report in the checker.
     * Others are added in computeSuggestionDiagnostics.
     */
    getSuggestionDiagnostics(file: SourceFile, cancellationToken?: CancellationToken): readonly DiagnosticWithLocation[];
    /**
     * Depending on the operation performed, it may be appropriate to throw away the checker
     * if the cancellation token is triggered. Typically, if it is used for error checking
     * and the operation is cancelled, then it should be discarded, otherwise it is safe to keep.
     */
    runWithCancellationToken<T>(token: CancellationToken, cb: (checker: TypeChecker) => T): T;
    getLocalTypeParametersOfClassOrInterfaceOrTypeAlias(symbol: Symbol): readonly TypeParameter[] | undefined;
    isDeclarationVisible(node: Declaration | AnyImportSyntax): boolean;
}
export declare const enum UnionReduction {
    None = 0,
    Literal = 1,
    Subtype = 2
}
export declare const enum ContextFlags {
    None = 0,
    Signature = 1,
    NoConstraints = 2,
    Completions = 4,
    SkipBindingPatterns = 8
}
export declare const enum NodeBuilderFlags {
    None = 0,
    NoTruncation = 1,
    WriteArrayAsGenericType = 2,
    GenerateNamesForShadowedTypeParams = 4,
    UseStructuralFallback = 8,
    ForbidIndexedAccessSymbolReferences = 16,
    WriteTypeArgumentsOfSignature = 32,
    UseFullyQualifiedType = 64,
    UseOnlyExternalAliasing = 128,
    SuppressAnyReturnType = 256,
    WriteTypeParametersInQualifiedName = 512,
    MultilineObjectLiterals = 1024,
    WriteClassExpressionAsTypeLiteral = 2048,
    UseTypeOfFunction = 4096,
    OmitParameterModifiers = 8192,
    UseAliasDefinedOutsideCurrentScope = 16384,
    UseSingleQuotesForStringLiteralType = 268435456,
    NoTypeReduction = 536870912,
    NoUndefinedOptionalParameterType = 1073741824,
    AllowThisInObjectLiteral = 32768,
    AllowQualifiedNameInPlaceOfIdentifier = 65536,
    /** @deprecated AllowQualifedNameInPlaceOfIdentifier. Use AllowQualifiedNameInPlaceOfIdentifier instead. */
    AllowQualifedNameInPlaceOfIdentifier = 65536,
    AllowAnonymousIdentifier = 131072,
    AllowEmptyUnionOrIntersection = 262144,
    AllowEmptyTuple = 524288,
    AllowUniqueESSymbolType = 1048576,
    AllowEmptyIndexInfoType = 2097152,
    AllowNodeModulesRelativePaths = 67108864,
    DoNotIncludeSymbolChain = 134217728,
    IgnoreErrors = 70221824,
    InObjectTypeLiteral = 4194304,
    InTypeAlias = 8388608,
    InInitialEntityName = 16777216
}
export declare const enum TypeFormatFlags {
    None = 0,
    NoTruncation = 1,
    WriteArrayAsGenericType = 2,
    UseStructuralFallback = 8,
    WriteTypeArgumentsOfSignature = 32,
    UseFullyQualifiedType = 64,
    SuppressAnyReturnType = 256,
    MultilineObjectLiterals = 1024,
    WriteClassExpressionAsTypeLiteral = 2048,
    UseTypeOfFunction = 4096,
    OmitParameterModifiers = 8192,
    UseAliasDefinedOutsideCurrentScope = 16384,
    UseSingleQuotesForStringLiteralType = 268435456,
    NoTypeReduction = 536870912,
    AllowUniqueESSymbolType = 1048576,
    AddUndefined = 131072,
    WriteArrowStyleSignature = 262144,
    InArrayType = 524288,
    InElementType = 2097152,
    InFirstTypeArgument = 4194304,
    InTypeAlias = 8388608,
    /** @deprecated */ WriteOwnNameForAnyLike = 0,
    NodeBuilderFlagsMask = 814775659
}
export declare const enum SymbolFormatFlags {
    None = 0,
    WriteTypeParametersOrArguments = 1,
    UseOnlyExternalAliasing = 2,
    AllowAnyNodeKind = 4,
    UseAliasDefinedOutsideCurrentScope = 8,
    DoNotIncludeSymbolChain = 16
}
export interface SymbolWalker {
    /** Note: Return values are not ordered. */
    walkType(root: Type): {
        visitedTypes: readonly Type[];
        visitedSymbols: readonly Symbol[];
    };
    /** Note: Return values are not ordered. */
    walkSymbol(root: Symbol): {
        visitedTypes: readonly Type[];
        visitedSymbols: readonly Symbol[];
    };
}
interface SymbolWriter extends SymbolTracker {
    writeKeyword(text: string): void;
    writeOperator(text: string): void;
    writePunctuation(text: string): void;
    writeSpace(text: string): void;
    writeStringLiteral(text: string): void;
    writeParameter(text: string): void;
    writeProperty(text: string): void;
    writeSymbol(text: string, symbol: Symbol): void;
    writeLine(force?: boolean): void;
    increaseIndent(): void;
    decreaseIndent(): void;
    clear(): void;
}
export declare const enum SymbolAccessibility {
    Accessible = 0,
    NotAccessible = 1,
    CannotBeNamed = 2
}
export declare const enum SyntheticSymbolKind {
    UnionOrIntersection = 0,
    Spread = 1
}
export declare const enum TypePredicateKind {
    This = 0,
    Identifier = 1,
    AssertsThis = 2,
    AssertsIdentifier = 3
}
export interface TypePredicateBase {
    kind: TypePredicateKind;
    type: Type | undefined;
}
export interface ThisTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.This;
    parameterName: undefined;
    parameterIndex: undefined;
    type: Type;
}
export interface IdentifierTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.Identifier;
    parameterName: string;
    parameterIndex: number;
    type: Type;
}
export interface AssertsThisTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.AssertsThis;
    parameterName: undefined;
    parameterIndex: undefined;
    type: Type | undefined;
}
export interface AssertsIdentifierTypePredicate extends TypePredicateBase {
    kind: TypePredicateKind.AssertsIdentifier;
    parameterName: string;
    parameterIndex: number;
    type: Type | undefined;
}
export declare type TypePredicate = ThisTypePredicate | IdentifierTypePredicate | AssertsThisTypePredicate | AssertsIdentifierTypePredicate;
export declare type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;
export declare type AnyImportOrRequire = AnyImportSyntax | RequireVariableDeclaration;
export declare type AnyImportOrRequireStatement = AnyImportSyntax | RequireVariableStatement;
export declare type AnyImportOrReExport = AnyImportSyntax | ExportDeclaration;
export interface ValidImportTypeNode extends ImportTypeNode {
    argument: LiteralTypeNode & {
        literal: StringLiteral;
    };
}
export declare type AnyValidImportOrReExport = (ImportDeclaration | ExportDeclaration) & {
    moduleSpecifier: StringLiteral;
} | ImportEqualsDeclaration & {
    moduleReference: ExternalModuleReference & {
        expression: StringLiteral;
    };
} | RequireOrImportCall | ValidImportTypeNode;
export declare type RequireOrImportCall = CallExpression & {
    expression: Identifier;
    arguments: [StringLiteralLike];
};
export interface RequireVariableDeclaration extends VariableDeclaration {
    readonly initializer: RequireOrImportCall;
}
export interface RequireVariableStatement extends VariableStatement {
    readonly declarationList: RequireVariableDeclarationList;
}
export interface RequireVariableDeclarationList extends VariableDeclarationList {
    readonly declarations: NodeArray<RequireVariableDeclaration>;
}
export declare type LateVisibilityPaintedStatement = AnyImportSyntax | VariableStatement | ClassDeclaration | FunctionDeclaration | ModuleDeclaration | TypeAliasDeclaration | InterfaceDeclaration | EnumDeclaration;
export interface SymbolVisibilityResult {
    accessibility: SymbolAccessibility;
    aliasesToMakeVisible?: LateVisibilityPaintedStatement[];
    errorSymbolName?: string;
    errorNode?: Node;
}
export interface SymbolAccessibilityResult extends SymbolVisibilityResult {
    errorModuleName?: string;
}
export interface AllAccessorDeclarations {
    firstAccessor: AccessorDeclaration;
    secondAccessor: AccessorDeclaration | undefined;
    getAccessor: GetAccessorDeclaration | undefined;
    setAccessor: SetAccessorDeclaration | undefined;
}
/** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator metadata */
export declare enum TypeReferenceSerializationKind {
    Unknown = 0,
    TypeWithConstructSignatureAndValue = 1,
    VoidNullableOrNeverType = 2,
    NumberLikeType = 3,
    BigIntLikeType = 4,
    StringLikeType = 5,
    BooleanType = 6,
    ArrayLikeType = 7,
    ESSymbolType = 8,
    Promise = 9,
    TypeWithCallSignature = 10,
    ObjectType = 11
}
export interface EmitResolver {
    hasGlobalName(name: string): boolean;
    getReferencedExportContainer(node: Identifier, prefixLocals?: boolean): SourceFile | ModuleDeclaration | EnumDeclaration | undefined;
    getReferencedImportDeclaration(node: Identifier): Declaration | undefined;
    getReferencedDeclarationWithCollidingName(node: Identifier): Declaration | undefined;
    isDeclarationWithCollidingName(node: Declaration): boolean;
    isValueAliasDeclaration(node: Node): boolean;
    isReferencedAliasDeclaration(node: Node, checkChildren?: boolean): boolean;
    isTopLevelValueImportEqualsWithEntityName(node: ImportEqualsDeclaration): boolean;
    getNodeCheckFlags(node: Node): NodeCheckFlags;
    isDeclarationVisible(node: Declaration | AnyImportSyntax): boolean;
    isLateBound(node: Declaration): node is LateBoundDeclaration;
    collectLinkedAliases(node: Identifier, setVisibility?: boolean): Node[] | undefined;
    isImplementationOfOverload(node: SignatureDeclaration): boolean | undefined;
    isRequiredInitializedParameter(node: ParameterDeclaration): boolean;
    isOptionalUninitializedParameterProperty(node: ParameterDeclaration): boolean;
    isExpandoFunctionDeclaration(node: FunctionDeclaration): boolean;
    getPropertiesOfContainerFunction(node: Declaration): Symbol[];
    createTypeOfDeclaration(declaration: AccessorDeclaration | VariableLikeDeclaration | PropertyAccessExpression, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker, addUndefined?: boolean): TypeNode | undefined;
    createReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker): TypeNode | undefined;
    createTypeOfExpression(expr: Expression, enclosingDeclaration: Node, flags: NodeBuilderFlags, tracker: SymbolTracker): TypeNode | undefined;
    createLiteralConstValue(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration, tracker: SymbolTracker): Expression;
    isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags | undefined, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
    isEntityNameVisible(entityName: EntityNameOrEntityNameExpression, enclosingDeclaration: Node): SymbolVisibilityResult;
    getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): string | number | undefined;
    getReferencedValueDeclaration(reference: Identifier): Declaration | undefined;
    getTypeReferenceSerializationKind(typeName: EntityName, location?: Node): TypeReferenceSerializationKind;
    isOptionalParameter(node: ParameterDeclaration): boolean;
    moduleExportsSomeValue(moduleReferenceExpression: Expression): boolean;
    isArgumentsLocalBinding(node: Identifier): boolean;
    getExternalModuleFileFromDeclaration(declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration | ImportTypeNode | ImportCall): SourceFile | undefined;
    getTypeReferenceDirectivesForEntityName(name: EntityNameOrEntityNameExpression): string[] | undefined;
    getTypeReferenceDirectivesForSymbol(symbol: Symbol, meaning?: SymbolFlags): string[] | undefined;
    isLiteralConstDeclaration(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration): boolean;
    getJsxFactoryEntity(location?: Node): EntityName | undefined;
    getJsxFragmentFactoryEntity(location?: Node): EntityName | undefined;
    getAllAccessorDeclarations(declaration: AccessorDeclaration): AllAccessorDeclarations;
    getSymbolOfExternalModuleSpecifier(node: StringLiteralLike): Symbol | undefined;
    isBindingCapturedByNode(node: Node, decl: VariableDeclaration | BindingElement): boolean;
    getDeclarationStatementsForSourceFile(node: SourceFile, flags: NodeBuilderFlags, tracker: SymbolTracker, bundled?: boolean): Statement[] | undefined;
    isImportRequiredByAugmentation(decl: ImportDeclaration): boolean;
}
export declare const enum SymbolFlags {
    None = 0,
    FunctionScopedVariable = 1,
    BlockScopedVariable = 2,
    Property = 4,
    EnumMember = 8,
    Function = 16,
    Class = 32,
    Interface = 64,
    ConstEnum = 128,
    RegularEnum = 256,
    ValueModule = 512,
    NamespaceModule = 1024,
    TypeLiteral = 2048,
    ObjectLiteral = 4096,
    Method = 8192,
    Constructor = 16384,
    GetAccessor = 32768,
    SetAccessor = 65536,
    Signature = 131072,
    TypeParameter = 262144,
    TypeAlias = 524288,
    ExportValue = 1048576,
    Alias = 2097152,
    Prototype = 4194304,
    ExportStar = 8388608,
    Optional = 16777216,
    Transient = 33554432,
    Assignment = 67108864,
    ModuleExports = 134217728,
    All = 67108863,
    Enum = 384,
    Variable = 3,
    Value = 111551,
    Type = 788968,
    Namespace = 1920,
    Module = 1536,
    Accessor = 98304,
    FunctionScopedVariableExcludes = 111550,
    BlockScopedVariableExcludes = 111551,
    ParameterExcludes = 111551,
    PropertyExcludes = 0,
    EnumMemberExcludes = 900095,
    FunctionExcludes = 110991,
    ClassExcludes = 899503,
    InterfaceExcludes = 788872,
    RegularEnumExcludes = 899327,
    ConstEnumExcludes = 899967,
    ValueModuleExcludes = 110735,
    NamespaceModuleExcludes = 0,
    MethodExcludes = 103359,
    GetAccessorExcludes = 46015,
    SetAccessorExcludes = 78783,
    TypeParameterExcludes = 526824,
    TypeAliasExcludes = 788968,
    AliasExcludes = 2097152,
    ModuleMember = 2623475,
    ExportHasLocal = 944,
    BlockScoped = 418,
    PropertyOrAccessor = 98308,
    ClassMember = 106500,
    ExportSupportsDefaultModifier = 112,
    ExportDoesNotSupportDefaultModifier = -113,
    Classifiable = 2885600,
    LateBindingContainer = 6256
}
export declare type SymbolId = number;
export interface Symbol {
    flags: SymbolFlags;
    escapedName: __String;
    declarations?: Declaration[];
    valueDeclaration?: Declaration;
    members?: SymbolTable;
    exports?: SymbolTable;
    globalExports?: SymbolTable;
    id?: SymbolId;
    mergeId?: number;
    parent?: Symbol;
    exportSymbol?: Symbol;
    constEnumOnlyModule?: boolean;
    isReferenced?: SymbolFlags;
    isReplaceableByMethod?: boolean;
    isAssigned?: boolean;
    assignmentDeclarationMembers?: ESMap<number, Declaration>;
}
export interface SymbolLinks {
    immediateTarget?: Symbol;
    target?: Symbol;
    type?: Type;
    writeType?: Type;
    nameType?: Type;
    uniqueESSymbolType?: Type;
    declaredType?: Type;
    typeParameters?: TypeParameter[];
    outerTypeParameters?: TypeParameter[];
    instantiations?: ESMap<string, Type>;
    aliasSymbol?: Symbol;
    aliasTypeArguments?: readonly Type[];
    inferredClassSymbol?: ESMap<SymbolId, TransientSymbol>;
    mapper?: TypeMapper;
    referenced?: boolean;
    constEnumReferenced?: boolean;
    containingType?: UnionOrIntersectionType;
    leftSpread?: Symbol;
    rightSpread?: Symbol;
    syntheticOrigin?: Symbol;
    isDiscriminantProperty?: boolean;
    resolvedExports?: SymbolTable;
    resolvedMembers?: SymbolTable;
    exportsChecked?: boolean;
    typeParametersChecked?: boolean;
    isDeclarationWithCollidingName?: boolean;
    bindingElement?: BindingElement;
    exportsSomeValue?: boolean;
    enumKind?: EnumKind;
    originatingImport?: ImportDeclaration | ImportCall;
    lateSymbol?: Symbol;
    specifierCache?: ESMap<string, string>;
    extendedContainers?: Symbol[];
    extendedContainersByFile?: ESMap<NodeId, Symbol[]>;
    variances?: VarianceFlags[];
    deferralConstituents?: Type[];
    deferralParent?: Type;
    cjsExportMerged?: Symbol;
    typeOnlyDeclaration?: TypeOnlyCompatibleAliasDeclaration | false;
    isConstructorDeclaredProperty?: boolean;
    tupleLabelDeclaration?: NamedTupleMember | ParameterDeclaration;
}
export declare const enum EnumKind {
    Numeric = 0,
    Literal = 1
}
export declare const enum CheckFlags {
    Instantiated = 1,
    SyntheticProperty = 2,
    SyntheticMethod = 4,
    Readonly = 8,
    ReadPartial = 16,
    WritePartial = 32,
    HasNonUniformType = 64,
    HasLiteralType = 128,
    ContainsPublic = 256,
    ContainsProtected = 512,
    ContainsPrivate = 1024,
    ContainsStatic = 2048,
    Late = 4096,
    ReverseMapped = 8192,
    OptionalParameter = 16384,
    RestParameter = 32768,
    DeferredType = 65536,
    HasNeverType = 131072,
    Mapped = 262144,
    StripOptional = 524288,
    Synthetic = 6,
    Discriminant = 192,
    Partial = 48
}
export interface TransientSymbol extends Symbol, SymbolLinks {
    checkFlags: CheckFlags;
}
export interface MappedSymbol extends TransientSymbol {
    mappedType: MappedType;
    keyType: Type;
}
export interface ReverseMappedSymbol extends TransientSymbol {
    propertyType: Type;
    mappedType: MappedType;
    constraintType: IndexType;
}
export declare const enum InternalSymbolName {
    Call = "__call",
    Constructor = "__constructor",
    New = "__new",
    Index = "__index",
    ExportStar = "__export",
    Global = "__global",
    Missing = "__missing",
    Type = "__type",
    Object = "__object",
    JSXAttributes = "__jsxAttributes",
    Class = "__class",
    Function = "__function",
    Computed = "__computed",
    Resolving = "__resolving__",
    ExportEquals = "export=",
    Default = "default",
    This = "this"
}
/**
 * This represents a string whose leading underscore have been escaped by adding extra leading underscores.
 * The shape of this brand is rather unique compared to others we've used.
 * Instead of just an intersection of a string and an object, it is that union-ed
 * with an intersection of void and an object. This makes it wholly incompatible
 * with a normal string (which is good, it cannot be misused on assignment or on usage),
 * while still being comparable with a normal string via === (also good) and castable from a string.
 */
export declare type __String = (string & {
    __escapedIdentifier: void;
}) | (void & {
    __escapedIdentifier: void;
}) | InternalSymbolName;
/** ReadonlyMap where keys are `__String`s. */
export interface ReadonlyUnderscoreEscapedMap<T> extends ReadonlyESMap<__String, T> {
}
/** Map where keys are `__String`s. */
export interface UnderscoreEscapedMap<T> extends ESMap<__String, T>, ReadonlyUnderscoreEscapedMap<T> {
}
/** SymbolTable based on ES6 Map interface. */
export declare type SymbolTable = UnderscoreEscapedMap<Symbol>;
/** Used to track a `declare module "foo*"`-like declaration. */
export interface PatternAmbientModule {
    pattern: Pattern;
    symbol: Symbol;
}
export declare const enum NodeCheckFlags {
    TypeChecked = 1,
    LexicalThis = 2,
    CaptureThis = 4,
    CaptureNewTarget = 8,
    SuperInstance = 256,
    SuperStatic = 512,
    ContextChecked = 1024,
    AsyncMethodWithSuper = 2048,
    AsyncMethodWithSuperBinding = 4096,
    CaptureArguments = 8192,
    EnumValuesComputed = 16384,
    LexicalModuleMergesWithClass = 32768,
    LoopWithCapturedBlockScopedBinding = 65536,
    ContainsCapturedBlockScopeBinding = 131072,
    CapturedBlockScopedBinding = 262144,
    BlockScopedBindingInLoop = 524288,
    ClassWithBodyScopedClassBinding = 1048576,
    BodyScopedClassBinding = 2097152,
    NeedsLoopOutParameter = 4194304,
    AssignmentsMarked = 8388608,
    ClassWithConstructorReference = 16777216,
    ConstructorReferenceInClass = 33554432,
    ContainsClassWithPrivateIdentifiers = 67108864
}
export interface NodeLinks {
    flags: NodeCheckFlags;
    resolvedType?: Type;
    resolvedEnumType?: Type;
    resolvedSignature?: Signature;
    resolvedSymbol?: Symbol;
    resolvedIndexInfo?: IndexInfo;
    effectsSignature?: Signature;
    enumMemberValue?: string | number;
    isVisible?: boolean;
    containsArgumentsReference?: boolean;
    hasReportedStatementInAmbientContext?: boolean;
    jsxFlags: JsxFlags;
    resolvedJsxElementAttributesType?: Type;
    resolvedJsxElementAllAttributesType?: Type;
    resolvedJSDocType?: Type;
    switchTypes?: Type[];
    jsxNamespace?: Symbol | false;
    jsxImplicitImportContainer?: Symbol | false;
    contextFreeType?: Type;
    deferredNodes?: ESMap<NodeId, Node>;
    capturedBlockScopeBindings?: Symbol[];
    outerTypeParameters?: TypeParameter[];
    isExhaustive?: boolean;
    skipDirectInference?: true;
    declarationRequiresScopeChange?: boolean;
}
export declare const enum TypeFlags {
    Any = 1,
    Unknown = 2,
    String = 4,
    Number = 8,
    Boolean = 16,
    Enum = 32,
    BigInt = 64,
    StringLiteral = 128,
    NumberLiteral = 256,
    BooleanLiteral = 512,
    EnumLiteral = 1024,
    BigIntLiteral = 2048,
    ESSymbol = 4096,
    UniqueESSymbol = 8192,
    Void = 16384,
    Undefined = 32768,
    Null = 65536,
    Never = 131072,
    TypeParameter = 262144,
    Object = 524288,
    Union = 1048576,
    Intersection = 2097152,
    Index = 4194304,
    IndexedAccess = 8388608,
    Conditional = 16777216,
    Substitution = 33554432,
    NonPrimitive = 67108864,
    TemplateLiteral = 134217728,
    StringMapping = 268435456,
    AnyOrUnknown = 3,
    Nullable = 98304,
    Literal = 2944,
    Unit = 109440,
    StringOrNumberLiteral = 384,
    StringOrNumberLiteralOrUnique = 8576,
    DefinitelyFalsy = 117632,
    PossiblyFalsy = 117724,
    Intrinsic = 67359327,
    Primitive = 131068,
    StringLike = 402653316,
    NumberLike = 296,
    BigIntLike = 2112,
    BooleanLike = 528,
    EnumLike = 1056,
    ESSymbolLike = 12288,
    VoidLike = 49152,
    DisjointDomains = 469892092,
    UnionOrIntersection = 3145728,
    StructuredType = 3670016,
    TypeVariable = 8650752,
    InstantiableNonPrimitive = 58982400,
    InstantiablePrimitive = 406847488,
    Instantiable = 465829888,
    StructuredOrInstantiable = 469499904,
    ObjectFlagsType = 3899393,
    Simplifiable = 25165824,
    Substructure = 469237760,
    Narrowable = 536624127,
    NotPrimitiveUnion = 468598819,
    IncludesMask = 205258751,
    IncludesStructuredOrInstantiable = 262144,
    IncludesNonWideningType = 4194304,
    IncludesWildcard = 8388608,
    IncludesEmptyObject = 16777216
}
export declare type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;
export declare type TypeId = number;
export interface Type {
    flags: TypeFlags;
    id: TypeId;
    checker: TypeChecker;
    symbol: Symbol;
    pattern?: DestructuringPattern;
    aliasSymbol?: Symbol;
    aliasTypeArguments?: readonly Type[];
    aliasTypeArgumentsContainsMarker?: boolean;
    permissiveInstantiation?: Type;
    restrictiveInstantiation?: Type;
    immediateBaseConstraint?: Type;
    widened?: Type;
}
export interface IntrinsicType extends Type {
    intrinsicName: string;
    objectFlags: ObjectFlags;
}
export interface NullableType extends IntrinsicType {
    objectFlags: ObjectFlags;
}
export interface FreshableIntrinsicType extends IntrinsicType {
    freshType: IntrinsicType;
    regularType: IntrinsicType;
}
export declare type FreshableType = LiteralType | FreshableIntrinsicType;
export interface LiteralType extends Type {
    value: string | number | PseudoBigInt;
    freshType: LiteralType;
    regularType: LiteralType;
}
export interface UniqueESSymbolType extends Type {
    symbol: Symbol;
    escapedName: __String;
}
export interface StringLiteralType extends LiteralType {
    value: string;
}
export interface NumberLiteralType extends LiteralType {
    value: number;
}
export interface BigIntLiteralType extends LiteralType {
    value: PseudoBigInt;
}
export interface EnumType extends Type {
}
export declare const enum ObjectFlags {
    Class = 1,
    Interface = 2,
    Reference = 4,
    Tuple = 8,
    Anonymous = 16,
    Mapped = 32,
    Instantiated = 64,
    ObjectLiteral = 128,
    EvolvingArray = 256,
    ObjectLiteralPatternWithComputedProperties = 512,
    ReverseMapped = 1024,
    JsxAttributes = 2048,
    MarkerType = 4096,
    JSLiteral = 8192,
    FreshLiteral = 16384,
    ArrayLiteral = 32768,
    PrimitiveUnion = 65536,
    ContainsWideningType = 131072,
    ContainsObjectOrArrayLiteral = 262144,
    NonInferrableType = 524288,
    CouldContainTypeVariablesComputed = 1048576,
    CouldContainTypeVariables = 2097152,
    ClassOrInterface = 3,
    RequiresWidening = 393216,
    PropagatingFlags = 917504,
    ObjectTypeKindMask = 1343,
    ContainsSpread = 4194304,
    ObjectRestType = 8388608,
    IsClassInstanceClone = 16777216,
    IdenticalBaseTypeCalculated = 33554432,
    IdenticalBaseTypeExists = 67108864,
    IsGenericObjectTypeComputed = 4194304,
    IsGenericObjectType = 8388608,
    IsGenericIndexTypeComputed = 16777216,
    IsGenericIndexType = 33554432,
    ContainsIntersections = 67108864,
    IsNeverIntersectionComputed = 67108864,
    IsNeverIntersection = 134217728
}
export declare type ObjectFlagsType = NullableType | ObjectType | UnionType | IntersectionType;
export interface ObjectType extends Type {
    objectFlags: ObjectFlags;
    members?: SymbolTable;
    properties?: Symbol[];
    callSignatures?: readonly Signature[];
    constructSignatures?: readonly Signature[];
    stringIndexInfo?: IndexInfo;
    numberIndexInfo?: IndexInfo;
    objectTypeWithoutAbstractConstructSignatures?: ObjectType;
}
/** Class and interface types (ObjectFlags.Class and ObjectFlags.Interface). */
export interface InterfaceType extends ObjectType {
    typeParameters: TypeParameter[] | undefined;
    outerTypeParameters: TypeParameter[] | undefined;
    localTypeParameters: TypeParameter[] | undefined;
    thisType: TypeParameter | undefined;
    resolvedBaseConstructorType?: Type;
    resolvedBaseTypes: BaseType[];
    baseTypesResolved?: boolean;
}
export declare type BaseType = ObjectType | IntersectionType | TypeVariable;
export interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
    declaredProperties: Symbol[];
    declaredCallSignatures: Signature[];
    declaredConstructSignatures: Signature[];
    declaredStringIndexInfo?: IndexInfo;
    declaredNumberIndexInfo?: IndexInfo;
}
/**
 * Type references (ObjectFlags.Reference). When a class or interface has type parameters or
 * a "this" type, references to the class or interface are made using type references. The
 * typeArguments property specifies the types to substitute for the type parameters of the
 * class or interface and optionally includes an extra element that specifies the type to
 * substitute for "this" in the resulting instantiation. When no extra argument is present,
 * the type reference itself is substituted for "this". The typeArguments property is undefined
 * if the class or interface has no type parameters and the reference isn't specifying an
 * explicit "this" argument.
 */
export interface TypeReference extends ObjectType {
    target: GenericType;
    node?: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
    mapper?: TypeMapper;
    resolvedTypeArguments?: readonly Type[];
    literalType?: TypeReference;
    cachedEquivalentBaseType?: Type;
}
export interface DeferredTypeReference extends TypeReference {
    node: TypeReferenceNode | ArrayTypeNode | TupleTypeNode;
    mapper?: TypeMapper;
    instantiations?: ESMap<string, Type>;
}
export declare const enum VarianceFlags {
    Invariant = 0,
    Covariant = 1,
    Contravariant = 2,
    Bivariant = 3,
    Independent = 4,
    VarianceMask = 7,
    Unmeasurable = 8,
    Unreliable = 16,
    AllowsStructuralFallback = 24
}
export interface GenericType extends InterfaceType, TypeReference {
    instantiations: ESMap<string, TypeReference>;
    variances?: VarianceFlags[];
}
export declare const enum ElementFlags {
    Required = 1,
    Optional = 2,
    Rest = 4,
    Variadic = 8,
    Fixed = 3,
    Variable = 12,
    NonRequired = 14,
    NonRest = 11
}
export interface TupleType extends GenericType {
    elementFlags: readonly ElementFlags[];
    minLength: number;
    fixedLength: number;
    hasRestElement: boolean;
    combinedFlags: ElementFlags;
    readonly: boolean;
    labeledElementDeclarations?: readonly (NamedTupleMember | ParameterDeclaration)[];
}
export interface TupleTypeReference extends TypeReference {
    target: TupleType;
}
export interface UnionOrIntersectionType extends Type {
    types: Type[];
    objectFlags: ObjectFlags;
    propertyCache?: SymbolTable;
    propertyCacheWithoutObjectFunctionPropertyAugment?: SymbolTable;
    resolvedProperties: Symbol[];
    resolvedIndexType: IndexType;
    resolvedStringIndexType: IndexType;
    resolvedBaseConstraint: Type;
}
export interface UnionType extends UnionOrIntersectionType {
    resolvedReducedType?: Type;
    regularType?: UnionType;
    origin?: Type;
    keyPropertyName?: __String;
    constituentMap?: ESMap<TypeId, Type>;
}
export interface IntersectionType extends UnionOrIntersectionType {
    resolvedApparentType: Type;
}
export declare type StructuredType = ObjectType | UnionType | IntersectionType;
export interface AnonymousType extends ObjectType {
    target?: AnonymousType;
    mapper?: TypeMapper;
    instantiations?: ESMap<string, Type>;
}
export interface MappedType extends AnonymousType {
    declaration: MappedTypeNode;
    typeParameter?: TypeParameter;
    constraintType?: Type;
    nameType?: Type;
    templateType?: Type;
    modifiersType?: Type;
    resolvedApparentType?: Type;
    containsError?: boolean;
}
export interface EvolvingArrayType extends ObjectType {
    elementType: Type;
    finalArrayType?: Type;
}
export interface ReverseMappedType extends ObjectType {
    source: Type;
    mappedType: MappedType;
    constraintType: IndexType;
}
export interface ResolvedType extends ObjectType, UnionOrIntersectionType {
    members: SymbolTable;
    properties: Symbol[];
    callSignatures: readonly Signature[];
    constructSignatures: readonly Signature[];
}
export interface FreshObjectLiteralType extends ResolvedType {
    regularType: ResolvedType;
}
export interface IterationTypes {
    readonly yieldType: Type;
    readonly returnType: Type;
    readonly nextType: Type;
}
export interface IterableOrIteratorType extends ObjectType, UnionType {
    iterationTypesOfGeneratorReturnType?: IterationTypes;
    iterationTypesOfAsyncGeneratorReturnType?: IterationTypes;
    iterationTypesOfIterable?: IterationTypes;
    iterationTypesOfIterator?: IterationTypes;
    iterationTypesOfAsyncIterable?: IterationTypes;
    iterationTypesOfAsyncIterator?: IterationTypes;
    iterationTypesOfIteratorResult?: IterationTypes;
}
export interface PromiseOrAwaitableType extends ObjectType, UnionType {
    promiseTypeOfPromiseConstructor?: Type;
    promisedTypeOfPromise?: Type;
    awaitedTypeOfType?: Type;
}
export interface SyntheticDefaultModuleType extends Type {
    syntheticType?: Type;
}
export interface InstantiableType extends Type {
    resolvedBaseConstraint?: Type;
    resolvedIndexType?: IndexType;
    resolvedStringIndexType?: IndexType;
}
export interface TypeParameter extends InstantiableType {
    /** Retrieve using getConstraintFromTypeParameter */
    constraint?: Type;
    default?: Type;
    target?: TypeParameter;
    mapper?: TypeMapper;
    isThisType?: boolean;
    resolvedDefaultType?: Type;
}
export interface IndexedAccessType extends InstantiableType {
    objectType: Type;
    indexType: Type;
    /**
     * @internal
     * Indicates that --noUncheckedIndexedAccess may introduce 'undefined' into
     * the resulting type, depending on how type variable constraints are resolved.
     */
    noUncheckedIndexedAccessCandidate: boolean;
    constraint?: Type;
    simplifiedForReading?: Type;
    simplifiedForWriting?: Type;
}
export declare type TypeVariable = TypeParameter | IndexedAccessType;
export interface IndexType extends InstantiableType {
    type: InstantiableType | UnionOrIntersectionType;
    stringsOnly: boolean;
}
export interface ConditionalRoot {
    node: ConditionalTypeNode;
    checkType: Type;
    extendsType: Type;
    isDistributive: boolean;
    inferTypeParameters?: TypeParameter[];
    outerTypeParameters?: TypeParameter[];
    instantiations?: Map<Type>;
    aliasSymbol?: Symbol;
    aliasTypeArguments?: Type[];
}
export interface ConditionalType extends InstantiableType {
    root: ConditionalRoot;
    checkType: Type;
    extendsType: Type;
    resolvedTrueType: Type;
    resolvedFalseType: Type;
    resolvedInferredTrueType?: Type;
    resolvedDefaultConstraint?: Type;
    mapper?: TypeMapper;
    combinedMapper?: TypeMapper;
}
export interface TemplateLiteralType extends InstantiableType {
    texts: readonly string[];
    types: readonly Type[];
}
export interface StringMappingType extends InstantiableType {
    symbol: Symbol;
    type: Type;
}
export interface SubstitutionType extends InstantiableType {
    objectFlags: ObjectFlags;
    baseType: Type;
    substitute: Type;
}
export declare const enum JsxReferenceKind {
    Component = 0,
    Function = 1,
    Mixed = 2
}
export declare const enum SignatureKind {
    Call = 0,
    Construct = 1
}
export declare const enum SignatureFlags {
    None = 0,
    HasRestParameter = 1,
    HasLiteralTypes = 2,
    Abstract = 4,
    IsInnerCallChain = 8,
    IsOuterCallChain = 16,
    IsUntypedSignatureInJSFile = 32,
    PropagatingFlags = 39,
    CallChainFlags = 24
}
export interface Signature {
    flags: SignatureFlags;
    checker?: TypeChecker;
    declaration?: SignatureDeclaration | JSDocSignature;
    typeParameters?: readonly TypeParameter[];
    parameters: readonly Symbol[];
    thisParameter?: Symbol;
    resolvedReturnType?: Type;
    resolvedTypePredicate?: TypePredicate;
    minArgumentCount: number;
    resolvedMinArgumentCount?: number;
    target?: Signature;
    mapper?: TypeMapper;
    compositeSignatures?: Signature[];
    compositeKind?: TypeFlags;
    erasedSignatureCache?: Signature;
    canonicalSignatureCache?: Signature;
    baseSignatureCache?: Signature;
    optionalCallSignatureCache?: {
        inner?: Signature;
        outer?: Signature;
    };
    isolatedSignatureType?: ObjectType;
    instantiations?: ESMap<string, Signature>;
}
export declare const enum IndexKind {
    String = 0,
    Number = 1
}
export interface IndexInfo {
    type: Type;
    isReadonly: boolean;
    declaration?: IndexSignatureDeclaration;
}
export declare const enum TypeMapKind {
    Simple = 0,
    Array = 1,
    Function = 2,
    Composite = 3,
    Merged = 4
}
export declare type TypeMapper = {
    kind: TypeMapKind.Simple;
    source: Type;
    target: Type;
} | {
    kind: TypeMapKind.Array;
    sources: readonly Type[];
    targets: readonly Type[] | undefined;
} | {
    kind: TypeMapKind.Function;
    func: (t: Type) => Type;
} | {
    kind: TypeMapKind.Composite | TypeMapKind.Merged;
    mapper1: TypeMapper;
    mapper2: TypeMapper;
};
export declare const enum InferencePriority {
    NakedTypeVariable = 1,
    SpeculativeTuple = 2,
    SubstituteSource = 4,
    HomomorphicMappedType = 8,
    PartialHomomorphicMappedType = 16,
    MappedTypeConstraint = 32,
    ContravariantConditional = 64,
    ReturnType = 128,
    LiteralKeyof = 256,
    NoConstraints = 512,
    AlwaysStrict = 1024,
    MaxValue = 2048,
    PriorityImpliesCombination = 416,
    Circularity = -1
}
export interface InferenceInfo {
    typeParameter: TypeParameter;
    candidates: Type[] | undefined;
    contraCandidates: Type[] | undefined;
    inferredType?: Type;
    priority?: InferencePriority;
    topLevel: boolean;
    isFixed: boolean;
    impliedArity?: number;
}
export declare const enum InferenceFlags {
    None = 0,
    NoDefault = 1,
    AnyDefault = 2,
    SkippedGenericFunction = 4
}
/**
 * Ternary values are defined such that
 * x & y picks the lesser in the order False < Unknown < Maybe < True, and
 * x | y picks the greater in the order False < Unknown < Maybe < True.
 * Generally, Ternary.Maybe is used as the result of a relation that depends on itself, and
 * Ternary.Unknown is used as the result of a variance check that depends on itself. We make
 * a distinction because we don't want to cache circular variance check results.
 */
export declare const enum Ternary {
    False = 0,
    Unknown = 1,
    Maybe = 3,
    True = -1
}
export declare type TypeComparer = (s: Type, t: Type, reportErrors?: boolean) => Ternary;
export interface InferenceContext {
    inferences: InferenceInfo[];
    signature?: Signature;
    flags: InferenceFlags;
    compareTypes: TypeComparer;
    mapper: TypeMapper;
    nonFixingMapper: TypeMapper;
    returnMapper?: TypeMapper;
    inferredTypeParameters?: readonly TypeParameter[];
}
export interface WideningContext {
    parent?: WideningContext;
    propertyName?: __String;
    siblings?: Type[];
    resolvedProperties?: Symbol[];
}
export declare const enum AssignmentDeclarationKind {
    None = 0,
    ExportsProperty = 1,
    ModuleExports = 2,
    PrototypeProperty = 3,
    ThisProperty = 4,
    Property = 5,
    Prototype = 6,
    ObjectDefinePropertyValue = 7,
    ObjectDefinePropertyExports = 8,
    ObjectDefinePrototypeProperty = 9
}
/** @deprecated Use FileExtensionInfo instead. */
export declare type JsFileExtensionInfo = FileExtensionInfo;
export interface FileExtensionInfo {
    extension: string;
    isMixedContent: boolean;
    scriptKind?: ScriptKind;
}
export interface DiagnosticMessage {
    key: string;
    category: DiagnosticCategory;
    code: number;
    message: string;
    reportsUnnecessary?: {};
    reportsDeprecated?: {};
    elidedInCompatabilityPyramid?: boolean;
}
/**
 * A linked list of formatted diagnostic messages to be used as part of a multiline message.
 * It is built from the bottom up, leaving the head to be the "main" diagnostic.
 * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
 * the difference is that messages are all preformatted in DMC.
 */
export interface DiagnosticMessageChain {
    messageText: string;
    category: DiagnosticCategory;
    code: number;
    next?: DiagnosticMessageChain[];
}
export interface Diagnostic extends DiagnosticRelatedInformation {
    /** May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic. */
    reportsUnnecessary?: {};
    reportsDeprecated?: {};
    source?: string;
    relatedInformation?: DiagnosticRelatedInformation[];
    skippedOn?: keyof CompilerOptions;
}
export interface DiagnosticRelatedInformation {
    category: DiagnosticCategory;
    code: number;
    file: SourceFile | undefined;
    start: number | undefined;
    length: number | undefined;
    messageText: string | DiagnosticMessageChain;
}
export interface DiagnosticWithLocation extends Diagnostic {
    file: SourceFile;
    start: number;
    length: number;
}
export interface DiagnosticWithDetachedLocation extends Diagnostic {
    file: undefined;
    fileName: string;
    start: number;
    length: number;
}
export declare enum DiagnosticCategory {
    Warning = 0,
    Error = 1,
    Suggestion = 2,
    Message = 3
}
export declare function diagnosticCategoryName(d: {
    category: DiagnosticCategory;
}, lowerCase?: boolean): string;
export declare enum ModuleResolutionKind {
    Classic = 1,
    NodeJs = 2
}
export interface PluginImport {
    name: string;
}
export interface ProjectReference {
    /** A normalized path on disk */
    path: string;
    /** The path as the user originally wrote it */
    originalPath?: string;
    /** True if the output of this reference should be prepended to the output of this project. Only valid for --outFile compilations */
    prepend?: boolean;
    /** True if it is intended that this reference form a circularity */
    circular?: boolean;
}
export declare enum WatchFileKind {
    FixedPollingInterval = 0,
    PriorityPollingInterval = 1,
    DynamicPriorityPolling = 2,
    FixedChunkSizePolling = 3,
    UseFsEvents = 4,
    UseFsEventsOnParentDirectory = 5
}
export declare enum WatchDirectoryKind {
    UseFsEvents = 0,
    FixedPollingInterval = 1,
    DynamicPriorityPolling = 2,
    FixedChunkSizePolling = 3
}
export declare enum PollingWatchKind {
    FixedInterval = 0,
    PriorityInterval = 1,
    DynamicPriority = 2,
    FixedChunkSize = 3
}
export declare type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]> | PluginImport[] | ProjectReference[] | null | undefined;
export interface CompilerOptions {
    all?: boolean;
    allowJs?: boolean;
    allowNonTsExtensions?: boolean;
    allowSyntheticDefaultImports?: boolean;
    allowUmdGlobalAccess?: boolean;
    allowUnreachableCode?: boolean;
    allowUnusedLabels?: boolean;
    alwaysStrict?: boolean;
    baseUrl?: string;
    /** An error if set - this should only go through the -b pipeline and not actually be observed */
    build?: boolean;
    charset?: string;
    checkJs?: boolean;
    configFilePath?: string;
    /** configFile is set as non enumerable property so as to avoid checking of json source files */
    readonly configFile?: TsConfigSourceFile;
    declaration?: boolean;
    declarationMap?: boolean;
    emitDeclarationOnly?: boolean;
    declarationDir?: string;
    diagnostics?: boolean;
    extendedDiagnostics?: boolean;
    disableSizeLimit?: boolean;
    disableSourceOfProjectReferenceRedirect?: boolean;
    disableSolutionSearching?: boolean;
    disableReferencedProjectLoad?: boolean;
    downlevelIteration?: boolean;
    emitBOM?: boolean;
    emitDecoratorMetadata?: boolean;
    experimentalDecorators?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    generateCpuProfile?: string;
    generateTrace?: string;
    help?: boolean;
    importHelpers?: boolean;
    importsNotUsedAsValues?: ImportsNotUsedAsValues;
    init?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    isolatedModules?: boolean;
    jsx?: JsxEmit;
    keyofStringsOnly?: boolean;
    lib?: string[];
    listEmittedFiles?: boolean;
    listFiles?: boolean;
    explainFiles?: boolean;
    listFilesOnly?: boolean;
    locale?: string;
    mapRoot?: string;
    maxNodeModuleJsDepth?: number;
    module?: ModuleKind;
    moduleResolution?: ModuleResolutionKind;
    newLine?: NewLineKind;
    noEmit?: boolean;
    noEmitForJsFiles?: boolean;
    noEmitHelpers?: boolean;
    noEmitOnError?: boolean;
    noErrorTruncation?: boolean;
    noFallthroughCasesInSwitch?: boolean;
    noImplicitAny?: boolean;
    noImplicitReturns?: boolean;
    noImplicitThis?: boolean;
    noStrictGenericChecks?: boolean;
    noUnusedLocals?: boolean;
    noUnusedParameters?: boolean;
    noImplicitUseStrict?: boolean;
    noPropertyAccessFromIndexSignature?: boolean;
    assumeChangesOnlyAffectDirectDependencies?: boolean;
    noLib?: boolean;
    noResolve?: boolean;
    noUncheckedIndexedAccess?: boolean;
    out?: string;
    outDir?: string;
    outFile?: string;
    paths?: MapLike<string[]>;
    /** The directory of the config file that specified 'paths'. Used to resolve relative paths when 'baseUrl' is absent. */
    pathsBasePath?: string;
    plugins?: PluginImport[];
    preserveConstEnums?: boolean;
    noImplicitOverride?: boolean;
    preserveSymlinks?: boolean;
    preserveWatchOutput?: boolean;
    project?: string;
    pretty?: boolean;
    reactNamespace?: string;
    jsxFactory?: string;
    jsxFragmentFactory?: string;
    jsxImportSource?: string;
    composite?: boolean;
    incremental?: boolean;
    tsBuildInfoFile?: string;
    removeComments?: boolean;
    rootDir?: string;
    rootDirs?: string[];
    skipLibCheck?: boolean;
    skipDefaultLibCheck?: boolean;
    sourceMap?: boolean;
    sourceRoot?: string;
    strict?: boolean;
    strictFunctionTypes?: boolean;
    strictBindCallApply?: boolean;
    strictNullChecks?: boolean;
    strictPropertyInitialization?: boolean;
    stripInternal?: boolean;
    suppressExcessPropertyErrors?: boolean;
    suppressImplicitAnyIndexErrors?: boolean;
    suppressOutputPathCheck?: boolean;
    target?: ScriptTarget;
    traceResolution?: boolean;
    resolveJsonModule?: boolean;
    types?: string[];
    /** Paths used to compute primary types search locations */
    typeRoots?: string[];
    version?: boolean;
    watch?: boolean;
    esModuleInterop?: boolean;
    showConfig?: boolean;
    useDefineForClassFields?: boolean;
    [option: string]: CompilerOptionsValue | TsConfigSourceFile | undefined;
}
export interface WatchOptions {
    watchFile?: WatchFileKind;
    watchDirectory?: WatchDirectoryKind;
    fallbackPolling?: PollingWatchKind;
    synchronousWatchDirectory?: boolean;
    excludeDirectories?: string[];
    excludeFiles?: string[];
    [option: string]: CompilerOptionsValue | undefined;
}
export interface TypeAcquisition {
    /**
     * @deprecated typingOptions.enableAutoDiscovery
     * Use typeAcquisition.enable instead.
     */
    enableAutoDiscovery?: boolean;
    enable?: boolean;
    include?: string[];
    exclude?: string[];
    disableFilenameBasedTypeAcquisition?: boolean;
    [option: string]: CompilerOptionsValue | undefined;
}
export declare enum ModuleKind {
    None = 0,
    CommonJS = 1,
    AMD = 2,
    UMD = 3,
    System = 4,
    ES2015 = 5,
    ES2020 = 6,
    ESNext = 99
}
export declare const enum JsxEmit {
    None = 0,
    Preserve = 1,
    React = 2,
    ReactNative = 3,
    ReactJSX = 4,
    ReactJSXDev = 5
}
export declare const enum ImportsNotUsedAsValues {
    Remove = 0,
    Preserve = 1,
    Error = 2
}
export declare const enum NewLineKind {
    CarriageReturnLineFeed = 0,
    LineFeed = 1
}
export interface LineAndCharacter {
    /** 0-based. */
    line: number;
    character: number;
}
export declare const enum ScriptKind {
    Unknown = 0,
    JS = 1,
    JSX = 2,
    TS = 3,
    TSX = 4,
    External = 5,
    JSON = 6,
    /**
     * Used on extensions that doesn't define the ScriptKind but the content defines it.
     * Deferred extensions are going to be included in all project contexts.
     */
    Deferred = 7
}
export declare const enum ScriptTarget {
    ES3 = 0,
    ES5 = 1,
    ES2015 = 2,
    ES2016 = 3,
    ES2017 = 4,
    ES2018 = 5,
    ES2019 = 6,
    ES2020 = 7,
    ES2021 = 8,
    ESNext = 99,
    JSON = 100,
    Latest = 99
}
export declare const enum LanguageVariant {
    Standard = 0,
    JSX = 1
}
/** Either a parsed command line or a parsed tsconfig.json */
export interface ParsedCommandLine {
    options: CompilerOptions;
    typeAcquisition?: TypeAcquisition;
    fileNames: string[];
    projectReferences?: readonly ProjectReference[];
    watchOptions?: WatchOptions;
    raw?: any;
    errors: Diagnostic[];
    wildcardDirectories?: MapLike<WatchDirectoryFlags>;
    compileOnSave?: boolean;
}
export declare const enum WatchDirectoryFlags {
    None = 0,
    Recursive = 1
}
export interface ConfigFileSpecs {
    filesSpecs: readonly string[] | undefined;
    /**
     * Present to report errors (user specified specs), validatedIncludeSpecs are used for file name matching
     */
    includeSpecs: readonly string[] | undefined;
    /**
     * Present to report errors (user specified specs), validatedExcludeSpecs are used for file name matching
     */
    excludeSpecs: readonly string[] | undefined;
    validatedFilesSpec: readonly string[] | undefined;
    validatedIncludeSpecs: readonly string[] | undefined;
    validatedExcludeSpecs: readonly string[] | undefined;
}
export declare type RequireResult<T = {}> = {
    module: T;
    modulePath?: string;
    error: undefined;
} | {
    module: undefined;
    modulePath?: undefined;
    error: {
        stack?: string;
        message?: string;
    };
};
export interface CreateProgramOptions {
    rootNames: readonly string[];
    options: CompilerOptions;
    projectReferences?: readonly ProjectReference[];
    host?: CompilerHost;
    oldProgram?: Program;
    configFileParsingDiagnostics?: readonly Diagnostic[];
}
export interface CommandLineOptionBase {
    name: string;
    type: "string" | "number" | "boolean" | "object" | "list" | ESMap<string, number | string>;
    isFilePath?: boolean;
    shortName?: string;
    description?: DiagnosticMessage;
    paramType?: DiagnosticMessage;
    isTSConfigOnly?: boolean;
    isCommandLineOnly?: boolean;
    showInSimplifiedHelpView?: boolean;
    category?: DiagnosticMessage;
    strictFlag?: true;
    affectsSourceFile?: true;
    affectsModuleResolution?: true;
    affectsBindDiagnostics?: true;
    affectsSemanticDiagnostics?: true;
    affectsEmit?: true;
    transpileOptionValue?: boolean | undefined;
    extraValidation?: (value: CompilerOptionsValue) => [DiagnosticMessage, ...string[]] | undefined;
}
export interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
    type: "string" | "number" | "boolean";
}
export interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
    type: ESMap<string, number | string>;
}
export interface AlternateModeDiagnostics {
    diagnostic: DiagnosticMessage;
    getOptionsNameMap: () => OptionsNameMap;
}
export interface DidYouMeanOptionsDiagnostics {
    alternateMode?: AlternateModeDiagnostics;
    optionDeclarations: CommandLineOption[];
    unknownOptionDiagnostic: DiagnosticMessage;
    unknownDidYouMeanDiagnostic: DiagnosticMessage;
}
export interface TsConfigOnlyOption extends CommandLineOptionBase {
    type: "object";
    elementOptions?: ESMap<string, CommandLineOption>;
    extraKeyDiagnostics?: DidYouMeanOptionsDiagnostics;
}
export interface CommandLineOptionOfListType extends CommandLineOptionBase {
    type: "list";
    element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption;
}
export declare type CommandLineOption = CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption | CommandLineOptionOfListType;
export declare const enum CharacterCodes {
    nullCharacter = 0,
    maxAsciiCharacter = 127,
    lineFeed = 10,
    carriageReturn = 13,
    lineSeparator = 8232,
    paragraphSeparator = 8233,
    nextLine = 133,
    space = 32,
    nonBreakingSpace = 160,
    enQuad = 8192,
    emQuad = 8193,
    enSpace = 8194,
    emSpace = 8195,
    threePerEmSpace = 8196,
    fourPerEmSpace = 8197,
    sixPerEmSpace = 8198,
    figureSpace = 8199,
    punctuationSpace = 8200,
    thinSpace = 8201,
    hairSpace = 8202,
    zeroWidthSpace = 8203,
    narrowNoBreakSpace = 8239,
    ideographicSpace = 12288,
    mathematicalSpace = 8287,
    ogham = 5760,
    _ = 95,
    $ = 36,
    _0 = 48,
    _1 = 49,
    _2 = 50,
    _3 = 51,
    _4 = 52,
    _5 = 53,
    _6 = 54,
    _7 = 55,
    _8 = 56,
    _9 = 57,
    a = 97,
    b = 98,
    c = 99,
    d = 100,
    e = 101,
    f = 102,
    g = 103,
    h = 104,
    i = 105,
    j = 106,
    k = 107,
    l = 108,
    m = 109,
    n = 110,
    o = 111,
    p = 112,
    q = 113,
    r = 114,
    s = 115,
    t = 116,
    u = 117,
    v = 118,
    w = 119,
    x = 120,
    y = 121,
    z = 122,
    A = 65,
    B = 66,
    C = 67,
    D = 68,
    E = 69,
    F = 70,
    G = 71,
    H = 72,
    I = 73,
    J = 74,
    K = 75,
    L = 76,
    M = 77,
    N = 78,
    O = 79,
    P = 80,
    Q = 81,
    R = 82,
    S = 83,
    T = 84,
    U = 85,
    V = 86,
    W = 87,
    X = 88,
    Y = 89,
    Z = 90,
    ampersand = 38,
    asterisk = 42,
    at = 64,
    backslash = 92,
    backtick = 96,
    bar = 124,
    caret = 94,
    closeBrace = 125,
    closeBracket = 93,
    closeParen = 41,
    colon = 58,
    comma = 44,
    dot = 46,
    doubleQuote = 34,
    equals = 61,
    exclamation = 33,
    greaterThan = 62,
    hash = 35,
    lessThan = 60,
    minus = 45,
    openBrace = 123,
    openBracket = 91,
    openParen = 40,
    percent = 37,
    plus = 43,
    question = 63,
    semicolon = 59,
    singleQuote = 39,
    slash = 47,
    tilde = 126,
    backspace = 8,
    formFeed = 12,
    byteOrderMark = 65279,
    tab = 9,
    verticalTab = 11
}
export interface ModuleResolutionHost {
    fileExists(fileName: string): boolean;
    readFile(fileName: string): string | undefined;
    trace?(s: string): void;
    directoryExists?(directoryName: string): boolean;
    /**
     * Resolve a symbolic link.
     * @see https://nodejs.org/api/fs.html#fs_fs_realpathsync_path_options
     */
    realpath?(path: string): string;
    getCurrentDirectory?(): string;
    getDirectories?(path: string): string[];
}
/**
 * Represents the result of module resolution.
 * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
 * The Program will then filter results based on these flags.
 *
 * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
 */
export interface ResolvedModule {
    /** Path of the file the module was resolved to. */
    resolvedFileName: string;
    /** True if `resolvedFileName` comes from `node_modules`. */
    isExternalLibraryImport?: boolean;
}
/**
 * ResolvedModule with an explicitly provided `extension` property.
 * Prefer this over `ResolvedModule`.
 * If changing this, remember to change `moduleResolutionIsEqualTo`.
 */
export interface ResolvedModuleFull extends ResolvedModule {
    /**
     * @internal
     * This is a file name with preserved original casing, not a normalized `Path`.
     */
    readonly originalPath?: string;
    /**
     * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
     * This is optional for backwards-compatibility, but will be added if not provided.
     */
    extension: Extension;
    packageId?: PackageId;
}
/**
 * Unique identifier with a package name and version.
 * If changing this, remember to change `packageIdIsEqual`.
 */
export interface PackageId {
    /**
     * Name of the package.
     * Should not include `@types`.
     * If accessing a non-index file, this should include its name e.g. "foo/bar".
     */
    name: string;
    /**
     * Name of a submodule within this package.
     * May be "".
     */
    subModuleName: string;
    /** Version of the package, e.g. "1.2.3" */
    version: string;
}
export declare const enum Extension {
    Ts = ".ts",
    Tsx = ".tsx",
    Dts = ".d.ts",
    Js = ".js",
    Jsx = ".jsx",
    Json = ".json",
    TsBuildInfo = ".tsbuildinfo"
}
export interface ResolvedModuleWithFailedLookupLocations {
    readonly resolvedModule: ResolvedModuleFull | undefined;
    readonly failedLookupLocations: string[];
}
export interface ResolvedTypeReferenceDirective {
    primary: boolean;
    resolvedFileName: string | undefined;
    /**
     * @internal
     * The location of the symlink to the .d.ts file we found, if `resolvedFileName` was the realpath.
     * This is a file name with preserved original casing, not a normalized `Path`.
     */
    originalPath?: string;
    packageId?: PackageId;
    /** True if `resolvedFileName` comes from `node_modules`. */
    isExternalLibraryImport?: boolean;
}
export interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
    readonly resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective | undefined;
    readonly failedLookupLocations: string[];
}
export declare type HasInvalidatedResolution = (sourceFile: Path) => boolean;
export declare type HasChangedAutomaticTypeDirectiveNames = () => boolean;
export interface CompilerHost extends ModuleResolutionHost {
    getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
    getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined;
    getCancellationToken?(): CancellationToken;
    getDefaultLibFileName(options: CompilerOptions): string;
    getDefaultLibLocation?(): string;
    writeFile: WriteFileCallback;
    getCurrentDirectory(): string;
    getCanonicalFileName(fileName: string): string;
    useCaseSensitiveFileNames(): boolean;
    getNewLine(): string;
    readDirectory?(rootDir: string, extensions: readonly string[], excludes: readonly string[] | undefined, includes: readonly string[], depth?: number): string[];
    resolveModuleNames?(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedModule | undefined)[];
    /**
     * This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
     */
    resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string, redirectedReference: ResolvedProjectReference | undefined, options: CompilerOptions): (ResolvedTypeReferenceDirective | undefined)[];
    getEnvironmentVariable?(name: string): string | undefined;
    onReleaseOldSourceFile?(oldSourceFile: SourceFile, oldOptions: CompilerOptions, hasSourceFileByPath: boolean): void;
    onReleaseParsedCommandLine?(configFileName: string, oldResolvedRef: ResolvedProjectReference | undefined, optionOptions: CompilerOptions): void;
    hasInvalidatedResolution?: HasInvalidatedResolution;
    hasChangedAutomaticTypeDirectiveNames?: HasChangedAutomaticTypeDirectiveNames;
    createHash?(data: string): string;
    getParsedCommandLine?(fileName: string): ParsedCommandLine | undefined;
    useSourceOfProjectReferenceRedirect?(): boolean;
    createDirectory?(directory: string): void;
    getSymlinkCache?(): SymlinkCache;
    disableUseFileVersionAsSignature?: boolean;
}
/** true if --out otherwise source file name */
export declare type SourceOfProjectReferenceRedirect = string | true;
export interface ResolvedProjectReferenceCallbacks {
    getSourceOfProjectReferenceRedirect(fileName: string): SourceOfProjectReferenceRedirect | undefined;
    forEachResolvedProjectReference<T>(cb: (resolvedProjectReference: ResolvedProjectReference) => T | undefined): T | undefined;
}
export declare const enum TransformFlags {
    None = 0,
    ContainsTypeScript = 1,
    ContainsJsx = 2,
    ContainsESNext = 4,
    ContainsES2021 = 8,
    ContainsES2020 = 16,
    ContainsES2019 = 32,
    ContainsES2018 = 64,
    ContainsES2017 = 128,
    ContainsES2016 = 256,
    ContainsES2015 = 512,
    ContainsGenerator = 1024,
    ContainsDestructuringAssignment = 2048,
    ContainsTypeScriptClassSyntax = 4096,
    ContainsLexicalThis = 8192,
    ContainsRestOrSpread = 16384,
    ContainsObjectRestOrSpread = 32768,
    ContainsComputedPropertyName = 65536,
    ContainsBlockScopedBinding = 131072,
    ContainsBindingPattern = 262144,
    ContainsYield = 524288,
    ContainsAwait = 1048576,
    ContainsHoistedDeclarationOrCompletion = 2097152,
    ContainsDynamicImport = 4194304,
    ContainsClassFields = 8388608,
    ContainsPossibleTopLevelAwait = 16777216,
    HasComputedFlags = 536870912,
    AssertTypeScript = 1,
    AssertJsx = 2,
    AssertESNext = 4,
    AssertES2021 = 8,
    AssertES2020 = 16,
    AssertES2019 = 32,
    AssertES2018 = 64,
    AssertES2017 = 128,
    AssertES2016 = 256,
    AssertES2015 = 512,
    AssertGenerator = 1024,
    AssertDestructuringAssignment = 2048,
    OuterExpressionExcludes = 536870912,
    PropertyAccessExcludes = 536870912,
    NodeExcludes = 536870912,
    ArrowFunctionExcludes = 557748224,
    FunctionExcludes = 557756416,
    ConstructorExcludes = 557752320,
    MethodOrAccessorExcludes = 540975104,
    PropertyExcludes = 536879104,
    ClassExcludes = 536940544,
    ModuleExcludes = 555888640,
    TypeExcludes = -2,
    ObjectLiteralExcludes = 536973312,
    ArrayLiteralOrCallOrNewExcludes = 536887296,
    VariableDeclarationListExcludes = 537165824,
    ParameterExcludes = 536870912,
    CatchClauseExcludes = 536903680,
    BindingPatternExcludes = 536887296,
    PropertyNamePropagatingFlags = 8192
}
export interface SourceMapRange extends TextRange {
    source?: SourceMapSource;
}
export interface SourceMapSource {
    fileName: string;
    text: string;
    lineMap: readonly number[];
    skipTrivia?: (pos: number) => number;
}
export interface EmitNode {
    annotatedNodes?: Node[];
    flags: EmitFlags;
    leadingComments?: SynthesizedComment[];
    trailingComments?: SynthesizedComment[];
    commentRange?: TextRange;
    sourceMapRange?: SourceMapRange;
    tokenSourceMapRanges?: (SourceMapRange | undefined)[];
    constantValue?: string | number;
    externalHelpersModuleName?: Identifier;
    externalHelpers?: boolean;
    helpers?: EmitHelper[];
    startsOnNewLine?: boolean;
}
export declare const enum EmitFlags {
    None = 0,
    SingleLine = 1,
    AdviseOnEmitNode = 2,
    NoSubstitution = 4,
    CapturesThis = 8,
    NoLeadingSourceMap = 16,
    NoTrailingSourceMap = 32,
    NoSourceMap = 48,
    NoNestedSourceMaps = 64,
    NoTokenLeadingSourceMaps = 128,
    NoTokenTrailingSourceMaps = 256,
    NoTokenSourceMaps = 384,
    NoLeadingComments = 512,
    NoTrailingComments = 1024,
    NoComments = 1536,
    NoNestedComments = 2048,
    HelperName = 4096,
    ExportName = 8192,
    LocalName = 16384,
    InternalName = 32768,
    Indented = 65536,
    NoIndentation = 131072,
    AsyncFunctionBody = 262144,
    ReuseTempVariableScope = 524288,
    CustomPrologue = 1048576,
    NoHoisting = 2097152,
    HasEndOfDeclarationMarker = 4194304,
    Iterator = 8388608,
    NoAsciiEscaping = 16777216,
    TypeScriptClassWrapper = 33554432,
    NeverApplyImportHelper = 67108864,
    IgnoreSourceNewlines = 134217728
}
export interface EmitHelperBase {
    readonly name: string;
    readonly scoped: boolean;
    readonly text: string | ((node: EmitHelperUniqueNameCallback) => string);
    readonly priority?: number;
    readonly dependencies?: EmitHelper[];
}
export interface ScopedEmitHelper extends EmitHelperBase {
    readonly scoped: true;
}
export interface UnscopedEmitHelper extends EmitHelperBase {
    readonly scoped: false;
    readonly importName?: string;
    readonly text: string;
}
export declare type EmitHelper = ScopedEmitHelper | UnscopedEmitHelper;
export declare type UniqueNameHandler = (baseName: string, checkFn?: (name: string) => boolean, optimistic?: boolean) => string;
export declare type EmitHelperUniqueNameCallback = (name: string) => string;
/**
 * Used by the checker, this enum keeps track of external emit helpers that should be type
 * checked.
 */
export declare const enum ExternalEmitHelpers {
    Extends = 1,
    Assign = 2,
    Rest = 4,
    Decorate = 8,
    Metadata = 16,
    Param = 32,
    Awaiter = 64,
    Generator = 128,
    Values = 256,
    Read = 512,
    SpreadArray = 1024,
    Await = 2048,
    AsyncGenerator = 4096,
    AsyncDelegator = 8192,
    AsyncValues = 16384,
    ExportStar = 32768,
    ImportStar = 65536,
    ImportDefault = 131072,
    MakeTemplateObject = 262144,
    ClassPrivateFieldGet = 524288,
    ClassPrivateFieldSet = 1048576,
    CreateBinding = 2097152,
    FirstEmitHelper = 1,
    LastEmitHelper = 2097152,
    ForOfIncludes = 256,
    ForAwaitOfIncludes = 16384,
    AsyncGeneratorIncludes = 6144,
    AsyncDelegatorIncludes = 26624,
    SpreadIncludes = 1536
}
export declare const enum EmitHint {
    SourceFile = 0,
    Expression = 1,
    IdentifierName = 2,
    MappedTypeParameter = 3,
    Unspecified = 4,
    EmbeddedStatement = 5,
    JsxAttributeValue = 6
}
export interface SourceFileMayBeEmittedHost {
    getCompilerOptions(): CompilerOptions;
    isSourceFileFromExternalLibrary(file: SourceFile): boolean;
    getResolvedProjectReferenceToRedirect(fileName: string): ResolvedProjectReference | undefined;
    isSourceOfProjectReferenceRedirect(fileName: string): boolean;
}
export interface EmitHost extends ScriptReferenceHost, ModuleSpecifierResolutionHost, SourceFileMayBeEmittedHost {
    getSourceFiles(): readonly SourceFile[];
    useCaseSensitiveFileNames(): boolean;
    getCurrentDirectory(): string;
    getLibFileFromReference(ref: FileReference): SourceFile | undefined;
    getCommonSourceDirectory(): string;
    getCanonicalFileName(fileName: string): string;
    getNewLine(): string;
    isEmitBlocked(emitFileName: string): boolean;
    getPrependNodes(): readonly (InputFiles | UnparsedSource)[];
    writeFile: WriteFileCallback;
    getProgramBuildInfo(): ProgramBuildInfo | undefined;
    getSourceFileFromReference: Program["getSourceFileFromReference"];
    readonly redirectTargetsMap: RedirectTargetsMap;
}
export interface PropertyDescriptorAttributes {
    enumerable?: boolean | Expression;
    configurable?: boolean | Expression;
    writable?: boolean | Expression;
    value?: Expression;
    get?: Expression;
    set?: Expression;
}
export declare const enum OuterExpressionKinds {
    Parentheses = 1,
    TypeAssertions = 2,
    NonNullAssertions = 4,
    PartiallyEmittedExpressions = 8,
    Assertions = 6,
    All = 15
}
export declare type OuterExpression = ParenthesizedExpression | TypeAssertion | AsExpression | NonNullExpression | PartiallyEmittedExpression;
export declare type TypeOfTag = "undefined" | "number" | "bigint" | "boolean" | "string" | "symbol" | "object" | "function";
export interface CallBinding {
    target: LeftHandSideExpression;
    thisArg: Expression;
}
export interface ParenthesizerRules {
    getParenthesizeLeftSideOfBinaryForOperator(binaryOperator: SyntaxKind): (leftSide: Expression) => Expression;
    getParenthesizeRightSideOfBinaryForOperator(binaryOperator: SyntaxKind): (rightSide: Expression) => Expression;
    parenthesizeLeftSideOfBinary(binaryOperator: SyntaxKind, leftSide: Expression): Expression;
    parenthesizeRightSideOfBinary(binaryOperator: SyntaxKind, leftSide: Expression | undefined, rightSide: Expression): Expression;
    parenthesizeExpressionOfComputedPropertyName(expression: Expression): Expression;
    parenthesizeConditionOfConditionalExpression(condition: Expression): Expression;
    parenthesizeBranchOfConditionalExpression(branch: Expression): Expression;
    parenthesizeExpressionOfExportDefault(expression: Expression): Expression;
    parenthesizeExpressionOfNew(expression: Expression): LeftHandSideExpression;
    parenthesizeLeftSideOfAccess(expression: Expression): LeftHandSideExpression;
    parenthesizeOperandOfPostfixUnary(operand: Expression): LeftHandSideExpression;
    parenthesizeOperandOfPrefixUnary(operand: Expression): UnaryExpression;
    parenthesizeExpressionsOfCommaDelimitedList(elements: readonly Expression[]): NodeArray<Expression>;
    parenthesizeExpressionForDisallowedComma(expression: Expression): Expression;
    parenthesizeExpressionOfExpressionStatement(expression: Expression): Expression;
    parenthesizeConciseBodyOfArrowFunction(body: Expression): Expression;
    parenthesizeConciseBodyOfArrowFunction(body: ConciseBody): ConciseBody;
    parenthesizeMemberOfConditionalType(member: TypeNode): TypeNode;
    parenthesizeMemberOfElementType(member: TypeNode): TypeNode;
    parenthesizeElementTypeOfArrayType(member: TypeNode): TypeNode;
    parenthesizeConstituentTypesOfUnionOrIntersectionType(members: readonly TypeNode[]): NodeArray<TypeNode>;
    parenthesizeTypeArguments(typeParameters: readonly TypeNode[] | undefined): NodeArray<TypeNode> | undefined;
}
export interface NodeConverters {
    convertToFunctionBlock(node: ConciseBody, multiLine?: boolean): Block;
    convertToFunctionExpression(node: FunctionDeclaration): FunctionExpression;
    convertToArrayAssignmentElement(element: ArrayBindingOrAssignmentElement): Expression;
    convertToObjectAssignmentElement(element: ObjectBindingOrAssignmentElement): ObjectLiteralElementLike;
    convertToAssignmentPattern(node: BindingOrAssignmentPattern): AssignmentPattern;
    convertToObjectAssignmentPattern(node: ObjectBindingOrAssignmentPattern): ObjectLiteralExpression;
    convertToArrayAssignmentPattern(node: ArrayBindingOrAssignmentPattern): ArrayLiteralExpression;
    convertToAssignmentElementTarget(node: BindingOrAssignmentElementTarget): Expression;
}
export interface NodeFactory {
    readonly parenthesizer: ParenthesizerRules;
    readonly converters: NodeConverters;
    createNodeArray<T extends Node>(elements?: readonly T[], hasTrailingComma?: boolean): NodeArray<T>;
    createNumericLiteral(value: string | number, numericLiteralFlags?: TokenFlags): NumericLiteral;
    createBigIntLiteral(value: string | PseudoBigInt): BigIntLiteral;
    createStringLiteral(text: string, isSingleQuote?: boolean): StringLiteral;
    createStringLiteral(text: string, isSingleQuote?: boolean, hasExtendedUnicodeEscape?: boolean): StringLiteral;
    createStringLiteralFromNode(sourceNode: PropertyNameLiteral, isSingleQuote?: boolean): StringLiteral;
    createRegularExpressionLiteral(text: string): RegularExpressionLiteral;
    createIdentifier(text: string): Identifier;
    createIdentifier(text: string, typeArguments?: readonly (TypeNode | TypeParameterDeclaration)[], originalKeywordKind?: SyntaxKind): Identifier;
    updateIdentifier(node: Identifier, typeArguments: NodeArray<TypeNode | TypeParameterDeclaration> | undefined): Identifier;
    /**
     * Create a unique temporary variable.
     * @param recordTempVariable An optional callback used to record the temporary variable name. This
     * should usually be a reference to `hoistVariableDeclaration` from a `TransformationContext`, but
     * can be `undefined` if you plan to record the temporary variable manually.
     * @param reservedInNestedScopes When `true`, reserves the temporary variable name in all nested scopes
     * during emit so that the variable can be referenced in a nested function body. This is an alternative to
     * setting `EmitFlags.ReuseTempVariableScope` on the nested function itself.
     */
    createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined, reservedInNestedScopes?: boolean): Identifier;
    /**
     * Create a unique temporary variable for use in a loop.
     * @param reservedInNestedScopes When `true`, reserves the temporary variable name in all nested scopes
     * during emit so that the variable can be referenced in a nested function body. This is an alternative to
     * setting `EmitFlags.ReuseTempVariableScope` on the nested function itself.
     */
    createLoopVariable(reservedInNestedScopes?: boolean): Identifier;
    /** Create a unique name based on the supplied text. */
    createUniqueName(text: string, flags?: GeneratedIdentifierFlags): Identifier;
    /** Create a unique name generated for a node. */
    getGeneratedNameForNode(node: Node | undefined, flags?: GeneratedIdentifierFlags): Identifier;
    createPrivateIdentifier(text: string): PrivateIdentifier;
    createToken(token: SyntaxKind.SuperKeyword): SuperExpression;
    createToken(token: SyntaxKind.ThisKeyword): ThisExpression;
    createToken(token: SyntaxKind.NullKeyword): NullLiteral;
    createToken(token: SyntaxKind.TrueKeyword): TrueLiteral;
    createToken(token: SyntaxKind.FalseKeyword): FalseLiteral;
    createToken<TKind extends PunctuationSyntaxKind>(token: TKind): PunctuationToken<TKind>;
    createToken<TKind extends KeywordTypeSyntaxKind>(token: TKind): KeywordTypeNode<TKind>;
    createToken<TKind extends ModifierSyntaxKind>(token: TKind): ModifierToken<TKind>;
    createToken<TKind extends KeywordSyntaxKind>(token: TKind): KeywordToken<TKind>;
    createToken<TKind extends SyntaxKind.Unknown | SyntaxKind.EndOfFileToken>(token: TKind): Token<TKind>;
    createToken<TKind extends SyntaxKind>(token: TKind): Token<TKind>;
    createSuper(): SuperExpression;
    createThis(): ThisExpression;
    createNull(): NullLiteral;
    createTrue(): TrueLiteral;
    createFalse(): FalseLiteral;
    createModifier<T extends ModifierSyntaxKind>(kind: T): ModifierToken<T>;
    createModifiersFromModifierFlags(flags: ModifierFlags): Modifier[];
    createQualifiedName(left: EntityName, right: string | Identifier): QualifiedName;
    updateQualifiedName(node: QualifiedName, left: EntityName, right: Identifier): QualifiedName;
    createComputedPropertyName(expression: Expression): ComputedPropertyName;
    updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName;
    createTypeParameterDeclaration(name: string | Identifier, constraint?: TypeNode, defaultType?: TypeNode): TypeParameterDeclaration;
    updateTypeParameterDeclaration(node: TypeParameterDeclaration, name: Identifier, constraint: TypeNode | undefined, defaultType: TypeNode | undefined): TypeParameterDeclaration;
    createParameterDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken?: QuestionToken, type?: TypeNode, initializer?: Expression): ParameterDeclaration;
    updateParameterDeclaration(node: ParameterDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, dotDotDotToken: DotDotDotToken | undefined, name: string | BindingName, questionToken: QuestionToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): ParameterDeclaration;
    createDecorator(expression: Expression): Decorator;
    updateDecorator(node: Decorator, expression: Expression): Decorator;
    createPropertySignature(modifiers: readonly Modifier[] | undefined, name: PropertyName | string, questionToken: QuestionToken | undefined, type: TypeNode | undefined): PropertySignature;
    updatePropertySignature(node: PropertySignature, modifiers: readonly Modifier[] | undefined, name: PropertyName, questionToken: QuestionToken | undefined, type: TypeNode | undefined): PropertySignature;
    createPropertyDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    updatePropertyDeclaration(node: PropertyDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionOrExclamationToken: QuestionToken | ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): PropertyDeclaration;
    createMethodSignature(modifiers: readonly Modifier[] | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): MethodSignature;
    updateMethodSignature(node: MethodSignature, modifiers: readonly Modifier[] | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): MethodSignature;
    createMethodDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    updateMethodDeclaration(node: MethodDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: PropertyName, questionToken: QuestionToken | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): MethodDeclaration;
    createConstructorDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
    updateConstructorDeclaration(node: ConstructorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], body: Block | undefined): ConstructorDeclaration;
    createGetAccessorDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    updateGetAccessorDeclaration(node: GetAccessorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): GetAccessorDeclaration;
    createSetAccessorDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
    updateSetAccessorDeclaration(node: SetAccessorDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: PropertyName, parameters: readonly ParameterDeclaration[], body: Block | undefined): SetAccessorDeclaration;
    createCallSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): CallSignatureDeclaration;
    updateCallSignature(node: CallSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): CallSignatureDeclaration;
    createConstructSignature(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): ConstructSignatureDeclaration;
    updateConstructSignature(node: ConstructSignatureDeclaration, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode | undefined): ConstructSignatureDeclaration;
    createIndexSignature(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
    createIndexSignature(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): IndexSignatureDeclaration;
    updateIndexSignature(node: IndexSignatureDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): IndexSignatureDeclaration;
    createTemplateLiteralTypeSpan(type: TypeNode, literal: TemplateMiddle | TemplateTail): TemplateLiteralTypeSpan;
    updateTemplateLiteralTypeSpan(node: TemplateLiteralTypeSpan, type: TypeNode, literal: TemplateMiddle | TemplateTail): TemplateLiteralTypeSpan;
    createKeywordTypeNode<TKind extends KeywordTypeSyntaxKind>(kind: TKind): KeywordTypeNode<TKind>;
    createTypePredicateNode(assertsModifier: AssertsKeyword | undefined, parameterName: Identifier | ThisTypeNode | string, type: TypeNode | undefined): TypePredicateNode;
    updateTypePredicateNode(node: TypePredicateNode, assertsModifier: AssertsKeyword | undefined, parameterName: Identifier | ThisTypeNode, type: TypeNode | undefined): TypePredicateNode;
    createTypeReferenceNode(typeName: string | EntityName, typeArguments?: readonly TypeNode[]): TypeReferenceNode;
    updateTypeReferenceNode(node: TypeReferenceNode, typeName: EntityName, typeArguments: NodeArray<TypeNode> | undefined): TypeReferenceNode;
    createFunctionTypeNode(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): FunctionTypeNode;
    updateFunctionTypeNode(node: FunctionTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode): FunctionTypeNode;
    createConstructorTypeNode(modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): ConstructorTypeNode;
    /** @deprecated */
    createConstructorTypeNode(typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode): ConstructorTypeNode;
    updateConstructorTypeNode(node: ConstructorTypeNode, modifiers: readonly Modifier[] | undefined, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode): ConstructorTypeNode;
    /** @deprecated */
    updateConstructorTypeNode(node: ConstructorTypeNode, typeParameters: NodeArray<TypeParameterDeclaration> | undefined, parameters: NodeArray<ParameterDeclaration>, type: TypeNode): ConstructorTypeNode;
    createTypeQueryNode(exprName: EntityName): TypeQueryNode;
    updateTypeQueryNode(node: TypeQueryNode, exprName: EntityName): TypeQueryNode;
    createTypeLiteralNode(members: readonly TypeElement[] | undefined): TypeLiteralNode;
    updateTypeLiteralNode(node: TypeLiteralNode, members: NodeArray<TypeElement>): TypeLiteralNode;
    createArrayTypeNode(elementType: TypeNode): ArrayTypeNode;
    updateArrayTypeNode(node: ArrayTypeNode, elementType: TypeNode): ArrayTypeNode;
    createTupleTypeNode(elements: readonly (TypeNode | NamedTupleMember)[]): TupleTypeNode;
    updateTupleTypeNode(node: TupleTypeNode, elements: readonly (TypeNode | NamedTupleMember)[]): TupleTypeNode;
    createNamedTupleMember(dotDotDotToken: DotDotDotToken | undefined, name: Identifier, questionToken: QuestionToken | undefined, type: TypeNode): NamedTupleMember;
    updateNamedTupleMember(node: NamedTupleMember, dotDotDotToken: DotDotDotToken | undefined, name: Identifier, questionToken: QuestionToken | undefined, type: TypeNode): NamedTupleMember;
    createOptionalTypeNode(type: TypeNode): OptionalTypeNode;
    updateOptionalTypeNode(node: OptionalTypeNode, type: TypeNode): OptionalTypeNode;
    createRestTypeNode(type: TypeNode): RestTypeNode;
    updateRestTypeNode(node: RestTypeNode, type: TypeNode): RestTypeNode;
    createUnionTypeNode(types: readonly TypeNode[]): UnionTypeNode;
    updateUnionTypeNode(node: UnionTypeNode, types: NodeArray<TypeNode>): UnionTypeNode;
    createIntersectionTypeNode(types: readonly TypeNode[]): IntersectionTypeNode;
    updateIntersectionTypeNode(node: IntersectionTypeNode, types: NodeArray<TypeNode>): IntersectionTypeNode;
    createConditionalTypeNode(checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
    updateConditionalTypeNode(node: ConditionalTypeNode, checkType: TypeNode, extendsType: TypeNode, trueType: TypeNode, falseType: TypeNode): ConditionalTypeNode;
    createInferTypeNode(typeParameter: TypeParameterDeclaration): InferTypeNode;
    updateInferTypeNode(node: InferTypeNode, typeParameter: TypeParameterDeclaration): InferTypeNode;
    createImportTypeNode(argument: TypeNode, qualifier?: EntityName, typeArguments?: readonly TypeNode[], isTypeOf?: boolean): ImportTypeNode;
    updateImportTypeNode(node: ImportTypeNode, argument: TypeNode, qualifier: EntityName | undefined, typeArguments: readonly TypeNode[] | undefined, isTypeOf?: boolean): ImportTypeNode;
    createParenthesizedType(type: TypeNode): ParenthesizedTypeNode;
    updateParenthesizedType(node: ParenthesizedTypeNode, type: TypeNode): ParenthesizedTypeNode;
    createThisTypeNode(): ThisTypeNode;
    createTypeOperatorNode(operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword | SyntaxKind.ReadonlyKeyword, type: TypeNode): TypeOperatorNode;
    updateTypeOperatorNode(node: TypeOperatorNode, type: TypeNode): TypeOperatorNode;
    createIndexedAccessTypeNode(objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    updateIndexedAccessTypeNode(node: IndexedAccessTypeNode, objectType: TypeNode, indexType: TypeNode): IndexedAccessTypeNode;
    createMappedTypeNode(readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, nameType: TypeNode | undefined, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    updateMappedTypeNode(node: MappedTypeNode, readonlyToken: ReadonlyKeyword | PlusToken | MinusToken | undefined, typeParameter: TypeParameterDeclaration, nameType: TypeNode | undefined, questionToken: QuestionToken | PlusToken | MinusToken | undefined, type: TypeNode | undefined): MappedTypeNode;
    createLiteralTypeNode(literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    updateLiteralTypeNode(node: LiteralTypeNode, literal: LiteralTypeNode["literal"]): LiteralTypeNode;
    createTemplateLiteralType(head: TemplateHead, templateSpans: readonly TemplateLiteralTypeSpan[]): TemplateLiteralTypeNode;
    updateTemplateLiteralType(node: TemplateLiteralTypeNode, head: TemplateHead, templateSpans: readonly TemplateLiteralTypeSpan[]): TemplateLiteralTypeNode;
    createObjectBindingPattern(elements: readonly BindingElement[]): ObjectBindingPattern;
    updateObjectBindingPattern(node: ObjectBindingPattern, elements: readonly BindingElement[]): ObjectBindingPattern;
    createArrayBindingPattern(elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
    updateArrayBindingPattern(node: ArrayBindingPattern, elements: readonly ArrayBindingElement[]): ArrayBindingPattern;
    createBindingElement(dotDotDotToken: DotDotDotToken | undefined, propertyName: string | PropertyName | undefined, name: string | BindingName, initializer?: Expression): BindingElement;
    updateBindingElement(node: BindingElement, dotDotDotToken: DotDotDotToken | undefined, propertyName: PropertyName | undefined, name: BindingName, initializer: Expression | undefined): BindingElement;
    createArrayLiteralExpression(elements?: readonly Expression[], multiLine?: boolean): ArrayLiteralExpression;
    updateArrayLiteralExpression(node: ArrayLiteralExpression, elements: readonly Expression[]): ArrayLiteralExpression;
    createObjectLiteralExpression(properties?: readonly ObjectLiteralElementLike[], multiLine?: boolean): ObjectLiteralExpression;
    updateObjectLiteralExpression(node: ObjectLiteralExpression, properties: readonly ObjectLiteralElementLike[]): ObjectLiteralExpression;
    createPropertyAccessExpression(expression: Expression, name: string | MemberName): PropertyAccessExpression;
    updatePropertyAccessExpression(node: PropertyAccessExpression, expression: Expression, name: MemberName): PropertyAccessExpression;
    createPropertyAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, name: string | MemberName): PropertyAccessChain;
    updatePropertyAccessChain(node: PropertyAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, name: MemberName): PropertyAccessChain;
    createElementAccessExpression(expression: Expression, index: number | Expression): ElementAccessExpression;
    updateElementAccessExpression(node: ElementAccessExpression, expression: Expression, argumentExpression: Expression): ElementAccessExpression;
    createElementAccessChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, index: number | Expression): ElementAccessChain;
    updateElementAccessChain(node: ElementAccessChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, argumentExpression: Expression): ElementAccessChain;
    createCallExpression(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallExpression;
    updateCallExpression(node: CallExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallExpression;
    createCallChain(expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): CallChain;
    updateCallChain(node: CallChain, expression: Expression, questionDotToken: QuestionDotToken | undefined, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[]): CallChain;
    createNewExpression(expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
    updateNewExpression(node: NewExpression, expression: Expression, typeArguments: readonly TypeNode[] | undefined, argumentsArray: readonly Expression[] | undefined): NewExpression;
    createTaggedTemplateExpression(tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
    updateTaggedTemplateExpression(node: TaggedTemplateExpression, tag: Expression, typeArguments: readonly TypeNode[] | undefined, template: TemplateLiteral): TaggedTemplateExpression;
    createTypeAssertion(type: TypeNode, expression: Expression): TypeAssertion;
    updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: Expression): TypeAssertion;
    createParenthesizedExpression(expression: Expression): ParenthesizedExpression;
    updateParenthesizedExpression(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression;
    createFunctionExpression(modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[] | undefined, type: TypeNode | undefined, body: Block): FunctionExpression;
    updateFunctionExpression(node: FunctionExpression, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block): FunctionExpression;
    createArrowFunction(modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken | undefined, body: ConciseBody): ArrowFunction;
    updateArrowFunction(node: ArrowFunction, modifiers: readonly Modifier[] | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, equalsGreaterThanToken: EqualsGreaterThanToken, body: ConciseBody): ArrowFunction;
    createDeleteExpression(expression: Expression): DeleteExpression;
    updateDeleteExpression(node: DeleteExpression, expression: Expression): DeleteExpression;
    createTypeOfExpression(expression: Expression): TypeOfExpression;
    updateTypeOfExpression(node: TypeOfExpression, expression: Expression): TypeOfExpression;
    createVoidExpression(expression: Expression): VoidExpression;
    updateVoidExpression(node: VoidExpression, expression: Expression): VoidExpression;
    createAwaitExpression(expression: Expression): AwaitExpression;
    updateAwaitExpression(node: AwaitExpression, expression: Expression): AwaitExpression;
    createPrefixUnaryExpression(operator: PrefixUnaryOperator, operand: Expression): PrefixUnaryExpression;
    updatePrefixUnaryExpression(node: PrefixUnaryExpression, operand: Expression): PrefixUnaryExpression;
    createPostfixUnaryExpression(operand: Expression, operator: PostfixUnaryOperator): PostfixUnaryExpression;
    updatePostfixUnaryExpression(node: PostfixUnaryExpression, operand: Expression): PostfixUnaryExpression;
    createBinaryExpression(left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
    updateBinaryExpression(node: BinaryExpression, left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression): BinaryExpression;
    createConditionalExpression(condition: Expression, questionToken: QuestionToken | undefined, whenTrue: Expression, colonToken: ColonToken | undefined, whenFalse: Expression): ConditionalExpression;
    updateConditionalExpression(node: ConditionalExpression, condition: Expression, questionToken: QuestionToken, whenTrue: Expression, colonToken: ColonToken, whenFalse: Expression): ConditionalExpression;
    createTemplateExpression(head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
    updateTemplateExpression(node: TemplateExpression, head: TemplateHead, templateSpans: readonly TemplateSpan[]): TemplateExpression;
    createTemplateHead(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateHead;
    createTemplateHead(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateHead;
    createTemplateMiddle(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateMiddle;
    createTemplateMiddle(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateMiddle;
    createTemplateTail(text: string, rawText?: string, templateFlags?: TokenFlags): TemplateTail;
    createTemplateTail(text: string | undefined, rawText: string, templateFlags?: TokenFlags): TemplateTail;
    createNoSubstitutionTemplateLiteral(text: string, rawText?: string): NoSubstitutionTemplateLiteral;
    createNoSubstitutionTemplateLiteral(text: string | undefined, rawText: string): NoSubstitutionTemplateLiteral;
    createLiteralLikeNode(kind: LiteralToken["kind"] | SyntaxKind.JsxTextAllWhiteSpaces, text: string): LiteralToken;
    createTemplateLiteralLikeNode(kind: TemplateLiteralToken["kind"], text: string, rawText: string, templateFlags: TokenFlags | undefined): TemplateLiteralLikeNode;
    createYieldExpression(asteriskToken: AsteriskToken, expression: Expression): YieldExpression;
    createYieldExpression(asteriskToken: undefined, expression: Expression | undefined): YieldExpression;
    createYieldExpression(asteriskToken: AsteriskToken | undefined, expression: Expression | undefined): YieldExpression;
    updateYieldExpression(node: YieldExpression, asteriskToken: AsteriskToken | undefined, expression: Expression | undefined): YieldExpression;
    createSpreadElement(expression: Expression): SpreadElement;
    updateSpreadElement(node: SpreadElement, expression: Expression): SpreadElement;
    createClassExpression(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
    updateClassExpression(node: ClassExpression, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassExpression;
    createOmittedExpression(): OmittedExpression;
    createExpressionWithTypeArguments(expression: Expression, typeArguments: readonly TypeNode[] | undefined): ExpressionWithTypeArguments;
    updateExpressionWithTypeArguments(node: ExpressionWithTypeArguments, expression: Expression, typeArguments: readonly TypeNode[] | undefined): ExpressionWithTypeArguments;
    createAsExpression(expression: Expression, type: TypeNode): AsExpression;
    updateAsExpression(node: AsExpression, expression: Expression, type: TypeNode): AsExpression;
    createNonNullExpression(expression: Expression): NonNullExpression;
    updateNonNullExpression(node: NonNullExpression, expression: Expression): NonNullExpression;
    createNonNullChain(expression: Expression): NonNullChain;
    updateNonNullChain(node: NonNullChain, expression: Expression): NonNullChain;
    createMetaProperty(keywordToken: MetaProperty["keywordToken"], name: Identifier): MetaProperty;
    updateMetaProperty(node: MetaProperty, name: Identifier): MetaProperty;
    createTemplateSpan(expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    createSemicolonClassElement(): SemicolonClassElement;
    createBlock(statements: readonly Statement[], multiLine?: boolean): Block;
    updateBlock(node: Block, statements: readonly Statement[]): Block;
    createVariableStatement(modifiers: readonly Modifier[] | undefined, declarationList: VariableDeclarationList | readonly VariableDeclaration[]): VariableStatement;
    updateVariableStatement(node: VariableStatement, modifiers: readonly Modifier[] | undefined, declarationList: VariableDeclarationList): VariableStatement;
    createEmptyStatement(): EmptyStatement;
    createExpressionStatement(expression: Expression): ExpressionStatement;
    updateExpressionStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement;
    createIfStatement(expression: Expression, thenStatement: Statement, elseStatement?: Statement): IfStatement;
    updateIfStatement(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement | undefined): IfStatement;
    createDoStatement(statement: Statement, expression: Expression): DoStatement;
    updateDoStatement(node: DoStatement, statement: Statement, expression: Expression): DoStatement;
    createWhileStatement(expression: Expression, statement: Statement): WhileStatement;
    updateWhileStatement(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement;
    createForStatement(initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    updateForStatement(node: ForStatement, initializer: ForInitializer | undefined, condition: Expression | undefined, incrementor: Expression | undefined, statement: Statement): ForStatement;
    createForInStatement(initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    updateForInStatement(node: ForInStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    createForOfStatement(awaitModifier: AwaitKeyword | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    updateForOfStatement(node: ForOfStatement, awaitModifier: AwaitKeyword | undefined, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    createContinueStatement(label?: string | Identifier): ContinueStatement;
    updateContinueStatement(node: ContinueStatement, label: Identifier | undefined): ContinueStatement;
    createBreakStatement(label?: string | Identifier): BreakStatement;
    updateBreakStatement(node: BreakStatement, label: Identifier | undefined): BreakStatement;
    createReturnStatement(expression?: Expression): ReturnStatement;
    updateReturnStatement(node: ReturnStatement, expression: Expression | undefined): ReturnStatement;
    createWithStatement(expression: Expression, statement: Statement): WithStatement;
    updateWithStatement(node: WithStatement, expression: Expression, statement: Statement): WithStatement;
    createSwitchStatement(expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    updateSwitchStatement(node: SwitchStatement, expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    createLabeledStatement(label: string | Identifier, statement: Statement): LabeledStatement;
    updateLabeledStatement(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement;
    createThrowStatement(expression: Expression): ThrowStatement;
    updateThrowStatement(node: ThrowStatement, expression: Expression): ThrowStatement;
    createTryStatement(tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    updateTryStatement(node: TryStatement, tryBlock: Block, catchClause: CatchClause | undefined, finallyBlock: Block | undefined): TryStatement;
    createDebuggerStatement(): DebuggerStatement;
    createVariableDeclaration(name: string | BindingName, exclamationToken?: ExclamationToken, type?: TypeNode, initializer?: Expression): VariableDeclaration;
    updateVariableDeclaration(node: VariableDeclaration, name: BindingName, exclamationToken: ExclamationToken | undefined, type: TypeNode | undefined, initializer: Expression | undefined): VariableDeclaration;
    createVariableDeclarationList(declarations: readonly VariableDeclaration[], flags?: NodeFlags): VariableDeclarationList;
    updateVariableDeclarationList(node: VariableDeclarationList, declarations: readonly VariableDeclaration[]): VariableDeclarationList;
    createFunctionDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    updateFunctionDeclaration(node: FunctionDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, asteriskToken: AsteriskToken | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined, body: Block | undefined): FunctionDeclaration;
    createClassDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
    updateClassDeclaration(node: ClassDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier | undefined, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly ClassElement[]): ClassDeclaration;
    createInterfaceDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
    updateInterfaceDeclaration(node: InterfaceDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, heritageClauses: readonly HeritageClause[] | undefined, members: readonly TypeElement[]): InterfaceDeclaration;
    createTypeAliasDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
    updateTypeAliasDeclaration(node: TypeAliasDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, typeParameters: readonly TypeParameterDeclaration[] | undefined, type: TypeNode): TypeAliasDeclaration;
    createEnumDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: string | Identifier, members: readonly EnumMember[]): EnumDeclaration;
    updateEnumDeclaration(node: EnumDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: Identifier, members: readonly EnumMember[]): EnumDeclaration;
    createModuleDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: ModuleName, body: ModuleBody | undefined, flags?: NodeFlags): ModuleDeclaration;
    updateModuleDeclaration(node: ModuleDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, name: ModuleName, body: ModuleBody | undefined): ModuleDeclaration;
    createModuleBlock(statements: readonly Statement[]): ModuleBlock;
    updateModuleBlock(node: ModuleBlock, statements: readonly Statement[]): ModuleBlock;
    createCaseBlock(clauses: readonly CaseOrDefaultClause[]): CaseBlock;
    updateCaseBlock(node: CaseBlock, clauses: readonly CaseOrDefaultClause[]): CaseBlock;
    createNamespaceExportDeclaration(name: string | Identifier): NamespaceExportDeclaration;
    updateNamespaceExportDeclaration(node: NamespaceExportDeclaration, name: Identifier): NamespaceExportDeclaration;
    createImportEqualsDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isTypeOnly: boolean, name: string | Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    updateImportEqualsDeclaration(node: ImportEqualsDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isTypeOnly: boolean, name: Identifier, moduleReference: ModuleReference): ImportEqualsDeclaration;
    createImportDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression): ImportDeclaration;
    updateImportDeclaration(node: ImportDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, importClause: ImportClause | undefined, moduleSpecifier: Expression): ImportDeclaration;
    createImportClause(isTypeOnly: boolean, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
    updateImportClause(node: ImportClause, isTypeOnly: boolean, name: Identifier | undefined, namedBindings: NamedImportBindings | undefined): ImportClause;
    createNamespaceImport(name: Identifier): NamespaceImport;
    updateNamespaceImport(node: NamespaceImport, name: Identifier): NamespaceImport;
    createNamespaceExport(name: Identifier): NamespaceExport;
    updateNamespaceExport(node: NamespaceExport, name: Identifier): NamespaceExport;
    createNamedImports(elements: readonly ImportSpecifier[]): NamedImports;
    updateNamedImports(node: NamedImports, elements: readonly ImportSpecifier[]): NamedImports;
    createImportSpecifier(propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    updateImportSpecifier(node: ImportSpecifier, propertyName: Identifier | undefined, name: Identifier): ImportSpecifier;
    createExportAssignment(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isExportEquals: boolean | undefined, expression: Expression): ExportAssignment;
    updateExportAssignment(node: ExportAssignment, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, expression: Expression): ExportAssignment;
    createExportDeclaration(decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isTypeOnly: boolean, exportClause: NamedExportBindings | undefined, moduleSpecifier?: Expression): ExportDeclaration;
    updateExportDeclaration(node: ExportDeclaration, decorators: readonly Decorator[] | undefined, modifiers: readonly Modifier[] | undefined, isTypeOnly: boolean, exportClause: NamedExportBindings | undefined, moduleSpecifier: Expression | undefined): ExportDeclaration;
    createNamedExports(elements: readonly ExportSpecifier[]): NamedExports;
    updateNamedExports(node: NamedExports, elements: readonly ExportSpecifier[]): NamedExports;
    createExportSpecifier(propertyName: string | Identifier | undefined, name: string | Identifier): ExportSpecifier;
    updateExportSpecifier(node: ExportSpecifier, propertyName: Identifier | undefined, name: Identifier): ExportSpecifier;
    createMissingDeclaration(): MissingDeclaration;
    createExternalModuleReference(expression: Expression): ExternalModuleReference;
    updateExternalModuleReference(node: ExternalModuleReference, expression: Expression): ExternalModuleReference;
    createJSDocAllType(): JSDocAllType;
    createJSDocUnknownType(): JSDocUnknownType;
    createJSDocNonNullableType(type: TypeNode): JSDocNonNullableType;
    updateJSDocNonNullableType(node: JSDocNonNullableType, type: TypeNode): JSDocNonNullableType;
    createJSDocNullableType(type: TypeNode): JSDocNullableType;
    updateJSDocNullableType(node: JSDocNullableType, type: TypeNode): JSDocNullableType;
    createJSDocOptionalType(type: TypeNode): JSDocOptionalType;
    updateJSDocOptionalType(node: JSDocOptionalType, type: TypeNode): JSDocOptionalType;
    createJSDocFunctionType(parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): JSDocFunctionType;
    updateJSDocFunctionType(node: JSDocFunctionType, parameters: readonly ParameterDeclaration[], type: TypeNode | undefined): JSDocFunctionType;
    createJSDocVariadicType(type: TypeNode): JSDocVariadicType;
    updateJSDocVariadicType(node: JSDocVariadicType, type: TypeNode): JSDocVariadicType;
    createJSDocNamepathType(type: TypeNode): JSDocNamepathType;
    updateJSDocNamepathType(node: JSDocNamepathType, type: TypeNode): JSDocNamepathType;
    createJSDocTypeExpression(type: TypeNode): JSDocTypeExpression;
    updateJSDocTypeExpression(node: JSDocTypeExpression, type: TypeNode): JSDocTypeExpression;
    createJSDocNameReference(name: EntityName): JSDocNameReference;
    updateJSDocNameReference(node: JSDocNameReference, name: EntityName): JSDocNameReference;
    createJSDocLink(name: EntityName | undefined, text: string): JSDocLink;
    updateJSDocLink(node: JSDocLink, name: EntityName | undefined, text: string): JSDocLink;
    createJSDocTypeLiteral(jsDocPropertyTags?: readonly JSDocPropertyLikeTag[], isArrayType?: boolean): JSDocTypeLiteral;
    updateJSDocTypeLiteral(node: JSDocTypeLiteral, jsDocPropertyTags: readonly JSDocPropertyLikeTag[] | undefined, isArrayType: boolean | undefined): JSDocTypeLiteral;
    createJSDocSignature(typeParameters: readonly JSDocTemplateTag[] | undefined, parameters: readonly JSDocParameterTag[], type?: JSDocReturnTag): JSDocSignature;
    updateJSDocSignature(node: JSDocSignature, typeParameters: readonly JSDocTemplateTag[] | undefined, parameters: readonly JSDocParameterTag[], type: JSDocReturnTag | undefined): JSDocSignature;
    createJSDocTemplateTag(tagName: Identifier | undefined, constraint: JSDocTypeExpression | undefined, typeParameters: readonly TypeParameterDeclaration[], comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocTemplateTag;
    updateJSDocTemplateTag(node: JSDocTemplateTag, tagName: Identifier | undefined, constraint: JSDocTypeExpression | undefined, typeParameters: readonly TypeParameterDeclaration[], comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocTemplateTag;
    createJSDocTypedefTag(tagName: Identifier | undefined, typeExpression?: JSDocTypeExpression | JSDocTypeLiteral, fullName?: Identifier | JSDocNamespaceDeclaration, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocTypedefTag;
    updateJSDocTypedefTag(node: JSDocTypedefTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | JSDocTypeLiteral | undefined, fullName: Identifier | JSDocNamespaceDeclaration | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocTypedefTag;
    createJSDocParameterTag(tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression?: JSDocTypeExpression, isNameFirst?: boolean, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocParameterTag;
    updateJSDocParameterTag(node: JSDocParameterTag, tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression: JSDocTypeExpression | undefined, isNameFirst: boolean, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocParameterTag;
    createJSDocPropertyTag(tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression?: JSDocTypeExpression, isNameFirst?: boolean, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocPropertyTag;
    updateJSDocPropertyTag(node: JSDocPropertyTag, tagName: Identifier | undefined, name: EntityName, isBracketed: boolean, typeExpression: JSDocTypeExpression | undefined, isNameFirst: boolean, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocPropertyTag;
    createJSDocTypeTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocTypeTag;
    updateJSDocTypeTag(node: JSDocTypeTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocTypeTag;
    createJSDocSeeTag(tagName: Identifier | undefined, nameExpression: JSDocNameReference | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocSeeTag;
    updateJSDocSeeTag(node: JSDocSeeTag, tagName: Identifier | undefined, nameExpression: JSDocNameReference | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocSeeTag;
    createJSDocReturnTag(tagName: Identifier | undefined, typeExpression?: JSDocTypeExpression, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocReturnTag;
    updateJSDocReturnTag(node: JSDocReturnTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocReturnTag;
    createJSDocThisTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocThisTag;
    updateJSDocThisTag(node: JSDocThisTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocThisTag;
    createJSDocEnumTag(tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocEnumTag;
    updateJSDocEnumTag(node: JSDocEnumTag, tagName: Identifier | undefined, typeExpression: JSDocTypeExpression, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocEnumTag;
    createJSDocCallbackTag(tagName: Identifier | undefined, typeExpression: JSDocSignature, fullName?: Identifier | JSDocNamespaceDeclaration, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocCallbackTag;
    updateJSDocCallbackTag(node: JSDocCallbackTag, tagName: Identifier | undefined, typeExpression: JSDocSignature, fullName: Identifier | JSDocNamespaceDeclaration | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocCallbackTag;
    createJSDocAugmentsTag(tagName: Identifier | undefined, className: JSDocAugmentsTag["class"], comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocAugmentsTag;
    updateJSDocAugmentsTag(node: JSDocAugmentsTag, tagName: Identifier | undefined, className: JSDocAugmentsTag["class"], comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocAugmentsTag;
    createJSDocImplementsTag(tagName: Identifier | undefined, className: JSDocImplementsTag["class"], comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocImplementsTag;
    updateJSDocImplementsTag(node: JSDocImplementsTag, tagName: Identifier | undefined, className: JSDocImplementsTag["class"], comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocImplementsTag;
    createJSDocAuthorTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocAuthorTag;
    updateJSDocAuthorTag(node: JSDocAuthorTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocAuthorTag;
    createJSDocClassTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocClassTag;
    updateJSDocClassTag(node: JSDocClassTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocClassTag;
    createJSDocPublicTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocPublicTag;
    updateJSDocPublicTag(node: JSDocPublicTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocPublicTag;
    createJSDocPrivateTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocPrivateTag;
    updateJSDocPrivateTag(node: JSDocPrivateTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocPrivateTag;
    createJSDocProtectedTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocProtectedTag;
    updateJSDocProtectedTag(node: JSDocProtectedTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocProtectedTag;
    createJSDocReadonlyTag(tagName: Identifier | undefined, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocReadonlyTag;
    updateJSDocReadonlyTag(node: JSDocReadonlyTag, tagName: Identifier | undefined, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocReadonlyTag;
    createJSDocUnknownTag(tagName: Identifier, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocUnknownTag;
    updateJSDocUnknownTag(node: JSDocUnknownTag, tagName: Identifier, comment: string | NodeArray<JSDocText | JSDocLink> | undefined): JSDocUnknownTag;
    createJSDocDeprecatedTag(tagName: Identifier, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocDeprecatedTag;
    updateJSDocDeprecatedTag(node: JSDocDeprecatedTag, tagName: Identifier, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocDeprecatedTag;
    createJSDocOverrideTag(tagName: Identifier, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocOverrideTag;
    updateJSDocOverrideTag(node: JSDocOverrideTag, tagName: Identifier, comment?: string | NodeArray<JSDocText | JSDocLink>): JSDocOverrideTag;
    createJSDocText(text: string): JSDocText;
    updateJSDocText(node: JSDocText, text: string): JSDocText;
    createJSDocComment(comment?: string | NodeArray<JSDocText | JSDocLink> | undefined, tags?: readonly JSDocTag[] | undefined): JSDoc;
    updateJSDocComment(node: JSDoc, comment: string | NodeArray<JSDocText | JSDocLink> | undefined, tags: readonly JSDocTag[] | undefined): JSDoc;
    createJsxElement(openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
    updateJsxElement(node: JsxElement, openingElement: JsxOpeningElement, children: readonly JsxChild[], closingElement: JsxClosingElement): JsxElement;
    createJsxSelfClosingElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
    updateJsxSelfClosingElement(node: JsxSelfClosingElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxSelfClosingElement;
    createJsxOpeningElement(tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
    updateJsxOpeningElement(node: JsxOpeningElement, tagName: JsxTagNameExpression, typeArguments: readonly TypeNode[] | undefined, attributes: JsxAttributes): JsxOpeningElement;
    createJsxClosingElement(tagName: JsxTagNameExpression): JsxClosingElement;
    updateJsxClosingElement(node: JsxClosingElement, tagName: JsxTagNameExpression): JsxClosingElement;
    createJsxFragment(openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
    createJsxText(text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
    updateJsxText(node: JsxText, text: string, containsOnlyTriviaWhiteSpaces?: boolean): JsxText;
    createJsxOpeningFragment(): JsxOpeningFragment;
    createJsxJsxClosingFragment(): JsxClosingFragment;
    updateJsxFragment(node: JsxFragment, openingFragment: JsxOpeningFragment, children: readonly JsxChild[], closingFragment: JsxClosingFragment): JsxFragment;
    createJsxAttribute(name: Identifier, initializer: StringLiteral | JsxExpression | undefined): JsxAttribute;
    updateJsxAttribute(node: JsxAttribute, name: Identifier, initializer: StringLiteral | JsxExpression | undefined): JsxAttribute;
    createJsxAttributes(properties: readonly JsxAttributeLike[]): JsxAttributes;
    updateJsxAttributes(node: JsxAttributes, properties: readonly JsxAttributeLike[]): JsxAttributes;
    createJsxSpreadAttribute(expression: Expression): JsxSpreadAttribute;
    updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute;
    createJsxExpression(dotDotDotToken: DotDotDotToken | undefined, expression: Expression | undefined): JsxExpression;
    updateJsxExpression(node: JsxExpression, expression: Expression | undefined): JsxExpression;
    createCaseClause(expression: Expression, statements: readonly Statement[]): CaseClause;
    updateCaseClause(node: CaseClause, expression: Expression, statements: readonly Statement[]): CaseClause;
    createDefaultClause(statements: readonly Statement[]): DefaultClause;
    updateDefaultClause(node: DefaultClause, statements: readonly Statement[]): DefaultClause;
    createHeritageClause(token: HeritageClause["token"], types: readonly ExpressionWithTypeArguments[]): HeritageClause;
    updateHeritageClause(node: HeritageClause, types: readonly ExpressionWithTypeArguments[]): HeritageClause;
    createCatchClause(variableDeclaration: string | VariableDeclaration | undefined, block: Block): CatchClause;
    updateCatchClause(node: CatchClause, variableDeclaration: VariableDeclaration | undefined, block: Block): CatchClause;
    createPropertyAssignment(name: string | PropertyName, initializer: Expression): PropertyAssignment;
    updatePropertyAssignment(node: PropertyAssignment, name: PropertyName, initializer: Expression): PropertyAssignment;
    createShorthandPropertyAssignment(name: string | Identifier, objectAssignmentInitializer?: Expression): ShorthandPropertyAssignment;
    updateShorthandPropertyAssignment(node: ShorthandPropertyAssignment, name: Identifier, objectAssignmentInitializer: Expression | undefined): ShorthandPropertyAssignment;
    createSpreadAssignment(expression: Expression): SpreadAssignment;
    updateSpreadAssignment(node: SpreadAssignment, expression: Expression): SpreadAssignment;
    createEnumMember(name: string | PropertyName, initializer?: Expression): EnumMember;
    updateEnumMember(node: EnumMember, name: PropertyName, initializer: Expression | undefined): EnumMember;
    createSourceFile(statements: readonly Statement[], endOfFileToken: EndOfFileToken, flags: NodeFlags): SourceFile;
    updateSourceFile(node: SourceFile, statements: readonly Statement[], isDeclarationFile?: boolean, referencedFiles?: readonly FileReference[], typeReferences?: readonly FileReference[], hasNoDefaultLib?: boolean, libReferences?: readonly FileReference[]): SourceFile;
    createUnparsedSource(prologues: readonly UnparsedPrologue[], syntheticReferences: readonly UnparsedSyntheticReference[] | undefined, texts: readonly UnparsedSourceText[]): UnparsedSource;
    createUnparsedPrologue(data?: string): UnparsedPrologue;
    createUnparsedPrepend(data: string | undefined, texts: readonly UnparsedSourceText[]): UnparsedPrepend;
    createUnparsedTextLike(data: string | undefined, internal: boolean): UnparsedTextLike;
    createUnparsedSyntheticReference(section: BundleFileHasNoDefaultLib | BundleFileReference): UnparsedSyntheticReference;
    createInputFiles(): InputFiles;
    createSyntheticExpression(type: Type, isSpread?: boolean, tupleNameSource?: ParameterDeclaration | NamedTupleMember): SyntheticExpression;
    createSyntaxList(children: Node[]): SyntaxList;
    createNotEmittedStatement(original: Node): NotEmittedStatement;
    createEndOfDeclarationMarker(original: Node): EndOfDeclarationMarker;
    createMergeDeclarationMarker(original: Node): MergeDeclarationMarker;
    createPartiallyEmittedExpression(expression: Expression, original?: Node): PartiallyEmittedExpression;
    updatePartiallyEmittedExpression(node: PartiallyEmittedExpression, expression: Expression): PartiallyEmittedExpression;
    createSyntheticReferenceExpression(expression: Expression, thisArg: Expression): SyntheticReferenceExpression;
    updateSyntheticReferenceExpression(node: SyntheticReferenceExpression, expression: Expression, thisArg: Expression): SyntheticReferenceExpression;
    createCommaListExpression(elements: readonly Expression[]): CommaListExpression;
    updateCommaListExpression(node: CommaListExpression, elements: readonly Expression[]): CommaListExpression;
    createBundle(sourceFiles: readonly SourceFile[], prepends?: readonly (UnparsedSource | InputFiles)[]): Bundle;
    updateBundle(node: Bundle, sourceFiles: readonly SourceFile[], prepends?: readonly (UnparsedSource | InputFiles)[]): Bundle;
    createComma(left: Expression, right: Expression): BinaryExpression;
    createAssignment(left: ObjectLiteralExpression | ArrayLiteralExpression, right: Expression): DestructuringAssignment;
    createAssignment(left: Expression, right: Expression): AssignmentExpression<EqualsToken>;
    createLogicalOr(left: Expression, right: Expression): BinaryExpression;
    createLogicalAnd(left: Expression, right: Expression): BinaryExpression;
    createBitwiseOr(left: Expression, right: Expression): BinaryExpression;
    createBitwiseXor(left: Expression, right: Expression): BinaryExpression;
    createBitwiseAnd(left: Expression, right: Expression): BinaryExpression;
    createStrictEquality(left: Expression, right: Expression): BinaryExpression;
    createStrictInequality(left: Expression, right: Expression): BinaryExpression;
    createEquality(left: Expression, right: Expression): BinaryExpression;
    createInequality(left: Expression, right: Expression): BinaryExpression;
    createLessThan(left: Expression, right: Expression): BinaryExpression;
    createLessThanEquals(left: Expression, right: Expression): BinaryExpression;
    createGreaterThan(left: Expression, right: Expression): BinaryExpression;
    createGreaterThanEquals(left: Expression, right: Expression): BinaryExpression;
    createLeftShift(left: Expression, right: Expression): BinaryExpression;
    createRightShift(left: Expression, right: Expression): BinaryExpression;
    createUnsignedRightShift(left: Expression, right: Expression): BinaryExpression;
    createAdd(left: Expression, right: Expression): BinaryExpression;
    createSubtract(left: Expression, right: Expression): BinaryExpression;
    createMultiply(left: Expression, right: Expression): BinaryExpression;
    createDivide(left: Expression, right: Expression): BinaryExpression;
    createModulo(left: Expression, right: Expression): BinaryExpression;
    createExponent(left: Expression, right: Expression): BinaryExpression;
    createPrefixPlus(operand: Expression): PrefixUnaryExpression;
    createPrefixMinus(operand: Expression): PrefixUnaryExpression;
    createPrefixIncrement(operand: Expression): PrefixUnaryExpression;
    createPrefixDecrement(operand: Expression): PrefixUnaryExpression;
    createBitwiseNot(operand: Expression): PrefixUnaryExpression;
    createLogicalNot(operand: Expression): PrefixUnaryExpression;
    createPostfixIncrement(operand: Expression): PostfixUnaryExpression;
    createPostfixDecrement(operand: Expression): PostfixUnaryExpression;
    createImmediatelyInvokedFunctionExpression(statements: readonly Statement[]): CallExpression;
    createImmediatelyInvokedFunctionExpression(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    createImmediatelyInvokedArrowFunction(statements: readonly Statement[]): CallExpression;
    createImmediatelyInvokedArrowFunction(statements: readonly Statement[], param: ParameterDeclaration, paramValue: Expression): CallExpression;
    createVoidZero(): VoidExpression;
    createExportDefault(expression: Expression): ExportAssignment;
    createExternalModuleExport(exportName: Identifier): ExportDeclaration;
    createTypeCheck(value: Expression, tag: TypeOfTag): Expression;
    createMethodCall(object: Expression, methodName: string | Identifier, argumentsList: readonly Expression[]): CallExpression;
    createGlobalMethodCall(globalObjectName: string, globalMethodName: string, argumentsList: readonly Expression[]): CallExpression;
    createFunctionBindCall(target: Expression, thisArg: Expression, argumentsList: readonly Expression[]): CallExpression;
    createFunctionCallCall(target: Expression, thisArg: Expression, argumentsList: readonly Expression[]): CallExpression;
    createFunctionApplyCall(target: Expression, thisArg: Expression, argumentsExpression: Expression): CallExpression;
    createObjectDefinePropertyCall(target: Expression, propertyName: string | Expression, attributes: Expression): CallExpression;
    createPropertyDescriptor(attributes: PropertyDescriptorAttributes, singleLine?: boolean): ObjectLiteralExpression;
    createArraySliceCall(array: Expression, start?: number | Expression): CallExpression;
    createArrayConcatCall(array: Expression, values: readonly Expression[]): CallExpression;
    createCallBinding(expression: Expression, recordTempVariable: (temp: Identifier) => void, languageVersion?: ScriptTarget, cacheIdentifiers?: boolean): CallBinding;
    inlineExpressions(expressions: readonly Expression[]): Expression;
    /**
     * Gets the internal name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the body of an ES5 class function body. An internal name will *never*
     * be prefixed with an module or namespace export modifier like "exports." when emitted as an
     * expression. An internal name will also *never* be renamed due to a collision with a block
     * scoped variable.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getInternalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets the local name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). A
     * local name will *never* be prefixed with an module or namespace export modifier like
     * "exports." when emitted as an expression.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getLocalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets the export name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). An
     * export name will *always* be prefixed with a module or namespace export modifier like
     * `"exports."` when emitted as an expression if the name points to an exported symbol.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getExportName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets the name of a declaration for use in declarations.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getDeclarationName(node: Declaration | undefined, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets a namespace-qualified name for use in expressions.
     *
     * @param ns The namespace identifier.
     * @param name The name.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getNamespaceMemberName(ns: Identifier, name: Identifier, allowComments?: boolean, allowSourceMaps?: boolean): PropertyAccessExpression;
    /**
     * Gets the exported name of a declaration for use in expressions.
     *
     * An exported name will *always* be prefixed with an module or namespace export modifier like
     * "exports." if the name points to an exported symbol.
     *
     * @param ns The namespace identifier.
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    getExternalModuleOrNamespaceExportName(ns: Identifier | undefined, node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier | PropertyAccessExpression;
    restoreOuterExpressions(outerExpression: Expression | undefined, innerExpression: Expression, kinds?: OuterExpressionKinds): Expression;
    restoreEnclosingLabel(node: Statement, outermostLabeledStatement: LabeledStatement | undefined, afterRestoreLabelCallback?: (node: LabeledStatement) => void): Statement;
    createUseStrictPrologue(): PrologueDirective;
    /**
     * Copies any necessary standard and custom prologue-directives into target array.
     * @param source origin statements array
     * @param target result statements array
     * @param ensureUseStrict boolean determining whether the function need to add prologue-directives
     * @param visitor Optional callback used to visit any custom prologue directives.
     */
    copyPrologue(source: readonly Statement[], target: Push<Statement>, ensureUseStrict?: boolean, visitor?: (node: Node) => VisitResult<Node>): number;
    /**
     * Copies only the standard (string-expression) prologue-directives into the target statement-array.
     * @param source origin statements array
     * @param target result statements array
     * @param ensureUseStrict boolean determining whether the function need to add prologue-directives
     */
    copyStandardPrologue(source: readonly Statement[], target: Push<Statement>, ensureUseStrict?: boolean): number;
    /**
     * Copies only the custom prologue-directives into target statement-array.
     * @param source origin statements array
     * @param target result statements array
     * @param statementOffset The offset at which to begin the copy.
     * @param visitor Optional callback used to visit any custom prologue directives.
     */
    copyCustomPrologue(source: readonly Statement[], target: Push<Statement>, statementOffset: number, visitor?: (node: Node) => VisitResult<Node>, filter?: (node: Node) => boolean): number;
    copyCustomPrologue(source: readonly Statement[], target: Push<Statement>, statementOffset: number | undefined, visitor?: (node: Node) => VisitResult<Node>, filter?: (node: Node) => boolean): number | undefined;
    ensureUseStrict(statements: NodeArray<Statement>): NodeArray<Statement>;
    liftToBlock(nodes: readonly Node[]): Statement;
    /**
     * Merges generated lexical declarations into a new statement list.
     */
    mergeLexicalEnvironment(statements: NodeArray<Statement>, declarations: readonly Statement[] | undefined): NodeArray<Statement>;
    /**
     * Appends generated lexical declarations to an array of statements.
     */
    mergeLexicalEnvironment(statements: Statement[], declarations: readonly Statement[] | undefined): Statement[];
    /**
     * Creates a shallow, memberwise clone of a node.
     * - The result will have its `original` pointer set to `node`.
     * - The result will have its `pos` and `end` set to `-1`.
     * - *DO NOT USE THIS* if a more appropriate function is available.
     */
    cloneNode<T extends Node | undefined>(node: T): T;
    updateModifiers<T extends HasModifiers>(node: T, modifiers: readonly Modifier[] | ModifierFlags): T;
}
export declare const enum LexicalEnvironmentFlags {
    None = 0,
    InParameters = 1,
    VariablesHoistedInParameters = 2
}
export interface CoreTransformationContext {
    readonly factory: NodeFactory;
    /** Gets the compiler options supplied to the transformer. */
    getCompilerOptions(): CompilerOptions;
    /** Starts a new lexical environment. */
    startLexicalEnvironment(): void;
    setLexicalEnvironmentFlags(flags: LexicalEnvironmentFlags, value: boolean): void;
    getLexicalEnvironmentFlags(): LexicalEnvironmentFlags;
    /** Suspends the current lexical environment, usually after visiting a parameter list. */
    suspendLexicalEnvironment(): void;
    /** Resumes a suspended lexical environment, usually before visiting a function body. */
    resumeLexicalEnvironment(): void;
    /** Ends a lexical environment, returning any declarations. */
    endLexicalEnvironment(): Statement[] | undefined;
    /** Hoists a function declaration to the containing scope. */
    hoistFunctionDeclaration(node: FunctionDeclaration): void;
    /** Hoists a variable declaration to the containing scope. */
    hoistVariableDeclaration(node: Identifier): void;
    startBlockScope(): void;
    endBlockScope(): Statement[] | undefined;
    addBlockScopedVariable(node: Identifier): void;
    /** Adds an initialization statement to the top of the lexical environment. */
    addInitializationStatement(node: Statement): void;
}
export interface TransformationContext extends CoreTransformationContext {
    getEmitResolver(): EmitResolver;
    getEmitHost(): EmitHost;
    getEmitHelperFactory(): EmitHelperFactory;
    /** Records a request for a non-scoped emit helper in the current context. */
    requestEmitHelper(helper: EmitHelper): void;
    /** Gets and resets the requested non-scoped emit helpers. */
    readEmitHelpers(): EmitHelper[] | undefined;
    /** Enables expression substitutions in the pretty printer for the provided SyntaxKind. */
    enableSubstitution(kind: SyntaxKind): void;
    /** Determines whether expression substitutions are enabled for the provided node. */
    isSubstitutionEnabled(node: Node): boolean;
    /**
     * Hook used by transformers to substitute expressions just before they
     * are emitted by the pretty printer.
     *
     * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
     * before returning the `NodeTransformer` callback.
     */
    onSubstituteNode: (hint: EmitHint, node: Node) => Node;
    /**
     * Enables before/after emit notifications in the pretty printer for the provided
     * SyntaxKind.
     */
    enableEmitNotification(kind: SyntaxKind): void;
    /**
     * Determines whether before/after emit notifications should be raised in the pretty
     * printer when it emits a node.
     */
    isEmitNotificationEnabled(node: Node): boolean;
    /**
     * Hook used to allow transformers to capture state before or after
     * the printer emits a node.
     *
     * NOTE: Transformation hooks should only be modified during `Transformer` initialization,
     * before returning the `NodeTransformer` callback.
     */
    onEmitNode: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
    addDiagnostic(diag: DiagnosticWithLocation): void;
}
export interface TransformationResult<T extends Node> {
    /** Gets the transformed source files. */
    transformed: T[];
    /** Gets diagnostics for the transformation. */
    diagnostics?: DiagnosticWithLocation[];
    /**
     * Gets a substitute for a node, if one is available; otherwise, returns the original node.
     *
     * @param hint A hint as to the intended usage of the node.
     * @param node The node to substitute.
     */
    substituteNode(hint: EmitHint, node: Node): Node;
    /**
     * Emits a node with possible notification.
     *
     * @param hint A hint as to the intended usage of the node.
     * @param node The node to emit.
     * @param emitCallback A callback used to emit the node.
     */
    emitNodeWithNotification(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
    /**
     * Indicates if a given node needs an emit notification
     *
     * @param node The node to emit.
     */
    isEmitNotificationEnabled?(node: Node): boolean;
    /**
     * Clean up EmitNode entries on any parse-tree nodes.
     */
    dispose(): void;
}
/**
 * A function that is used to initialize and return a `Transformer` callback, which in turn
 * will be used to transform one or more nodes.
 */
export declare type TransformerFactory<T extends Node> = (context: TransformationContext) => Transformer<T>;
/**
 * A function that transforms a node.
 */
export declare type Transformer<T extends Node> = (node: T) => T;
/**
 * A function that accepts and possibly transforms a node.
 */
export declare type Visitor = (node: Node) => VisitResult<Node>;
export interface NodeVisitor {
    <T extends Node>(nodes: T, visitor: Visitor | undefined, test?: (node: Node) => boolean, lift?: (node: readonly Node[]) => T): T;
    <T extends Node>(nodes: T | undefined, visitor: Visitor | undefined, test?: (node: Node) => boolean, lift?: (node: readonly Node[]) => T): T | undefined;
}
export interface NodesVisitor {
    <T extends Node>(nodes: NodeArray<T>, visitor: Visitor | undefined, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T>;
    <T extends Node>(nodes: NodeArray<T> | undefined, visitor: Visitor | undefined, test?: (node: Node) => boolean, start?: number, count?: number): NodeArray<T> | undefined;
}
export declare type VisitResult<T extends Node> = T | T[] | undefined;
export interface Printer {
    /**
     * Print a node and its subtree as-is, without any emit transformations.
     * @param hint A value indicating the purpose of a node. This is primarily used to
     * distinguish between an `Identifier` used in an expression position, versus an
     * `Identifier` used as an `IdentifierName` as part of a declaration. For most nodes you
     * should just pass `Unspecified`.
     * @param node The node to print. The node and its subtree are printed as-is, without any
     * emit transformations.
     * @param sourceFile A source file that provides context for the node. The source text of
     * the file is used to emit the original source content for literals and identifiers, while
     * the identifiers of the source file are used when generating unique names to avoid
     * collisions.
     */
    printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string;
    /**
     * Prints a list of nodes using the given format flags
     */
    printList<T extends Node>(format: ListFormat, list: NodeArray<T>, sourceFile: SourceFile): string;
    /**
     * Prints a source file as-is, without any emit transformations.
     */
    printFile(sourceFile: SourceFile): string;
    /**
     * Prints a bundle of source files as-is, without any emit transformations.
     */
    printBundle(bundle: Bundle): string;
    writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
    writeList<T extends Node>(format: ListFormat, list: NodeArray<T> | undefined, sourceFile: SourceFile | undefined, writer: EmitTextWriter): void;
    writeFile(sourceFile: SourceFile, writer: EmitTextWriter, sourceMapGenerator: SourceMapGenerator | undefined): void;
    writeBundle(bundle: Bundle, writer: EmitTextWriter, sourceMapGenerator: SourceMapGenerator | undefined): void;
    bundleFileInfo?: BundleFileInfo;
}
export declare const enum BundleFileSectionKind {
    Prologue = "prologue",
    EmitHelpers = "emitHelpers",
    NoDefaultLib = "no-default-lib",
    Reference = "reference",
    Type = "type",
    Lib = "lib",
    Prepend = "prepend",
    Text = "text",
    Internal = "internal"
}
export interface BundleFileSectionBase extends TextRange {
    kind: BundleFileSectionKind;
    data?: string;
}
export interface BundleFilePrologue extends BundleFileSectionBase {
    kind: BundleFileSectionKind.Prologue;
    data: string;
}
export interface BundleFileEmitHelpers extends BundleFileSectionBase {
    kind: BundleFileSectionKind.EmitHelpers;
    data: string;
}
export interface BundleFileHasNoDefaultLib extends BundleFileSectionBase {
    kind: BundleFileSectionKind.NoDefaultLib;
}
export interface BundleFileReference extends BundleFileSectionBase {
    kind: BundleFileSectionKind.Reference | BundleFileSectionKind.Type | BundleFileSectionKind.Lib;
    data: string;
}
export interface BundleFilePrepend extends BundleFileSectionBase {
    kind: BundleFileSectionKind.Prepend;
    data: string;
    texts: BundleFileTextLike[];
}
export declare type BundleFileTextLikeKind = BundleFileSectionKind.Text | BundleFileSectionKind.Internal;
export interface BundleFileTextLike extends BundleFileSectionBase {
    kind: BundleFileTextLikeKind;
}
export declare type BundleFileSection = BundleFilePrologue | BundleFileEmitHelpers | BundleFileHasNoDefaultLib | BundleFileReference | BundleFilePrepend | BundleFileTextLike;
export interface SourceFilePrologueDirectiveExpression extends TextRange {
    text: string;
}
export interface SourceFilePrologueDirective extends TextRange {
    expression: SourceFilePrologueDirectiveExpression;
}
export interface SourceFilePrologueInfo {
    file: number;
    text: string;
    directives: SourceFilePrologueDirective[];
}
export interface SourceFileInfo {
    helpers?: string[];
    prologues?: SourceFilePrologueInfo[];
}
export interface BundleFileInfo {
    sections: BundleFileSection[];
    sources?: SourceFileInfo;
}
export interface BundleBuildInfo {
    js?: BundleFileInfo;
    dts?: BundleFileInfo;
    commonSourceDirectory: string;
    sourceFiles: readonly string[];
}
export interface BuildInfo {
    bundle?: BundleBuildInfo;
    program?: ProgramBuildInfo;
    version: string;
}
export interface PrintHandlers {
    /**
     * A hook used by the Printer when generating unique names to avoid collisions with
     * globally defined names that exist outside of the current source file.
     */
    hasGlobalName?(name: string): boolean;
    /**
     * A hook used by the Printer to provide notifications prior to emitting a node. A
     * compatible implementation **must** invoke `emitCallback` with the provided `hint` and
     * `node` values.
     * @param hint A hint indicating the intended purpose of the node.
     * @param node The node to emit.
     * @param emitCallback A callback that, when invoked, will emit the node.
     * @example
     * ```ts
     * var printer = createPrinter(printerOptions, {
     *   onEmitNode(hint, node, emitCallback) {
     *     // set up or track state prior to emitting the node...
     *     emitCallback(hint, node);
     *     // restore state after emitting the node...
     *   }
     * });
     * ```
     */
    onEmitNode?(hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void): void;
    /**
     * A hook used to check if an emit notification is required for a node.
     * @param node The node to emit.
     */
    isEmitNotificationEnabled?(node: Node): boolean;
    /**
     * A hook used by the Printer to perform just-in-time substitution of a node. This is
     * primarily used by node transformations that need to substitute one node for another,
     * such as replacing `myExportedVar` with `exports.myExportedVar`.
     * @param hint A hint indicating the intended purpose of the node.
     * @param node The node to emit.
     * @example
     * ```ts
     * var printer = createPrinter(printerOptions, {
     *   substituteNode(hint, node) {
     *     // perform substitution if necessary...
     *     return node;
     *   }
     * });
     * ```
     */
    substituteNode?(hint: EmitHint, node: Node): Node;
    onEmitSourceMapOfNode?: (hint: EmitHint, node: Node, emitCallback: (hint: EmitHint, node: Node) => void) => void;
    onEmitSourceMapOfToken?: (node: Node | undefined, token: SyntaxKind, writer: (s: string) => void, pos: number, emitCallback: (token: SyntaxKind, writer: (s: string) => void, pos: number) => number) => number;
    onEmitSourceMapOfPosition?: (pos: number) => void;
    onSetSourceFile?: (node: SourceFile) => void;
    onBeforeEmitNode?: (node: Node | undefined) => void;
    onAfterEmitNode?: (node: Node | undefined) => void;
    onBeforeEmitNodeArray?: (nodes: NodeArray<any> | undefined) => void;
    onAfterEmitNodeArray?: (nodes: NodeArray<any> | undefined) => void;
    onBeforeEmitToken?: (node: Node) => void;
    onAfterEmitToken?: (node: Node) => void;
}
export interface PrinterOptions {
    removeComments?: boolean;
    newLine?: NewLineKind;
    omitTrailingSemicolon?: boolean;
    noEmitHelpers?: boolean;
    module?: CompilerOptions["module"];
    target?: CompilerOptions["target"];
    sourceMap?: boolean;
    inlineSourceMap?: boolean;
    inlineSources?: boolean;
    extendedDiagnostics?: boolean;
    onlyPrintJsDocStyle?: boolean;
    neverAsciiEscape?: boolean;
    writeBundleFileInfo?: boolean;
    recordInternalSection?: boolean;
    stripInternal?: boolean;
    preserveSourceNewlines?: boolean;
    terminateUnterminatedLiterals?: boolean;
    relativeToBuildInfo?: (path: string) => string;
}
export interface RawSourceMap {
    version: 3;
    file: string;
    sourceRoot?: string | null;
    sources: string[];
    sourcesContent?: (string | null)[] | null;
    mappings: string;
    names?: string[] | null;
}
/**
 * Generates a source map.
 */
export interface SourceMapGenerator {
    getSources(): readonly string[];
    /**
     * Adds a source to the source map.
     */
    addSource(fileName: string): number;
    /**
     * Set the content for a source.
     */
    setSourceContent(sourceIndex: number, content: string | null): void;
    /**
     * Adds a name.
     */
    addName(name: string): number;
    /**
     * Adds a mapping without source information.
     */
    addMapping(generatedLine: number, generatedCharacter: number): void;
    /**
     * Adds a mapping with source information.
     */
    addMapping(generatedLine: number, generatedCharacter: number, sourceIndex: number, sourceLine: number, sourceCharacter: number, nameIndex?: number): void;
    /**
     * Appends a source map.
     */
    appendSourceMap(generatedLine: number, generatedCharacter: number, sourceMap: RawSourceMap, sourceMapPath: string, start?: LineAndCharacter, end?: LineAndCharacter): void;
    /**
     * Gets the source map as a `RawSourceMap` object.
     */
    toJSON(): RawSourceMap;
    /**
     * Gets the string representation of the source map.
     */
    toString(): string;
}
export interface DocumentPositionMapperHost {
    getSourceFileLike(fileName: string): SourceFileLike | undefined;
    getCanonicalFileName(path: string): string;
    log(text: string): void;
}
/**
 * Maps positions between source and generated files.
 */
export interface DocumentPositionMapper {
    getSourcePosition(input: DocumentPosition): DocumentPosition;
    getGeneratedPosition(input: DocumentPosition): DocumentPosition;
}
export interface DocumentPosition {
    fileName: string;
    pos: number;
}
export interface EmitTextWriter extends SymbolWriter {
    write(s: string): void;
    writeTrailingSemicolon(text: string): void;
    writeComment(text: string): void;
    getText(): string;
    rawWrite(s: string): void;
    writeLiteral(s: string): void;
    getTextPos(): number;
    getLine(): number;
    getColumn(): number;
    getIndent(): number;
    isAtStartOfLine(): boolean;
    hasTrailingComment(): boolean;
    hasTrailingWhitespace(): boolean;
    getTextPosWithWriteLine?(): number;
}
export interface GetEffectiveTypeRootsHost {
    directoryExists?(directoryName: string): boolean;
    getCurrentDirectory?(): string;
}
export interface ModuleSpecifierResolutionHost {
    useCaseSensitiveFileNames?(): boolean;
    fileExists(path: string): boolean;
    getCurrentDirectory(): string;
    directoryExists?(path: string): boolean;
    readFile?(path: string): string | undefined;
    realpath?(path: string): string;
    getSymlinkCache?(): SymlinkCache;
    getModuleSpecifierCache?(): ModuleSpecifierCache;
    getGlobalTypingsCacheLocation?(): string | undefined;
    getNearestAncestorDirectoryWithPackageJson?(fileName: string, rootDir?: string): string | undefined;
    getSourceFiles(): readonly SourceFile[];
    readonly redirectTargetsMap: RedirectTargetsMap;
    getProjectReferenceRedirect(fileName: string): string | undefined;
    isSourceOfProjectReferenceRedirect(fileName: string): boolean;
    getFileIncludeReasons(): MultiMap<Path, FileIncludeReason>;
}
export interface ModulePath {
    path: string;
    isInNodeModules: boolean;
    isRedirect: boolean;
}
export interface ModuleSpecifierCache {
    get(fromFileName: Path, toFileName: Path): boolean | readonly ModulePath[] | undefined;
    set(fromFileName: Path, toFileName: Path, moduleSpecifiers: boolean | readonly ModulePath[]): void;
    clear(): void;
    count(): number;
}
export interface SymbolTracker {
    trackSymbol?(symbol: Symbol, enclosingDeclaration: Node | undefined, meaning: SymbolFlags): void;
    reportInaccessibleThisError?(): void;
    reportPrivateInBaseOfClassExpression?(propertyName: string): void;
    reportInaccessibleUniqueSymbolError?(): void;
    reportCyclicStructureError?(): void;
    reportLikelyUnsafeImportRequiredError?(specifier: string): void;
    reportTruncationError?(): void;
    moduleResolverHost?: ModuleSpecifierResolutionHost & {
        getCommonSourceDirectory(): string;
    };
    trackReferencedAmbientModule?(decl: ModuleDeclaration, symbol: Symbol): void;
    trackExternalModuleSymbolOfImportTypeNode?(symbol: Symbol): void;
    reportNonlocalAugmentation?(containingFile: SourceFile, parentSymbol: Symbol, augmentingSymbol: Symbol): void;
}
export interface TextSpan {
    start: number;
    length: number;
}
export interface TextChangeRange {
    span: TextSpan;
    newLength: number;
}
export interface DiagnosticCollection {
    add(diagnostic: Diagnostic): void;
    lookup(diagnostic: Diagnostic): Diagnostic | undefined;
    getGlobalDiagnostics(): Diagnostic[];
    getDiagnostics(): Diagnostic[];
    getDiagnostics(fileName: string): DiagnosticWithLocation[];
}
export interface SyntaxList extends Node {
    kind: SyntaxKind.SyntaxList;
    _children: Node[];
}
export declare const enum ListFormat {
    None = 0,
    SingleLine = 0,
    MultiLine = 1,
    PreserveLines = 2,
    LinesMask = 3,
    NotDelimited = 0,
    BarDelimited = 4,
    AmpersandDelimited = 8,
    CommaDelimited = 16,
    AsteriskDelimited = 32,
    DelimitersMask = 60,
    AllowTrailingComma = 64,
    Indented = 128,
    SpaceBetweenBraces = 256,
    SpaceBetweenSiblings = 512,
    Braces = 1024,
    Parenthesis = 2048,
    AngleBrackets = 4096,
    SquareBrackets = 8192,
    BracketsMask = 15360,
    OptionalIfUndefined = 16384,
    OptionalIfEmpty = 32768,
    Optional = 49152,
    PreferNewLine = 65536,
    NoTrailingNewLine = 131072,
    NoInterveningComments = 262144,
    NoSpaceIfEmpty = 524288,
    SingleElement = 1048576,
    SpaceAfterList = 2097152,
    Modifiers = 262656,
    HeritageClauses = 512,
    SingleLineTypeLiteralMembers = 768,
    MultiLineTypeLiteralMembers = 32897,
    SingleLineTupleTypeElements = 528,
    MultiLineTupleTypeElements = 657,
    UnionTypeConstituents = 516,
    IntersectionTypeConstituents = 520,
    ObjectBindingPatternElements = 525136,
    ArrayBindingPatternElements = 524880,
    ObjectLiteralExpressionProperties = 526226,
    ArrayLiteralExpressionElements = 8914,
    CommaListElements = 528,
    CallExpressionArguments = 2576,
    NewExpressionArguments = 18960,
    TemplateExpressionSpans = 262144,
    SingleLineBlockStatements = 768,
    MultiLineBlockStatements = 129,
    VariableDeclarationList = 528,
    SingleLineFunctionBodyStatements = 768,
    MultiLineFunctionBodyStatements = 1,
    ClassHeritageClauses = 0,
    ClassMembers = 129,
    InterfaceMembers = 129,
    EnumMembers = 145,
    CaseBlockClauses = 129,
    NamedImportsOrExportsElements = 525136,
    JsxElementOrFragmentChildren = 262144,
    JsxElementAttributes = 262656,
    CaseOrDefaultClauseStatements = 163969,
    HeritageClauseTypes = 528,
    SourceFileStatements = 131073,
    Decorators = 2146305,
    TypeArguments = 53776,
    TypeParameters = 53776,
    Parameters = 2576,
    IndexSignatureParameters = 8848,
    JSDocComment = 33
}
export declare const enum PragmaKindFlags {
    None = 0,
    /**
     * Triple slash comment of the form
     * /// <pragma-name argname="value" />
     */
    TripleSlashXML = 1,
    /**
     * Single line comment of the form
     * // @pragma-name argval1 argval2
     * or
     * /// @pragma-name argval1 argval2
     */
    SingleLine = 2,
    /**
     * Multiline non-jsdoc pragma of the form
     * /* @pragma-name argval1 argval2 * /
     */
    MultiLine = 4,
    All = 7,
    Default = 7
}
interface PragmaArgumentSpecification<TName extends string> {
    name: TName;
    optional?: boolean;
    captureSpan?: boolean;
}
export interface PragmaDefinition<T1 extends string = string, T2 extends string = string, T3 extends string = string, T4 extends string = string> {
    args?: readonly [PragmaArgumentSpecification<T1>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>] | readonly [PragmaArgumentSpecification<T1>, PragmaArgumentSpecification<T2>, PragmaArgumentSpecification<T3>, PragmaArgumentSpecification<T4>];
    kind?: PragmaKindFlags;
}
export declare const commentPragmas: {
    readonly reference: {
        readonly args: readonly [{
            readonly name: "types";
            readonly optional: true;
            readonly captureSpan: true;
        }, {
            readonly name: "lib";
            readonly optional: true;
            readonly captureSpan: true;
        }, {
            readonly name: "path";
            readonly optional: true;
            readonly captureSpan: true;
        }, {
            readonly name: "no-default-lib";
            readonly optional: true;
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly "amd-dependency": {
        readonly args: readonly [{
            readonly name: "path";
        }, {
            readonly name: "name";
            readonly optional: true;
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly "amd-module": {
        readonly args: readonly [{
            readonly name: "name";
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly "ts-check": {
        readonly kind: PragmaKindFlags;
    };
    readonly "ts-nocheck": {
        readonly kind: PragmaKindFlags;
    };
    readonly jsx: {
        readonly args: readonly [{
            readonly name: "factory";
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly jsxfrag: {
        readonly args: readonly [{
            readonly name: "factory";
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly jsximportsource: {
        readonly args: readonly [{
            readonly name: "factory";
        }];
        readonly kind: PragmaKindFlags;
    };
    readonly jsxruntime: {
        readonly args: readonly [{
            readonly name: "factory";
        }];
        readonly kind: PragmaKindFlags;
    };
};
declare type PragmaArgTypeMaybeCapture<TDesc> = TDesc extends {
    captureSpan: true;
} ? {
    value: string;
    pos: number;
    end: number;
} : string;
declare type PragmaArgTypeOptional<TDesc, TName extends string> = TDesc extends {
    optional: true;
} ? {
    [K in TName]?: PragmaArgTypeMaybeCapture<TDesc>;
} : {
    [K in TName]: PragmaArgTypeMaybeCapture<TDesc>;
};
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
declare type ArgumentDefinitionToFieldUnion<T extends readonly PragmaArgumentSpecification<any>[]> = {
    [K in keyof T]: PragmaArgTypeOptional<T[K], T[K] extends {
        name: infer TName;
    } ? TName extends string ? TName : never : never>;
}[Extract<keyof T, number>];
/**
 * Maps a pragma definition into the desired shape for its arguments object
 */
declare type PragmaArgumentType<KPrag extends keyof ConcretePragmaSpecs> = ConcretePragmaSpecs[KPrag] extends {
    args: readonly PragmaArgumentSpecification<any>[];
} ? UnionToIntersection<ArgumentDefinitionToFieldUnion<ConcretePragmaSpecs[KPrag]["args"]>> : never;
declare type ConcretePragmaSpecs = typeof commentPragmas;
export declare type PragmaPseudoMap = {
    [K in keyof ConcretePragmaSpecs]: {
        arguments: PragmaArgumentType<K>;
        range: CommentRange;
    };
};
export declare type PragmaPseudoMapEntry = {
    [K in keyof PragmaPseudoMap]: {
        name: K;
        args: PragmaPseudoMap[K];
    };
}[keyof PragmaPseudoMap];
export interface ReadonlyPragmaMap extends ReadonlyESMap<string, PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]> {
    get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
    forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey) => void): void;
}
/**
 * A strongly-typed es6 map of pragma entries, the values of which are either a single argument
 * value (if only one was found), or an array of multiple argument values if the pragma is present
 * in multiple places
 */
export interface PragmaMap extends ESMap<string, PragmaPseudoMap[keyof PragmaPseudoMap] | PragmaPseudoMap[keyof PragmaPseudoMap][]>, ReadonlyPragmaMap {
    set<TKey extends keyof PragmaPseudoMap>(key: TKey, value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][]): this;
    get<TKey extends keyof PragmaPseudoMap>(key: TKey): PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][];
    forEach(action: <TKey extends keyof PragmaPseudoMap>(value: PragmaPseudoMap[TKey] | PragmaPseudoMap[TKey][], key: TKey) => void): void;
}
export interface CommentDirectivesMap {
    getUnusedExpectations(): CommentDirective[];
    markUsed(matchedLine: number): boolean;
}
export interface UserPreferences {
    readonly disableSuggestions?: boolean;
    readonly quotePreference?: "auto" | "double" | "single";
    readonly includeCompletionsForModuleExports?: boolean;
    readonly includeCompletionsForImportStatements?: boolean;
    readonly includeCompletionsWithSnippetText?: boolean;
    readonly includeAutomaticOptionalChainCompletions?: boolean;
    readonly includeCompletionsWithInsertText?: boolean;
    readonly importModuleSpecifierPreference?: "shortest" | "project-relative" | "relative" | "non-relative";
    /** Determines whether we import `foo/index.ts` as "foo", "foo/index", or "foo/index.js" */
    readonly importModuleSpecifierEnding?: "auto" | "minimal" | "index" | "js";
    readonly allowTextChangesInNewFiles?: boolean;
    readonly providePrefixAndSuffixTextForRename?: boolean;
    readonly includePackageJsonAutoImports?: "auto" | "on" | "off";
    readonly provideRefactorNotApplicableReason?: boolean;
}
/** Represents a bigint literal value without requiring bigint support */
export interface PseudoBigInt {
    negative: boolean;
    base10Value: string;
}
export declare const enum BuilderFileEmit {
    DtsOnly = 0,
    Full = 1
}
export declare const enum PrivateIdentifierKind {
    Field = "f",
    Method = "m",
    Accessor = "a"
}
export interface EmitHelperFactory {
    getUnscopedHelperName(name: string): Identifier;
    createDecorateHelper(decoratorExpressions: readonly Expression[], target: Expression, memberName?: Expression, descriptor?: Expression): Expression;
    createMetadataHelper(metadataKey: string, metadataValue: Expression): Expression;
    createParamHelper(expression: Expression, parameterOffset: number): Expression;
    createAssignHelper(attributesSegments: readonly Expression[]): Expression;
    createAwaitHelper(expression: Expression): Expression;
    createAsyncGeneratorHelper(generatorFunc: FunctionExpression, hasLexicalThis: boolean): Expression;
    createAsyncDelegatorHelper(expression: Expression): Expression;
    createAsyncValuesHelper(expression: Expression): Expression;
    createRestHelper(value: Expression, elements: readonly BindingOrAssignmentElement[], computedTempVariables: readonly Expression[] | undefined, location: TextRange): Expression;
    createAwaiterHelper(hasLexicalThis: boolean, hasLexicalArguments: boolean, promiseConstructor: EntityName | Expression | undefined, body: Block): Expression;
    createExtendsHelper(name: Identifier): Expression;
    createTemplateObjectHelper(cooked: ArrayLiteralExpression, raw: ArrayLiteralExpression): Expression;
    createSpreadArrayHelper(to: Expression, from: Expression): Expression;
    createValuesHelper(expression: Expression): Expression;
    createReadHelper(iteratorRecord: Expression, count: number | undefined): Expression;
    createGeneratorHelper(body: FunctionExpression): Expression;
    createCreateBindingHelper(module: Expression, inputName: Expression, outputName: Expression | undefined): Expression;
    createImportStarHelper(expression: Expression): Expression;
    createImportStarCallbackHelper(): Expression;
    createImportDefaultHelper(expression: Expression): Expression;
    createExportStarHelper(moduleExpression: Expression, exportsExpression?: Expression): Expression;
    createClassPrivateFieldGetHelper(receiver: Expression, state: Identifier, kind: PrivateIdentifierKind, f: Identifier | undefined): Expression;
    createClassPrivateFieldSetHelper(receiver: Expression, state: Identifier, value: Expression, kind: PrivateIdentifierKind, f: Identifier | undefined): Expression;
}
/**
</file /src/compiler/types.ts>
**/
export interface OptionsNameMap {
    optionsNameMap: ESMap<string, CommandLineOption>;
    shortOptionNames: ESMap<string, string>;
}
interface BuilderStateFileInfo {
    readonly version: string;
    signature: string | undefined;
    affectsGlobalScope: boolean | undefined;
}
export declare type ProgramBuildInfoDiagnostic = number | [fileId: number, diagnostics: readonly ReusableDiagnostic[]];
export declare type ProgramBuilderInfoFilePendingEmit = [fileId: number, emitKind: BuilderFileEmit];
export declare type ProgramBuildInfoReferencedMap = [fileId: number, fileIdListId: number][];
export declare type ProgramBuildInfoBuilderStateFileInfo = Omit<BuilderStateFileInfo, "signature"> & {
    /**
     * Signature is
     * - undefined if FileInfo.version === FileInfo.signature
     * - false if FileInfo has signature as undefined (not calculated)
     * - string actual signature
     */
    signature: string | false | undefined;
};
/**
 * ProgramBuildInfoFileInfo is string if FileInfo.version === FileInfo.signature && !FileInfo.affectsGlobalScope otherwise encoded FileInfo
 */
export declare type ProgramBuildInfoFileInfo = string | ProgramBuildInfoBuilderStateFileInfo;
export interface ProgramBuildInfo {
    fileNames: readonly string[];
    fileInfos: readonly ProgramBuildInfoFileInfo[];
    options: CompilerOptions | undefined;
    fileIdsList?: readonly (readonly number[])[];
    referencedMap?: ProgramBuildInfoReferencedMap;
    exportedModulesMap?: ProgramBuildInfoReferencedMap;
    semanticDiagnosticsPerFile?: ProgramBuildInfoDiagnostic[];
    affectedFilesPendingEmit?: ProgramBuilderInfoFilePendingEmit[];
}
export declare type StrictOptionName = "noImplicitAny" | "noImplicitThis" | "strictNullChecks" | "strictFunctionTypes" | "strictBindCallApply" | "strictPropertyInitialization" | "alwaysStrict";
export interface SymlinkedDirectory {
    real: string;
    realPath: Path;
}
export interface SymlinkCache {
    /** Gets a map from symlink to realpath. Keys have trailing directory separators. */
    getSymlinkedDirectories(): ReadonlyESMap<Path, SymlinkedDirectory | false> | undefined;
    /** Gets a map from realpath to symlinks. Keys have trailing directory separators. */
    getSymlinkedDirectoriesByRealpath(): MultiMap<Path, string> | undefined;
    /** Gets a map from symlink to realpath */
    getSymlinkedFiles(): ReadonlyESMap<Path, string> | undefined;
    setSymlinkedDirectory(symlink: string, real: SymlinkedDirectory | false): void;
    setSymlinkedFile(symlinkPath: Path, real: string): void;
    setSymlinkedDirectoryFromSymlinkedFile(symlink: string, real: string): void;
}
export interface ReusableDiagnostic extends ReusableDiagnosticRelatedInformation {
    /** May store more in future. For now, this will simply be `true` to indicate when a diagnostic is an unused-identifier diagnostic. */
    reportsUnnecessary?: {};
    reportDeprecated?: {};
    source?: string;
    relatedInformation?: ReusableDiagnosticRelatedInformation[];
    skippedOn?: keyof CompilerOptions;
}
export interface ReusableDiagnosticRelatedInformation {
    category: DiagnosticCategory;
    code: number;
    file: string | undefined;
    start: number | undefined;
    length: number | undefined;
    messageText: string | ReusableDiagnosticMessageChain;
}
export declare type ReusableDiagnosticMessageChain = DiagnosticMessageChain;
export {};
//# sourceMappingURL=types.d.ts.map