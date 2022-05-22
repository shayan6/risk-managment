// started here 
$(document).ready(function () {

    // owlCarouselPremium level 3 start ###################################################
    $.ajax({
      type: "GET",
      data: {
        jslevel: 3,
        pageNo: 1,
        pageSize: 15
      },
      url: `${baseURL}/Home/GetLevelWiseJobseekers`,
      contentType: "application/json",
      success: function (data) {
        $('#owl-carousel-premium').html(element_owlCarouselPremium(data.result));
        owlCarouselPremium();
      }
    });

    function owlCarouselPremium () {
      $('.owl-carousel-premium').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 6000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    // owlCarouselPremium level 3 end ###################################################

    // owlCarouselFeatured level 2 start ################################################
    $.ajax({
      type: "GET",
      data: {
        jslevel: 2,
        pageNo: 1,
        pageSize: 30
      },
      url: `${baseURL}/Home/GetLevelWiseJobseekers`,
      contentType: "application/json",
      success: function (data) {
        $('#owl-carousel-featured').html(element_owlCarouselFeatured(data.result));
        owlCarouselFeatured();
      }
    });

    function owlCarouselFeatured () {
      $('.owl-carousel-featured').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    // owlCarouselFeatured level 2 end #################################################

    // owlCarouselStandard level 1 start ################################################
    $.ajax({
      type: "GET",
      data: {
        jslevel: 1,
        pageNo: 1,
        pageSize: 30
      },
      url: `${baseURL}/Home/GetLevelWiseJobseekers`,
      contentType: "application/json",
      success: function (data) {
        $('#owl-carousel-standard').html(element_owlCarouselStandard(data.result));
        owlCarouselStandard();
      }
    });

    function owlCarouselStandard () {
      $('.owl-carousel-standard').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
    }
    // owlCarouselStandard level 1 end #################################################


    // ###############################################################################
    // Job Seekers count home section ################################################
    // ###############################################################################
    $.ajax({
      type: "GET",
      data: {
        pageNo: 1,
        pageSize: 20
      },
      url: `${baseURL}/Home/GetJobTitleWiseCount`,
      contentType: "application/json",
      success: function (data) {
        console.log(data);
        $('#jobTitleWiseCount').html(element_jobTitleWiseCount(data.result));
      }
    });
   
});


