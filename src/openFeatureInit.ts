// src/openFeatureInit.ts

import { OpenFeature, Client } from '@openfeature/js-sdk'; // Correct import for OpenFeature
import { FlagdProvider } from '@openfeature/flagd-provider'; // Correct import for FlagdProvider

export const initFeatureFlags = () => {
  // Initialize the FlagdProvider with appropriate config
  const flagdProvider = new FlagdProvider({
    host: process.env.FLAGD_URL || 'localhost', // Use environment variable or default
    port: 8013, // Port for flagd
  });

  // Temporarily cast the provider to bypass type check
  OpenFeature.setProvider(flagdProvider as unknown as any);

  const client: Client = OpenFeature.getClient();

  // Example feature flag usage
  client
    .getBooleanValue('welcome', false)
    .then((flagValue: boolean) => {
      console.log(`Feature flag 'welcome' is set to ${flagValue}`);
    })
    .catch((error: Error) => {
      console.error(`Error resolving flag: ${error.message}`);
    });
};
