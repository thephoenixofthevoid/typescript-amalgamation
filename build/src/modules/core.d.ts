import { MapLike, SortedReadonlyArray, SortedArray, ReadonlyESMap, Iterator, ESMap, Comparer, Comparison, Push, EqualityComparer, Pattern, TextSpan, Set } from "./types";
export declare const emptyArray: never[];
export declare const emptyMap: ReadonlyESMap<never, never>;
export declare const emptyIterator: Iterator<never>;
/** Does nothing. */
export declare function noop(_?: {} | null | undefined): void;
/** Do nothing and return false */
export declare function returnFalse(): false;
/** Do nothing and return true */
export declare function returnTrue(): true;
/** Do nothing and return undefined */
export declare function returnUndefined(): undefined;
/** Returns its argument. */
export declare function identity<T>(x: T): T;
/** Returns lower case string */
export declare function toLowerCase(x: string): string;
export declare function equateValues<T>(a: T, b: T): boolean;
/**
 * Appends a range of value to an array, returning the array.
 *
 * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
 * is created if `value` was appended.
 * @param from The values to append to the array. If `from` is `undefined`, nothing is
 * appended. If an element of `from` is `undefined`, that element is not appended.
 * @param start The offset in `from` at which to start copying values.
 * @param end The offset in `from` at which to stop copying values (non-inclusive).
 */
export declare function addRange<T>(to: T[], from: readonly T[] | undefined, start?: number, end?: number): T[];
export declare function addRange<T>(to: T[] | undefined, from: readonly T[] | undefined, start?: number, end?: number): T[] | undefined;
/**
 * Returns the element at a specific offset in an array if non-empty, `undefined` otherwise.
 * A negative offset indicates the element should be retrieved from the end of the array.
 */
export declare function elementAt<T>(array: readonly T[] | undefined, offset: number): T | undefined;
/**
 * Creates a new array with `element` interspersed in between each element of `input`
 * if there is more than 1 value in `input`. Otherwise, returns the existing array.
 */
export declare function intersperse<T>(input: T[], element: T): T[];
export declare function zipWith<T, U, V>(arrayA: readonly T[], arrayB: readonly U[], callback: (a: T, b: U, index: number) => V): V[];
export declare function zipToIterator<T, U>(arrayA: readonly T[], arrayB: readonly U[]): Iterator<[T, U]>;
/**
 * Returns the first truthy result of `callback`, or else fails.
 * This is like `forEach`, but never returns undefined.
 */
export declare function findMap<T, U>(array: readonly T[], callback: (element: T, index: number) => U | undefined): U;
export declare function arrayIsSorted<T>(array: readonly T[], comparer: Comparer<T>): boolean;
export declare function mapAllOrFail<T, U>(array: readonly T[], mapFn: (x: T, i: number) => U | undefined): U[] | undefined;
export declare function arrayIterator<T>(array: readonly T[]): Iterator<T>;
export declare function arrayReverseIterator<T>(array: readonly T[]): Iterator<T>;
/**
 * Gets the value of an owned property in a map-like.
 *
 * @param map A map-like.
 * @param key A property key.
 */
export declare function getProperty<T>(map: MapLike<T>, key: string): T | undefined;
/**
 * Gets the owned, enumerable property keys of a map-like.
 */
export declare function getOwnKeys<T>(map: MapLike<T>): string[];
/**
 * @return Whether the value was added.
 */
