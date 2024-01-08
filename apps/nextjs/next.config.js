import pkg from "webpack";

// Importing env files here to validate on build
import "./src/env.js";
import "@acme/auth/env";

const { DefinePlugin } = pkg;

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@acme/api",
    "@acme/app",
    "@acme/auth",
    "@acme/db",
    "@acme/ui",
    "@acme/validators",
    "react-native",
    "solito",
    "moti",
    "react-native-reanimated",
    "nativewind",
    "react-native-css-interop",
    "react-native-gesture-handler",
  ],
  webpack(config, options) {
    // Mix in aliases
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Alias direct react-native imports to react-native-web
      "react-native$": "react-native-web",
      // Alias internal react-native modules to react-native-web
      "react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$":
        "react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter",
      "react-native/Libraries/vendor/emitter/EventEmitter$":
        "react-native-web/dist/vendor/react-native/emitter/EventEmitter",
      "react-native/Libraries/EventEmitter/NativeEventEmitter$":
        "react-native-web/dist/vendor/react-native/NativeEventEmitter",
    };

    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...(config.resolve?.extensions ?? []),
    ];

    if (!config.plugins) {
      config.plugins = [];
    }

    // Expose __DEV__ from Metro.
    config.plugins.push(
      new DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      }),
    );

    return config;
  },

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
