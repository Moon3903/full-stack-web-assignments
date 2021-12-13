const {
    middlewareDefault,
    middlewareBeforeAfter,
    middlewareMain
} = require("./middlewares");

const buildService = ({ schema: service }) => {
    const router = require('express').Router();
    const handlerNames = Object.keys(service.actions);
    handlerNames.forEach((actionName) => {
        const action = { name: actionName, ...service.actions[actionName] };

        // mixin builder
        const mixinBefores = service.mixins && Array.isArray(service.mixins)
            ? service.mixins.map((_) => middlewareBeforeAfter(
                { action, service, mixins: service.mixins || [] },
                'mixins',
                'before'
            ))
            : [middlewareDefault];
        const mixinAfters = service.mixins && Array.isArray(service.mixins)
            ? service.mixins.map((_) => middlewareBeforeAfter(
                { action, service, mixins: service.mixins || [] },
                'mixins',
                'after'
            ))
            : [middlewareDefault];

        // actions registration
        router[action.method](
            action.path,

            // START
            (req, res, next) => {
                const ctx = {
                    user: {},
                    service,
                    action,
                    payload: {
                        query: req.query,
                        params: req.params,
                        body: req.body,
                    }
                };
                res.locals.ctx = ctx;
                next();
            },

            // CREATED
            // created && typeof service.before === 'function'
            //     ? async (req, res, next) => {

            //     } : middlewareDefault,

            // AUTH [SOON]
            // action.secure === false ? defaultAction : authAction,

            // BEFORES
            ...mixinBefores,
            service.before && typeof service.before === 'function'
                ? middlewareBeforeAfter(
                    { action, service, mixins: service.mixins || [] },
                    'service',
                    'before'
                )
                : middlewareDefault,
            action.before && typeof action.before === 'function'
                ? middlewareBeforeAfter(
                    { action, service, mixins: service.mixins || [] },
                    'action',
                    'before'
                )
                : middlewareDefault,

            // == MAIN ==
            middlewareMain({ action, service, mixins: service.mixins || [] }),

            // AFTERS
            action.after && typeof action.after === 'function'
                ? middlewareBeforeAfter(
                    { action, service, mixins: service.mixins || [] },
                    'action',
                    'after'
                )
                : middlewareDefault,
            service.after && typeof service.after === 'function'
                ? middlewareBeforeAfter(
                    { action, service, mixins: service.mixins || [] },
                    'service',
                    'after'
                )
                : middlewareDefault,
            ...mixinAfters,

            // DONE
            (req, res) => {
                const { response } = res.locals;
                res.status(200).send(response);
            }
        );
    });
    return router;
}

module.exports = {
    buildService
}
