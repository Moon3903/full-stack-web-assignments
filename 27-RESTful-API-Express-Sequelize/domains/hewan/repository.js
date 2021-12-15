const { Hewan } = require("../../db/models");

module.exports = {
    get: async () => {
        const result = await Hewan.findAll();
        return result;
    },
    getById: async (id) => {
        const result = await Hewan.findByPk(id);
        return result;
    },
    create: async (payload) => {
        const result = await Hewan.create(payload);
        return result;
    },
    edit: async (id, payload) => {
        const result = await Hewan.update(payload, { where: { id } });
        return result;
    },
    delete: async (id) => {
        await Hewan.destroy({ where: { id } });
        return true;
    }
}
