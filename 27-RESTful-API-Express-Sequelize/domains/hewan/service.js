const repositoryHewan = require('./repository');

module.exports = {
    name: 'hewan',
    actions: {
        getAll: {
            method: "get",
            path: "/",
            handler: async (ctx) => {
                const result = await repositoryHewan.get();
                return result;
            }
        },
        getById: {
            method: "get",
            path: "/:id",
            handler: async (ctx) => {
                const hewan = await repositoryHewan.getById(Number(ctx.payload.params.id));
                if (!hewan) {
                    throw new Error('id not exist');
                }
                return [hewan];
            }
        },
        create: {
            method: "post",
            path: "/",
            handler: async (ctx) => {
                const hewan = await repositoryHewan.create(ctx.payload.body);
                return hewan;
            }
        },
        editById: {
            method: "put",
            path: "/:id",
            handler: async (ctx) => {
                if (!ctx.payload?.params?.id) {
                    throw new Error("id not exist")
                }
                const id = Number(ctx.payload.params.id);
                await repositoryHewan.edit(id, ctx.payload.body);
                const hewan = repositoryHewan.getById(id);
                return hewan
            }
        },
        deleteById: {
            method: "delete",
            path: "/:id",
            handler: async (ctx) => {
                if (!ctx.payload?.params?.id) {
                    throw new Error("id not exist")
                }
                const id = Number(ctx.payload.params.id);
                await repositoryHewan.delete(id);
                return {
                    message: `Hewan with id ${id} was deleted successfully`
                };
            }
        }
    }
}
