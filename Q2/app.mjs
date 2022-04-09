import url from 'url'

const adr = 'https://www.google.com?aaa=123';
const q = url.parse(adr, true);

console.log(q.host)
console.log(q.pathname)
console.log(q.search)

const qdata = q.query
console.log(qdata.aaa)