// Loopback-only review proxy. Exercises CRR host routing without changing DNS.
const http=require('node:http');
const server=http.createServer((req,res)=>{
 const upstream=http.request({hostname:'127.0.0.1',port:3200,path:req.url,method:req.method,headers:{...req.headers,host:'ratereliefca.com'}},r=>{
  const headers={...r.headers,'content-security-policy':"default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self' http://127.0.0.1:3101 ws://localhost:3100 ws://localhost:3200; frame-src 'none'; object-src 'none'; form-action 'self'"};
  res.writeHead(r.statusCode,headers);r.pipe(res);
 });
 upstream.on('error',()=>{res.writeHead(502);res.end('Local Next preview is starting');});req.pipe(upstream);
});
server.listen(3100,'127.0.0.1',()=>console.log('Review http://localhost:3100 -> local Next :3200 with CRR host; no production requests.'));