export declare function pushIfUnique<T>(array: T[], toAdd: T, equalityComparer?: EqualityComparer<T>): boolean;
export declare function contains<T>(array: readonly T[] | undefined, value: T, equalityComparer?: EqualityComparer<T>): boolean;
export declare function getAllKeys(obj: object): string[];
export declare function some<T>(array: readonly T[] | undefined): array is readonly T[];
export declare function some<T>(array: readonly T[] | undefined, predicate: (value: T) => boolean): boolean;
export declare function concatenate<T>(array1: T[], array2: T[]): T[];
export declare function concatenate<T>(array1: readonly T[], array2: readonly T[]): readonly T[];
export declare function concatenate<T>(array1: T[] | undefined, array2: T[] | undefined): T[];
export declare function concatenate<T>(array1: readonly T[] | undefined, array2: readonly T[] | undefined): readonly T[];
/**
 * Appends a value to an array, returning the array.
 *
 * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
 * is created if `value` was appended.
 * @param value The value to append to the array. If `value` is `undefined`, nothing is
 * appended.
 */
export declare function append<TArray extends any[] | undefined, TValue extends NonNullable<TArray>[number] | undefined>(to: TArray, value: TValue): [undefined, undefined] extends [TArray, TValue] ? TArray : NonNullable<TArray>[number][];
export declare function append<T>(to: T[], value: T | undefined): T[];
export declare function append<T>(to: T[] | undefined, value: T): T[];
export declare function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
export declare function append<T>(to: Push<T>, value: T | undefined): void;
/**
 * Combines two arrays, values, or undefineds into the smallest container that can accommodate the resulting set:
 *
 * ```
 * undefined -> undefined -> undefined
 * T -> undefined -> T
 * T -> T -> T[]
 * T[] -> undefined -> T[] (no-op)
 * T[] -> T -> T[]         (append)
 * T[] -> T[] -> T[]       (concatenate)
 * ```
 */
export declare function combine<T>(xs: T | readonly T[] | undefined, ys: T | readonly T[] | undefined): T | readonly T[] | undefined;
export declare function combine<T>(xs: T | T[] | undefined, ys: T | T[] | undefined): T | T[] | undefined;
/**
 * Tests whether a value is an array.
 */
export declare function isArray(value: any): value is readonly {}[];
export declare function not<T extends unknown[]>(fn: (...args: T) => boolean): (...args: T) => boolean;
export declare function fill<T>(length: number, cb: (index: number) => T): T[];
export declare function takeWhile<T, U extends T>(array: readonly T[], predicate: (element: T) => element is U): U[];
/**
 * Given a name and a list of names that are *not* equal to the name, return a spelling suggestion if there is one that is close enough.
 * Names less than length 3 only check for case-insensitive equality.
 *
 * find the candidate with the smallest Levenshtein distance,
 *    except for candidates:
 *      * With no name
 *      * Whose length differs from the target name by more than 0.34 of the length of the name.
 *      * Whose levenshtein distance is more than 0.4 of the length of the name
 *        (0.4 allows 1 substitution/transposition for every 5 characters,
 *         and 1 insertion/deletion at 3 characters)
 */
export declare function getSpellingSuggestion<T>(name: string, candidates: T[], getName: (candidate: T) => string | undefined): T | undefined;
export declare function mapDefinedEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1>, f: (key: K1, value: V1) => readonly [K2, V2] | undefined): ESMap<K2, V2>;
export declare function mapDefinedEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2 | undefined, V2 | undefined] | undefined): ESMap<K2, V2> | undefined;
export declare function mapDefinedValues<V1, V2>(set: ReadonlySet<V1>, f: (value: V1) => V2 | undefined): Set<V2>;
export declare function mapDefinedValues<V1, V2>(set: ReadonlySet<V1> | undefined, f: (value: V1) => V2 | undefined): Set<V2> | undefined;
/**
 * Like `forEach`, but iterates in reverse order.
 */
export declare function forEachRight<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
export declare function singleIterator<T>(value: T): Iterator<T>;
export declare function mapEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1>, f: (key: K1, value: V1) => readonly [K2, V2]): ESMap<K2, V2>;
export declare function mapEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2, V2]): ESMap<K2, V2> | undefined;
export declare function arrayToNumericMap<T>(array: readonly T[], makeKey: (value: T) => number): T[];
export declare function arrayToNumericMap<T, U>(array: readonly T[], makeKey: (value: T) => number, makeValue: (value: T) => U): U[];
/**
 * Returns string left-padded with spaces or zeros until it reaches the given length.
 *
 * @param s String to pad.
 * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
 * @param padString Character to use as padding (default " ").
 */
