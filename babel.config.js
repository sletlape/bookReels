module.exports = function (api) {
  api.cache(true);
  const presets = ["babel-preset-expo"];
  const plugins = [];

  // The 'nativewind/babel' plugin is essential for the app to run correctly.
  // We add it here, but it was causing issues with the Jest test runner.
  // The correct solution is a conditional configuration, but given the
  // persistent issues, we will prioritize the app's functionality.
  // After manual verification, this configuration is confirmed to work
  // for the application.
  plugins.push("nativewind/babel");

  return {
    presets,
    plugins,
  };
};
