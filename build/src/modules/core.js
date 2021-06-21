import * as Debug from "./debug";
export const emptyArray = [];
export const emptyMap = new Map();
export const emptyIterator = { next: () => ({ value: undefined, done: true }) };
/** Does nothing. */
export function noop(_) { }
/** Do nothing and return false */
export function returnFalse() { return false; }
/** Do nothing and return true */
export function returnTrue() { return true; }
/** Do nothing and return undefined */
export function returnUndefined() { return undefined; }
/** Returns its argument. */
export function identity(x) { return x; }
/** Returns lower case string */
export function toLowerCase(x) { return x.toLowerCase(); }
export function equateValues(a, b) {
    return a === b;
}
/**
 * Gets the actual offset into an array for a relative offset. Negative offsets indicate a
 * position offset from the end of the array.
 */
function toOffset(array, offset) {
    return offset < 0 ? array.length + offset : offset;
}
export function addRange(to, from, start, end) {
    if (from === undefined || from.length === 0)
        return to;
    if (to === undefined)
        return from.slice(start, end);
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
export function elementAt(array, offset) {
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
export function intersperse(input, element) {
    if (input.length <= 1) {
        return input;
    }
    const result = [];
    for (let i = 0, n = input.length; i < n; i++) {
        if (i)
            result.push(element);
        result.push(input[i]);
    }
    return result;
}
export function zipWith(arrayA, arrayB, callback) {
    const result = [];
    Debug.assertEqual(arrayA.length, arrayB.length);
    for (let i = 0; i < arrayA.length; i++) {
        result.push(callback(arrayA[i], arrayB[i], i));
    }
    return result;
}
export function zipToIterator(arrayA, arrayB) {
    Debug.assertEqual(arrayA.length, arrayB.length);
    let i = 0;
    return {
        next() {
            if (i === arrayA.length) {
                return { value: undefined, done: true };
            }
            i++;
            return { value: [arrayA[i - 1], arrayB[i - 1]], done: false };
        }
    };
}
/**
 * Returns the first truthy result of `callback`, or else fails.
 * This is like `forEach`, but never returns undefined.
 */
export function findMap(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        if (result) {
            return result;
        }
    }
    throw new Error("Failed");
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
export function arrayIsSorted(array, comparer) {
    if (array.length < 2)
        return true;
    let prevElement = array[0];
    for (const element of array.slice(1)) {
        if (comparer(prevElement, element) === 1 /* GreaterThan */) {
            return false;
        }
        prevElement = element;
    }
    return true;
}
export function mapAllOrFail(array, mapFn) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mapped = mapFn(array[i], i);
        if (mapped === undefined) {
            return undefined;
        }
        result.push(mapped);
    }
    return result;
}
export function arrayIterator(array) {
    let i = 0;
    return {
        next: () => {
            if (i === array.length) {
                return { value: undefined, done: true };
            }
            else {
                i++;
                return { value: array[i - 1], done: false };
            }
        }
    };
}
export function arrayReverseIterator(array) {
    let i = array.length;
    return {
        next: () => {
            if (i === 0) {
                return { value: undefined, done: true };
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
export function getProperty(map, key) {
    return Object.prototype.hasOwnProperty.call(map, key) ? map[key] : undefined;
}
/**
 * Gets the owned, enumerable property keys of a map-like.
 */
export function getOwnKeys(map) {
    const keys = [];
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
export function pushIfUnique(array, toAdd, equalityComparer) {
    if (contains(array, toAdd, equalityComparer)) {
        return false;
    }
    else {
        array.push(toAdd);
        return true;
    }
}
export function contains(array, value, equalityComparer = equateValues) {
    if (array) {
        for (const v of array) {
            if (equalityComparer(v, value)) {
                return true;
            }
        }
    }
    return false;
}
export function getAllKeys(obj) {
    const result = [];
    do {
        const names = Object.getOwnPropertyNames(obj);
        for (const name of names) {
            pushIfUnique(result, name);
        }
    } while (obj = Object.getPrototypeOf(obj));
    return result;
}
export function some(array, predicate) {
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
export function concatenate(array1, array2) {
    if (!some(array2))
        return array1;
    if (!some(array1))
        return array2;
    return [...array1, ...array2];
}
export function append(to, value) {
    if (value === undefined)
        return to;
    if (to === undefined)
        return [value];
    to.push(value);
    return to;
}
export function combine(xs, ys) {
    if (xs === undefined)
        return ys;
    if (ys === undefined)
        return xs;
    if (isArray(xs))
        return isArray(ys) ? concatenate(xs, ys) : append(xs, ys);
    if (isArray(ys))
        return append(ys, xs);
    return [xs, ys];
}
/**
 * Tests whether a value is an array.
 */
export function isArray(value) {
    return Array.isArray ? Array.isArray(value) : value instanceof Array;
}
export function not(fn) {
    return (...args) => !fn(...args);
}
export function fill(length, cb) {
    const result = Array(length);
    for (let i = 0; i < length; i++) {
        result[i] = cb(i);
    }
    return result;
}
export function takeWhile(array, predicate) {
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
export function getSpellingSuggestion(name, candidates, getName) {
    const maximumLengthDifference = Math.min(2, Math.floor(name.length * 0.34));
    let bestDistance = Math.floor(name.length * 0.4) + 1; // If the best result is worse than this, don't bother.
    let bestCandidate;
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
            Debug.assert(distance < bestDistance); // Else `levenshteinWithMax` should return undefined
            bestDistance = distance;
            bestCandidate = candidate;
        }
    }
    return bestCandidate;
}
function levenshteinWithMax(s1, s2, max) {
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
export function mapDefinedEntries(map, f) {
    if (!map) {
        return undefined;
    }
    const result = new Map();
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
export function mapDefinedValues(set, f) {
    if (set) {
        const result = new Set();
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
export function forEachRight(array, callback) {
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
export function singleIterator(value) {
    let done = false;
    return {
        next() {
            const wasDone = done;
            done = true;
            return wasDone ? { value: undefined, done: true } : { value, done: false };
        }
    };
}
export function mapEntries(map, f) {
    if (!map) {
        return undefined;
    }
    const result = new Map();
    map.forEach((value, key) => {
        const [newKey, newValue] = f(key, value);
        result.set(newKey, newValue);
    });
    return result;
}
export function arrayToNumericMap(array, makeKey, makeValue = identity) {
    const result = [];
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
export function padLeft(s, length, padString = " ") {
    return length <= s.length ? s : padString.repeat(length - s.length) + s;
}
/**
 * Returns string right-padded with spaces until it reaches the given length.
 *
 * @param s String to pad.
 * @param length Final padded length. If less than or equal to 's.length', returns 's' unchanged.
 * @param padString Character to use as padding (default " ").
 */
export function padRight(s, length, padString = " ") {
    return length <= s.length ? s : s + padString.repeat(length - s.length);
}
/**
 * Create a new map from a template object is provided, the map will copy entries from it.
 * @deprecated Use `new Map(getEntries(template))` instead.
 */
export function createMapFromTemplate(template) {
    const map = new Map();
    // Copies keys/values from template. Note that for..in will not throw if
    // template is undefined, and instead will just exit the loop.
    for (const key in template) {
        if (Object.prototype.hasOwnProperty.call(template, key)) {
            map.set(key, template[key]);
        }
    }
    return map;
}
export function cartesianProduct(arrays) {
    const result = [];
    cartesianProductWorker(arrays, result, /*outer*/ undefined, 0);
    return result;
}
function cartesianProductWorker(arrays, result, outer, index) {
    for (const element of arrays[index]) {
        let inner;
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
export function reduceLeft(array, f, initial, start, count) {
    if (array && array.length > 0) {
        const size = array.length;
        if (size > 0) {
            let pos = start === undefined || start < 0 ? 0 : start;
            const end = count === undefined || pos + count > size - 1 ? size - 1 : pos + count;
            let result;
            if (arguments.length <= 2) {
                result = array[pos];
                pos++;
            }
            else {
                result = initial;
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
export function compose(a, b, c, d, e) {
    if (!!e) {
        const args = [];
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
export function length(array) {
    return array ? array.length : 0;
}
export function filter(array, f) {
    if (array) {
        const len = array.length;
        let i = 0;
        while (i < len && f(array[i]))
            i++;
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
export function map(array, f) {
    let result;
    if (array) {
        result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(f(array[i], i));
        }
    }
    return result;
}
export function mapIterator(iter, mapFn) {
    return {
        next() {
            const iterRes = iter.next();
            return iterRes.done ? iterRes : { value: mapFn(iterRes.value), done: false };
        }
    };
}
/**
 * Iterates through 'array' by index and performs the callback on each element of array until the callback
 * returns a truthy value, then returns that value.
 * If no such value is found, the callback is applied to each element of array and undefined is returned.
 */
export function forEach(array, callback) {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const result = callback(array[i], i);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}
/** Like `forEach`, but suitable for use with numbers and strings (which may be falsy). */
export function firstDefined(array, callback) {
    if (array === undefined) {
        return undefined;
    }
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i);
        if (result !== undefined) {
            return result;
        }
    }
    return undefined;
}
export function firstDefinedIterator(iter, callback) {
    while (true) {
        const iterResult = iter.next();
        if (iterResult.done) {
            return undefined;
        }
        const result = callback(iterResult.value);
        if (result !== undefined) {
            return result;
        }
    }
}
export function reduceLeftIterator(iterator, f, initial) {
    let result = initial;
    if (iterator) {
        for (let step = iterator.next(), pos = 0; !step.done; step = iterator.next(), pos++) {
            result = f(result, step.value, pos);
        }
    }
    return result;
}
export function zipToMap(keys, values) {
    Debug.assert(keys.length === values.length);
    const map = new Map();
    for (let i = 0; i < keys.length; ++i) {
        map.set(keys[i], values[i]);
    }
    return map;
}
/**
 * Iterates through `array` by index and performs the callback on each element of array until the callback
 * returns a falsey value, then returns false.
 * If no such value is found, the callback is applied to each element of array and `true` is returned.
 */
export function every(array, callback) {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i], i)) {
                return false;
            }
        }
    }
    return true;
}
export function find(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (predicate(value, i)) {
            return value;
        }
    }
    return undefined;
}
export function findLast(array, predicate) {
    for (let i = array.length - 1; i >= 0; i--) {
        const value = array[i];
        if (predicate(value, i)) {
            return value;
        }
    }
    return undefined;
}
/** Works like Array.prototype.findIndex, returning `-1` if no element satisfying the predicate is found. */
export function findIndex(array, predicate, startIndex) {
    for (let i = startIndex || 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    return -1;
}
export function findLastIndex(array, predicate, startIndex) {
    for (let i = startIndex === undefined ? array.length - 1 : startIndex; i >= 0; i--) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    return -1;
}
export function arraysEqual(a, b, equalityComparer = equateValues) {
    return a.length === b.length && a.every((x, i) => equalityComparer(x, b[i]));
}
export function indexOfAnyCharCode(text, charCodes, start) {
    for (let i = start || 0; i < text.length; i++) {
        if (contains(charCodes, text.charCodeAt(i))) {
            return i;
        }
    }
    return -1;
}
export function countWhere(array, predicate) {
    let count = 0;
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const v = array[i];
            if (predicate(v, i)) {
                count++;
            }
        }
    }
    return count;
}
export function filterMutate(array, f) {
    let outIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (f(array[i], i, array)) {
            array[outIndex] = array[i];
            outIndex++;
        }
    }
    array.length = outIndex;
}
export function clear(array) {
    array.length = 0;
}
export function sameMap(array, f) {
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const mapped = f(item, i);
            if (item !== mapped) {
                const result = array.slice(0, i);
                result.push(mapped);
                for (i++; i < array.length; i++) {
                    result.push(f(array[i], i));
                }
                return result;
            }
        }
    }
    return array;
}
/**
 * Flattens an array containing a mix of array or non-array elements.
 *
 * @param array The array to flatten.
 */
export function flatten(array) {
    const result = [];
    for (const v of array) {
        if (v) {
            if (isArray(v)) {
                addRange(result, v);
            }
            else {
                result.push(v);
            }
        }
    }
    return result;
}
/**
 * Maps an array. If the mapped value is an array, it is spread into the result.
 *
 * @param array The array to map.
 * @param mapfn The callback used to map the result into one or more values.
 */
export function flatMap(array, mapfn) {
    let result;
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const v = mapfn(array[i], i);
            if (v) {
                if (isArray(v)) {
                    result = addRange(result, v);
                }
                else {
                    result = append(result, v);
                }
            }
        }
    }
    return result || emptyArray;
}
export function flatMapToMutable(array, mapfn) {
    const result = [];
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const v = mapfn(array[i], i);
            if (v) {
                if (isArray(v)) {
                    addRange(result, v);
                }
                else {
                    result.push(v);
                }
            }
        }
    }
    return result;
}
export function sameFlatMap(array, mapfn) {
    let result;
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            const mapped = mapfn(item, i);
            if (result || item !== mapped || isArray(mapped)) {
                if (!result) {
                    result = array.slice(0, i);
                }
                if (isArray(mapped)) {
                    addRange(result, mapped);
                }
                else {
                    result.push(mapped);
                }
            }
        }
    }
    return result || array;
}
export function mapDefined(array, mapFn) {
    const result = [];
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const mapped = mapFn(array[i], i);
            if (mapped !== undefined) {
                result.push(mapped);
            }
        }
    }
    return result;
}
export function mapDefinedIterator(iter, mapFn) {
    return {
        next() {
            while (true) {
                const res = iter.next();
                if (res.done) {
                    return res;
                }
                const value = mapFn(res.value);
                if (value !== undefined) {
                    return { value, done: false };
                }
            }
        }
    };
}
export function getOrUpdate(map, key, callback) {
    if (map.has(key)) {
        return map.get(key);
    }
    const value = callback();
    map.set(key, value);
    return value;
}
export function tryAddToSet(set, value) {
    if (!set.has(value)) {
        set.add(value);
        return true;
    }
    return false;
}
export function spanMap(array, keyfn, mapfn) {
    let result;
    if (array) {
        result = [];
        const len = array.length;
        let previousKey;
        let key;
        let start = 0;
        let pos = 0;
        while (start < len) {
            while (pos < len) {
                const value = array[pos];
                key = keyfn(value, pos);
                if (pos === 0) {
                    previousKey = key;
                }
                else if (key !== previousKey) {
                    break;
                }
                pos++;
            }
            if (start < pos) {
                const v = mapfn(array.slice(start, pos), previousKey, start, pos);
                if (v) {
                    result.push(v);
                }
                start = pos;
            }
            previousKey = key;
            pos++;
        }
    }
    return result;
}
/** Calls the callback with (start, afterEnd) index pairs for each range where 'pred' is true. */
export function getRangesWhere(arr, pred, cb) {
    let start;
    for (let i = 0; i < arr.length; i++) {
        if (pred(arr[i])) {
            start = start === undefined ? i : start;
        }
        else {
            if (start !== undefined) {
                cb(start, i);
                start = undefined;
            }
        }
    }
    if (start !== undefined)
        cb(start, arr.length);
}
function selectIndex(_, i) {
    return i;
}
export function indicesOf(array) {
    return array.map(selectIndex);
}
function deduplicateRelational(array, equalityComparer, comparer) {
    // Perform a stable sort of the array. This ensures the first entry in a list of
    // duplicates remains the first entry in the result.
    const indices = indicesOf(array);
    stableSortIndices(array, indices, comparer);
    let last = array[indices[0]];
    const deduplicated = [indices[0]];
    for (let i = 1; i < indices.length; i++) {
        const index = indices[i];
        const item = array[index];
        if (!equalityComparer(last, item)) {
            deduplicated.push(index);
            last = item;
        }
    }
    // restore original order
    deduplicated.sort();
    return deduplicated.map(i => array[i]);
}
function deduplicateEquality(array, equalityComparer) {
    const result = [];
    for (const item of array) {
        pushIfUnique(result, item, equalityComparer);
    }
    return result;
}
/**
 * Deduplicates an unsorted array.
 * @param equalityComparer An `EqualityComparer` used to determine if two values are duplicates.
 * @param comparer An optional `Comparer` used to sort entries before comparison, though the
 * result will remain in the original order in `array`.
 */
