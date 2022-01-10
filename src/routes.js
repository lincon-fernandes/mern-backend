const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const ContentControler = require('./controllers/ContentControler');
const PriorityController = require('./controllers/PriorityController');

/// rota anottations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);
// priorities
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);
//
routes.post('/content/:id', ContentControler.update);

module.exports = routes;
