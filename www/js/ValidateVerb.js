$(function() {
  //validate verb level 1 starts here
  $("#VBQ1").change(function() {

    if ($("#VBQ1 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB1").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB2").show('slow').delay(7000).hide('slow');
    }
  });


  $("#VBQ2").change(function() {

    if ($("#VBQ2 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB3").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB4").show('slow').delay(7000).hide('slow');
    }
  });


  $("#VBQ3").change(function() {

    if ($("#VBQ3 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB5").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB6").show('slow').delay(5000).hide('slow');
    }
  });

  $("#VBQ4").change(function() {

    if ($("#VBQ4 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB7").show('slow').delay(10000).hide('slow');

    } else {
      $("#CFVB8").show('slow').delay(7000).hide('slow');
    }
  });

  $("#VBQ5").change(function() {

    if ($("#VBQ5 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB9").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB10").show('slow').delay(7000).hide('slow');
    }
  });

  $("#VBQ6").change(function() {

    if ($("#VBQ6 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB11").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB12").show('slow').delay(7000).hide('slow');
    }
  });

  $("#VBQ7").change(function() {

    if ($("/#VBQ7 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB13").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB14").show('slow').delay(7000).hide('slow');
    }
  });


  $("#VBQ8").change(function() {

    if ($("#VBQ8 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB15").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB16").show('slow').delay(7000).hide('slow');
    }
  });

  $("#VBQ9").change(function() {

    if ($("#VBQ9 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB17").show('slow').delay(10000).hide('slow');
    } else {
      $("#CFVB18").show('slow').delay(7000).hide('slow');
    }
  });

  $("#VBQ10").change(function() {

    if ($("#VBQ10 input[name='radio']:checked").val() == 'bad') {

      $("#CFVB19").show('slow').delay(10000).hide('slow');
    }
    if ($("#VBQ10 input[name='radio']:checked").val() == 'good') {

      $("#CFVB20").show('slow').delay(7000).hide('slow');

    }
  });


  //validate verb level 1 ends here


  //validate verb level 2 starts here
  $("#VIQ1").change(function() {

    if ($("#VIQ1 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI1").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ1 input[name='radio']:checked").val() == 'good') {

      $("#CFVI2").show('slow').delay(7000).hide('slow');

    }
  });


  $("#VIQ2").change(function() {

    if ($("#VIQ2 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI3").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ2 input[name='radio']:checked").val() == 'good') {

      $("#CFVI4").show('slow').delay(7000).hide('slow');

    }
  });


  $("#VIQ3").change(function() {

    if ($("#VIQ3 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI5").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ3 input[name='radio']:checked").val() == 'good') {

      $("#CFVI6").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VIQ4").change(function() {

    if ($("#VIQ4 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI7").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ4 input[name='radio']:checked").val() == 'good') {

      $("#CFVI8").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VIQ5").change(function() {

    if ($("#VIQ5 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI9").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ5 input[name='radio']:checked").val() == 'good') {

      $("#CFVI10").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VIQ6").change(function() {

    if ($("#VIQ6 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI11").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ6 input[name='radio']:checked").val() == 'good') {

      $("#CFVI12").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VIQ7").change(function() {

    if ($("#VIQ7 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI13").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ7 input[name='radio']:checked").val() == 'good') {

      $("#CFVI14").show('slow').delay(7000).hide('slow');

    }
  });


  $("#VIQ8").change(function() {

    if ($("#VIQ8 input[name='radio']:checked").val() == 'bad') {

      $("#CFVI15").show('slow').delay(10000).hide('slow');
    }
    if ($("#VIQ8 input[name='radio']:checked").val() == 'good') {

      $("#CFVI16").show('slow').delay(7000).hide('slow');

    }
  });

  //validate verb level 2 ends here




  //validate verb level 3 starts here
  $("#VAQ1").change(function() {

    if ($("#VAQ1 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA1").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ1 input[name='radio']:checked").val() == 'good') {

      $("#CFVA2").show('slow').delay(7000).hide('slow');

    }
  });


  $("#VAQ2").change(function() {

    if ($("#VAQ2 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA3").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ2 input[name='radio']:checked").val() == 'good') {

      $("#CFVA4").show('slow').delay(7000).hide('slow');

    }
  });


  $("#VAQ3").change(function() {

    if ($("#VAQ3 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA5").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ3 input[name='radio']:checked").val() == 'good') {

      $("#CFVA6").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VAQ4").change(function() {

    if ($("#VAQ4 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA7").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ4 input[name='radio']:checked").val() == 'good') {

      $("#CFVA8").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VAQ5").change(function() {

    if ($("#VAQ5 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA9").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ5 input[name='radio']:checked").val() == 'good') {

      $("#CFVA10").show('slow').delay(7000).hide('slow');

    }
  });

  $("#VAQ6").change(function() {

    if ($("#VAQ6 input[name='radio']:checked").val() == 'bad') {

      $("#CFVA11").show('slow').delay(10000).hide('slow');
    }
    if ($("#VAQ6 input[name='radio']:checked").val() == 'good') {

      $("#CFVA12").show('slow').delay(7000).hide('slow');

    }
  });

  //validate verb level 3 ends here

});
