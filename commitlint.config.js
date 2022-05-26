module.exports = {
  extends: ['@commitlint/config-conventional'],
  // parserPreset: {
  //   parserOpts: {
  //     issuePrefixes: ['FND-', 'IDM-'],
  //   },
  // },
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'docs', 'feat', 'fix', 'refactor', 'revert', 'test'],
    ],
    // 'references-empty': [2, 'never'],
    'subject-case': [0],
  },
}