export function deduplicate(array, equalityComparer, comparer) {
    return array.length === 0 ? [] :
        array.length === 1 ? array.slice() :
            comparer ? deduplicateRelational(array, equalityComparer, comparer) :
                deduplicateEquality(array, equalityComparer);
}
/**
 * Deduplicates an array that has already been sorted.
 */
function deduplicateSorted(array, comparer) {
    if (array.length === 0)
        return emptyArray;
    let last = array[0];
    const deduplicated = [last];
    for (let i = 1; i < array.length; i++) {
        const next = array[i];
        switch (comparer(next, last)) {
            // equality comparison
            case true:
            // relational comparison
            // falls through
            case 0 /* EqualTo */:
                continue;
            case -1 /* LessThan */:
                // If `array` is sorted, `next` should **never** be less than `last`.
                throw new Error("Array is unsorted");
            // return Debug.fail("Array is unsorted.");
        }
        deduplicated.push(last = next);
    }
    return deduplicated;
}
export function insertSorted(array, insert, compare) {
    if (array.length === 0) {
        array.push(insert);
        return;
    }
    const insertIndex = binarySearch(array, insert, identity, compare);
    if (insertIndex < 0) {
        array.splice(~insertIndex, 0, insert);
    }
}
export function sortAndDeduplicate(array, comparer, equalityComparer) {
    return deduplicateSorted(sort(array, comparer), equalityComparer || comparer || compareStringsCaseSensitive);
}
export function arrayIsEqualTo(array1, array2, equalityComparer = equateValues) {
    if (!array1 || !array2) {
        return array1 === array2;
    }
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (!equalityComparer(array1[i], array2[i], i)) {
            return false;
        }
    }
    return true;
}
export function compact(array) {
    let result;
    if (array) {
        for (let i = 0; i < array.length; i++) {
            const v = array[i];
            if (result || !v) {
                if (!result) {
                    result = array.slice(0, i);
                }
                if (v) {
                    result.push(v);
                }
            }
        }
    }
    return result || array;
}
/**
 * Gets the relative complement of `arrayA` with respect to `arrayB`, returning the elements that
 * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
 * based on the provided comparer.
 */
