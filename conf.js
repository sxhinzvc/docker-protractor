exports.config = {
  framework: 'jasmine',
  specs: ['*.js'],
  capabilities: {
    browserName: 'chrome',
chromeOptions: {
      args: [
        "--headless",
        "--disable-gpu"
      ],
    },
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
