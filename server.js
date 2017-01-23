
var express = require("express");
var router = require("./router");


function start(server_port, server_ip_address) {
	
    if (typeof server_ip_address === "undefined") {
        //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
        //  allows us to run/test the app locally.
        console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    };

    var app = express();
	//router.route();
	app.use("/", router);
//  if ( server_ip_address === "127.0.0.1"){
  app.listen( server_port, function() {
                console.log('%s: Node server started on %s:%s ...',
                            Date(Date.now() ), app.port, app.address);
                console.log(server_ip_address)
            }); 

  if (typeof  app.address === "undefined" ){
    app.set('address', server_ip_address);
    console.log("yeahhhhh");
    console.log(app.address);
  };
 // }else{
  //   app.listen( server_port, server_ip_address, function() {
  //               console.log('%s: Node server started on %s:%d ...',
  //                           Date(Date.now() ), server_port, server_ip_address);
  //           });    
  // }
	
}


exports.start = start;
