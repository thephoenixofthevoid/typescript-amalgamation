import { MapLike } from "./types";

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
    return { next: () => {
        if (i === array.length) {
            return { value: undefined as never, done: true };
        }
        else {
            i++;
            return { value: array[i - 1], done: false };
        }
    }};
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