// $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

    //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    let jsonURL = "demo.json";

    // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.nameOne);
            
            //loads first name into my first input box (in example #1)
            $("#noNumbers").val(data.nameOne);
            console.log(data.language);

            $("#noAlpha").val(data.phoneNumber);
            console.log(data.language);

            $("#noSpaces").val(data.email);
            console.log(data.language);

            $("#noAlpha2").val(data.creditCard);
            console.log(data.language);

            $("#noAlpha3").val(data.cardDate);
            console.log(data.language);

            $("#noAlpha4").val(data.cardValue);
            console.log(data.language);

            $('input[type=checkbox]').each(function () {
                if (data.language === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
                
            });
        }
    });
});



// end of doc ready f/n
// });