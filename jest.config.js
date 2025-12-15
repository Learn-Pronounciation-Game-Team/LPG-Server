module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  detectOpenHandles: true,
  forceExit: true,
  transformIgnorePatterns: [
    'node_modules/(?!(random-words|seedrandom)/)'
  ],
  transform: {
    '^.+\\.m?js$': ['babel-jest', { presets: [['@babel/preset-env', { targets: { node: 'current' } }]] }]
  }
}
