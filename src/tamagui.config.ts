import { createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config-base";

const appConfig = createTamagui(config);

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
