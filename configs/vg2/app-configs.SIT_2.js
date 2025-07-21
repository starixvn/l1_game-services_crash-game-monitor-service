export default {
    hostingPort: 5000,
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend%40517@172.16.4.111:32301/?replicaSet=SabaL2SIT&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    sentry: {
        sentryUrl: "http://8ac47fca6d3e4a41908896a64ef201ac@10.2.190.51:9009/53",
        logIdentifier: "crash-game-monitor",
        env: "SIT_2",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
