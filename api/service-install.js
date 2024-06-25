var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Tormenta',
  description: 'Tormenta API',
  script: 'D:\\Projetos Pessoais\\galeria-tormenta-react\\api'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();