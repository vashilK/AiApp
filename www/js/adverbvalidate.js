$(document).ready(function() {





      $(".nbgg").css("background-color", "#F0F8FF");
      $("#CFAB1").hide();
      $("#CFAB2").hide();
      $("#CFAB3").hide();
      $("#CFAB4").hide();
      $("#CFAB5").hide();
      $("#CFAB6").hide();
      $("#CFAB7").hide();
      $("#CFAB8").hide();
      $("#CFAB9").hide();
      $("#CFAB10").hide();
      $("#CFAB11").hide();
      $("#CFAB12").hide();
      $("#CFAB13").hide();
      $("#CFAB14").hide();
      $("#CFAB15").hide();
      $("#CFAB16").hide();
      $("#CFAB17").hide();
      $("#CFAB18").hide();
      $("#CFAB19").hide();
      $("#CFAB20").hide();


      //quest1 constructive feedback
      $("#ABQ1").change(function() {

        if ($("#ABQ1 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB1").show();
          $("#CFAB2").hide();

        } else if ($("#ABQ1 input[name='radio']:checked").val() == 'good') {
          $("#CFAB1").hide();
          $("#CFAB2").show();
        }
      });

      //quest2 constructive feedback
      $("#ABQ2").change(function() {

        if ($("#ABQ2 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB3").hide();
          $("#CFAB4").show();


        } else if ($("#ABQ2 input[name='radio']:checked").val() == 'good') {
          $("#CFAB3").show();
          $("#CFAB4").hide();

        }

      });

      //quest3 constructive feedback
      $("#ABQ3").change(function() {

        if ($("#ABQ3 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB5").hide();
          $("#CFAB6").show();


        } else

        if ($("#ABQ3 input[name='radio']:checked").val() == 'good') {
          $("#CFAB5").show();
          $("#CFAB6").hide();

        }

      });

      //quest4 constructive feedback
      $("#ABQ4").change(function() {

        if ($("#ABQ4 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB8").hide();
          $("#CFAB7").show();


        } else

        if ($("#ABQ4 input[name='radio']:checked").val() == 'good') {
          $("#CFAB8").show();
          $("#CFAB7").hide();

        }

      });

      //quest5 constructive feedback
      $("#ABQ5").change(function() {

        if ($("#ABQ5 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB10").hide();
          $("#CFAB9").show();


        } else

        if ($("#ABQ5 input[name='radio']:checked").val() == 'good') {
          $("#CFAB10").show();
          $("#CFAB9").hide();

        }

      });

      //quest6 constructive feedback
      $("#ABQ6").change(function() {

        if ($("#ABQ6 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB12").hide();
          $("#CFAB11").show();


        } else

        if ($("#ABQ6 input[name='radio']:checked").val() == 'good') {
          $("#CFAB12").show();
          $("#CFAB11").hide();

        }

      });

      //quest7 constructive feedback
      $("#ABQ7").change(function() {

        if ($("#ABQ7 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB14").hide();
          $("#CFAB13").show();


        } else

        if ($("#ABQ7 input[name='radio']:checked").val() == 'good') {
          $("#CFAB14").show();
          $("#CFAB13").hide();

        }

      });


      //quest8 constructive feedback
      $("#ABQ8").change(function() {

        if ($("#ABQ8 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB16").hide();
          $("#CFAB15").show();


        } else

        if ($("#ABQ8 input[name='radio']:checked").val() == 'good') {
          $("#CFAB16").show();
          $("#CFAB15").hide();

        }

      });

      //quest9 constructive feedback
      $("#ABQ9").change(function() {

        if ($("#ABQ9 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB18").hide();
          $("#CFAB17").show();


        } else

        if ($("#ABQ9 input[name='radio']:checked").val() == 'good') {
          $("#CFAB18").show();
          $("#CFAB17").hide();

        }

      });




      //quest10 constructive feedback
      $("#ABQ10").change(function() {

        if ($("#ABQ10 input[name='radio']:checked").val() == 'bad') {
          $("#CFAB19").hide();
          $("#CFAB20").show();


        } else

        if ($("#ABQ10 input[name='radio']:checked").val() == 'good') {
          $("#CFAB19").show();
          $("#CFAB20").hide();

        }

      });









      //play an audio file that i recorded earlier
      var myvoice = document.createElement('audio');
      myvoice.setAttribute('src', 'sounds/nounb.m4a');
      $.get();

      $("#playme").click(function() {
        myvoice.play();


      });


      $(".nbgg").css("background-color", "#F0F8FF");
      $("#CFAI1").hide();
      $("#CFAI2").hide();
      $("#CFAI3").hide();
      $("#CFAI4").hide();
      $("#CFAI5").hide();
      $("#CFAI6").hide();
      $("#CFAI7").hide();
      $("#CFAI8").hide();
      $("#CFAI9").hide();
      $("#CFAI10").hide();
      $("#CFAI11").hide();
      $("#CFAI12").hide();
      $("#CFAI13").hide();
      $("#CFAI14").hide();
      $("#CFAI15").hide();



      //quest1 constructive feedback
      $("#AIQ1").change(function() {

        if ($("#AIQ1 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI1").show();
          $("#CFAI2").hide();

        } else if ($("#AIQ1 input[name='radio']:checked").val() == 'good') {
          $("#CFAI1").hide();
          $("#CFAI2").show();
        }
      });

      //quest2 constructive feedback
      $("#AIQ2").change(function() {

        if ($("#AIQ2 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI3").hide();
          $("#CFAI4").show();


        } else if ($("#AIQ2 input[name='radio']:checked").val() == 'good') {
          $("#CFAI3").show();
          $("#CFAI4").hide();

        }

      });

      //quest3 constructive feedback
      $("#AIQ3").change(function() {

        if ($("#AIQ3 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI5").hide();
          $("#CFAI6").show();


        } else

        if ($("#AIQ3 input[name='radio']:checked").val() == 'good') {
          $("#CFAI5").show();
          $("#CFAI6").hide();

        }

      });

      //quest4 constructive feedback
      $("#AIQ4").change(function() {

        if ($("#AIQ4 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI8").hide();
          $("#CFAI7").show();


        } else

        if ($("#AIQ4 input[name='radio']:checked").val() == 'good') {
          $("#CFAI8").show();
          $("#CFAI7").hide();

        }

      });

      //quest5 constructive feedback
      $("#AIQ5").change(function() {

        if ($("#AIQ5 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI10").hide();
          $("#CFAI9").show();


        } else

        if ($("#AIQ5 input[name='radio']:checked").val() == 'good') {
          $("#CFAI10").show();
          $("#CFAI9").hide();

        }

      });

      //quest6 constructive feedback
      $("#AIQ6").change(function() {

        if ($("#AIQ6 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI12").hide();
          $("#CFAI11").show();


        } else

        if ($("#AIQ6 input[name='radio']:checked").val() == 'good') {
          $("#CFAI12").show();
          $("#CFAI11").hide();

        }

      });

      //quest7 constructive feedback
      $("#AIQ7").change(function() {

        if ($("#AIQ7 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI14").hide();
          $("#CFAI13").show();


        } else

        if ($("#AIQ7 input[name='radio']:checked").val() == 'good') {
          $("#CFAI14").show();
          $("#CFAI13").hide();

        }

      });


      //quest8 constructive feedback
      $("#AIQ8").change(function() {

        if ($("#AIQ8 input[name='radio']:checked").val() == 'bad') {
          $("#CFAI16").hide();
          $("#CFAI15").show();


        } else

        if ($("#AIQ8 input[name='radio']:checked").val() == 'good') {
          $("#CFAI16").show();
          $("#CFAI15").hide();

        }

      });




      $(".nbgg").css("background-color", "#F0F8FF");
      $("#CFAA1").hide();
      $("#CFAA2").hide();
      $("#CFAA3").hide();
      $("#CFAA4").hide();
      $("#CFAA5").hide();
      $("#CFAA6").hide();
      $("#CFAA7").hide();
      $("#CFAA8").hide();
      $("#CFAA9").hide();
      $("#CFAA10").hide();
      $("#CFAA11").hide();
      $("#CFAA12").hide();




      //quest1 constructive feedback
      $("#AAQ1").change(function() {

        if ($("#AAQ1 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA1").show();
          $("#CFAA2").hide();

        } else if ($("#AAQ1 input[name='radio']:checked").val() == 'good') {
          $("#CFAA1").hide();
          $("#CFAA2").show();
        }
      });

      //quest2 constructive feedback
      $("#AAQ2").change(function() {

        if ($("#AAQ2 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA3").hide();
          $("#CFAA4").show();


        } else if ($("#AAQ2 input[name='radio']:checked").val() == 'good') {
          $("#CFAA3").show();
          $("#CFAA4").hide();

        }

      });

      //quest3 constructive feedback
      $("#AAQ3").change(function() {

        if ($("#AAQ3 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA5").hide();
          $("#CFAA6").show();


        } else

        if ($("#AAQ3 input[name='radio']:checked").val() == 'good') {
          $("#CFAA5").show();
          $("#CFAA6").hide();

        }

      });

      //quest4 constructive feedback
      $("#AAQ4").change(function() {

        if ($("#AAQ4 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA8").hide();
          $("#CFAA7").show();


        } else

        if ($("#AAQ4 input[name='radio']:checked").val() == 'good') {
          $("#CFAA8").show();
          $("#CFAA7").hide();

        }

      });

      //quest5 constructive feedback
      $("#AAQ5").change(function() {

        if ($("#AAQ5 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA10").hide();
          $("#CFAA9").show();


        } else

        if ($("#AAQ5 input[name='radio']:checked").val() == 'good') {
          $("#CFAA10").show();
          $("#CFAA9").hide();

        }

      });

      //quest6 constructive feedback
      $("#AAQ6").change(function() {

        if ($("#AAQ6 input[name='radio']:checked").val() == 'bad') {
          $("#CFAA12").hide();
          $("#CFAA11").show();


        } else

        if ($("#AAQ6 input[name='radio']:checked").val() == 'good') {
          $("#CFAA12").show();
          $("#CFAA11").hide();

        }


      });
