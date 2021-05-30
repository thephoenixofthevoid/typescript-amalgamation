import { MapLike, ReadonlyESMap, Iterator, ESMap, Comparer, Comparison, Push, EqualityComparer } from "./types";



/** Does nothing. */
export function noop(_?: {} | null | undefined): void { }

/** Do nothing and return false */
export function returnFalse(): false { return false; }

/** Do nothing and return true */
export function returnTrue(): true { return true; }

/** Do nothing and return undefined */
export function returnUndefined(): undefined { return undefined; }

/** Returns its argument. */
export function identity<T>(x: T) { return x; }

/** Returns lower case string */
export function toLowerCase(x: string) { return x.toLowerCase(); }

export function equateValues<T>(a: T, b: T) {
    return a === b;
}

/**
 * Gets the actual offset into an array for a relative offset. Negative offsets indicate a
 * position offset from the end of the array.
 */
function toOffset(array: readonly any[], offset: number) {
    return offset < 0 ? array.length + offset : offset;
}

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
export function addRange<T>(to: T[], from: readonly T[] | undefined, start?: number, end?: number): T[];
export function addRange<T>(to: T[] | undefined, from: readonly T[] | undefined, start?: number, end?: number): T[] | undefined;
export function addRange<T>(to: T[] | undefined, from: readonly T[] | undefined, start?: number, end?: number): T[] | undefined {
    if (from === undefined || from.length === 0) return to;
    if (to === undefined) return from.slice(start, end);
    start = start === undefined ? 0 : toOffset(from, start);
    end = end === undefined ? from.length : toOffset(from, end);
    for (let i = start; i < end && i < from.length; i++) {
        if (from[i] !== undefined) {
            to.push(from[i]);
        }
    }
    return to;
}

/**
 * Returns the element at a specific offset in an array if non-empty, `undefined` otherwise.
 * A negative offset indicates the element should be retrieved from the end of the array.
 */
export function elementAt<T>(array: readonly T[] | undefined, offset: number): T | undefined {
    if (array) {
        offset = toOffset(array, offset);
        if (offset < array.length) {
            return array[offset];
        }
    }
    return undefined;
}

/**
 * Creates a new array with `element` interspersed in between each element of `input`
 * if there is more than 1 value in `input`. Otherwise, returns the existing array.
 */
export function intersperse<T>(input: T[], element: T): T[] {
    if (input.length <= 1) {
        return input;
    }
    const result: T[] = [];
    for (let i = 0, n = input.length; i < n; i++) {
        if (i) result.push(element);
        result.push(input[i]);
    }
    return result;
}

export function zipWith<T, U, V>(arrayA: readonly T[], arrayB: readonly U[], callback: (a: T, b: U, index: number) => V): V[] {
    const result: V[] = [];
    //Debug.assertEqual(arrayA.length, arrayB.length);
    for (let i = 0; i < arrayA.length; i++) {
        result.push(callback(arrayA[i], arrayB[i], i));
    }
    return result;
}

export function zipToIterator<T, U>(arrayA: readonly T[], arrayB: readonly U[]): Iterator<[T, U]> {
    //Debug.assertEqual(arrayA.length, arrayB.length);
    let i = 0;
    return {
        next() {
            if (i === arrayA.length) {
                return { value: undefined as never, done: true };
            }
            i++;
            return { value: [arrayA[i - 1], arrayB[i - 1]] as [T, U], done: false };
        }
    };
}

/**
 * Returns the first truthy result of `callback`, or else fails.
 * This is like `forEach`, but never returns undefined.
 */
export function findMap<T, U>(array: readonly T[], callback: (element: T, index: number) => U | undefined): U {
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        if (result) {
            return result;
        }
    }
    throw new Error("Failed")
    //return Debug.fail();
}

// export function flatMapIterator<T, U>(iter: Iterator<T>, mapfn: (x: T) => readonly U[] | Iterator<U> | undefined): Iterator<U> {
//     const first = iter.next();
//     if (first.done) {
//         return emptyIterator;
//     }
//     let currentIter = getIterator(first.value);
//     return {
//         next() {
//             while (true) {
//                 const currentRes = currentIter.next();
//                 if (!currentRes.done) {
//                     return currentRes;
//                 }
//                 const iterRes = iter.next();
//                 if (iterRes.done) {
//                     return iterRes as { done: true, value: never };
//                 }
//                 currentIter = getIterator(iterRes.value);
//             }
//         },
//     };

//     function getIterator(x: T): Iterator<U> {
//         const res = mapfn(x);
//         return res === undefined ? emptyIterator : isArray(res) ? arrayIterator(res) : res;
//     }
// }