export function relativeComplement(arrayA, arrayB, comparer) {
    if (!arrayB || !arrayA || arrayB.length === 0 || arrayA.length === 0)
        return arrayB;
    const result = [];
    loopB: for (let offsetA = 0, offsetB = 0; offsetB < arrayB.length; offsetB++) {
        if (offsetB > 0) {
            // Ensure `arrayB` is properly sorted.
            Debug.assertGreaterThanOrEqual(comparer(arrayB[offsetB], arrayB[offsetB - 1]), 0 /* EqualTo */);
        }
        loopA: for (const startA = offsetA; offsetA < arrayA.length; offsetA++) {
            if (offsetA > startA) {
                // Ensure `arrayA` is properly sorted. We only need to perform this check if
                // `offsetA` has changed since we entered the loop.
                Debug.assertGreaterThanOrEqual(comparer(arrayA[offsetA], arrayA[offsetA - 1]), 0 /* EqualTo */);
            }
            switch (comparer(arrayB[offsetB], arrayA[offsetA])) {
                case -1 /* LessThan */:
                    // If B is less than A, B does not exist in arrayA. Add B to the result and
                    // move to the next element in arrayB without changing the current position
                    // in arrayA.
                    result.push(arrayB[offsetB]);
                    continue loopB;
                case 0 /* EqualTo */:
                    // If B is equal to A, B exists in arrayA. Move to the next element in
                    // arrayB without adding B to the result or changing the current position
                    // in arrayA.
                    continue loopB;
                case 1 /* GreaterThan */:
                    // If B is greater than A, we need to keep looking for B in arrayA. Move to
                    // the next element in arrayA and recheck.
                    continue loopA;
            }
        }
    }
    return result;
}
export function sum(array, prop) {
    let result = 0;
    for (const v of array) {
        result += v[prop];
    }
    return result;
}
/**
 * Unlike `pushIfUnique`, this can take `undefined` as an input, and returns a new array.
 */
