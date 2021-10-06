const Template = require('@accordproject/cicero-core').Template;
const Clause = require('@accordproject/cicero-core').Clause;
const fs = require('fs');
const path = require('path')
const dataPath = path.join(__dirname, '../', '../data');
const config = require('../config');

const instantiateClause = async (id) => {
    const samplePath = path.join(__dirname, '../', config.samplePath(id));

    try {
        if (fs.existsSync(samplePath)) {
            const aod = await Template.fromDirectory(dataPath);

            const sample = fs.readFileSync(samplePath).toString();

            const clause = new Clause(aod);
            clause.parse(sample);

            let response = clause.toJSON();
            return clause;
        } else {
            return {
                error: 'The file that you tried to parse does not exist'
            }
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    instantiateClause
}