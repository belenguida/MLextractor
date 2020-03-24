const fs = require('fs');
const pdf = require('pdf-parse');

function parsePdf(req, res){
let dataBuffer = fs.readFileSync('./cv.pdf');
 
pdf(dataBuffer).then(function(data) {
         res.writeHead(200, {'content-type': 'text/plain'});
        res.end(data.text);
})
.catch(function(error){
    console.log(error);
})
}

function pdfContent(){
    let dataBuffer = fs.readFileSync('./cv.pdf');
 
    pdf(dataBuffer).then(function(data) {
        return data.text;
    })
    .catch(function(error){
        console.log(error);
    })
}

module.exports = {parsePdf, pdfContent}