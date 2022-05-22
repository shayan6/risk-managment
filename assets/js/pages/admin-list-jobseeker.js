/******/ (() => { // webpackBootstrap
  /*!*********************************************************************!*\
    \*********************************************************************/
  // Class definition

  var KTAdminJobseekerList = function () {

    // Private functions
    var _hadleswitch = function () {
      // bootstrapSwitch setup
      $('[data-switch=true]').bootstrapSwitch();
    };

    var _handleSelect2 = function () {
      // select2 setup
      $('.countries').select2({
        placeholder: "Search for countries",
      });
      
      $('#level').select2({
        placeholder: "Search for level",
      });
      
      $('.select2-selection').addClass('form-control form-control-solid border-0 h-auto py-2 px-3');
      
      $('.countries').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for countries');
      $('#level').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for level');
    };

    return {
      // public functions
      init: function () {
        _hadleswitch();
        _handleSelect2();
      },
    };
  }();

  jQuery(document).ready(function () {
    setTimeout(function () {
      KTAdminJobseekerList.init();
    }, 100)
  });

  /******/
})()
  ;