var http = require('http');

/*function requestCallbackFunction (req, res) {
  // if(req.url === '/favicon.ico') {
  //   console.log('Favicon was requested');
  // } else {
    console.log('hello');
  // }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}
*/
var server = http.createServer(
  function(req, res){
    //RES는 웹에서 요청 내용
     if(req.url === '/favicon.ico') {
       //URL로 요청이 들어왔으면
     console.log('Favicon was requested');
    } else {
      console.log('hello');
   }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }
); //이게다 콜백함수이다.

server.listen(8080);
