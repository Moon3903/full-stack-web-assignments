const bcrypt = require('bcryptjs');

const users = [
    { id: 1, username: 'ryanudin18', password: "eyegiged" }
]

const hashThePassword = (raw) => {
    const hash = bcrypt.hashSync(raw, 8);
    return hash;
}
  
module.exports = {
    register: (username, passwordRaw) => {
        const newUser = {};
        newUser.id = users[users.length - 1].id + 1;
        newUser.username = username;
        newUser.password = hashThePassword(passwordRaw);
        users.push(newUser);
        return {...newUser, password: undefined};
    },
    login: (username, passwordRaw) => {
        const user = users.find((o) => o.username === username);
        if (!user) {
            return false;
        }
        const { password: passwordHashed } = user;
        const isPasswordCorrect = bcrypt.compareSync(passwordRaw, passwordHashed);
        return isPasswordCorrect;
    }
}
