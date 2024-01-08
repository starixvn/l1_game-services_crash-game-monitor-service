export default {
    hostingPort: 5000,
    database: {
        url: "mongodb://lmn_backend:LmnBackend%40517@10.99.99.187:27301/?replicaSet=SabaSIT&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    sentry: {
        sentryUrl: "http://52368c4019044019885440599c180bda@10.2.190.51:9009/24",
        logIdentifier: "crash-game-monitor",
        env: "SIT",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