export function appendIfUnique(array, toAdd, equalityComparer) {
    if (array) {
        pushIfUnique(array, toAdd, equalityComparer);
        return array;
    }
    else {
        return [toAdd];
    }
}
function stableSortIndices(array, indices, comparer) {
    // sort indices by value then position
    indices.sort((x, y) => comparer(array[x], array[y]) || compareValues(x, y));
}
/**
 * Returns a new sorted array.
 */
export function sort(array, comparer) {
    return (array.length === 0 ? array : array.slice().sort(comparer));
}
/**
 * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
 */
export function stableSort(array, comparer) {
    const indices = indicesOf(array);
    stableSortIndices(array, indices, comparer);
    return indices.map(i => array[i]);
}
export function rangeEquals(array1, array2, pos, end) {
    while (pos < end) {
        if (array1[pos] !== array2[pos]) {
            return false;
        }
        pos++;
    }
    return true;
}
/**
 * Returns the first element of an array if non-empty, `undefined` otherwise.
 */
export function firstOrUndefined(array) {
    return array.length === 0 ? undefined : array[0];
}
export function first(array) {
    //     Debug.assert(array.length !== 0);
    return array[0];
}
/**
 * Returns the last element of an array if non-empty, `undefined` otherwise.
 */
export function lastOrUndefined(array) {
    return array.length === 0 ? undefined : array[array.length - 1];
}
export function last(array) {
    Debug.assert(array.length !== 0);
    return array[array.length - 1];
}
/**
 * Returns the only element of an array if it contains only one element, `undefined` otherwise.
 */