export function arrayIsSorted<T>(array: readonly T[], comparer: Comparer<T>) {
    if (array.length < 2) return true;
    let prevElement = array[0];
    for (const element of array.slice(1)) {
        if (comparer(prevElement, element) === Comparison.GreaterThan) {
            return false;
        }
        prevElement = element;
    }
    return true;
}

export function mapAllOrFail<T, U>(array: readonly T[], mapFn: (x: T, i: number) => U | undefined): U[] | undefined {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        const mapped = mapFn(array[i], i);
        if (mapped === undefined) {
            return undefined;
        }
        result.push(mapped);
    }
    return result;
}

export function arrayIterator<T>(array: readonly T[]): Iterator<T> {
    let i = 0;
    return {
        next: () => {
            if (i === array.length) {
                return { value: undefined as never, done: true };
            }
            else {
                i++;
                return { value: array[i - 1], done: false };
            }
        }
    };
}

export function arrayReverseIterator<T>(array: readonly T[]): Iterator<T> {
    let i = array.length;
    return {
        next: () => {
            if (i === 0) {
                return { value: undefined as never, done: true };
            }
            else {
                i--;
                return { value: array[i], done: false };
            }
        }
    };
}

/**
 * Gets the value of an owned property in a map-like.
 *
 * @param map A map-like.
 * @param key A property key.
 */
export function getProperty<T>(map: MapLike<T>, key: string): T | undefined {
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined;
}

/**
 * Gets the owned, enumerable property keys of a map-like.
 */
export function getOwnKeys<T>(map: MapLike<T>): string[] {
    const keys: string[] = [];
    for (const key in map) {
        if (Object.prototype.hasOwnProperty.call(map, key)) {
            keys.push(key);
        }
    }

    return keys;
}



/**
 * @return Whether the value was added.
 */
export function pushIfUnique<T>(array: T[], toAdd: T, equalityComparer?: EqualityComparer<T>): boolean {
    if (contains(array, toAdd, equalityComparer)) {
        return false;
    }
    else {
        array.push(toAdd);
        return true;
    }
}



export function contains<T>(array: readonly T[] | undefined, value: T, equalityComparer: EqualityComparer<T> = equateValues): boolean {
    if (array) {
        for (const v of array) {
            if (equalityComparer(v, value)) {
                return true;
            }
        }
    }
    return false;
}

export function getAllKeys(obj: object): string[] {
    const result: string[] = [];
    do {
        const names = Object.getOwnPropertyNames(obj);
        for (const name of names) {
            pushIfUnique(result, name);
        }
    } while (obj = Object.getPrototypeOf(obj));
    return result;
}




export function some<T>(array: readonly T[] | undefined): array is readonly T[];
export function some<T>(array: readonly T[] | undefined, predicate: (value: T) => boolean): boolean;
export function some<T>(array: readonly T[] | undefined, predicate?: (value: T) => boolean): boolean {
    if (array) {
        if (predicate) {
            for (const v of array) {
                if (predicate(v)) {
                    return true;
                }
            }
        }
        else {
            return array.length > 0;
        }
    }
    return false;
}
export function concatenate<T>(array1: T[], array2: T[]): T[];
export function concatenate<T>(array1: readonly T[], array2: readonly T[]): readonly T[];
export function concatenate<T>(array1: T[] | undefined, array2: T[] | undefined): T[];
export function concatenate<T>(array1: readonly T[] | undefined, array2: readonly T[] | undefined): readonly T[];
export function concatenate<T>(array1: T[], array2: T[]): T[] {
    if (!some(array2)) return array1;
    if (!some(array1)) return array2;
    return [...array1, ...array2];
}

/**
 * Appends a value to an array, returning the array.
 *
 * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
 * is created if `value` was appended.
 * @param value The value to append to the array. If `value` is `undefined`, nothing is
 * appended.
 */
export function append<TArray extends any[] | undefined, TValue extends NonNullable<TArray>[number] | undefined>(to: TArray, value: TValue): [undefined, undefined] extends [TArray, TValue] ? TArray : NonNullable<TArray>[number][];
export function append<T>(to: T[], value: T | undefined): T[];
export function append<T>(to: T[] | undefined, value: T): T[];
export function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
export function append<T>(to: Push<T>, value: T | undefined): void;
export function append<T>(to: T[], value: T | undefined): T[] | undefined {
    if (value === undefined) return to;
    if (to === undefined) return [value];
    to.push(value);
    return to;
}

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
export function combine<T>(xs: T | readonly T[] | undefined, ys: T | readonly T[] | undefined): T | readonly T[] | undefined;
export function combine<T>(xs: T | T[] | undefined, ys: T | T[] | undefined): T | T[] | undefined;
export function combine<T>(xs: T | T[] | undefined, ys: T | T[] | undefined) {
    if (xs === undefined) return ys;
    if (ys === undefined) return xs;
    if (isArray(xs)) return isArray(ys) ? concatenate(xs, ys) : append(xs, ys);
    if (isArray(ys)) return append(ys, xs);
    return [xs, ys];
}

