import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const packageJson = core.getInput('path')
    core.debug(`Trying to load: '${packageJson}'`)
    const versionFile = require(packageJson)
    const version = versionFile.version
    core.setOutput('version', version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
