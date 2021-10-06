const Engine = require('@accordproject/cicero-engine').Engine;
const instatiate = require('./instatiate');

const triggerClause = async (id, req, state) => {
    try {
        const clause = await instatiate.instantiateClause(id);
        if (clause) {
            const engine = new Engine();
            const result = await engine.trigger(clause, req, state);
            return result
        } else {
            return {
                error: 'There was an error while parsing that clause'
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    triggerClause
}