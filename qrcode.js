/**
 * Created by wikeLi on 2016/11/4.
 */
var qr = require('qr-image')
var path=require('path')
var express = require('express')
var app = express()
app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/create_qrcode', function (req, res, next) {
  var text = req.query.text;
  try {
    var img = qr.image(text, {size: 8});
    res.writeHead(200, {'Content-Type': 'image/png'});
    img.pipe(res);
  } catch (e) {
    res.writeHead(414, {'Content-Type': 'text/html'});
    res.end('<h1>414 Request-URI Too Large</h1>');
  }
})
app.listen(1818, function (err) {
  if (err) throw err
  console.log('访问1818端口');
})