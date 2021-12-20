import * as esbuild from "esbuild";
import fs from "fs";

const f = "test.ts";
const result = await esbuild.transform(fs.readFileSync(`src/${f}`, "utf-8"), {
  loader: f.endsWith(".tsx") ? "tsx" : "ts",
  format: "cjs",
  // This triggers the bug: Comment out the following line and the HTML report works as expected.
  // If you change it to `sourcemap: "external"` the report works but the sourcemap is not used
  // and the stack traces show the transpiled code.
  sourcemap: "inline",
  target: "es2018",
  sourcefile: `../src/${f}`,
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  keepNames: true,
});
if (!fs.existsSync("build")) {
  fs.mkdirSync("build");
}
fs.writeFileSync(`build/${f.replace(".ts", ".js")}`, result.code);
