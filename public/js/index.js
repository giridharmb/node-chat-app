var socket = io();

socket.on('connect', function() {
   console.log("Connected to Server !");

   socket.emit('createEmail', {
      to: 'jen@test.com',
      text: 'Hey, how are you ?'
   });
});

socket.on('disconnect', function() {
    console.log("Disconnected from Server !");
});

socket.on('newEmail', function(email) {
   console.log('New Email !');
   console.log(email);
});

socket.on('newMessage', function(message) {
   console.log('newMessage');
   console.log(message);
});