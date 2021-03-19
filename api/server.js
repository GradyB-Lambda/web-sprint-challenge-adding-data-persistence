// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')

const db = require('../data/dbConfig')

const ProjectRouter = require('./project/router')
const ResrouceRouter = require('./resource/router')
const TaskRouter = require('./task/router')

const server = express()

server.use(helmet())
server.use(express.json())


server.use('/api/resources', ResrouceRouter)
server.use('/api/projects', ProjectRouter)
server.use('/api/task', TaskRouter)

module.server;
