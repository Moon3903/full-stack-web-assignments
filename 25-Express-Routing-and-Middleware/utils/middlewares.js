const beforeOrAfterErrorHandler = async (ctx, err, res, { action, service, mixins }) => {
    let errorResponse = err;
    let thereIsOnErrorHandler = 0;

    if (action.onError && typeof action.onError === "function") {
        errorResponse = await action.onError(ctx, errorResponse);
        thereIsOnErrorHandler++;
    }
    if (service.onError && typeof service.onError === "function") {
        errorResponse = await service.onError(ctx, errorResponse);
        thereIsOnErrorHandler++;
    }
    for (const mixin of mixins) {
        if (mixin.onError && typeof mixin.onError === "function") {
            errorResponse = await mixin.onError(ctx, errorResponse);
            thereIsOnErrorHandler++;
        }
    }
    if (thereIsOnErrorHandler > 0) {
        res.status(errorResponse.status || 500).send(errorResponse);
        return;
    }
    res.status(ctx.status || 500).send({ error: err.message });
    return;
}

const middlewareDefault = (req, res, next) => next();

const middlewareBeforeAfter = (services, serviceType, middlewareType) => async (req, res, next) => {
    const { ctx, response } = res.locals;
    try {
        const obj = services[serviceType];
        if (Array.isArray(obj)) {
            for (const o of obj) {
                if (o[middlewareType]) {
                    if (middlewareType === 'after') {
                        await o.after(ctx, response);
                    } else {
                        await o.before(ctx);
                    }
                    res.locals.ctx = ctx;
                    res.locals.response = ctx.response;
                }
            }
        } else if (obj[middlewareType]) {
            if (middlewareType === 'after') {
                await obj.after(ctx, response);
            } else {
                await obj.before(ctx);
            }
            res.locals.ctx = ctx;
            res.locals.response = ctx.response;
        }
        next();
    } catch (error) {
        await beforeOrAfterErrorHandler(ctx, error, res, services);
        return;
    }
};

const middlewareMain = (types) => async (req, res, next) => {
    const { ctx } = res.locals;
    try {
        const response = await types.action.handler(ctx);
        ctx.response = response;
        res.locals.ctx = ctx;
        res.locals.response = response;
        next();
    } catch (error) {
        await beforeOrAfterErrorHandler(ctx, error, res, types);
        return;
    }
};

const middlewareAuth = (ctx) => {
    // get jwt from req.headers.authentication
    // check jwt
    next();
};

module.exports = {
    middlewareDefault,
    middlewareBeforeAfter,
    middlewareMain,
    middlewareAuth
}