
const fsp = require('fs/promises');
const delay = require('delay');
const { spawn } = require('child_process');

const { spawn } = require('child_process');
const delay = require('delay');

module.export =  (hermione) => {
    let selenium;
    hermione.on(hermione.events.RUNNER_START, async () => {
        const file = fs.openSync('selenium.log', 'w');

        selenium = spawn('selenium-standalone', ['start'], {
            stdio: ['ignore', file, file]
        })
        await delay(2000);
    });


    hermione.on(hermione.events.RUNNER_START, () => {
        return new Promise((resolve) => {
            selenium.on('exit', () => resolve())

            selenium.kill();
        });
    })
}
