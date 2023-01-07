/**
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  appId: 'OpenRGBweb',
  productName: 'OpenRGB web',
  copyright: 'Copyright © 2022 ${author}',
  asar: true,
  directories: {
    output: 'release/${version}',
    buildResources: 'resources',
  },
  files: ['dist'],
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
    ],
    artifactName: '${productName}-${version}-Setup.${ext}',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false,
  },
  mac: {
    target: ['dmg'],
    artifactName: '${productName}-${version}-Installer.${ext}',
  },
  linux: {
    target: ['AppImage'],
    artifactName: '${productName}-${version}-Installer.${ext}',
  },
}