/**
 * Tests whether a value is an array.
 */
export function isArray(value: any): value is readonly {}[] {
    return Array.isArray ? Array.isArray(value) : value instanceof Array;
}



export function not<T extends unknown[]>(fn: (...args: T) => boolean): (...args: T) => boolean {
    return (...args) => !fn(...args);
}

export function fill<T>(length: number, cb: (index: number) => T): T[] {
    const result = Array<T>(length);
    for (let i = 0; i < length; i++) {
        result[i] = cb(i);
    }
    return result;
}
export function takeWhile<T, U extends T>(array: readonly T[], predicate: (element: T) => element is U): U[];
export function takeWhile<T>(array: readonly T[], predicate: (element: T) => boolean): T[] {
    const len = array.length;
    let index = 0;
    while (index < len && predicate(array[index])) {
        index++;
    }
    return array.slice(0, index);
}


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
export function getSpellingSuggestion<T>(name: string, candidates: T[], getName: (candidate: T) => string | undefined): T | undefined {
    const maximumLengthDifference = Math.min(2, Math.floor(name.length * 0.34));
    let bestDistance = Math.floor(name.length * 0.4) + 1; // If the best result is worse than this, don't bother.
    let bestCandidate: T | undefined;
    for (const candidate of candidates) {
        const candidateName = getName(candidate);
        if (candidateName !== undefined && Math.abs(candidateName.length - name.length) <= maximumLengthDifference) {
            if (candidateName === name) {
                continue;
            }
            // Only consider candidates less than 3 characters long when they differ by case.
            // Otherwise, don't bother, since a user would usually notice differences of a 2-character name.
            if (candidateName.length < 3 && candidateName.toLowerCase() !== name.toLowerCase()) {
                continue;
            }

            const distance = levenshteinWithMax(name, candidateName, bestDistance - 0.1);
            if (distance === undefined) {
                continue;
            }

            // Debug.assert(distance < bestDistance); // Else `levenshteinWithMax` should return undefined
            bestDistance = distance;
            bestCandidate = candidate;
        }
    }
    return bestCandidate;
}

function levenshteinWithMax(s1: string, s2: string, max: number): number | undefined {
    let previous = new Array(s2.length + 1);
    let current = new Array(s2.length + 1);
    /** Represents any value > max. We don't care about the particular value. */
    const big = max + 0.01;

    for (let i = 0; i <= s2.length; i++) {
        previous[i] = i;
    }

    for (let i = 1; i <= s1.length; i++) {
        const c1 = s1.charCodeAt(i - 1);
        const minJ = Math.ceil(i > max ? i - max : 1);
        const maxJ = Math.floor(s2.length > max + i ? max + i : s2.length);
        current[0] = i;
        /** Smallest value of the matrix in the ith column. */
        let colMin = i;
        for (let j = 1; j < minJ; j++) {
            current[j] = big;
        }
        for (let j = minJ; j <= maxJ; j++) {
            // case difference should be significantly cheaper than other differences
            const substitutionDistance = s1[i - 1].toLowerCase() === s2[j - 1].toLowerCase()
                ? (previous[j - 1] + 0.1)
                : (previous[j - 1] + 2);
            const dist = c1 === s2.charCodeAt(j - 1)
                ? previous[j - 1]
                : Math.min(/*delete*/ previous[j] + 1, /*insert*/ current[j - 1] + 1, /*substitute*/ substitutionDistance);
            current[j] = dist;
            colMin = Math.min(colMin, dist);
        }
        for (let j = maxJ + 1; j <= s2.length; j++) {
            current[j] = big;
        }
        if (colMin > max) {
            // Give up -- everything in this column is > max and it can't get better in future columns.
            return undefined;
        }

        const temp = previous;
        previous = current;
        current = temp;
    }

    const res = previous[s2.length];
    return res > max ? undefined : res;
}



