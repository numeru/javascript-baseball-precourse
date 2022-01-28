import View from './views/View.js';
import Model from './models/Model.js';
import Controller from './controllers/Controller.js';

document.addEventListener('DOMContentLoaded', () => {
  const view = new View();
  const model = new Model();

  const controllers = new Controller(view, model);

  controllers.init();
});
