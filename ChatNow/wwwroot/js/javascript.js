
var connection = new signalR.HubConnectionBuilder()
    .withUrl('/ChatHub')
    .build();

connection.on('RecieveMessage', function (from, message) {

    var msg = from + " : " + message;
    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);


});

connection.start()
    .catch(error => {
        console.error(error.message);
    });

$("#btnSend").on("click", function () {
    var from = $("#txtUser").val();
    var message = $("#txtMessage").val();

    connection.invoke("SendMessage", from, message).catch(function (err) {
        return console.error(err.toString());
    });
});