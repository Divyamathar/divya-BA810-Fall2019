import {AuthorizeStep} from 'aurelia-auth';

export class App {
  configureRouter(config, router) {
    this.router = router;
    // config.addPipelineStep('authorize', AuthorizeStep); 
    config.title = 'Widgets Galore!';
    config.map([
      {
        route: ['', 'widgets'],
        name: 'widgets',
        moduleId: 'modules/widgets',
        title: 'Widgets',
        auth: false
      }
    ]);
  }
}