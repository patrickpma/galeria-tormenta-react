const express = require('express');
const cors = require("cors");
const router = require('./apps/createRouter.js')();
const errorHandler = require('./_middleware/error-handler');

module.exports = ({ database, logger, config }) =>
    express()
        .use(express.urlencoded({ extended: true }))
        .use(express.json())
        .use(cors())
        .use((req, res, next) => {
            req.logger = logger;
            req.db = database;
            req.config = config;
            return next();
        })
        .use('/api', router)
        .use(errorHandler);