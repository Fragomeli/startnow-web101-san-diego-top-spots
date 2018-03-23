// $(document).ready(function() {       
// // write your code here
// $.getJson("data.json")
//     $.each(result, function(i, field){
//     $("table").append(field + " ")

// });

// $(document).ready(function() {
//     // write your code here
//     $.getJSON("data.json", function(data) {
//         var tempInfo = "";
//         $.each(data, function(index, val) {
//             //console.log("key, val", key, val);
//             tempInfo += "Name: <b>" + val.name + "</b> <br/>";
//         });

//         var info = document.getElementById("info");
//         info.innerHTML = tempInfo;
//     });
// });

$(document).ready(function() {
    // write your code here
    $.getJSON("data.json", function(data) {
       
        $.each(data, function(index, val) {
            
            var name = val.name;
            var description = val.description;
            var location = val.location;

            var tableBodyData = "<tr><td>" + name + "</td>" +
                                "<td>" + description + "</td>" +
                                "<td><a href='https://www.google.com/maps?q= + location + '>Go!</a></td></tr>";
                   

            $("tbody").append(tableBodyData);
        });
        
    });
});
        
