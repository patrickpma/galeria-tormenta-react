var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Veolink Saida Material',
  description: 'Veolink Saida Material API',
  script: 'F:\\Web\\gerdau.requisicao.saida\\api-saida-material\\service.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.uninstall();