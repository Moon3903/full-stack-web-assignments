const repository = require('./repository');
const { buildService } = require('../../libs/service');

module.exports = {
    repository,
    service: buildService({
        schema: require('./service')
    })
}
