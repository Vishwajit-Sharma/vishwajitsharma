$(document).ready(
    function(){

      $(document).scroll(function(){
        if($(document).scrollTop()>550){
          $('#top').css({display:"flex"})
        }
        else{
          $('#top').css({display:"none"})
        }
      })
      $('#top').click(
        function(){
          $(document).scrollTop(0)
        }
      )

        $(".top-container").ripples({
            resolution: 550,
            dropRadius:10
        })
        $(".freelancer-div").ripples({
          resolution: 550,
          dropRadius:10
      })


      $(".menu").click(
        function(){
          $(".menu-items").toggle("slow")
        }
      )

      let bg={
        backgroundColor:"var(--primary)",
        color:"var(--pure)"
      }
      let bg1={
        backgroundColor:"var(--pure)",
        color:"var(--dark)"
      }

      $("#home").click(
        function(){
          $("#home").css(bg)
          $("#abt").css(bg1)
          $("#pf").css(bg1)
          $("#res").css(bg1)
        }
      )
      $("#abt").click(
        function(){
          $("#abt").css(bg)
          $("#home").css(bg1)
          $("#pf").css(bg1)
          $("#res").css(bg1)
        }
      )
      $("#pf").click(
        function(){
          $("#pf").css(bg)
          $("#home").css(bg1)
          $("#abt").css(bg1)
          $("#res").css(bg1)
        }
      )
      $("#res").click(
        function(){
          $("#res").css(bg)
          $("#home").css(bg1)
          $("#pf").css(bg1)
          $("#abt").css(bg1)
        }
      )


        function manytimes(delay, callback) {
            let x = function () {
              callback();
              setTimeout(x, delay);
            };
            x();
          }
          let cb= function(){
              $(".coder").fadeOut(2000, function () {
                $(".ui").fadeOut(2000, function () {
                  $(".developer").fadeOut(2000);
                });
              });
              $(".coder").fadeIn(2000, function () {
                $(".ui").fadeIn(2000, function () {
                  $(".developer").fadeIn(2000);
                });
              });
          }
          manytimes(7000, cb);


          $(".edu-content").hide()
          // $(".skill-content").show()
          $(".exp-content").hide()
          $(".cert-content").hide()

          let addcss= {
                backgroundColor: "var(--dark)",
                color: "var(--pure)",
                cursor: "pointer",
                transition: "1s"
          }
          let removecss={
                backgroundColor: "rgba(248, 245, 245, 0)",
                color: "var(--dark)",
                transition: "0s"
          }

          $(".edu").click(
            function(){
              $(".edu-content").show()
              $(".skill-content").hide()
              $(".exp-content").hide()
              $(".cert-content").hide()

              $(".edu").css(addcss)
              $(".edu i").css("visibility","visible")

              $(".skill").css(removecss)
              $(".skill i").css("visibility","hidden")

              $(".exp").css(removecss)
              $(".exp i").css("visibility","hidden")

              $(".cert").css(removecss)
              $(".cert i").css("visibility","hidden")
            }
          )

          $(".skill").click(
            function(){
              $(".edu-content").hide()
              $(".skill-content").show("slow")
              $(".exp-content").hide()
              $(".cert-content").hide()

              $(".skill").css(addcss)
              $(".skill i").css("visibility","visible")

              $(".edu").css(removecss)
              $(".edu i").css("visibility","hidden")

              $(".exp").css(removecss)
              $(".exp i").css("visibility","hidden")

              $(".cert").css(removecss)
              $(".cert i").css("visibility","hidden")
            }
          )

          $(".exp").click(
            function(){
              $(".edu-content").hide()
              $(".skill-content").hide()
              $(".exp-content").show("slow")
              $(".cert-content").hide()

              $(".exp").css(addcss)
              $(".exp i").css("visibility","visible")

              $(".skill").css(removecss)
              $(".skill i").css("visibility","hidden")

              $(".edu").css(removecss)
              $(".edu i").css("visibility","hidden")

              $(".cert").css(removecss)
              $(".cert i").css("visibility","hidden")
            }
          )

          $(".cert").click(
            function(){
              $(".edu-content").hide()
              $(".skill-content").hide()
              $(".exp-content").hide()
              $(".cert-content").show("slow")

              $(".cert").css(addcss)
              $(".cert i").css("visibility","visible")

              $(".skill").css(removecss)
              $(".skill i").css("visibility","hidden")

              $(".exp").css(removecss)
              $(".exp i").css("visibility","hidden")

              $(".edu").css(removecss)
              $(".edu i").css("visibility","hidden")
            }
          )
    }

)

window.addEventListener('load', function(){
  document.getElementsByClassName("edu")[0].click()
})