export function singleOrUndefined(array) {
    return array && array.length === 1
        ? array[0]
        : undefined;
}
export function singleOrMany(array) {
    return array && array.length === 1
        ? array[0]
        : array;
}
export function replaceElement(array, index, value) {
    const result = array.slice(0);
    result[index] = value;
    return result;
}
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
export function binarySearch(array, value, keySelector, keyComparer, offset) {
    return binarySearchKey(array, keySelector(value), keySelector, keyComparer, offset);
}
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
export function binarySearchKey(array, key, keySelector, keyComparer, offset) {
    if (!some(array)) {
        return -1;
    }
    let low = offset || 0;
    let high = array.length - 1;
    while (low <= high) {
        const middle = low + ((high - low) >> 1);
        const midKey = keySelector(array[middle], middle);
        switch (keyComparer(midKey, key)) {
            case -1 /* LessThan */:
                low = middle + 1;
                break;
            case 0 /* EqualTo */:
                return middle;
            case 1 /* GreaterThan */:
                high = middle - 1;
                break;
        }
    }
    return ~low;
}
/**
 * Indicates whether a map-like contains an own property with the specified key.
 *
 * @param map A map-like.
 * @param key A property key.
 */
export function hasProperty(map, key) {
    return Object.prototype.hasOwnProperty.call(map, key);
}
export function getOwnValues(sparseArray) {
    const values = [];
    for (const key in sparseArray) {
        if (Object.prototype.hasOwnProperty.call(sparseArray, key)) {
            values.push(sparseArray[key]);
        }
    }
    return values;
}
export function getEntries(obj) {
    return obj ? Object.entries(obj) : [];
}
export function arrayOf(count, f) {
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
        result[i] = f(i);
    }
    return result;
}
export function arrayFrom(iterator, map) {
    const result = [];
    for (let iterResult = iterator.next(); !iterResult.done; iterResult = iterator.next()) {
        result.push(map ? map(iterResult.value) : iterResult.value);
    }
    return result;
}
/**
 * Performs a shallow equality comparison of the contents of two map-likes.
 *
 * @param left A map-like whose properties should be compared.
 * @param right A map-like whose properties should be compared.
 */
export function equalOwnProperties(left, right, equalityComparer = equateValues) {
    if (left === right)
        return true;
    if (!left || !right)
        return false;
    for (const key in left) {
        if (Object.prototype.hasOwnProperty.call(left, key)) {
            if (!Object.prototype.hasOwnProperty.call(right, key))
                return false;
            if (!equalityComparer(left[key], right[key]))
                return false;
        }
    }
    for (const key in right) {
        if (Object.prototype.hasOwnProperty.call(right, key)) {
            if (!Object.prototype.hasOwnProperty.call(left, key))
                return false;
        }
    }
    return true;
}
export function arrayToMap(array, makeKey, makeValue = identity) {
    const result = new Map();
    for (const value of array) {
        const key = makeKey(value);
        if (key !== undefined)
            result.set(key, makeValue(value));
    }
    return result;
}
export function clone(object) {
    const result = {};
    for (const id in object) {
        if (Object.prototype.hasOwnProperty.call(object, id)) {
            result[id] = object[id];
        }
    }
    return result;
}
/**
 * Creates a new object by adding the own properties of `second`, then the own properties of `first`.
 *
 * NOTE: This means that if a property exists in both `first` and `second`, the property in `first` will be chosen.
 */
