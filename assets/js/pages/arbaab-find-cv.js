
$(document).ready(function () {

  //  #################################################################################################
  // subheader autocomplete ###########################################################################
  //  #################################################################################################
  $('#click-overlay').on('click', function () {
    $('.offcanvas-mobile-overlay').click();
  });

  $(".filter-job-title").select2({
    placeholder: "Search for Job Title...",
    maximumSelectionLength: 3,
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
    },
  });

  $(".filter-job-title").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'JobTitles');
    processOnChange();
  });

  $(".filter-qualification").select2({
    placeholder: "Search for Qualification...",
    maximumSelectionLength: 3,
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
          results: [...data.map(el => { return { id: el.qualificationId, text: el.qualificationName }; })]
        };
      }
    },
  });

  $(".filter-qualification").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'Qualifications');
    processOnChange();
  });

  $(".filter-skills").select2({
    placeholder: "Search for Skills...",
    maximumSelectionLength: 3,
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

  $(".filter-skills").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'Skills');
    processOnChange();
  });

  $(".filter-deepSkills").select2({
    placeholder: "Search for Deep Skills...",
    maximumSelectionLength: 3,
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
          search: params.term
        }
      },
      processResults: function (data, params) {
        return {
          results: [...data.map(el => { return { id: el.deepSkillId, text: el.deepSkillName }; })]
        };
      }
    },
  });

  $(".filter-deepSkills").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'DeepSkills');
    processOnChange();
  });

  // current location
  $(".filter-currentLocation").select2({
    placeholder: "Search for Current location...",
    maximumSelectionLength: 3
  });

  $(".filter-currentLocation").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'Nationality');
    processOnChange();
  });

  // nationality
  $(".filter-nationality").select2({
    placeholder: "Search for nationality...",
    maximumSelectionLength: 3
  });

  $(".filter-nationality").on("change.select2", function (e) {
    // let search = $(this).select2('data')[0] ? $(this).select2('data')[0].text : '';
    // processOnChange(search, 'Nationality');
    processOnChange();
  });

  // industries
  $(".filter-industries").select2({
    placeholder: "Search for Industries...",
    maximumSelectionLength: 3,
    ajax: {
      url: `${baseURL}/Lists/GetIndustries`,
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
          results: [...data.map(el => { return { id: el.industryId, text: el.industryName }; })]
        };
      }
    },
  });

  $(".filter-industries").on("change.select2", function (e) {
    processOnChange();
  });

  // jobtypes
  $(".filter-jobtype").select2({
    placeholder: "Search for Job Types...",
    maximumSelectionLength: 3,
    ajax: {
      url: `${baseURL}/Lists/GetJobTypes`,
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
          results: [...data.map(el => { return { id: el.jobTypeId, text: el.jobTypeName }; })]
        };
      }
    },
  });

  $(".filter-jobtype").on("change.select2", function (e) {
    processOnChange();
  });

  //  #################################################################################################
  // Get Data #########################################################################################
  //  #################################################################################################

  // Get Subscriptions
  $.ajax({
    type: "GET",
    url: `${baseURL}/Employers/GetSubscriptions`,
    headers: {
      "Authorization": `Bearer ${token}`
    },
    contentType: "application/json",
    success: function (data) {
      if (data && data.length > 0) {
        data = data[0];
        $('.total_viewed').text(` Total Viewed: ${data.cvViewsCount}`);
        $('.total_all').text(` Total Allowed: ${data.allowdCvViews}`);
        $('.remaining').text(` Remaining: ${data.remainingCvViews}`);
      } else {
        $('.total_viewed').text(` Total Viewed: 0`);
        $('.total_all').text(` Total Allowed: 0`);
        $('.remaining').text(` Remaining: 0`);
      }
    }
  });

  $('#next').on('click', function (e) {
    let i = +$('#pageNo').text();
    $('#pageNo').text(++i);
    processOnChange();
  });

  $('#previous').on('click', function () {
    let i = +$('#pageNo').text();
    if (i > 1) {
      $('#pageNo').text(--i);
      processOnChange();
    }
  });

  function processOnChange(search = '', searchIn = '') {
    // get job seekers
    let formData = {
      search,
      page: Number( $('#pageNo').text() ),
      pageSize: 10,
      level: 1,
      searchIn,
      jobTitles: $('#job').val(),
      qualifications: $('#qualification').val(),
      skills: $('#skills').val(),
      deppSkills: $('#deepSkills').val(),
      nationalities: $('#nationality').val(),
      currentLocations: $('#currentLocation').val(),
      industries: $('#industries').val(),
      jobTypes: $('#jobtype').val()
    };

    $.ajax({
      type: "POST",
      data: JSON.stringify(formData),
      url: `${baseURL}/Search/SearchJobSeekers`,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      contentType: "application/json",
      success: function (data) {
        $('.total_seekers').text(data.result.length);
        $('.page-desc').text(`Showing ${data.result.length} entries`);
        $('#jobseekers').html(element_jobseekers(data.result));

        $('.view-profile').on('click', function (e) {
          e.preventDefault();
          let id = Number($(this).closest('.origin-item').attr('key'));
          // view cv is not viewed ##############################
          if ($(this).hasClass('viewed')) {
            window.open(`arbaab_view_cv.html?jobseekerId=${id}`);
          } else {
            viewCv(id);
          } // if end
        });
      }
    });
  }

  function viewCv(jobseekerId) {
    Swal.fire({
      text: "Please confirm to view. Your credit will deduct.",
      icon: "success",
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonText: "Yes, submit!",
      cancelButtonText: "No, cancel",
      customClass: {
        confirmButton: "btn font-weight-bold btn-primary",
        cancelButton: "btn font-weight-bold btn-default"
      }
    }).then(function (result) {
      if (result.value) {
        $.ajax({
          type: "GET",
          url: `${baseURL}/Employers/ViewCv?jobseekerId=${jobseekerId}`,
          headers: {
            "Authorization": `Bearer ${token}`
          },
          contentType: "application/json",
          success: function (data) {
            if (data.code == 1) {
              window.open(`arbaab_view_cv.html?jobseekerId=${jobseekerId}`, '_blank');
            } else {
              SwalError();
            }
          }
        });
      }
    });
  }


  setTimeout(() => {

    // typehead searchHints
    var bloodhound = new Bloodhound({
      datumTokenizer: function (d) {
        return Bloodhound.tokenizers.whitespace(d.keyWord);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `${baseURL}/Search/SearchHints`,
        prepare: function (query, settings) {
          settings.type = "POST";
          settings.contentType = "application/json";
          settings.data = JSON.stringify({ keyWord: query, searchIn: "" });
          settings.headers = {
            "Authorization": `Bearer ${token}`
          };
          return settings;
        }
      },
      limit: 10
    });

    $('.search-keyword').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    }, {
      source: bloodhound,
      displayKey: function (data) {
        return `${data.keyWord} - In ${data.searchIn}`;
      }
    });


    // parse query string to search #############################################
    if (queries && queries.search && queries.location) {

      // select2 select
      let location = (queries.location).trim();
      location = countries.filter(el => location == el.text)[0];
      
      // searchIn Define
      let [search, searchIn] = queries.search.split('%20-%20In%20');
      
      if (location) {
        var newOption = new Option(location.text, location.value, true, true);
        $('#currentLocation').append(newOption);
      }

      // initial run process on change ############################################ 
      processOnChange(decodeURI(search), decodeURI(searchIn));
    } else {
      // initial run process on change ############################################ 
      processOnChange();
    }

  }, 500)

});
