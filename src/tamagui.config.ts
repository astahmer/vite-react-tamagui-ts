import { createFont, createTamagui } from "@tamagui/core";
import { config } from "@tamagui/config-base";
// import { themes, tokens } from "@tamagui/theme-base";
// import { shorthands } from "@tamagui/shorthands";

const appConfig = createTamagui(config);

// https://tamagui.dev/docs/core/configuration
const interFont = createFont({
    family: "Inter, Helvetica, Arial, sans-serif",
    size: {
        1: 12,
        2: 14,
        3: 15,
        // ...
    },
    lineHeight: {
        1: 17,
        2: 22,
        3: 25,
        // ...
    },
    weight: {
        4: 300,
        6: 600,
    },
    letterSpacing: {
        4: 0,
        8: -1,
    },
    // you may also set `transform` as textTransform values
    // and `style` as fontStyle values
});

// const appConfig = createTamagui({
//     fonts: {
//         // for tamagui, heading and body are assumed
//         heading: interFont,
//         body: interFont,
//     },
//     themes,
//     tokens,
//     shorthands,
// });

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
    // overrides TamaguiCustomConfig so your custom types
    // work everywhere you import `tamagui`
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
