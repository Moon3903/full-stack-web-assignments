const hewan = [
  { id: 1, nama: "Snowy", spesies: "kucing" },
  { id: 2, nama: "Blacki", spesies: "anjing" },
  { id: 3, nama: "Molly", spesies: "kucing" },
  { id: 4, nama: "Milo", spesies: "kelinci" },
  { id: 5, nama: "Rere", spesies: "kucing" },
];

module.exports = {
  get: () => {
    return hewan;
  },
  getById: (id) => {
    return hewan.find((o) => o.id === id);
  },
  create: (payload) => {
    const newHewan = {};
    newHewan.id = hewan[hewan.length - 1].id + 1;
    hewan.push({ ...newHewan, ...payload });
    return hewan;
  },
  edit: (id, payload) => {
    const index = hewan.findIndex((o) => id === o.id);
    hewan[index] = { id, ...payload };
    return hewan;
  },
  delete: (id) => {
    const index = hewan.findIndex((o) => id === o.id);
    hewan.splice(index, 1);
    return hewan;
  },
};
