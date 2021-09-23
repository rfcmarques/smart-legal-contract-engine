let fs = require('fs');
let {render} = require('mustache');

let template = fs.readFileSync('./data/text/grammar.tem.md', 'utf-8')

let contractJSON = {
    provider: 'Senhor Provider',
    providerNIF: '1111111',
    providerRep: 'Rep Provider',
    providerAddress: 'Rua',
    client: 'Senhor Cliente',
    clientNIF: '2222222',
    clientRep: 'Client Rep',
    clientAddress: 'Outra Rep',
    inicialDate: '23/09/2021',
    contractDuration: '3 months',
    serviceCost: '1000 EUR',
    minPoints: 50,
    lowPoints: 75,
    midPoints: 85,
    highPoints: 95,
    maxPoints: 95,
    highPercentage: 50,
    midPercentage: 80,
    lowPercentage: 90
};

let output = render(template,contractJSON)
fs.writeFileSync('./example.md', output)