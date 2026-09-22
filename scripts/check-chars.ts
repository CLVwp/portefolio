// ponytail: raw-text scan of src/, no AST. Promote to a Biome GritQL plugin if
// comment/string precision is ever needed.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const FORBIDDEN: Record<string, string> = {
  "—": "em dash - use '-', '·', ',' or ':' depending on context",
};

function* walk(dir: string): Generator<string> {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) yield* walk(join(dir, entry.name));
    else yield join(dir, entry.name);
  }
}

const hits: string[] = [];
for (const file of walk("src")) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const [char, hint] of Object.entries(FORBIDDEN)) {
        if (line.includes(char)) hits.push(`${file}:${i + 1}: ${hint}`);
      }
    });
}

if (hits.length > 0) {
  console.error(hits.join("\n"));
  process.exit(1);
}
