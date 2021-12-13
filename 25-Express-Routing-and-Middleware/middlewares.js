// SOON DEPRECATED

module.exports = {
    logger: (req, res, next) => {
        console.log(`[${new Date().toString()}] ${req.method} "${req.url}": ${JSON.stringify(req.headers["user-agent"])}`);
        next();
    },
    serializer: (req, res, next) => {
        const { result } = res.locals;
        result.message = `success ${req.method} ${req.url}`;
        res.send(result);
    },
}