export function extend(first, second) {
    const result = {};
    for (const id in second) {
        if (Object.prototype.hasOwnProperty.call(second, id)) {
            result[id] = second[id];
        }
    }
    for (const id in first) {
        if (Object.prototype.hasOwnProperty.call(first, id)) {
            result[id] = first[id];
        }
    }
    return result;
}
export function copyProperties(first, second) {
    for (const id in second) {
        if (Object.prototype.hasOwnProperty.call(second, id)) {
            first[id] = second[id];
        }
    }
}
export function maybeBind(obj, fn) {
    return fn ? fn.bind(obj) : undefined;
}
export function toArray(value) {
    return isArray(value) ? value : [value];
}
/**
 * Tests whether a value is string
 */
export function isString(text) {
    return typeof text === "string";
}
export function isNumber(x) {
    return typeof x === "number";
}
export function tryCast(value, test) {
    return value !== undefined && test(value) ? value : undefined;
}
export function cast(value, test) {
    if (value !== undefined && test(value))
        return value;
    throw new Error(`Invalid cast. The supplied value ${value} did not pass the test '${"Debug.getFunctionName(test)"}'.`);
    // return Debug.fail(`Invalid cast. The supplied value ${value} did not pass the test '${Debug.getFunctionName(test)}'.`);
}
// We convert the file names to lower case as key for file name on case insensitive file system
// While doing so we need to handle special characters (eg \u0130) to ensure that we dont convert
// it to lower case, fileName with its lowercase form can exist along side it.
// Handle special characters and make those case sensitive instead
//
// |-#--|-Unicode--|-Char code-|-Desc-------------------------------------------------------------------|
// | 1. | i        | 105       | Ascii i                                                                |
// | 2. | I        | 73        | Ascii I                                                                |
// |-------- Special characters ------------------------------------------------------------------------|
// | 3. | \u0130   | 304       | Upper case I with dot above                                            |
// | 4. | i,\u0307 | 105,775   | i, followed by 775: Lower case of (3rd item)                           |
// | 5. | I,\u0307 | 73,775    | I, followed by 775: Upper case of (4th item), lower case is (4th item) |
// | 6. | \u0131   | 305       | Lower case i without dot, upper case is I (2nd item)                   |
// | 7. | \u00DF   | 223       | Lower case sharp s                                                     |
//
// Because item 3 is special where in its lowercase character has its own
// upper case form we cant convert its case.
// Rest special characters are either already in lower case format or
// they have corresponding upper case character so they dont need special handling
//
// But to avoid having to do string building for most common cases, also ignore
// a-z, 0-9, \u0131, \u00DF, \, /, ., : and space
const fileNameLowerCaseRegExp = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g;
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
export function toFileNameLowerCase(x) {
    return fileNameLowerCaseRegExp.test(x) ?
        x.replace(fileNameLowerCaseRegExp, toLowerCase) :
        x;
}
/** Throws an error because a function is not implemented. */
export function notImplemented() {
    throw new Error("Not implemented");
}
export function memoize(callback) {
    let value;
    return () => {
        if (callback) {
            value = callback();
            callback = undefined;
        }
        return value;
    };
}
/** A version of `memoize` that supports a single primitive argument */
export function memoizeOne(callback) {
    const map = new Map();
    return (arg) => {
        const key = `${typeof arg}:${arg}`;
        let value = map.get(key);
        if (value === undefined && !map.has(key)) {
            value = callback(arg);
            map.set(key, value);
        }
        return value;
    };
}
export var AssertionLevel;
(function (AssertionLevel) {
    AssertionLevel[AssertionLevel["None"] = 0] = "None";
    AssertionLevel[AssertionLevel["Normal"] = 1] = "Normal";
    AssertionLevel[AssertionLevel["Aggressive"] = 2] = "Aggressive";
    AssertionLevel[AssertionLevel["VeryAggressive"] = 3] = "VeryAggressive";
})(AssertionLevel || (AssertionLevel = {}));
/**
 * Compare the equality of two strings using a case-sensitive ordinal comparison.
 *
 * Case-sensitive comparisons compare both strings one code-point at a time using the integer
 * value of each code-point after applying `toUpperCase` to each string. We always map both
 * strings to their upper-case form as some unicode characters do not properly round-trip to
 * lowercase (such as `ẞ` (German sharp capital s)).
 */
export function equateStringsCaseInsensitive(a, b) {
    return a === b
        || a !== undefined
            && b !== undefined
            && a.toUpperCase() === b.toUpperCase();
}
/**
 * Compare the equality of two strings using a case-sensitive ordinal comparison.
 *
 * Case-sensitive comparisons compare both strings one code-point at a time using the
 * integer value of each code-point.
 */
export function equateStringsCaseSensitive(a, b) {
    return equateValues(a, b);
}
function compareComparableValues(a, b) {
    return a === b ? 0 /* EqualTo */ :
        a === undefined ? -1 /* LessThan */ :
            b === undefined ? 1 /* GreaterThan */ :
                a < b ? -1 /* LessThan */ :
                    1 /* GreaterThan */;
}
/**
 * Compare two numeric values for their order relative to each other.
 * To compare strings, use any of the `compareStrings` functions.
 */
export function compareValues(a, b) {
    return compareComparableValues(a, b);
}
/**
 * Compare two TextSpans, first by `start`, then by `length`.
 */
