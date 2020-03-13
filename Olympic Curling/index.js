//  Import crypto + nc server pkgs
const NetcatServer = require('netcat/server');
const Vigenere = require('vigenere');

//  Random key function
function generateKey() {
   var output           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz';
   for ( var i = 0; i < 10; i++ ) {
      output += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return output;
}

//  Create server, start listening
const nc = new NetcatServer();
nc.port(6969).listen().on('data', onData);
console.log("Server up, listening");

//cipher vars
let plaintext = "youcancreatesimplewebserverswithnetcatandcurl"
var key = '';

//  Run on connection
function onData (socket, chunk){
//  Create a key to encrypt the flag, encrypts it
var key = generateKey()
let ciphertext = Vigenere.encode(plaintext, key);

//  Logs connection to server
console.log(socket.id + "has connected");

//  Displays output
  socket.write('Successfully established a connection');
  socket.write(`
`);
  socket.write(`
Your connection key is: "${key}"`);
socket.write(`
`);
socket.write(`
Connection failure.`);
socket.write(`
ERR: ${ciphertext}`);
};
