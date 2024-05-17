export default {
    hostingPort: 5000,
    enabledLogs: true,
    database: {
        url: "mongodb://lmn_backend:LmnBackend%4022027@10.99.99.53:39220,10.99.99.54:39220,10.99.99.188:39220,10.99.99.187:39220/?replicaSet=SabaL2UAT&appName=crashgame",
        options: {
            dbName: "minigame",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auto_reconnect: true,
        },
    },
    sentry: {
        sentryUrl: "http://8ac47fca6d3e4a41908896a64ef201ac@10.2.190.51:9009/53",
        logIdentifier: "crash-game-monitor",
        env: "UAT",
    },
    intervalTime: 300_000,
    maxDeltaTime: 200,
};
