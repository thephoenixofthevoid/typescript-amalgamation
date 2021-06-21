import { AnyFunction } from "./core";
export declare function fail(message?: string, stackCrawlMark?: AnyFunction): never;
export declare function assert(expression: unknown, message?: string, verboseDebugInfo?: string | (() => string), stackCrawlMark?: AnyFunction): asserts expression;
export declare function assertEqual<T>(a: T, b: T, msg?: string, msg2?: string, stackCrawlMark?: AnyFunction): void;
export declare function assertLessThan(a: number, b: number, msg?: string, stackCrawlMark?: AnyFunction): void;
export declare function assertLessThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void;
export declare function assertGreaterThanOrEqual(a: number, b: number, stackCrawlMark?: AnyFunction): void;
export declare function checkDefined<T>(value: T | null | undefined, message?: string, stackCrawlMark?: AnyFunction): T;
export declare function assertIsDefined<T>(value: T, message?: string, stackCrawlMark?: AnyFunction): asserts value is NonNullable<T>;
export declare function assertNever(_member: never, message?: string, stackCrawlMark?: AnyFunction): never;
//# sourceMappingURL=debug.d.ts.map