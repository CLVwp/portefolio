// ponytail: one-off CV PDF text dump, delete after use
import { inflateSync } from "node:zlib";

const b = new Uint8Array(await Bun.file("cv.pdf").arrayBuffer());
const s = new TextDecoder("latin1").decode(b);
let out = "";
for (const m of s.matchAll(/stream\r?\n/g)) {
  const start = m.index! + m[0].length;
  const end = s.indexOf("endstream", start);
  try {
    out += new TextDecoder("latin1").decode(
      inflateSync(b.subarray(start, end)),
    );
  } catch {
    /* not flate */
  }
}
const texts: string[] = [];
for (const m of out.matchAll(/\((?:[^()\\]|\\.)*\)/g)) texts.push(m[0]);
console.log(texts.map((x) => x.slice(1, -1)).join("\n"));
