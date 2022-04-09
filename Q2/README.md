# Q2. Explain the concept of URL module in Node.js?

The URL module in Node.js splits up a web address into readable parts. Then parse an address with the ```url.parse()``` method, and it will return a URL object with each part of the address as properties.

```javascript
import url from 'url'

const adr = 'https://www.google.com?aaa=123';
const q = url.parse(adr, true);

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

const qdata = q.query
console.log(qdata.aaa)
```

Output:

```
www.google.com
/
?aaa=123
123
```