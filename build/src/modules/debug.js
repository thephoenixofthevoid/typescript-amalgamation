export function fail(message, stackCrawlMark) {
    debugger;
    const e = new Error(message ? `Debug Failure. ${message}` : "Debug Failure.");
    if (Error.captureStackTrace) {
        Error.captureStackTrace(e, stackCrawlMark || fail);
    }
    throw e;
}
export function assert(expression, message, verboseDebugInfo, stackCrawlMark) {
    if (!expression) {
        message = message ? `False expression: ${message}` : "False expression.";
        if (verboseDebugInfo) {
            message += "\r\nVerbose Debug Information: " + (typeof verboseDebugInfo === "string" ? verboseDebugInfo : verboseDebugInfo());
        }
        fail(message, stackCrawlMark || assert);
    }
}
export function assertEqual(a, b, msg, msg2, stackCrawlMark) {
    if (a !== b) {
        const message = msg ? msg2 ? `${msg} ${msg2}` : msg : "";
        fail(`Expected ${a} === ${b}. ${message}`, stackCrawlMark || assertEqual);
    }
}
export function assertLessThan(a, b, msg, stackCrawlMark) {
    if (a >= b) {
        fail(`Expected ${a} < ${b}. ${msg || ""}`, stackCrawlMark || assertLessThan);
    }
}
export function assertLessThanOrEqual(a, b, stackCrawlMark) {
    if (a > b) {
        fail(`Expected ${a} <= ${b}`, stackCrawlMark || assertLessThanOrEqual);
    }
}
export function assertGreaterThanOrEqual(a, b, stackCrawlMark) {
    if (a < b) {
        fail(`Expected ${a} >= ${b}`, stackCrawlMark || assertGreaterThanOrEqual);
    }
}
export function checkDefined(value, message, stackCrawlMark) {
    assertIsDefined(value, message, stackCrawlMark || checkDefined);
    return value;
}
export function assertIsDefined(value, message, stackCrawlMark) {
    // eslint-disable-next-line no-null/no-null
    if (value === undefined || value === null) {
        fail(message, stackCrawlMark || assertIsDefined);
    }
}
export function assertNever(_member, message = "Illegal value:", stackCrawlMark) {
    const detail = "No"; //typeof member === "object" && hasProperty(member, "kind") && hasProperty(member, "pos") && formatSyntaxKind ? "SyntaxKind: " + formatSyntaxKind((member as Node).kind) : JSON.stringify(member);
    return fail(`${message} ${detail}`, stackCrawlMark || assertNever);
}
//# sourceMappingURL=debug.js.map