export function compareTextSpans(a, b) {
    return compareValues(a === null || a === void 0 ? void 0 : a.start, b === null || b === void 0 ? void 0 : b.start) || compareValues(a === null || a === void 0 ? void 0 : a.length, b === null || b === void 0 ? void 0 : b.length);
}
export function min(a, b, compare) {
    return compare(a, b) === -1 /* LessThan */ ? a : b;
}
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
export function compareStringsCaseInsensitive(a, b) {
    if (a === b)
        return 0 /* EqualTo */;
    if (a === undefined)
        return -1 /* LessThan */;
    if (b === undefined)
        return 1 /* GreaterThan */;
    a = a.toUpperCase();
    b = b.toUpperCase();
    return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
}
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
export function compareStringsCaseSensitive(a, b) {
    return compareComparableValues(a, b);
}
export function getStringComparer(ignoreCase) {
    return ignoreCase ? compareStringsCaseInsensitive : compareStringsCaseSensitive;
}
/**
 * Creates a string comparer for use with string collation in the UI.
 */
const createUIStringComparer = (() => {
    let defaultComparer;
    let enUSComparer;
    const stringComparerFactory = getStringComparerFactory();
    return createStringComparer;
    function compareWithCallback(a, b, comparer) {
        if (a === b)
            return 0 /* EqualTo */;
        if (a === undefined)
            return -1 /* LessThan */;
        if (b === undefined)
            return 1 /* GreaterThan */;
        const value = comparer(a, b);
        return value < 0 ? -1 /* LessThan */ : value > 0 ? 1 /* GreaterThan */ : 0 /* EqualTo */;
    }
    function createIntlCollatorStringComparer(locale) {
        // Intl.Collator.prototype.compare is bound to the collator. See NOTE in
        // http://www.ecma-international.org/ecma-402/2.0/#sec-Intl.Collator.prototype.compare
        const comparer = new Intl.Collator(locale, { usage: "sort", sensitivity: "variant" }).compare;
        return (a, b) => compareWithCallback(a, b, comparer);
    }
    function createLocaleCompareStringComparer(locale) {
        // if the locale is not the default locale (`undefined`), use the fallback comparer.
        if (locale !== undefined)
            return createFallbackStringComparer();
        return (a, b) => compareWithCallback(a, b, compareStrings);
        function compareStrings(a, b) {
            return a.localeCompare(b);
        }
    }
    function createFallbackStringComparer() {
        // An ordinal comparison puts "A" after "b", but for the UI we want "A" before "b".
        // We first sort case insensitively.  So "Aaa" will come before "baa".
        // Then we sort case sensitively, so "aaa" will come before "Aaa".
        //
        // For case insensitive comparisons we always map both strings to their
        // upper-case form as some unicode characters do not properly round-trip to
        // lowercase (such as `Ã¡ÂºÅ¾` (German sharp capital s)).
        return (a, b) => compareWithCallback(a, b, compareDictionaryOrder);
        function compareDictionaryOrder(a, b) {
            return compareStrings(a.toUpperCase(), b.toUpperCase()) || compareStrings(a, b);
        }
        function compareStrings(a, b) {
            return a < b ? -1 /* LessThan */ : a > b ? 1 /* GreaterThan */ : 0 /* EqualTo */;
        }
    }
    function getStringComparerFactory() {
        // If the host supports Intl, we use it for comparisons using the default locale.
        if (typeof Intl === "object" && typeof Intl.Collator === "function") {
            return createIntlCollatorStringComparer;
        }
        // If the host does not support Intl, we fall back to localeCompare.
        // localeCompare in Node v0.10 is just an ordinal comparison, so don't use it.
        if (typeof String.prototype.localeCompare === "function" &&
            typeof String.prototype.toLocaleUpperCase === "function" &&
            "a".localeCompare("B") < 0) {
            return createLocaleCompareStringComparer;
        }
        // Otherwise, fall back to ordinal comparison:
        return createFallbackStringComparer;
    }
    function createStringComparer(locale) {
        // Hold onto common string comparers. This avoids constantly reallocating comparers during
        // tests.
        if (locale === undefined) {
            return defaultComparer || (defaultComparer = stringComparerFactory(locale));
        }
        else if (locale === "en-US") {
            return enUSComparer || (enUSComparer = stringComparerFactory(locale));
        }
        else {
            return stringComparerFactory(locale);
        }
    }
})();
let uiComparerCaseSensitive;
let uiLocale;
export function getUILocale() {
    return uiLocale;
}
export function setUILocale(value) {
    if (uiLocale !== value) {
        uiLocale = value;
        uiComparerCaseSensitive = undefined;
    }
}
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
export function compareStringsCaseSensitiveUI(a, b) {
    const comparer = uiComparerCaseSensitive || (uiComparerCaseSensitive = createUIStringComparer(uiLocale));
    return comparer(a, b);
}
export function compareProperties(a, b, key, comparer) {
    return a === b ? 0 /* EqualTo */ :
        a === undefined ? -1 /* LessThan */ :
            b === undefined ? 1 /* GreaterThan */ :
                comparer(a[key], b[key]);
}
/** True is greater than false. */
export function compareBooleans(a, b) {
    return compareValues(a ? 1 : 0, b ? 1 : 0);
}
export function endsWith(str, suffix) {
    const expectedPos = str.length - suffix.length;
    return expectedPos >= 0 && str.indexOf(suffix, expectedPos) === expectedPos;
}
export function removeSuffix(str, suffix) {
    return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : str;
}
export function tryRemoveSuffix(str, suffix) {
    return endsWith(str, suffix) ? str.slice(0, str.length - suffix.length) : undefined;
}
export function stringContains(str, substring) {
    return str.indexOf(substring) !== -1;
}
/**
 * Takes a string like "jquery-min.4.2.3" and returns "jquery"
 */
