const repositoryTumbuhan = require('./repository');
const validatorTumbuhan = require('./validator');

const commonMixin = require('../../mixins/common');

module.exports = {
    name: 'tumbuhan',
    mixins: [commonMixin],
    actions: {
        getAll: {
            method: "get",
            path: "/",
            handler: (ctx) => {
                const tumbuhan = repositoryTumbuhan.get();
                return tumbuhan;
            }
        },
        create: {
            method: "post",
            path: "/",
            validator: validatorTumbuhan.create,
            handler: (ctx) => {
                const isNamaExist = repositoryTumbuhan.checkUnique(ctx.payload.body.nama);
                if (isNamaExist) {
                    ctx.status = 400;
                    throw new Error('Nama sudah ada');
                }
                const tumbuhan = repositoryTumbuhan.create(ctx.payload.body);
                return tumbuhan;
            }
        }
    }
}
