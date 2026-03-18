export const config = {

  runner: 'local',
  
  specs: [
    './features/**/*.feature'
  ],
  
  exclude: [],
  
  maxInstances: 1,
  
  capabilities: [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Galaxy S21+ 5G',
  'appium:platformVersion': '14',
  'appium:udid': '',
  'appium:uiautomator2ServerLaunchTimeout': 90000,
  'appium:appPackage': 'com.sec.android.app.popupcalculator',
  // try short activity form and add wait settings to help Appium find the activity
  'appium:appActivity': '.Calculator',
  'appium:appWaitActivity': 'com.sec.android.app.popupcalculator.*',
  'appium:appWaitPackage': 'com.sec.android.app.popupcalculator',
  'appium:autoGrantPermissions': true,
  'appium:noReset': true,
  //'appium:newCommandTimeout': 300
}],
  
  logLevel: 'info',
  
  bail: 0,
  
  baseUrl: '',
  
  waitforTimeout: 10000,
  
  connectionRetryTimeout: 120000,
  
  //connectionRetryCount: 3,
  
  services: [],
  
  framework: 'cucumber',
  
  reporters: ['spec'],
  
  cucumberOpts: {
    require: ['./features/step_definitions/**/*.ts'],
    // Fail when step definitions are undefined so it's obvious when they aren't loaded
    ignoreUndefinedDefinitions: false,
    timeout: 60000,
    format: ['pretty'],
    // Rely on autoCompileOpts to handle TypeScript compilation to avoid loading
    // ts-node/register in the wrong process and creating multiple Cucumber instances
  },

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  },
  
  protocol: 'https',
  hostname: 'demo.sample.com',
  port: 443,
  path: 'xyz/wd/hub'
  
}
