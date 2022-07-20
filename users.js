const body = $("body");
const tbody = $("tbody");
fetch("https://jsonplaceholder.typicode.com/users").then(function(result) {
    return result.json()}
).then(function (users) {
        users.map(function(value, index){
        let tr = $("<tr class='ind'></tr>");
        $(tbody).append(tr);
        td = $("<td></td>").text(users[index].id);
        $(tr).append(td);
        td = $("<td></td>").text(users[index].name);
        $(tr).append(td);
        td = $("<td></td>").text(users[index].company.name);
        $(tr).append(td);
        td = $("<td></td>").text(users[index].website);
        $(tr).append(td);})
});