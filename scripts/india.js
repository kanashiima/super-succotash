//our shorthand doc ready function

$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  

  
  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("All good!");
    } else if (spaceCount > 0) {
      $(this).next().text("No spaces allowed in email!");
    }
  });

  // I had to reuse this multiple times idk the exact reason just one function wouldnt work but it looks super weird and this had to be a long way to do this 
  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("Only Numbers Please");
  });

  $("#noAlpha2").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("Only Numbers Please");
  });

  $("#noAlpha3").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("Only Numbers Please!");
  });

  $("#noAlpha4").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("Only Numbers Please");
  });
 

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("All good!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("Only Letters! No Numbers!");
    }
  });

  //TODO: key down not working, need immediate change?
  $("#noNumbersDown").keydown(function (e) {
    let inputVal = $(this).val();

    // test input value against regular expression
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("All good!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("Only Letters! No Numbers!");
    }
  });



  $('#submitButton').click(function(){

    if ($('#noSpaces').val()) {
      console.log("there is something in this text box");
      $('#noSpaces').removeClass("error")
    } else {
      console.log("there is NOTHING in this text box");
      $('#noSpaces').removeClass("success").addClass("error").focus();
      //bring focus to it
      //change the placeholder text 

    }

  })





  // end of doc ready f/n
});

