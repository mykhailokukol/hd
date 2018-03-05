const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const hbs = require('hbs');



module.exports = function initMiddleware(app) {
    app.use(logger('dev'))
    //app.use(methodOverride())
    app.use(express.static(path.join(__dirname, '../../public')))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    //app.use(multer())
    app.set('views', path.join(__dirname, '../../views'));
    app.set('view engine', 'hbs');
    app.use(expressValidator());
    app.use(cookieParser());
    // Handlebars default config
    const partialsDir = path.join(__dirname, '../../views/partials');
    const filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function (filename) {
        const matches = /^([^.]+).hbs$/.exec(filename);
        if (!matches) {
            return;
        }
        const name = matches[1];
        const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
        hbs.registerPartial(name, template);
    });

    hbs.registerHelper('json', function (context) {
        return JSON.stringify(context, null, 2);
    });

    if (app.get('env') === 'development') {
        app.use(errorHandler())
    }
}