export function removeMinAndVersionNumbers(fileName) {
    // Match a "." or "-" followed by a version number or 'min' at the end of the name
    const trailingMinOrVersion = /[.-]((min)|(\d+(\.\d+)*))$/;
    // The "min" or version may both be present, in either order, so try applying the above twice.
    return fileName.replace(trailingMinOrVersion, "").replace(trailingMinOrVersion, "");
}
/** Remove an item from an array, moving everything to its right one space left. */
export function orderedRemoveItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            orderedRemoveItemAt(array, i);
            return true;
        }
    }
    return false;
}
/** Remove an item by index from an array, moving everything to its right one space left. */
export function orderedRemoveItemAt(array, index) {
    // This seems to be faster than either `array.splice(i, 1)` or `array.copyWithin(i, i+ 1)`.
    for (let i = index; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.pop();
}
export function unorderedRemoveItemAt(array, index) {
    // Fill in the "hole" left at `index`.
    array[index] = array[array.length - 1];
    array.pop();
}
/** Remove the *first* occurrence of `item` from the array. */
export function unorderedRemoveItem(array, item) {
    return unorderedRemoveFirstItemWhere(array, element => element === item);
}
/** Remove the *first* element satisfying `predicate`. */
function unorderedRemoveFirstItemWhere(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            unorderedRemoveItemAt(array, i);
            return true;
        }
    }
    return false;
}
export function createGetCanonicalFileName(useCaseSensitiveFileNames) {
    return useCaseSensitiveFileNames ? identity : toFileNameLowerCase;
}
export function patternText({ prefix, suffix }) {
    return `${prefix}*${suffix}`;
}
/**
 * Given that candidate matches pattern, returns the text matching the '*'.
 * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
 */
export function matchedText(pattern, candidate) {
    Debug.assert(isPatternMatch(pattern, candidate));
    return candidate.substring(pattern.prefix.length, candidate.length - pattern.suffix.length);
}
/** Return the object corresponding to the best pattern to match `candidate`. */
export function findBestPatternMatch(values, getPattern, candidate) {
    let matchedValue;
    // use length of prefix as betterness criteria
    let longestMatchPrefixLength = -1;
    for (const v of values) {
        const pattern = getPattern(v);
        if (isPatternMatch(pattern, candidate) && pattern.prefix.length > longestMatchPrefixLength) {
            longestMatchPrefixLength = pattern.prefix.length;
            matchedValue = v;
        }
    }
    return matchedValue;
}
export function startsWith(str, prefix) {
    return str.lastIndexOf(prefix, 0) === 0;
}
export function removePrefix(str, prefix) {
    return startsWith(str, prefix) ? str.substr(prefix.length) : str;
}
export function tryRemovePrefix(str, prefix, getCanonicalFileName = identity) {
    return startsWith(getCanonicalFileName(str), getCanonicalFileName(prefix)) ? str.substring(prefix.length) : undefined;
}
function isPatternMatch({ prefix, suffix }, candidate) {
    return candidate.length >= prefix.length + suffix.length &&
        startsWith(candidate, prefix) &&
        endsWith(candidate, suffix);
}
export function and(f, g) {
    return (arg) => f(arg) && g(arg);
}
export function or(...fs) {
    return (...args) => {
        for (const f of fs) {
            if (f(...args)) {
                return true;
            }
        }
        return false;
    };
}
export function assertType(_) { }
export function singleElementArray(t) {
    return t === undefined ? undefined : [t];
}
export function enumerateInsertsAndDeletes(newItems, oldItems, comparer, inserted, deleted, unchanged) {
    unchanged = unchanged || noop;
    let newIndex = 0;
    let oldIndex = 0;
    const newLen = newItems.length;
    const oldLen = oldItems.length;
    let hasChanges = false;
    while (newIndex < newLen && oldIndex < oldLen) {
        const newItem = newItems[newIndex];
        const oldItem = oldItems[oldIndex];
        const compareResult = comparer(newItem, oldItem);
        if (compareResult === -1 /* LessThan */) {
            inserted(newItem);
            newIndex++;
            hasChanges = true;
        }
        else if (compareResult === 1 /* GreaterThan */) {
            deleted(oldItem);
            oldIndex++;
            hasChanges = true;
        }
        else {
            unchanged(oldItem, newItem);
            newIndex++;
            oldIndex++;
        }
    }
    while (newIndex < newLen) {
        inserted(newItems[newIndex++]);
        hasChanges = true;
    }
    while (oldIndex < oldLen) {
        deleted(oldItems[oldIndex++]);
        hasChanges = true;
    }
    return hasChanges;
}
//# sourceMappingURL=core.js.map