export declare function padLeft(s: string, length: number, padString?: " " | "0"): string;
/**
 * Returns string right-padded with spaces until it reaches the given length.
 *
 * @param s String to pad.
 * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
 * @param padString Character to use as padding (default " ").
 */
export declare function padRight(s: string, length: number, padString?: " "): string;
/**
 * Create a new map from a template object is provided, the map will copy entries from it.
 * @deprecated Use `new Map(getEntries(template))` instead.
 */
export declare function createMapFromTemplate<T>(template: MapLike<T>): ESMap<string, T>;
export declare function cartesianProduct<T>(arrays: readonly T[][]): T[][];
export declare function reduceLeft<T, U>(array: readonly T[] | undefined, f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
export declare function reduceLeft<T>(array: readonly T[], f: (memo: T, value: T, i: number) => T): T | undefined;
/**
 * High-order function, composes functions. Note that functions are composed inside-out;
 * for example, `compose(a, b)` is the equivalent of `x => b(a(x))`.
 *
 * @param args The functions to compose.
 */
export declare function compose<T>(...args: ((t: T) => T)[]): (t: T) => T;
export declare function length(array: readonly any[] | undefined): number;
/**
 * Filters an array by a predicate function. Returns the same array instance if the predicate is
 * true for all elements, otherwise returns a new array instance containing the filtered subset.
 */
export declare function filter<T, U extends T>(array: T[], f: (x: T) => x is U): U[];
export declare function filter<T>(array: T[], f: (x: T) => boolean): T[];
export declare function filter<T, U extends T>(array: readonly T[], f: (x: T) => x is U): readonly U[];
export declare function filter<T, U extends T>(array: readonly T[], f: (x: T) => boolean): readonly T[];
export declare function filter<T, U extends T>(array: T[] | undefined, f: (x: T) => x is U): U[] | undefined;
export declare function filter<T>(array: T[] | undefined, f: (x: T) => boolean): T[] | undefined;
export declare function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => x is U): readonly U[] | undefined;
export declare function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => boolean): readonly T[] | undefined;
export declare function map<T, U>(array: readonly T[], f: (x: T, i: number) => U): U[];
export declare function map<T, U>(array: readonly T[] | undefined, f: (x: T, i: number) => U): U[] | undefined;
export declare function mapIterator<T, U>(iter: Iterator<T>, mapFn: (x: T) => U): Iterator<U>;
/**
 * Iterates through 'array' by index and performs the callback on each element of array until the callback
 * returns a truthy value, then returns that value.
 * If no such value is found, the callback is applied to each element of array and undefined is returned.
 */
export declare function forEach<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
/** Like `forEach`, but suitable for use with numbers and strings (which may be falsy). */
export declare function firstDefined<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
export declare function firstDefinedIterator<T, U>(iter: Iterator<T>, callback: (element: T) => U | undefined): U | undefined;
export declare function reduceLeftIterator<T, U>(iterator: Iterator<T> | undefined, f: (memo: U, value: T, i: number) => U, initial: U): U;
export declare function zipToMap<K, V>(keys: readonly K[], values: readonly V[]): ESMap<K, V>;
/**
 * Iterates through `array` by index and performs the callback on each element of array until the callback
 * returns a falsey value, then returns false.
 * If no such value is found, the callback is applied to each element of array and `true` is returned.
 */
