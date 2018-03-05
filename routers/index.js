let home = require('./home');
let forum = require('./forum');
let p404 = require('./404');
let hookahbars = require('./hookahbars');
let jobs = require('./jobs');
let mixes = require('./mixes');
let news = require('./news')

let paths = [];

paths.add = function (parts) {
    for (let part in parts) {
        paths.push(parts[part]);
    }
}

paths.add(home);
paths.add(forum);
paths.add(p404);
paths.add(hookahbars);
paths.add(jobs);
paths.add(mixes);
paths.add(news);

module.exports = paths;

