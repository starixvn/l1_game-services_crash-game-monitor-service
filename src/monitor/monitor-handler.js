import appConfigs from "../app-configs";
import { logger } from "sc-common";
import liveGameLogs from "../models/live-game-logs";

export class MonitorHandler {
    models = {};

    register(model, gameId) {
        this.models[gameId] = model;
    }

    async checkAllModel() {
        console.log(`checking ${new Date()}`);

        return Promise.all(Object.keys(this.models).map((key) => this.checkLazyEvent(this.models[key])));
    }

    async checkLazyEvent(model) {
        const liveLogs = await this.getLatestLiveTime(liveGameLogs(model));
        const delayEvents = this.getDelayEvents(liveLogs);

        if (Object.keys(delayEvents).length > 0) {
            logger.logError(`${model} - Max Delay Time On Round \n${JSON.stringify(delayEvents, undefined, 2)}`);
        }
    }

    getLatestLiveTime(model) {
        return model
            .find({ time: { $gt: new Date() - appConfigs.intervalTime } }, { _id: false, _v: false })
            .sort({ time: 1 })
            .lean()
            .exec();
    }

    getDelayEvents(liveLogs) {
        return liveLogs.reduce((rs, acc, index) => {
            const nextEvent = liveLogs[index + 1];
            const deltaTime = nextEvent?.time - acc.time;

            if (nextEvent?.roundId == acc.roundId && deltaTime > appConfigs.maxDeltaTime) {
                if (!rs[nextEvent.roundId] || rs[nextEvent.roundId] < deltaTime) {
                    rs[nextEvent.roundId] = deltaTime;
                }
            }

            return rs;
        }, {});
    }
}
