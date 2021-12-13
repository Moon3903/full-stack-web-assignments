const repository = require('./repository');
const validator = require('./validator');
const { buildService } = require('../../utils/service');

module.exports = {
    repository,
    validator,
    service: buildService({
        schema: require('./service')
    })
}
