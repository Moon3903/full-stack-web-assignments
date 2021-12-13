module.exports = {
    name: 'common',
    // before: (ctx) => {
    //     // validator
    //     if (ctx.action.validator && typeof ctx.action.validator === 'object') {
    //         const validate = (new Validator()).compile(ctx.action.validator);
    //         const isValid = validate(ctx.payload);
    //         if (isValid !== true) {
    //             ctx.status = 400;
    //             throw new Error(JSON.stringify(isValid));
    //         }
    //     }
    // },
    // after: (ctx, response) => {
    //     // serialize response
    //     ctx.response = {
    //         message: `success ${ctx.action.name} ${ctx.service.name}`,
    //         result: response,
    //     }
    // },
    onError: (ctx, err) => {
        let message = err.message;
        try {
            message = JSON.parse(err.message);
        } catch (error) {
            // do nothing
        }
        return {
            message: `failed to ${ctx.action.name} ${ctx.service.name}`,
            status: ctx.status,
            actionName: `${ctx.service.name}.${ctx.action.name}`,
            result: message
        };
    }
}
