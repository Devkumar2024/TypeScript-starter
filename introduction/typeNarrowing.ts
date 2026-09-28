function getChai(kind: string | number) {
  // number or string guaranteed
  if (typeof kind === "string") console.log(`string`);
  else console.log(`number`);
}

// optional
function serveService(msg?: string) {
  if (msg) console.log(`${msg} exists`);
  else console.log(`no msg`);
}
