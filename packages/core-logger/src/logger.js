const path = require('path')
const flatMapDeep = require('lodash/flatMapDeep')

class Logger {
  async init (hook, driver, app) {
    this.driver = await require(driver).plugin.init(app.config.plugins[hook][driver])

    return this
  }

  error (message) {
    return this.driver.error(message)
  }

  warning (message) {
    return this.driver.warning(message)
  }

  info (message) {
    return this.driver.info(message)
  }

  debug (message) {
    return this.driver.debug(message)
  }

  printTracker (title, current, max, posttitle, figures = 0) {
    this.driver.printTracker(title, current, max, posttitle, figures)
  }

  stopTracker (title, current, max) {
    this.driver.stopTracker(title, current, max)
  }
}

module.exports = new Logger()
