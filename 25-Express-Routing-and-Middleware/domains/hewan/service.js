const repositoryHewan = require('./repository');
const commonMixin = require('../../mixins/common');

module.exports = {
    name: 'hewan',
    mixins: [commonMixin],
    actions: {
        getAll: {
            responseMessage: "success get data",
            resultName: 'hewan',
            method: "get",
            path: "/",
            handler: (ctx) => {
                const result = repositoryHewan.get();
                return result;
            }
        },
        getById: {
            responseMessage: "success get data Pet",
            resultName: 'hewanFilter',
            method: "get",
            path: "/:id",
            handler: (ctx) => {
                const hewan = repositoryHewan.getById(Number(ctx.payload.params.id));
                if (!hewan) {
                    throw new Error('id not exist');
                }
                return [hewan];
            }
        },
        create: {
            responseMessage: "success adding one Pet",
            resultName: 'hewan',
            method: "post",
            path: "/",
            handler: (ctx) => {
                const hewan = repositoryHewan.create(ctx.payload.body);
                return hewan;
            }
        },
        editById: {
            responseMessage: "success updating one Pet",
            resultName: 'hewan',
            method: "put",
            path: "/:id",
            handler: (ctx) => {
                if (!ctx.payload?.params?.id) {
                    throw new Error("id not exist")
                }
                const hewan = repositoryHewan.edit(Number(ctx.payload.params.id), ctx.payload.body);
                return hewan
            }
        },
        deleteById: {
            responseMessage: "success deleting one Pet",
            resultName: 'hewan',
            method: "delete",
            path: "/:id",
            handler: (ctx) => {
                if (!ctx.payload?.params?.id) {
                    throw new Error("id not exist")
                }
                const hewan = repositoryHewan.delete(Number(ctx.payload.params.id));
                return hewan;
            }
        }
    }
}
