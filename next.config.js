const { analyticsHandler } = require("website-tracking-analyzer");

module.exports = {
    async rewrites() {
        return [
            {
                source: "/api/analytics",
                destination: analyticsHandler, // Route directly to the built-in handler
            },
        ];
    },
};
