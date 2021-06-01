import { AnyFunction } from "./core";


export function fail(message?: string, stackCrawlMark?: AnyFunction): never {
    debugger;
    const e = new Error(message ? `Debug Failure. ${message}` : "Debug Failure.");
    if ((<any>Error).captureStackTrace) {
        (<any>Error).captureStackTrace(e, stackCrawlMark || fail);
    }
    throw e;
}

export function assert(expression: unknown, message?: string, verboseDebugInfo?: string | (() => string), stackCrawlMark?: AnyFunction): asserts expression {
    if (!expression) {
        message = message ? `False expression: ${message}` : "False expression.";
        if (verboseDebugInfo) {
            message += "\r\nVerbose Debug Information: " + (typeof verboseDebugInfo === "string" ? verboseDebugInfo : verboseDebugInfo());
        }
        fail(message, stackCrawlMark || assert);
    }
}

export function assertEqual<T>(a: T, b: T, msg?: string, msg2?: string, stackCrawlMark?: AnyFunction): void {
    if (a !== b) {
        const message = msg ? msg2 ? `${msg} ${msg2}` : msg : "";
        fail(`Expected ${a} === ${b}. ${message}`, stackCrawlMark || assertEqual);
    }
}

export function assertLessThan(a: number, b: number, msg?: string, stackCrawlMark?: AnyFunction): void {
    if (a >= b) {
        fail(`Expected ${a} < ${b}. ${msg || ""}`, stackCrawlMark || assertLessThan);
    }
}

export function assertLessThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void {
    if (a > b) {
        fail(`Expected ${a} <= ${b}`, stackCrawlMark || assertLessThanOrEqual);
    }
}

export function assertGreaterThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void {
    if (a < b) {
        fail(`Expected ${a} >= ${b}`, stackCrawlMark || assertGreaterThanOrEqual);
    }
}



export function checkDefined<T>(value: T | null | undefined, message?: string, stackCrawlMark?: AnyFunction): T {
    assertIsDefined(value, message, stackCrawlMark || checkDefined);
    return value;
}

export function assertIsDefined<T>(value: T, message?: string, stackCrawlMark?: AnyFunction): asserts value is NonNullable<T> {
    // eslint-disable-next-line no-null/no-null
    if (value === undefined || value === null) {
        fail(message, stackCrawlMark || assertIsDefined);
    }
}



export function assertNever(member: never, message = "Illegal value:", stackCrawlMark?: AnyFunction): never {
    const detail = "No" //typeof member === "object" && hasProperty(member, "kind") && hasProperty(member, "pos") && formatSyntaxKind ? "SyntaxKind: " + formatSyntaxKind((member as Node).kind) : JSON.stringify(member);
    return fail(`${message} ${detail}`, stackCrawlMark || assertNever);
}


