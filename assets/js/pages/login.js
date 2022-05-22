/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
  /*!************************************************************!*\
    \************************************************************/


  // Class Definition
  var KTLogin = function () {
    var _login;

    var _showForm = function (form) {
      var cls = 'login-' + form + '-on';
      var form = 'kt_login_' + form + '_form';

      _login.removeClass('login-forgot-on');
      _login.removeClass('login-signin-on');
      _login.removeClass('login-signup-on');

      _login.addClass(cls);

      KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSelect2 = function () {
      // select2 setup
      $('.countries').select2({
        placeholder: "Current Location *",
      });
      $('.select2-selection').addClass('form-control form-control-solid border-0 h-auto py-2 px-3');  
      $('.countries').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for countries');
    };

    var _handleSignInForm = function () {

      // Handle forgot button
      $('#kt_login_forgot').on('click', function (e) {
        e.preventDefault();
        _showForm('forgot');
      });

      // Handle signup
      $('#kt_login_signup').on('click', function (e) {
        e.preventDefault();
        _showForm('signup');
      });
        
      // seeker login
      $('#kt_login_signin_form_seeker').on('submit', function (e) {
        e.preventDefault();
        let form = $('#kt_login_signin_form_seeker');
        let user = {
          "email" : $('#seeker_login_email').val()
          ,"password" : $('#seeker_login_password').val()
        };
        $.ajax({
          type: "POST",
          data: JSON.stringify(user),
          url: `${baseURL}/Authentication/Login`,
          contentType: "application/json",
          beforeSend: function () {
            form.find('.btn-primary').addClass('spinner spinner-white spinner-left').attr('disabled', true); // loader
          },
          success: function (data) {
            if (data && +data.code) {
              localStorage.setItem('babaaish_expires', data.expires);
              localStorage.setItem('babaaish_token', data.token);
              localStorage.setItem('babaaish_role', 'jobseeker');
              window.location = 'seeker_build.html';
            } else {
              $('.login_message').html(alertMessage(data.message, 'danger'));
            }
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          },
          error: function (xhr, status, errorThrown) {
            $('.login_message').html(alertMessage('Somthing went wrong please try again later or contact support', 'danger'));
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          } 
        });
      });

      // arbaab login
      $('#kt_login_signin_form_arbaab').on('submit', function (e) {
        e.preventDefault();
        let form = $('#kt_login_signin_form_arbaab');
        let user = {
          "email" : $('#arbaab_login_email').val()
          ,"password" : $('#arbaab_login_password').val()
        };
        $.ajax({
          type: "POST",
          data: JSON.stringify(user),
          url: `${baseURL}/Authentication/EmployerLogin`,
          contentType: "application/json",
          beforeSend: function () {
            form.find('.btn-primary').addClass('spinner spinner-white spinner-left').attr('disabled', true); // loader
          },
          success: function (data) {
            if (data && +data.code) {
              localStorage.setItem('babaaish_expires', data.expires);
              localStorage.setItem('babaaish_token', data.token);
              localStorage.setItem('babaaish_role', 'employer');
              window.location = 'arbaab_build.html';
            } else {
              $('.login_message').html(alertMessage(data.message, 'danger'));
            }
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          },
          error: function (xhr, status, errorThrown) {
            $('.login_message').html(alertMessage('Somthing went wrong please try again later or contact support', 'danger'));
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          } 
        });
      });

    }

    var _handleSignUpForm = function (e) {
      // Handle cancel button
      $('.kt_login_signup_cancel').on('click', function (e) {
        e.preventDefault();
        _showForm('signin');
      });
        
      // seeker signup
      $('#kt_login_signup_form_seeker').on('submit', function (e) {
        e.preventDefault();
        
        if ( !matchPassword('seeker_password', 'seeker_cpassword') ) {
          $('.signup_message').html(alertMessage('Passwords did not match', 'danger'));
          return;
        }
        
        var form = $('#kt_login_signup_form_seeker');
        var formData = new FormData(form[0]);

        $.ajax({
          type: "POST",
          data: formData,
          url: `${baseURL}/Authentication/JobSeekerSignUp`,
          contentType: false,
          processData: false,
          beforeSend: function () {
            form.find('.btn-primary').addClass('spinner spinner-white spinner-left').attr('disabled', true); // loader
          },
          success: function (data) {
            if (data && +data.code) {
              $('.signup_message').html(alertMessage('Your Account Is Created. To Activate Please Contact Support', 'success'));
              form[0].reset();
              $('#seeker_cv').val('');              
              $('.select2').val(null).trigger('change');
              $('.custom-file label').text('Choose file...');
            } else {
              $('.signup_message').html(alertMessage('Somthing went wrong please try again later or contact support', 'danger'));
            }
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          },
          error: function (xhr, status, errorThrown) {
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
            $('.signup_message').html(alertMessage('Somthing went wrong please try again later or contact support', 'danger'));
          } 
        });
      });

      // arbaab signup
      $('#kt_login_signup_form').on('submit', function (e) {
        e.preventDefault();

        if ( !matchPassword('arbaab_password', 'arbaab_cpassword') ) {
          $('.signup_message').html(alertMessage('Passwords did not match', 'danger'));
          return;
        }
        
        let form = $('#kt_login_signup_form');
        let arbaab = {
          "companyName": $('#arbaab_company').val(),
          "tradeLicenseNumber": $('#arbaab_trade').val(),
          "issuingAuthority": "",
          "mobileNumber": $('#arbaab_mobile').val(),
          "emailAddress": $('#arbaab_email').val(),
          "password": $('#arbaab_password').val()
        };
        
        $.ajax({
          type: "POST",
          data: JSON.stringify(arbaab),
          url: `${baseURL}/Authentication/EmployerSignUp`,
          contentType: "application/json",
          beforeSend: function () {
            form.find('.btn-primary').addClass('spinner spinner-white spinner-left').attr('disabled', true); // loader
          },
          success: function (data) {
            if (data && +data.code) {
              $('.signup_message').html(alertMessage('Your Account Is Created. To Activate Please Contact Support', 'success'));
              form[0].reset();
            } else {
              $('.signup_message').html(alertMessage('Somthing went wrong please try again later or contact support', 'danger'));
            }
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          },
          error: function (xhr, status, errorThrown) {
            $('.signup_message').html(alertMessage('Somthing went wrong please try again later or contact us', 'danger'));
            form.find('.btn-primary').removeClass('spinner spinner-white spinner-left').attr('disabled', false); // loader
          } 
        });
      });

      function matchPassword(id1, id2) {  
        var pw1 = $(`#${id1}`).val();  
        var pw2 = $(`#${id2}`).val();
        if(pw1 != pw2)  
        {
          return false;  
        } else {  
          return true; 
        }  
      }
    }

    var _handleForgotForm = function (e) {
      // Handle cancel button
      $('#kt_login_forgot_cancel').on('click', function (e) {
        e.preventDefault();

        _showForm('signin');
      });
    }


    var _handelDropzone = function () {
      // single file upload
      $('#kt_dropzone_1').dropzone({
        url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
        paramName: "file", // The name that will be used to transfer the file
        maxFiles: 1,
        maxFilesize: 5, // MB
        addRemoveLinks: true,
        accept: function (file, done) {
          if (file.name == "justinbieber.jpg") {
            done("Naha, you don't.");
          } else {
            done();
          }
        }
      });
    }

    // Public Functions
    return {
      // public functions
      init: function () {
        _login = $('#kt_login');
        _handelDropzone();
        _handleSignInForm();
        _handleSignUpForm();
        _handleForgotForm();
        _handleSelect2();
      }
    };
  }();
  
  // Class Initialization
  $(document).ready(function () {

    KTLogin.init();
  
    setTimeout(() => {
      if (queries.activate && queries.activate == 'signup') {
        $('#kt_login_signup').click();
        if (queries.id && queries.id == 'Seeker') {
          $('.jobseeker-tab .nav-link').trigger('click');
        }
      }
      
      if (queries.id && queries.id == 'Seeker') {
        $('.jobseeker-tab .nav-link').trigger('click');
      }
    }, 100);
  });

  /******/
})()
  ;
//# sourceMappingURL=login-general.js.map