import {AuthorizeStep} from 'aurelia-auth';

export class App {
  configureRouter(config, router) {
    this.router = router;
    // config.addPipelineStep('authorize', AuthorizeStep); 
    config.title = 'Gadgets Galore!';
    config.map([
      {
        route: ['', 'gadgets'],
        name: 'gadgets',
        moduleId: 'modules/gadgets',
        title: 'Gadgets',
        auth: false
      }
    ]);
  }
}
