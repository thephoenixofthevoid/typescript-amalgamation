import { Comparison } from "./types";
export declare const versionRegExp: RegExp;
export declare const prereleaseRegExp: RegExp;
export declare const buildRegExp: RegExp;
export declare const numericIdentifierRegExp: RegExp;
export declare class Version {
    static readonly zero: Version;
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    readonly prerelease: readonly string[];
    readonly build: readonly string[];
    constructor(text: string);
    constructor(major: number, minor?: number, patch?: number, prerelease?: string, build?: string);
    static tryParse(text: string): Version | undefined;
    compareTo(other: Version | undefined): Comparison;
    increment(field: "major" | "minor" | "patch"): Version;
    toString(): string;
}
/**
 * Describes a semantic version range, per https://github.com/npm/node-semver#ranges
 */
export declare class VersionRange {
    private _alternatives;
    constructor(spec: string);
    static tryParse(text: string): VersionRange | undefined;
    test(version: Version | string): boolean;
    toString(): string;
}
//# sourceMappingURL=semver.d.ts.map