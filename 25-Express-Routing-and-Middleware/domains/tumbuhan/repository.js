const tumbuhan = [
    { id: 1, nama: 'Kaktus' },
    { id: 2, nama: 'Beringin' },
    { id: 3, nama: 'Kelapa' }
]
  
module.exports = {
    get: () => {
        return tumbuhan;
    },
    checkUnique: (nama) => {
        const isExist = tumbuhan.find((o) => o.nama === nama);
        return isExist;
    },
    create: (payload) => {
        const newTumbuhan = {};
        newTumbuhan.id = tumbuhan[tumbuhan.length - 1].id + 1;
        tumbuhan.push({ ...newTumbuhan, ...payload });
        return tumbuhan;
    }
}
