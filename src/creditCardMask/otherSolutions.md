Más votado:

```
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
```

Votados por mí:

```
function maskify(cc) {
  return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
```

```
function maskify(cc) {
  var x = cc.length - 4;
  return x > 0 ? new Array(x + 1).join('#') + cc.slice(x) : cc;
}
```

```
function maskify(cc) {
  const len = cc.length - 4
  return len > 0 ? '#'.repeat(len) + cc.substr(len) : cc
}
```