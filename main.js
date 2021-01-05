const core = require('@actions/core');
const github = require('@actions/github');

const input = {
    githubUsername: core.getInput('candidate-github-username'),
    testName: core.getInput('test-name'),
    key: core.getInput('key'),
    event: core.getInput('event-object')
}

console.log(input)

// API CALL