// # Your code here


// var myFirebaseRef = new Firebase("https://boiling-inferno-1978.firebaseio.com/");

// var message = function(message){
//   // this.name = name;
//   this.message = message;
// }

// var newMessage = function() {
//   var newMessage = $(this).val();
//   $(this).val(' ');
//   var aMessage = new message(newMessage);
//   console.log(aMessage);
// };
//   // return $('<div>').html(this.aMessage)

// message.prototype.html = function() {
//   return $('#chat-message').append('<div>' + this.message + '<div>');
// };

// var newMessageRef = myFirebaseRef.push({
//   name: name,
//   text: text

  // newMessage();
// });
// var messageID = newMessageRef.name() // will return the unique ID on message

// newMessageRef.on('child_added', function(snapshot) {
//   var newMessage = snapshot.val();
//   displayChatMessage(newMessage.name);

// });

$(document).ready(function(){
  var myFirebaseRef = new Firebase("https://boiling-inferno-1978.firebaseio.com/");

  // $('#chat-messages').change(newMessage);
  // newMessage().html
  //
  $("#message-input").keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#name-input').val();
      var text = $('#message-input').val();
      myFirebaseRef.push({name: name, text: text});
      $('#message-input').val('');
    }
  });

  myFirebaseRef.on('child_added',function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
  });

  function displayChatMessage(name,text) {
    $('<div/>').text(text).prepend($('<em/>').text(name+':')).appendTo($('#chat-messages'));
    $('#chat-messages')[0].scrollTop = $('#chat-messages')[0].scrollHeight;
  };

});
//need to save and then retrieve data.
