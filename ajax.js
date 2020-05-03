var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        // console.log(response)
        var op1 = "";
        for(var i=0;i<response.length;i++){

            op1 += '<tr>';
            op1 += '<td>' +response[i].Serial_No+'</td.';
            op1 += '<tc>'
            op1 += '<td>' +response[i].Name+'</td.';
            op1 += '</tc>'
            op1 += '<tc>'
            op1 += '<td>' +response[i].Quantity+'</td.';
            op1 += '</tc>'
            op1 += '<tc>'
            op1 += '<td>' +response[i].Unit+'</td.';
            op1 += '</tc>'
            op1 += '<tc>'
            op1 += '<td>' +response[i].Department+'</td.';
            op1 += '</tc>'
            op1 += '<tc>'
            op1 += '<td>' +response[i].Notes+'</td.';
            op1 += '</tc>'
            op1 += '</tr>'
        }
        document.getElementById("tb2").innerHTML = op1;

    }
}
xhttp.open("GET","ajax.json",true)
xhttp.send(); 