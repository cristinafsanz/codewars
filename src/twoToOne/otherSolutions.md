Más votado:

```
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
```

Otros:

```
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
```