export function mapDefinedEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1>, f: (key: K1, value: V1) => readonly [K2, V2] | undefined): ESMap<K2, V2>;
export function mapDefinedEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2 | undefined, V2 | undefined] | undefined): ESMap<K2, V2> | undefined;
export function mapDefinedEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2 | undefined, V2 | undefined] | undefined): ESMap<K2, V2> | undefined {
    if (!map) {
        return undefined;
    }

    const result = new Map<K2, V2>();
    map.forEach((value, key) => {
        const entry = f(key, value);
        if (entry !== undefined) {
            const [newKey, newValue] = entry;
            if (newKey !== undefined && newValue !== undefined) {
                result.set(newKey, newValue);
            }
        }
    });

    return result;
}

export function mapDefinedValues<V1, V2>(set: ReadonlySet<V1>, f: (value: V1) => V2 | undefined): Set<V2>;
export function mapDefinedValues<V1, V2>(set: ReadonlySet<V1> | undefined, f: (value: V1) => V2 | undefined): Set<V2> | undefined;
export function mapDefinedValues<V1, V2>(set: ReadonlySet<V1> | undefined, f: (value: V1) => V2 | undefined): Set<V2> | undefined {
    if (set) {
        const result = new Set<V2>();
        set.forEach(value => {
            const newValue = f(value);
            if (newValue !== undefined) {
                result.add(newValue);
            }
        });
        return result;
    }
}



/**
 * Like `forEach`, but iterates in reverse order.
 */
export function forEachRight<T, U>(array: readonly T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined {
    if (array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const result = callback(array[i], i);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}

export function singleIterator<T>(value: T): Iterator<T> {
    let done = false;
    return {
        next() {
            const wasDone = done;
            done = true;
            return wasDone ? { value: undefined as never, done: true } : { value, done: false };
        }
    };
}



export function mapEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1>, f: (key: K1, value: V1) => readonly [K2, V2]): ESMap<K2, V2>;
export function mapEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2, V2]): ESMap<K2, V2> | undefined;
export function mapEntries<K1, V1, K2, V2>(map: ReadonlyESMap<K1, V1> | undefined, f: (key: K1, value: V1) => readonly [K2, V2]): ESMap<K2, V2> | undefined {
    if (!map) {
        return undefined;
    }

    const result = new Map<K2, V2>();
    map.forEach((value, key) => {
        const [newKey, newValue] = f(key, value);
        result.set(newKey, newValue);
    });
    return result;
}



export function arrayToNumericMap<T>(array: readonly T[], makeKey: (value: T) => number): T[];
export function arrayToNumericMap<T, U>(array: readonly T[], makeKey: (value: T) => number, makeValue: (value: T) => U): U[];
export function arrayToNumericMap<T, U>(array: readonly T[], makeKey: (value: T) => number, makeValue: (value: T) => T | U = identity): (T | U)[] {
    const result: (T | U)[] = [];
    for (const value of array) {
        result[makeKey(value)] = makeValue(value);
    }
    return result;
}

// const _entries = Object.entries || (<T>(obj: MapLike<T>) => {
//     const keys = getOwnKeys(obj);
//     const result: [string, T][] = Array(keys.length);
//     for (let i = 0; i < keys.length; i++) {
//         result[i] = [keys[i], obj[keys[i]]];
//     }
//     return result;
// });



// export function assign<T extends object>(t: T, ...args: (T | undefined)[]) {
//     for (const arg of args) {
//         if (arg === undefined) continue;
//         for (const p in arg) {
//             if (hasProperty(arg, p)) {
//                 t[p] = arg[p];
//             }
//         }
//     }
//     return t;
// }





/**
 * Returns string left-padded with spaces or zeros until it reaches the given length.
 *
 * @param s String to pad.
 * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
 * @param padString Character to use as padding (default " ").
 */
export function padLeft(s: string, length: number, padString: " " | "0" = " ") {
    return length <= s.length ? s : padString.repeat(length - s.length) + s;
}

/**
 * Returns string right-padded with spaces until it reaches the given length.
 *
 * @param s String to pad.
 * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
 * @param padString Character to use as padding (default " ").
 */
export function padRight(s: string, length: number, padString: " " = " ") {
    return length <= s.length ? s : s + padString.repeat(length - s.length);
}


/**
 * Create a new map from a template object is provided, the map will copy entries from it.
 * @deprecated Use `new Map(getEntries(template))` instead.
 */
export function createMapFromTemplate<T>(template: MapLike<T>): ESMap<string, T> {
    const map: ESMap<string, T> = new Map<string, T>();

    // Copies keys/values from template. Note that for..in will not throw if
    // template is undefined, and instead will just exit the loop.
    for (const key in template) {
        if (Object.prototype.hasOwnProperty.call(template, key)) {
            map.set(key, template[key]);
        }
    }

    return map;
}


