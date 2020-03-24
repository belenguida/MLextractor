const parser = require('./parser');
const fs = require('fs');
const pdf = require('pdf-parse');

function displaySkills(req, response){
    const MonkeyLearn = require('monkeylearn')

    const ml = new MonkeyLearn('')
    let model_id = ''

    //let data = ['First text', {text: 'the meeting is at 10 AM', external_id: 'ANY_ID'}, '']
    let dataBuffer = fs.readFileSync('./cv2.pdf');
 //.split('\n') 

    pdf(dataBuffer).then(function(data) {

        console.log(typeof data.text);
        //let content = [ data.text ];
        let text = data.text.split('\n');
        let content = text.filter(item => item.length > 1);

        ml.extractors.extract(model_id, content).then(res => {
            response.writeHead(200, {'content-type': 'application/json'});
            response.end(JSON.stringify(res.body, null, 2));
        }).catch(function(error){
            console.log(error);
        })
    })
    .catch(function(error){
        console.log(error);
    })
}


module.exports = { displaySkills };