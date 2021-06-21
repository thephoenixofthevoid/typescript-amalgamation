const path = require("path")
const fs = require("fs")
const { exit } = require("process")


if (process.argv.length > 3) {
    throw new Error("Should be 1 argument -- path to TS repo (v4.3.2)")
}
if (process.argv.length == 2) {
    console.log("Usage:")
    console.log(" $ git clone --depth 1 --branch v4.3.2 https://github.com/microsoft/TypeScript.git")
    console.log(` $ ${process.argv[0]} ${process.argv[1]} ./TypeScript`)
    process.exit(0)
}

const REPO_PATH = process.argv[2];
const INFO_PATH = path.join(REPO_PATH, "./package.json")

try {
    let package = JSON.parse(fs.readFileSync(INFO_PATH, "utf8"))
    if (package.name !== "typescript") {
        console.warn("Not a typescript")
        exit(1)
    }
    if (package.version !== "4.3.2") {
        console.warn("Not a typescript v4.3.2")
        exit(1)
    }
} catch {
    console.warn("Incorrect path")
    console.log("git clone --depth 1 --branch v4.3.2 https://github.com/microsoft/TypeScript.git")
}


const generated = path.join(REPO_PATH, "/src/compiler/diagnosticInformationMap.generated.ts")
if (!fs.existsSync(generated)) {
    console.warn("Please build the repository as usial for 1 time to get diagnosticInformationMap.generated.ts")
    console.warn("")
    console.warn(" $ cd " + REPO_PATH)
    console.warn(" $ npm install")
    console.warn(" $ npm run build")
    console.warn(" $ cd -")
    console.warn("")
    console.warn("Then restart this tool")
    exit(1)
}

const parts = [
    // "/src/shims/collectionShims.ts",
    "/src/compiler/corePublic.ts",
    "/src/compiler/core.ts",
    "/src/compiler/debug.ts",
    "/src/compiler/semver.ts",
    "/src/compiler/performanceCore.ts",
    "/src/compiler/performance.ts",
    "/src/compiler/perfLogger.ts",
    "/src/compiler/tracing.ts",
    "/src/compiler/types.ts",
    "/src/compiler/sys.ts",
    "/src/compiler/path.ts",
    "/src/compiler/diagnosticInformationMap.generated.ts",
    "/src/compiler/scanner.ts",
    "/src/compiler/utilitiesPublic.ts",
    "/src/compiler/utilities.ts",
    "/src/compiler/factory/baseNodeFactory.ts",
    "/src/compiler/factory/parenthesizerRules.ts",
    "/src/compiler/factory/nodeConverters.ts",
    "/src/compiler/factory/nodeFactory.ts",
    "/src/compiler/factory/emitNode.ts",
    "/src/compiler/factory/emitHelpers.ts",
    "/src/compiler/factory/nodeTests.ts",
    "/src/compiler/factory/utilities.ts",
    "/src/compiler/factory/utilitiesPublic.ts",
    "/src/compiler/parser.ts",
    "/src/compiler/commandLineParser.ts",
    "/src/compiler/moduleNameResolver.ts",
    "/src/compiler/binder.ts",
    "/src/compiler/symbolWalker.ts",
    "/src/compiler/checker.ts",
    "/src/compiler/visitorPublic.ts",
    "/src/compiler/sourcemap.ts",
    "/src/compiler/transformers/utilities.ts",
    "/src/compiler/transformers/destructuring.ts",
    "/src/compiler/transformers/taggedTemplate.ts",
    "/src/compiler/transformers/ts.ts",
    "/src/compiler/transformers/classFields.ts",
    "/src/compiler/transformers/es2017.ts",
    "/src/compiler/transformers/es2018.ts",
    "/src/compiler/transformers/es2019.ts",
    "/src/compiler/transformers/es2020.ts",
    "/src/compiler/transformers/es2021.ts",
    "/src/compiler/transformers/esnext.ts",
    "/src/compiler/transformers/jsx.ts",
    "/src/compiler/transformers/es2016.ts",
    "/src/compiler/transformers/es2015.ts",
    "/src/compiler/transformers/es5.ts",
    "/src/compiler/transformers/generators.ts",
    "/src/compiler/transformers/module/module.ts",
    "/src/compiler/transformers/module/system.ts",
    "/src/compiler/transformers/module/esnextAnd2015.ts",
    "/src/compiler/transformers/declarations/diagnostics.ts",
    "/src/compiler/transformers/declarations.ts",
    "/src/compiler/transformer.ts",
    "/src/compiler/emitter.ts",
    "/src/compiler/watchUtilities.ts",
    "/src/compiler/program.ts",
    "/src/compiler/builderStatePublic.ts",
    "/src/compiler/builderState.ts",
    "/src/compiler/builder.ts",
    "/src/compiler/builderPublic.ts",
    "/src/compiler/resolutionCache.ts",
    "/src/compiler/moduleSpecifiers.ts",
    "/src/compiler/watch.ts",
    "/src/compiler/watchPublic.ts",
    "/src/compiler/tsbuild.ts",
    "/src/compiler/tsbuildPublic.ts",
    "/src/executeCommandLine/executeCommandLine.ts",
    "/src/tsc/tsc.ts"
].map(subpath => {
    const fullpath = path.join(REPO_PATH, subpath)
    const content = fs.readFileSync(fullpath, "utf8")
    return content
    //const prefix  = `\n/**\n<file ${subpath}>\n**/\n`
    //const suffix  = `\n/**\n</file ${subpath}>\n**/\n`
    
    //const wrapped = `${prefix}${content}${suffix}`
    //return wrapped
})

parts[0] = parts[0]
        .replace("// Internet Explorer's Map doesn't support iteration, so don't use it.", "")
        .replace("// Internet Explorer's Set doesn't support iteration, so don't use it.", "")
        .replace("// eslint-disable-next-line no-in-operator", "")
        .replace("// eslint-disable-next-line no-in-operator", "")
        .replace('return typeof Map !== "undefined" && "entries" in Map.prototype && new Map([[0, 0]]).size === 1 ? Map : undefined;', "return Map")
        .replace('return typeof Set !== "undefined" && "entries" in Set.prototype && new Set([0]).size === 1 ? Set : undefined;', "return Set")

const lines = parts[1].split("\r\n")

lines.splice(2, 38, 
`    export const Map = NativeCollections.tryGetNativeMap()!`,
`    export const Set = NativeCollections.tryGetNativeSet()!`)


parts[1] = lines.join("\r\n")


parts.unshift(`/// <reference types="node"/>`)
parts.unshift(`/// <reference lib="es2015.iterable"/>`)
parts.unshift(`/// <reference lib="es2015.generator"/>`)
parts.unshift(`/// <reference lib="es5"/>`)
parts.unshift(`#!/usr/bin/env node`)

const amalgamation = parts.join("\n")

fs.writeFileSync("typescript.amalgamation.ts", amalgamation, "utf8")

console.log("Created typescript.amalgamation.ts")

require("child_process").spawnSync("tsc", [
    "--target", "es2018",
    "--strictNullChecks",
    "--strictPropertyInitialization",
    "--alwaysStrict",
    "--noImplicitAny",
    "--removeComments",
    "--extendedDiagnostics",
    "--moduleResolution", "node",
    "typescript.amalgamation.ts"
], { stdio: "inherit" })

// tsc 
console.log("Created typescript.amalgamation.js (works same as tsc after chmod +x)")
