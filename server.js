const http = require('http');
const file = require('fs');

const server = http.createServer((req, res) => {
    console.log('run request ...');
    // res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200, {'ContentType' : 'aplication/json'});
    // var doituong = {
    //     ten: 'long',
    //     nghenghiep: 'develop',
    //     quequan:'nam dinh'
    // };
    // var docLuong = file.createReadStream(__dirname + '/index.html', 'utf-8');
    // docLuong.pipe(res);

    // res.end(JSON.stringify(doituong));

    //bai2;
    console.log('nguoi dung yeu cau link: ' + req.url);
    if (req.url === '/' || req.url === '/home') {
        bai2(req, res, 'text/html', 'index.html');
    }
    else if (req.url === '/login') {
        bai2(req, res, 'text/html', 'login.html');
    }
    else if (req.url === '/register') {
        // bai2(req, res, 'aplication/json', 'login.html');
        var doiTuong = {
            ten: 'long',
            quequan: 'nam dinh',
            nghenghiep: 'dong nat',
            tuoi: '100'
        };
        res.end(JSON.stringify(doiTuong));
    }
});

function bai2(req, res, contentType, page) {
    res.writeHead(200, { 'ContentType': contentType });
    file.createReadStream(__dirname + '/' + page, 'utf-8').pipe(res);
}

server.listen(8808, 'localhost', () => {
    console.log('Node.JS server is running on port: 8808');
});