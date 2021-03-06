module.exports = {
    name: 'common',
    before: (ctx) => {
        if (ctx.action.name === "create") {
            const allowedSpesies = ['kucing', 'anjing', 'kelinci'];
            const spesies = ctx.payload?.body?.spesies;
    
            if (!allowedSpesies.includes(spesies)) {
                throw new Error('Spesies not valid');
            }
        }
        // validator
        // if (ctx.action.validator && typeof ctx.action.validator === 'object') {
        //     const validate = (new Validator()).compile(ctx.action.validator);
        //     const isValid = validate(ctx.payload);
        //     if (isValid !== true) {
        //         ctx.status = 400;
        //         throw new Error(JSON.stringify(isValid));
        //     }
        // }
    },
    after: (ctx, response) => {
        ctx.response = {
            message: ctx.action.responseMessage,
            [ctx.action.resultName || 'result']: response,
        }
    },
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