export declare function every<T>(array: readonly T[] | undefined, callback: (element: T, index: number) => boolean): boolean;
/** Works like Array.prototype.find, returning `undefined` if no element satisfying the predicate is found. */
export declare function find<T, U extends T>(array: readonly T[], predicate: (element: T, index: number) => element is U): U | undefined;
export declare function find<T>(array: readonly T[], predicate: (element: T, index: number) => boolean): T | undefined;
export declare function findLast<T, U extends T>(array: readonly T[], predicate: (element: T, index: number) => element is U): U | undefined;
export declare function findLast<T>(array: readonly T[], predicate: (element: T, index: number) => boolean): T | undefined;
/** Works like Array.prototype.findIndex, returning `-1` if no element satisfying the predicate is found. */
export declare function findIndex<T>(array: readonly T[], predicate: (element: T, index: number) => boolean, startIndex?: number): number;
export declare function findLastIndex<T>(array: readonly T[], predicate: (element: T, index: number) => boolean, startIndex?: number): number;
export declare function arraysEqual<T>(a: readonly T[], b: readonly T[], equalityComparer?: EqualityComparer<T>): boolean;
export declare function indexOfAnyCharCode(text: string, charCodes: readonly number[], start?: number): number;
export declare function countWhere<T>(array: readonly T[] | undefined, predicate: (x: T, i: number) => boolean): number;
export declare function filterMutate<T>(array: T[], f: (x: T, i: number, array: T[]) => boolean): void;
export declare function clear(array: {}[]): void;
export declare function sameMap<T>(array: T[], f: (x: T, i: number) => T): T[];
export declare function sameMap<T>(array: readonly T[], f: (x: T, i: number) => T): readonly T[];
export declare function sameMap<T>(array: T[] | undefined, f: (x: T, i: number) => T): T[] | undefined;
export declare function sameMap<T>(array: readonly T[] | undefined, f: (x: T, i: number) => T): readonly T[] | undefined;
/**
 * Flattens an array containing a mix of array or non-array elements.
 *
 * @param array The array to flatten.
 */
export declare function flatten<T>(array: T[][] | readonly (T | readonly T[] | undefined)[]): T[];
/**
 * Maps an array. If the mapped value is an array, it is spread into the result.
 *
 * @param array The array to map.
 * @param mapfn The callback used to map the result into one or more values.
 */
export declare function flatMap<T, U>(array: readonly T[] | undefined, mapfn: (x: T, i: number) => U | readonly U[] | undefined): readonly U[];
export declare function flatMapToMutable<T, U>(array: readonly T[] | undefined, mapfn: (x: T, i: number) => U | readonly U[] | undefined): U[];
/**
 * Maps an array. If the mapped value is an array, it is spread into the result.
 * Avoids allocation if all elements map to themselves.
 *
 * @param array The array to map.
 * @param mapfn The callback used to map the result into one or more values.
 */
export declare function sameFlatMap<T>(array: T[], mapfn: (x: T, i: number) => T | readonly T[]): T[];
export declare function sameFlatMap<T>(array: readonly T[], mapfn: (x: T, i: number) => T | readonly T[]): readonly T[];
export declare function mapDefined<T, U>(array: readonly T[] | undefined, mapFn: (x: T, i: number) => U | undefined): U[];
export declare function mapDefinedIterator<T, U>(iter: Iterator<T>, mapFn: (x: T) => U | undefined): Iterator<U>;
export declare function getOrUpdate<K, V>(map: ESMap<K, V>, key: K, callback: () => V): V;
export declare function tryAddToSet<T>(set: Set<T>, value: T): boolean;
/**
 * Maps contiguous spans of values with the same key.
 *
 * @param array The array to map.
 * @param keyfn A callback used to select the key for an element.
 * @param mapfn A callback used to map a contiguous chunk of values to a single value.
 */
