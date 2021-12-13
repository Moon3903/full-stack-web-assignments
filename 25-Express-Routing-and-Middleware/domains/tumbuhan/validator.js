module.exports = {
    create: {
        query: {
            type: 'object|optional',
        },
        params: {
            type: 'object|optional',
        },
        body: {
            type: 'object',
            props: {
                nama: {
                    type: "string", min: 3, max: 255
                }
            },
        }
    }
}
