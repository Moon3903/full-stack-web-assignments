const res = require("express/lib/response");
const repositoryHewan = require("./repository");
const validatorHewan = require("./validator");

module.exports = {
  name: "hewan",
  // mixins: [commonMixin],
  actions: {
    getAll: {
      method: "get",
      path: "/",
      handler: (ctx) => {
        const result = repositoryHewan.get();
        return {
          message: "success get data",
          hewan: result,
        };
      },
    },
    getById: {
      method: "get",
      path: "/:id",
      handler: (ctx) => {
        const hewan = repositoryHewan.getById(Number(ctx.payload.params.id));
        if (!hewan) {
          throw new Error("id not exist");
        }
        return {
          message: "success get data Pet",
          hewanFilter: [hewan],
        };
      },
    },
    create: {
      method: "post",
      path: "/",
      handler: (ctx) => {
        const hewan = repositoryHewan.create(ctx.payload.body);
        return {
          message: "success adding one Pet",
          hewan,
        };
      },
    },
    editById: {
      method: "put",
      path: "/:id",
      handler: (ctx) => {
        if (!ctx.payload?.params?.id) {
          throw new Error("id not exist");
        }
        const hewan = repositoryHewan.edit(
          Number(ctx.payload.params.id),
          ctx.payload.body
        );
        return {
          message: "success updating one Pet",
          hewan,
        };
      },
    },
    editById: {
      method: "delete",
      path: "/:id",
      handler: (ctx) => {
        if (!ctx.payload?.params?.id) {
          throw new Error("id not exist");
        }
        const hewan = repositoryHewan.delete(Number(ctx.payload.params.id));
        return {
          message: "success deleting one Pet",
          hewan,
        };
      },
    },
  },
};
