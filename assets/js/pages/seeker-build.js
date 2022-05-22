/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
  /*!******************************************************!*\
    \******************************************************/
  // loading remote data

  // Class Definition
  var KTLogin = function () {
    
    var _handleImage = function () {
      // cropper js
      var cropper;
      var cropperModalId = '#cropperModal';
      var $jsPhotoUploadInput = $('#profile_avatar');

      $jsPhotoUploadInput.on('change', function (e) {
        
        if (cropper) {
          cropper.destroy();
          cropper = null;
        }

        var files = e.target.files;
        var reader = new FileReader();
        
        if (files.length > 0) {
          var photo = files[0];

          reader.onload = function (event) {
            var image = $('.js-avatar-preview')[0];
            image.src = event.target.result;

            cropper = new Cropper(image, {
              viewMode: 1,
              aspectRatio: 1,
              minContainerWidth: 400,
              minContainerHeight: 400,
              minCropBoxWidth: 271,
              minCropBoxHeight: 271,
              movable: true,
              ready: function () {
                console.log(cropper.ready);
              }
            });

            $(cropperModalId).modal();
          };
          reader.readAsDataURL(photo);
        }
      });

      $('.js-save-cropped-avatar').on('click', function (e) {
        e.preventDefault();

        var $button = $(this);
        $button.addClass('spinner spinner-white spinner-left');
        $button.text('uploading...');
        $button.prop('disabled', true);

        const canvas = cropper.getCroppedCanvas({
          height: 400,
          width: 400
        });
        const base64encodedImage = canvas.toDataURL();
        $('#kt_image').attr('style', `background-image: url(${base64encodedImage})`);

        // begin::upload image ###########################################################################
        canvas.toBlob(function(blob) {

          var url = URL.createObjectURL(blob);

          var form = $("#profilePictureForm")[0]; // You need to use standard javascript object here
          var formData = new FormData(form);
          formData.delete('profile_avatar');
          formData.append('Type', 'profile');
          formData.append('FileToUpload', blob, "image.png");
          console.log(blob);

          $.ajax({
            type: "POST",
            data: formData,
            url: `${baseURL}/Uploads/UploadFile`,
            processData: false,
            contentType: false,
            headers: {
              "Authorization": `Bearer ${token}`
            },
            success: function (data) {
              $button.removeClass('spinner spinner-white spinner-left');
              $button.text('Save');
              $button.prop('disabled', false);

              $(cropperModalId).modal('hide');
              cropper.destroy();
              cropper = null;
            }
          });
        }, 'image/png');
        // end::upload image ###########################################################################

      });
    }

    var _handleFormSignup = function () {
      // Base elements
      var wizardEl = KTUtil.getById('kt_login');
      var form = KTUtil.getById('kt_login_signup_form');
      var wizardObj;
      var validations = [];

      if (!form) {
        return;
      }

      // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
      // Step 1
      validations.push(FormValidation.formValidation(
        form,
        {
          fields: {
            firstName: {
              validators: {
                notEmpty: {
                  message: 'Username is required'
                }
              }
            },
            lastName: {
              validators: {
                notEmpty: {
                  message: 'Password is required'
                }
              }
            },
            mobileNumber: {
              validators: {
                notEmpty: {
                  message: 'Mobile Number is required'
                }
              }
            },
            emailAddress: {
              validators: {
                notEmpty: {
                  message: 'Email is required'
                },
                emailAddress: {
                  message: 'The value is not a valid email address'
                }
              }
            },
            nationalityCountryCode: {
              validators: {
                notEmpty: {
                  message: 'Nationality is required'
                }
              }
            },
            currentLocationCountryCode: {
              validators: {
                notEmpty: {
                  message: 'Location is required'
                }
              }
            },
            dateOfBirth: {
              validators: {
                notEmpty: {
                  message: 'Date Of Birth is required'
                }
              }
            },
            postalCode: {
              validators: {
                notEmpty: {
                  message: 'Postal Code is required'
                }
              }
            },
            gender: {
              validators: {
                notEmpty: {
                  message: 'Gender is required'
                }
              }
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap({
              //eleInvalidClass: '',
              eleValidClass: '',
            })
          }
        }
      ));

      // Step 2
      validations.push(FormValidation.formValidation(
        form,
        {
          // fields: {
          // 	textDropZone: {
          // 		validators: {
          // 			notEmpty: {
          // 				message: 'CV is required'
          // 			}
          // 		}
          // 	},
          // },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap({
              //eleInvalidClass: '',
              eleValidClass: '',
            })
          }
        }
      ));

      // Step 3
      validations.push(FormValidation.formValidation(
        form,
        {
          fields: {
          	skills: {
          		validators: {
                // choice: {
                //   max: 3,
                //   message: 'Please select maximum 3 skills'
                // },
          			notEmpty: {
          				message: 'Skills is required'
          			}
          		}
          	},
          	deep_skills: {
          		validators: {
          			notEmpty: {
          				message: 'Deep skills is required'
          			}
          		}
          	},
          	languages: {
          		validators: {
          			notEmpty: {
          				message: 'Languages is required'
          			}
          		}
          	}
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap({
              //eleInvalidClass: '',
              eleValidClass: '',
            })
          }
        }
      ));

      // Step 4
      validations.push(FormValidation.formValidation(
        form,
        {
          // fields: {
          // 	cccvv: {
          // 		validators: {
          // 			notEmpty: {
          // 				message: 'Credit card CVV is required'
          // 			},
          // 			digits: {
          // 				message: 'The CVV value is not valid. Only numbers is allowed'
          // 			}
          // 		}
          // 	}
          // },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            // Bootstrap Framework Integration
            bootstrap: new FormValidation.plugins.Bootstrap({
              //eleInvalidClass: '',
              eleValidClass: '',
            })
          }
        }
      ));

      // Initialize form wizard
      wizardObj = new KTWizard(wizardEl, {
        startStep: 1, // initial active step number
        clickableSteps: false  // allow step clicking
      });

      // Validation before going to next page
      wizardObj.on('change', function (wizard) {

        if (wizard.getStep() > wizard.getNewStep()) {
          return; // Skip if stepped back
        }

        // Validate form before change wizard step
        var validator = validations[wizard.getStep() - 1]; // get validator for currnt step

        if (validator) {
          validator.validate().then(function (status) {
            if (status == 'Valid') {
              
              // ajax call to update
              processOnChange(wizard.getStep());

              wizard.goTo(wizard.getNewStep());
              KTUtil.scrollTop();
            } 
            // else {
            //   Swal.fire({
            //     text: "Sorry, looks like there are some errors detected, please try again.",
            //     icon: "error",
            //     buttonsStyling: false,
            //     confirmButtonText: "Ok, got it!",
            //     customClass: {
            //       confirmButton: "btn font-weight-bold btn-light"
            //     }
            //   }).then(function () {
            //     KTUtil.scrollTop();
            //   });
            // }
          });
        }

        return false;  // Do not change wizard step, further action will be handled by he validator
      });

      // Change event
      wizardObj.on('changed', function (wizard) {
        KTUtil.scrollTop();
      });

      // Submit event
      wizardObj.on('submit', function (wizard) {
        
        if ($('#organisationName').val()) {
          processOnChange(5); // last form submission ##################
        } else {
          window.location = 'seeker_profile.html';
        }
        
          // confirm msg to submit #####################################
        // Swal.fire({
        //   text: "All is good! Please confirm the form submission.",
        //   icon: "success",
        //   showCancelButton: true,
        //   buttonsStyling: false,
        //   confirmButtonText: "Yes, submit!",
        //   cancelButtonText: "No, cancel",
        //   customClass: {
        //     confirmButton: "btn font-weight-bold btn-primary",
        //     cancelButton: "btn font-weight-bold btn-default"
        //   }
        // }).then(function (result) {
        //   if (result.value) {
        //     // form.submit(); // Submit form
        //     window.location = 'seeker_profile.html';
        //   } else if (result.dismiss === 'cancel') {
        //     Swal.fire({
        //       text: "Your form has not been submitted!.",
        //       icon: "error",
        //       buttonsStyling: false,
        //       confirmButtonText: "Ok, got it!",
        //       customClass: {
        //         confirmButton: "btn font-weight-bold btn-primary",
        //       }
        //     });
        //   }
        // });
      });
    }


    var _handleSelect2 = function () {
      // select2 setup
      $('#nationalityCountryCode').select2({
        placeholder: "Nationality *",
      });
      $('#currentLocationCountryCode').select2({
        placeholder: "Current Location *",
      });
      $('#jobLocationCountryCode').select2({
        placeholder: "Job Location",
      });
      $('#nationalityCountryCode').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for Nationality');
      $('#currentLocationCountryCode').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for Current Location');
      $('#jobLocationCountryCode').data('select2').$dropdown.find(':input.select2-search__field').attr('placeholder', 'Search for Job Location');

      $("#skills").select2({
        placeholder: "Search for Skills",
        // allowClear: true,
        minimumSelectionLength: 3,
        ajax: {
          url: `${baseURL}/Lists/GetSkills`,
          dataType: 'json',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          delay: 500,
          data: function (params) {
            return {
              page: 1,
              pageSize: 10,
              search: params.term
            }
          },
          processResults: function (data, params) {
            return {
              results: [...data.map(el => { return { id: el.skillId, text: el.skillName }; })]
            };
          }
        },
      });

      $("#deep_skills").select2({
        placeholder: "Search for Deepskills",
        // allowClear: true,
        minimumSelectionLength: 3,
        ajax: {
          url: `${baseURL}/Lists/GetDeepSkills`,
          dataType: 'json',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          delay: 500,
          data: function (params) {
            return {
              page: 1,
              pageSize: 10,
              search: params.term,
              skillsId: $('#skills').val()
            }
          },
          processResults: function (data, params) {
            return {
              results: [...data.map(el => { return { id: el.deepSkillId, text: el.deepSkillName }; })]
            };
          }
        },
      });

      $("#languages").select2({
        placeholder: "Search for Languages",
        // allowClear: true,
        ajax: {
          url: `${baseURL}/Lists/GetLanguages`,
          dataType: 'json',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          delay: 500,
          data: function (params) {
            return {
              page: 1,
              pageSize: 10,
              search: params.term
            }
          },
          processResults: function (data, params) {
            return {
              results: [...data.map(el => { return { id: el.languageId, text: el.languageName }; })]
            };
          }
        },
      });

      $("#jobTitleId").select2({
        placeholder: "Job Title",
        // allowClear: true,
        ajax: {
          url: `${baseURL}/Lists/GetJobTitles`,
          dataType: 'json',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          delay: 500,
          data: function (params) {
            return {
              page: 1,
              pageSize: 10,
              search: params.term
            }
          },
          processResults: function (data, params) {
            return {
              results: [...data.map(el => { return { id: el.jobTitleId, text: el.jobTitle }; })]
            };
          }
        }
      });

      $("#qualification").select2({
        placeholder: "Qualification",
        // allowClear: true,
        ajax: {
          url: `${baseURL}/Lists/GetQualifications`,
          dataType: 'json',
          headers: {
            "Authorization": `Bearer ${token}`
          },
          delay: 500,
          data: function (params) {
            return {
              page: 1,
              pageSize: 10,
              search: params.term
            }
          },
          processResults: function (data, params) {
            return {
              results: [...data.map(el => { return { id: el.qualificationId, text: `${el.qualificationName} - ${el.abbreviation}` }; })]
            };
          }
        }
      });
      
      $('.select2-selection').addClass('border-0 h-auto py-2 px-3')
    }

    // Public Functions
    return {
      init: function () {
        try { _handleImage(); } catch (err) { console.log(`_handleImage() throw: ${err}`); };
        try { _handleSelect2(); } catch (err) { console.log(`_handleSelect2() throw: ${err}`); };
        try { _handleFormSignup(); } catch (err) { console.log(`_handleFormSignup() throw: ${err}`); };
      }
    };
  }();

  // Class Initialization
  jQuery(document).ready(function () {
    setTimeout(function () {
      KTLogin.init();
    }, 100);
  });

  // get data and form submission 
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: `${baseURL}/Jobseekers/GetProfile`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      contentType: "application/json",
      success: function (data) {
        if (data) {
          $('#firstName').val(data.firstName);
          $('#lastName').val(data.lastName);
          $('#emailAddress').val(data.emailAddress);
          $('#mobileNumber').val(data.mobileNumber);
          $('#nationalityCountryCode').val(data.nationalityCountryCode).trigger('change');
          $('#currentLocationCountryCode').val(data.currentLocationCountryCode).trigger('change');
          $('#dateOfBirth').datepicker( "setDate" , moment(data.dateOfBirth != "0001-01-01T00:00:00" ? data.dateOfBirth : '2000-01-01' ).format('MM/DD/YYYY'));
          $('#postalCode').val(data.postalCode);
          $('#gender').val(data.gender);
          $('#summary').val(data.summary);
          
          data.photoFileName && $('#kt_image').attr('style', `background-image: url(${baseURLUploads}/jobseekers/${data.jobSeekerId}/profile/${data.photoFileName})`);
          
          $('#kt_dropzone_1').dropzone({
            // addRemoveLinks: true,
            url: `${baseURL}/Uploads/UploadFile`,
            paramName: "FileToUpload", // The name that will be used to transfer the file
            maxFiles: 1,
            maxFilesize: 2, // MB
            addRemoveLinks: true,
            accepted: true,
            headers: {
              "Authorization": `Bearer ${token}`
            },
            init: function () {

              // additional params
              this.on("sending", function (file, xhr, formData) {
                // formData.append("Id", dataJWT.Id);
                formData.append("Type", "cv");
                $('#textDropZone').val(JSON.stringify(file));
              });
              
              this.on("maxfilesexceeded", function(file) {
                this.removeAllFiles();
                this.addFile(file);
              });

              // edit uploaded
              // let myDropzone = this;
              // let mockFile = { name: data.uploadedCvFileName, size: data.uploadedCvFileSize };
              
              // myDropzone.options.addedfile.call(myDropzone, mockFile);
              // myDropzone.files.push(mockFile); // here you add them into the files array
              // myDropzone.options.thumbnail.call(myDropzone, mockFile,
              // `./assets/image/pdf.png`);
                  
            },
            accept: function (file, done) {
              console.log({ file, done });
              done();
            }
          });
        }
      }
    });
  });

  // Process When Click Next/Prev ######################################################################################
  function processOnChange(step) {
    
    if (step == 1) {
      let user = {
        "jobSeekerId": dataJWT.Id,
        "firstName": $('#firstName').val(),
        "lastName": $('#lastName').val(),
        "emailAddress": $('#emailAddress').val(),
        // "password": $('#password').val(),
        "mobileNumber": $('#mobileNumber').val(),
        "nationalityCountryCode": $('#nationalityCountryCode').val(),
        "currentLocationCountryCode": $('#currentLocationCountryCode').val(),
        "dateOfBirth": moment($('#dateOfBirth').datepicker('getDate')).format('YYYY-MM-DDT00:00:00.755Z'),
        "photoFileName": "",
        "address": "",
        "postalCode": $('#postalCode').val(),
        "gender": $('#gender').val(),
        "summary": $('#summary').val(),
      };

      $.ajax({
        type: "POST",
        data: JSON.stringify(user),
        url: `${baseURL}/Jobseekers/UpdateProfile`,
        contentType: "application/json",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        success: function (data) {
          console.log('successfully updated profile');
        } 
      });
    }

    // step 3 post
    if (step == 3) {
      $.ajax({
        type: "POST",
        data: JSON.stringify($('#skills').val().map(el => Number(el))),
        url: `${baseURL}/Jobseekers/AddUpdateSkills`,
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${token}` },
        success: function (data) {
          console.log('successfully updated skills');
        }
      });
      $.ajax({
        type: "POST",
        data: JSON.stringify($('#deep_skills').val().map(el => Number(el))),
        url: `${baseURL}/Jobseekers/AddUpdateDeepSkills`,
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${token}` },
        success: function (data) {
          console.log(data);
        }
      });
      $.ajax({
        type: "POST",
        data: JSON.stringify($('#languages').val().map(el => Number(el))),
        url: `${baseURL}/Jobseekers/AddUpdateLanguages`,
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${token}` },
        success: function (data) {
          console.log(data);
        }
      });
    }

    // step 4 education
    if (step == 4) {
      $.ajax({
        type: "POST",
        data: JSON.stringify($('#qualification').val().map(el => Number(el))),
        url: `${baseURL}/Jobseekers/AddUpdateQualifications`,
        contentType: "application/json",
        headers: { "Authorization": `Bearer ${token}` },
        success: function (data) {
          console.log(data);
        }
      });
    }
    
    // step 5 work
    if (step == 5) {
      // get start/end dates 
      let sm = $('#experience_starting_month').val() ? $('#experience_starting_month').val() : 'January';
      let sy = $('#experience_starting_year').val();
      let em = $('#experience_ending_month').val() ? $('#experience_ending_month').val() : 'January';
      let ey = $('#experience_ending_year').val();
      let joiningDate = sy ? moment(`01 ${sm} ${sy}`).format('YYYY-MM-DDT00:00:00') : null;
      let leavingDate = ey ? moment(`01 ${em} ${ey}`).format('YYYY-MM-DDT00:00:00') : null;

      let work = {
        // "workExperienceId": 0,
        "jobSeekerId": dataJWT.Id,
        "jobTitleId": +$('#jobTitleId').val(),
        "jobTypeId": +$('#jobTypeId').val(),
        "organisationName": $('#organisationName').val(),
        "jobLocationCountryCode": $('#jobLocationCountryCode').val(),
        "joiningDate": joiningDate,
        "leavingDate": leavingDate,
        "jobDescription": $('#jobDescription').val()
      };
      
      $.ajax({
        type: "POST",
        data: JSON.stringify(work),
        url: `${baseURL}/Jobseekers/AddUpdateWorkExperience`,
        contentType: "application/json",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        success: function (data) {
          console.log(data);
          window.location = 'seeker_profile.html';
        },
        error: function (xhr) {
          SwalError();
        }
      });
    }

  }


  /******/
})()
  ;
//# sourceMappingURL=login-3.js.map