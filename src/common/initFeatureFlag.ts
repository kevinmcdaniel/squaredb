/** 
 * OpenFeature client is initiated.
 * As of now, no targetKey is provided but must be added in future.
 * The targetKey is the key that is used to identify the target.
 * As of now the flagd is run using local docker container.
*/

import { FlagdProvider } from "@openfeature/flagd-provider";
import { OpenFeature } from "@openfeature/server-sdk";
// import { logger } from "../app";

export const triggerFlagdProvider = () => {
    try {
        OpenFeature.setProvider(
            new FlagdProvider() // FlagdProvider is initiated, other host details will be added when flagd is run on other host.
        );   
    } catch (error) {
        // logger.error(`Error initiating the flagd provider: ${error}`);
    }
}


export const client = OpenFeature.getClient(); // OpenFeature client is initiated.
