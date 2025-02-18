export default {
    hostingPort: 5000,
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend@10.10.50.12:39100,10.10.50.13:39100,10.10.50.14:39100/?replicaSet=L1Local&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "https://50e405ebce7003a0e1edbda2bf28b14c@sentry-k8s.lumigame.com/3",
        logIdentifier: "crash-game-monitor",
        env: "LOCAL",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
