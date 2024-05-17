export default {
    hostingPort: 5000,
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend@10.10.50.13:37101/?replicaSet=L2Local&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "https://acb36eb835d948d68c1aad9873754d51@sentry.lumigame.com/27",
        logIdentifier: "crash-game-monitor",
        env: "LOCAL",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
