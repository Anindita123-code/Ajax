

function showData() {

    var url = new URL("https://cvrapi.dk/api" )
    var searchParams = new URLSearchParams({
        search: $("#cvr").val(),
        country:'dk'
    });
    url.search = new URLSearchParams(searchParams).toString();

    fetch(url)
        .then(
            function(response) {
            if (response.status !== 200) {
                console.log('Problem while fetching data. Status Code: ' +
            response.status);
            return;
            }
            // Examine the text in the response

            response.json().then(function(data) {
                //console.log(data);
                //CVR, company name, address, industry sector, maybe company size 
                //(if this information is available), Primary contact (name, phone, email).

               $("#results").html("<b>CVR number : </b>" + data.vat + "<br><b>Company name : </b>" + data.name + "<br> <b>Company Address: </b>" + data.address + " " + data.city + " <b>zipcode:</b> " + data.zipcode + "<br> <b>Industry Description : </b>" + data.industrydesc + "<br><b>Company Size : </b>" + data.employees + "<br> <b>Owners : </b>" + data.owners + "<br> <b>Phone : </b>" + data.phone + "<br><b> Email : </b>" + data.email)
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

}

$("button").on("click",showData)