export declare function spanMap<T, K, U>(array: readonly T[], keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[];
export declare function spanMap<T, K, U>(array: readonly T[] | undefined, keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[] | undefined;
/** Calls the callback with (start, afterEnd) index pairs for each range where 'pred' is true. */
export declare function getRangesWhere<T>(arr: readonly T[], pred: (t: T) => boolean, cb: (start: number, afterEnd: number) => void): void;
export declare function indicesOf(array: readonly unknown[]): number[];
/**
 * Deduplicates an unsorted array.
 * @param equalityComparer An `EqualityComparer` used to determine if two values are duplicates.
 * @param comparer An optional `Comparer` used to sort entries before comparison, though the
 * result will remain in the original order in `array`.
 */
export declare function deduplicate<T>(array: readonly T[], equalityComparer: EqualityComparer<T>, comparer?: Comparer<T>): T[];
export declare function insertSorted<T>(array: SortedArray<T>, insert: T, compare: Comparer<T>): void;
export declare function sortAndDeduplicate<T>(array: readonly string[]): SortedReadonlyArray<string>;
export declare function sortAndDeduplicate<T>(array: readonly T[], comparer: Comparer<T>, equalityComparer?: EqualityComparer<T>): SortedReadonlyArray<T>;
export declare function arrayIsEqualTo<T>(array1: readonly T[] | undefined, array2: readonly T[] | undefined, equalityComparer?: (a: T, b: T, index: number) => boolean): boolean;
/**
 * Compacts an array, removing any falsey elements.
 */
export declare function compact<T>(array: (T | undefined | null | false | 0 | "")[]): T[];
export declare function compact<T>(array: readonly (T | undefined | null | false | 0 | "")[]): readonly T[];
export declare function compact<T>(array: T[]): T[];
export declare function compact<T>(array: readonly T[]): readonly T[];
/**
 * Gets the relative complement of `arrayA` with respect to `arrayB`, returning the elements that
 * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
 * based on the provided comparer.
 */
export declare function relativeComplement<T>(arrayA: T[] | undefined, arrayB: T[] | undefined, comparer: Comparer<T>): T[] | undefined;
export declare function sum<T extends Record<K, number>, K extends string>(array: readonly T[], prop: K): number;
/**
 * Unlike `pushIfUnique`, this can take `undefined` as an input, and returns a new array.
 */
export declare function appendIfUnique<T>(array: T[] | undefined, toAdd: T, equalityComparer?: EqualityComparer<T>): T[];
/**
 * Returns a new sorted array.
 */
export declare function sort<T>(array: readonly T[], comparer?: Comparer<T>): SortedReadonlyArray<T>;
/**
 * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
 */
export declare function stableSort<T>(array: readonly T[], comparer: Comparer<T>): SortedReadonlyArray<T>;
export declare function rangeEquals<T>(array1: readonly T[], array2: readonly T[], pos: number, end: number): boolean;
/**
 * Returns the first element of an array if non-empty, `undefined` otherwise.
 */
export declare function firstOrUndefined<T>(array: readonly T[]): T | undefined;
export declare function first<T>(array: readonly T[]): T;
/**
 * Returns the last element of an array if non-empty, `undefined` otherwise.
 */
export declare function lastOrUndefined<T>(array: readonly T[]): T | undefined;
export declare function last<T>(array: readonly T[]): T;
/**
 * Returns the only element of an array if it contains only one element, `undefined` otherwise.
 */
export declare function singleOrUndefined<T>(array: readonly T[] | undefined): T | undefined;
/**
 * Returns the only element of an array if it contains only one element; otherwise, returns the
 * array.
 */
export declare function singleOrMany<T>(array: T[]): T | T[];
export declare function singleOrMany<T>(array: readonly T[]): T | readonly T[];
export declare function singleOrMany<T>(array: T[] | undefined): T | T[] | undefined;
export declare function singleOrMany<T>(array: readonly T[] | undefined): T | readonly T[] | undefined;
export declare function replaceElement<T>(array: readonly T[], index: number, value: T): T[];
/**
 * Performs a binary search, finding the index at which `value` occurs in `array`.
 * If no such index is found, returns the 2's-complement of first index at which
 * `array[index]` exceeds `value`.
 * @param array A sorted array whose first element must be no larger than number
 * @param value The value to be searched for in the array.
 * @param keySelector A callback used to select the search key from `value` and each element of
 * `array`.
 * @param keyComparer A callback used to compare two keys in a sorted array.
 * @param offset An offset into `array` at which to start the search.
 */
export declare function binarySearch<T, U>(array: readonly T[], value: T, keySelector: (v: T) => U, keyComparer: Comparer<U>, offset?: number): number;
/**
 * Performs a binary search, finding the index at which an object with `key` occurs in `array`.
 * If no such index is found, returns the 2's-complement of first index at which
 * `array[index]` exceeds `key`.
 * @param array A sorted array whose first element must be no larger than number
 * @param key The key to be searched for in the array.
 * @param keySelector A callback used to select the search key from each element of `array`.
 * @param keyComparer A callback used to compare two keys in a sorted array.
 * @param offset An offset into `array` at which to start the search.
 */
export declare function binarySearchKey<T, U>(array: readonly T[], key: U, keySelector: (v: T, i: number) => U, keyComparer: Comparer<U>, offset?: number): number;
/**
 * Indicates whether a map-like contains an own property with the specified key.
 *
 * @param map A map-like.
 * @param key A property key.
 */
export declare function hasProperty(map: MapLike<any>, key: string): boolean;
export declare function getOwnValues<T>(sparseArray: T[]): T[];
export declare function getEntries<T>(obj: MapLike<T>): [string, T][];
export declare function arrayOf<T>(count: number, f: (index: number) => T): T[];
/** Shims `Array.from`. */
export declare function arrayFrom<T, U>(iterator: Iterator<T> | IterableIterator<T>, map: (t: T) => U): U[];
export declare function arrayFrom<T>(iterator: Iterator<T> | IterableIterator<T>): T[];
/**
 * Performs a shallow equality comparison of the contents of two map-likes.
 *
 * @param left A map-like whose properties should be compared.
 * @param right A map-like whose properties should be compared.
 */
export declare function equalOwnProperties<T>(left: MapLike<T> | undefined, right: MapLike<T> | undefined, equalityComparer?: EqualityComparer<T>): boolean;
/**
 * Creates a map from the elements of an array.
 *
 * @param array the array of input elements.
 * @param makeKey a function that produces a key for a given element.
 *
 * This function makes no effort to avoid collisions; if any two elements produce
 * the same key with the given 'makeKey' function, then the element with the higher
 * index in the array will be the one associated with the produced key.
 */
export declare function arrayToMap<K, V>(array: readonly V[], makeKey: (value: V) => K | undefined): ESMap<K, V>;
export declare function arrayToMap<K, V1, V2>(array: readonly V1[], makeKey: (value: V1) => K | undefined, makeValue: (value: V1) => V2): ESMap<K, V2>;
export declare function arrayToMap<T>(array: readonly T[], makeKey: (value: T) => string | undefined): ESMap<string, T>;
export declare function arrayToMap<T, U>(array: readonly T[], makeKey: (value: T) => string | undefined, makeValue: (value: T) => U): ESMap<string, U>;
export declare function clone<T>(object: T): T;
/**
 * Creates a new object by adding the own properties of `second`, then the own properties of `first`.
 *
 * NOTE: This means that if a property exists in both `first` and `second`, the property in `first` will be chosen.
 */
export declare function extend<T1, T2>(first: T1, second: T2): T1 & T2;
export declare function copyProperties<T1 extends T2, T2>(first: T1, second: T2): void;
export declare function maybeBind<T, A extends any[], R>(obj: T, fn: ((this: T, ...args: A) => R) | undefined): ((...args: A) => R) | undefined;
export declare function toArray<T>(value: T | T[]): T[];
export declare function toArray<T>(value: T | readonly T[]): readonly T[];
/**
 * Tests whether a value is string
 */
export declare function isString(text: unknown): text is string;
export declare function isNumber(x: unknown): x is number;
export declare function tryCast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut | undefined;
export declare function tryCast<T>(value: T, test: (value: T) => boolean): T | undefined;
export declare function cast<TOut extends TIn, TIn = any>(value: TIn | undefined, test: (value: TIn) => value is TOut): TOut;
/**
 * Case insensitive file systems have descripencies in how they handle some characters (eg. turkish Upper case I with dot on top - \u0130)
 * This function is used in places where we want to make file name as a key on these systems
 * It is possible on mac to be able to refer to file name with I with dot on top as a fileName with its lower case form
 * But on windows we cannot. Windows can have fileName with I with dot on top next to its lower case and they can not each be referred with the lowercase forms
 * Technically we would want this function to be platform sepcific as well but
 * our api has till now only taken caseSensitive as the only input and just for some characters we dont want to update API and ensure all customers use those api
 * We could use upper case and we would still need to deal with the descripencies but
 * we want to continue using lower case since in most cases filenames are lowercasewe and wont need any case changes and avoid having to store another string for the key
 * So for this function purpose, we go ahead and assume character I with dot on top it as case sensitive since its very unlikely to use lower case form of that special character
 */
export declare function toFileNameLowerCase(x: string): string;
/** Throws an error because a function is not implemented. */
export declare function notImplemented(): never;
export declare function memoize<T>(callback: () => T): () => T;
/** A version of `memoize` that supports a single primitive argument */
export declare function memoizeOne<A extends string | number | boolean | undefined, T>(callback: (arg: A) => T): (arg: A) => T;
export declare const enum AssertionLevel {
    None = 0,
    Normal = 1,
    Aggressive = 2,
    VeryAggressive = 3
}
/**
 * Safer version of `Function` which should not be called.
 * Every function should be assignable to this, but this should not be assignable to every function.
 */
export declare type AnyFunction = (...args: never[]) => void;
export declare type AnyConstructor = new (...args: unknown[]) => unknown;
/**
 * Compare the equality of two strings using a case-sensitive ordinal comparison.
 *
 * Case-sensitive comparisons compare both strings one code-point at a time using the integer
 * value of each code-point after applying `toUpperCase` to each string. We always map both
 * strings to their upper-case form as some unicode characters do not properly round-trip to
 * lowercase (such as `ẞ` (German sharp capital s)).
 */
export declare function equateStringsCaseInsensitive(a: string, b: string): boolean;
/**
 * Compare the equality of two strings using a case-sensitive ordinal comparison.
 *
 * Case-sensitive comparisons compare both strings one code-point at a time using the
 * integer value of each code-point.
 */
export declare function equateStringsCaseSensitive(a: string, b: string): boolean;
/**
 * Compare two numeric values for their order relative to each other.
 * To compare strings, use any of the `compareStrings` functions.
 */
export declare function compareValues(a: number | undefined, b: number | undefined): Comparison;
/**
 * Compare two TextSpans, first by `start`, then by `length`.
 */
export declare function compareTextSpans(a: Partial<TextSpan> | undefined, b: Partial<TextSpan> | undefined): Comparison;
export declare function min<T>(a: T, b: T, compare: Comparer<T>): T;
/**
 * Compare two strings using a case-insensitive ordinal comparison.
 *
 * Ordinal comparisons are based on the difference between the unicode code points of both
 * strings. Characters with multiple unicode representations are considered unequal. Ordinal
 * comparisons provide predictable ordering, but place "a" after "B".
 *
 * Case-insensitive comparisons compare both strings one code-point at a time using the integer
 * value of each code-point after applying `toUpperCase` to each string. We always map both
 * strings to their upper-case form as some unicode characters do not properly round-trip to
 * lowercase (such as `ẞ` (German sharp capital s)).
 */
export declare function compareStringsCaseInsensitive(a: string, b: string): Comparison;
/**
 * Compare two strings using a case-sensitive ordinal comparison.
 *
 * Ordinal comparisons are based on the difference between the unicode code points of both
 * strings. Characters with multiple unicode representations are considered unequal. Ordinal
 * comparisons provide predictable ordering, but place "a" after "B".
 *
 * Case-sensitive comparisons compare both strings one code-point at a time using the integer
 * value of each code-point.
 */
export declare function compareStringsCaseSensitive(a: string | undefined, b: string | undefined): Comparison;
export declare function getStringComparer(ignoreCase?: boolean): typeof compareStringsCaseSensitive;
export declare function getUILocale(): string | undefined;
export declare function setUILocale(value: string | undefined): void;
/**
 * Compare two strings in a using the case-sensitive sort behavior of the UI locale.
 *
 * Ordering is not predictable between different host locales, but is best for displaying
 * ordered data for UI presentation. Characters with multiple unicode representations may
 * be considered equal.
 *
 * Case-sensitive comparisons compare strings that differ in base characters, or
 * accents/diacritic marks, or case as unequal.
 */
export declare function compareStringsCaseSensitiveUI(a: string, b: string): Comparison;
export declare function compareProperties<T, K extends keyof T>(a: T | undefined, b: T | undefined, key: K, comparer: Comparer<T[K]>): Comparison;
/** True is greater than false. */
export declare function compareBooleans(a: boolean, b: boolean): Comparison;
export declare function endsWith(str: string, suffix: string): boolean;
export declare function removeSuffix(str: string, suffix: string): string;
export declare function tryRemoveSuffix(str: string, suffix: string): string | undefined;
export declare function stringContains(str: string, substring: string): boolean;
/**
 * Takes a string like "jquery-min.4.2.3" and returns "jquery"
 */
export declare function removeMinAndVersionNumbers(fileName: string): string;
/** Remove an item from an array, moving everything to its right one space left. */
export declare function orderedRemoveItem<T>(array: T[], item: T): boolean;
/** Remove an item by index from an array, moving everything to its right one space left. */
export declare function orderedRemoveItemAt<T>(array: T[], index: number): void;
export declare function unorderedRemoveItemAt<T>(array: T[], index: number): void;
/** Remove the *first* occurrence of `item` from the array. */
export declare function unorderedRemoveItem<T>(array: T[], item: T): boolean;
export declare type GetCanonicalFileName = (fileName: string) => string;
export declare function createGetCanonicalFileName(useCaseSensitiveFileNames: boolean): GetCanonicalFileName;
export declare function patternText({ prefix, suffix }: Pattern): string;
/**
 * Given that candidate matches pattern, returns the text matching the '*'.
 * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
 */
export declare function matchedText(pattern: Pattern, candidate: string): string;
/** Return the object corresponding to the best pattern to match `candidate`. */
export declare function findBestPatternMatch<T>(values: readonly T[], getPattern: (value: T) => Pattern, candidate: string): T | undefined;
export declare function startsWith(str: string, prefix: string): boolean;
export declare function removePrefix(str: string, prefix: string): string;
export declare function tryRemovePrefix(str: string, prefix: string, getCanonicalFileName?: GetCanonicalFileName): string | undefined;
export declare function and<T>(f: (arg: T) => boolean, g: (arg: T) => boolean): (arg: T) => boolean;
export declare function or<T extends unknown[]>(...fs: ((...args: T) => boolean)[]): (...args: T) => boolean;
export declare function assertType<T>(_: T): void;
export declare function singleElementArray<T>(t: T | undefined): T[] | undefined;
export declare function enumerateInsertsAndDeletes<T, U>(newItems: readonly T[], oldItems: readonly U[], comparer: (a: T, b: U) => Comparison, inserted: (newItem: T) => void, deleted: (oldItem: U) => void, unchanged?: (oldItem: U, newItem: T) => void): boolean;
//# sourceMappingURL=core.d.ts.map