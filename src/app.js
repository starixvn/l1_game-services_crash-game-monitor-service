import cron from "cron";
import http from "http";
import { gameConfigs, init as initBaseDatabase } from "sc-base-database";
import { logger, middlewares } from "sc-common";
import appConfigs from "./app-configs";
import express from "express";
import { MonitorHandler } from "./monitor/monitor-handler";

const run = async () => {
    const app = express();

    app.set("port", process.env.PORT || appConfigs.hostingPort);

    app.get("/", (req, res, next) => {
        res.send(`I'm Crash Game Monitor Service. You'd better not touch me, babe!`);
    });

    const httpServer = http.createServer(app);

    middlewares.processErrorHandler.handle(httpServer, process);

    appConfigs.enabledLogs && logger.start(appConfigs.sentry);

    await initBaseDatabase(appConfigs.database);

    const crashGames = await gameConfigs.find({ type: 5 }).lean().exec();

    const monitor = new MonitorHandler();
    crashGames.forEach((gameConfig) => monitor.register(gameConfig.displayName.replace(/ /g, ""), gameConfig.gameId));

    new cron.CronJob(
        `*/${appConfigs.intervalTime / 60_000} * * * *`,
        () => monitor.checkAllModel(),
        () => {
            logger.logError("cors job unexpectedly stopped");
            job.start();
        }
    ).start();

    httpServer.listen(app.get("port"), async () => {
        console.log(`Express server started and running on port ${app.get("port")}!`);
    });
};

run();
