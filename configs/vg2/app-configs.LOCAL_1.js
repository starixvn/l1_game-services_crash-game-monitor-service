export default {
    hostingPort: 5000,
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend@10.10.50.13:37104/?replicaSet=L2pLocal&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "https://8eb9632f2663e57c838ec83febbee14f@sentry-k8s.lumigame.com/4",
        logIdentifier: "crash-game-monitor",
        env: "LOCAL_1",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