export function cartesianProduct<T>(arrays: readonly T[][]) {
    const result: T[][] = [];
    cartesianProductWorker(arrays, result, /*outer*/ undefined, 0);
    return result;
}

function cartesianProductWorker<T>(arrays: readonly (readonly T[])[], result: (readonly T[])[], outer: readonly T[] | undefined, index: number) {
    for (const element of arrays[index]) {
        let inner: T[];
        if (outer) {
            inner = outer.slice();
            inner.push(element);
        }
        else {
            inner = [element];
        }
        if (index === arrays.length - 1) {
            result.push(inner);
        }
        else {
            cartesianProductWorker(arrays, result, inner, index + 1);
        }
    }
}


export function reduceLeft<T, U>(array: readonly T[] | undefined, f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
export function reduceLeft<T>(array: readonly T[], f: (memo: T, value: T, i: number) => T): T | undefined;
export function reduceLeft<T>(array: T[], f: (memo: T, value: T, i: number) => T, initial?: T, start?: number, count?: number): T | undefined {
    if (array && array.length > 0) {
        const size = array.length;
        if (size > 0) {
            let pos = start === undefined || start < 0 ? 0 : start;
            const end = count === undefined || pos + count > size - 1 ? size - 1 : pos + count;
            let result: T;
            if (arguments.length <= 2) {
                result = array[pos];
                pos++;
            }
            else {
                result = initial!;
            }
            while (pos <= end) {
                result = f(result, array[pos], pos);
                pos++;
            }
            return result;
        }
    }
    return initial;
}

/**
 * High-order function, composes functions. Note that functions are composed inside-out;
 * for example, `compose(a, b)` is the equivalent of `x => b(a(x))`.
 *
 * @param args The functions to compose.
 */
export function compose<T>(...args: ((t: T) => T)[]): (t: T) => T;
export function compose<T>(a: (t: T) => T, b: (t: T) => T, c: (t: T) => T, d: (t: T) => T, e: (t: T) => T): (t: T) => T {
    if (!!e) {
        const args: ((t: T) => T)[] = [];
        for (let i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }

        return t => reduceLeft(args, (u, f) => f(u), t);
    }
    else if (d) {
        return t => d(c(b(a(t))));
    }
    else if (c) {
        return t => c(b(a(t)));
    }
    else if (b) {
        return t => b(a(t));
    }
    else if (a) {
        return t => a(t);
    }
    else {
        return t => t;
    }
}

export function length(array: readonly any[] | undefined): number {
    return array ? array.length : 0;
}

/**
 * Filters an array by a predicate function. Returns the same array instance if the predicate is
 * true for all elements, otherwise returns a new array instance containing the filtered subset.
 */
export function filter<T, U extends T>(array: T[], f: (x: T) => x is U): U[];
export function filter<T>(array: T[], f: (x: T) => boolean): T[];
export function filter<T, U extends T>(array: readonly T[], f: (x: T) => x is U): readonly U[];
export function filter<T, U extends T>(array: readonly T[], f: (x: T) => boolean): readonly T[];
export function filter<T, U extends T>(array: T[] | undefined, f: (x: T) => x is U): U[] | undefined;
export function filter<T>(array: T[] | undefined, f: (x: T) => boolean): T[] | undefined;
export function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => x is U): readonly U[] | undefined;
export function filter<T, U extends T>(array: readonly T[] | undefined, f: (x: T) => boolean): readonly T[] | undefined;
export function filter<T>(array: readonly T[] | undefined, f: (x: T) => boolean): readonly T[] | undefined {
    if (array) {
        const len = array.length;
        let i = 0;
        while (i < len && f(array[i])) i++;
        if (i < len) {
            const result = array.slice(0, i);
            i++;
            while (i < len) {
                const item = array[i];
                if (f(item)) {
                    result.push(item);
                }
                i++;
            }
            return result;
        }
    }
    return array;
}


export function map<T, U>(array: readonly T[], f: (x: T, i: number) => U): U[];
export function map<T, U>(array: readonly T[] | undefined, f: (x: T, i: number) => U): U[] | undefined;
export function map<T, U>(array: readonly T[] | undefined, f: (x: T, i: number) => U): U[] | undefined {
    let result: U[] | undefined;
    if (array) {
        result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(f(array[i], i));
        }
    }
    return result;
}



export function mapIterator<T, U>(iter: Iterator<T>, mapFn: (x: T) => U): Iterator<U> {
    return {
        next() {
            const iterRes = iter.next();
            return iterRes.done ? iterRes as { done: true, value: never } : { value: mapFn(iterRes.value), done: false };
        }
    };
}