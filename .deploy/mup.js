module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '192.168.18.22',
      username: 'trb-labo',
     // pem: '/home/spinard/.ssh/trb-labo.pub'
     // password: 'TRBtrb123'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'trb-labo',
    path: '/home/spinard/Documents/git/trb-recorder-V4',

    servers: {
      one: {
	},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://192.168.18.22:3000/',
      MONGO_URL: 'mongodb://localhost/data/db',
 	PORT: 3000
    },

    /*ssl: { // (optional)
       //Enables let's encrypt (optional)
      autogenerate: {
        email: 'site.trb@gmail.com',
         // comma separated list of domains
        domains: 'trb-engineering.com,www.trb-engineering.com'
       }
	
    },*/
    /*ssl: {
	    crt: './bundle.crt', // this is a bundle of certificates
	    key: './private.key', // this is the private key of the certificate
	    port: 443 // 443 is the default value and it's the standard HTTPS port
	  },*/
	
    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.6.3',
    servers: {
      one: {}
    }
  },

};
