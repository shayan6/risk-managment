
// GET process_chatForUser
function process_chatListOfEmployers() { //side menu emp list
  $.ajax({
    type: "GET",
    url: `${baseURL}/Chat/GetContactedEmployers`,
    headers: {
      "Authorization": `Bearer ${token}`
    },
    data: {
      page: 1,
      pageSize: 20,
      search: $('#chatlist-search').val()
    },
    contentType: "application/json",
    success: function (data) {
      if (data.code && data.result.length > 0) {
        $('#chatListOfEmployers').html(element_chatListOfEmployers(data.result));
        $('.chatUser').on('click', function (e) {
          let id = $(this).attr('key');
          $('.chatUser').removeClass('active'); // active user
          $(this).addClass('active'); // active user
          $('#messages').html(''); // empty dom 
          process_chatForUser(id, data.result.filter(el => el.employerId == id)[0]); // process and render chat

          $('.offcanvas-mobile-overlay').click(); // remove aside
        });
      } else {
        $('#chatListOfEmployers').html(/*html*/`<p>No Chat Allowed</p>`);
      }
    }
  });
}

// GET process_chatForUser
function process_chatForUser(fromEmployerId, userInfo, page = 1, pageSize = 10) {  // list of messages
  // create chat info
  window.userInfo = userInfo;
  window.page = page;
  $('.chatUserName').text(`${userInfo.companyName}`);
  $('#userInput').val(userInfo.employerId);
  $('#messageInput').attr('readonly', false);

  var delay = 500;
  $.ajax({
    type: "GET",
    url: `${baseURL}/Chat/GetMessagesForJobSeeker`,
    headers: {
      "Authorization": `Bearer ${token}`
    },
    data: {
      fromEmployerId,
      page,
      pageSize,
      search: ""
    },
    contentType: "application/json",
    beforeSend: function (data) {
      $('#messages').prepend(/*html*/`<div class="spinner spinner-primary spinner-lg spinner-center p-5"></div>`);
    },
    success: function (data) {
      setTimeout(() => {
        if (data.code && data.result.length > 0) {
          page == 1 && $('.scroll-chat').removeClass('ps--active-y'); // scroll to bottom
          $('#messages').prepend(element_messages(data.result, 'jobseeker', userInfo)); // render elements
          page == 1 ? ($('.scroll-chat')[0].scrollTop = $('.scroll-chat')[0].scrollHeight) : $('.scroll-chat')[0].scrollTop = 100;  // scroll to bottom
        } else {
          $('#messages').prepend('');
        }
        // remove spinner on done
        $('#messages .spinner').remove();
      }, delay);
    }
  });

  $('.scroll.scroll-chat').scroll(function () {
    var $this = $(this);
    var $results = $('#messages');
    if ($('#messages .spinner').length == 0) {
      if ($this.scrollTop() == 0 && window.userInfo) {
        window.page += 1;
        process_chatForUser(window.userInfo.employerId, window.userInfo, window.page, 10);
      }
    }
  });
}

$(document).ready(function () {
  // chatlist run #####################################################################
  $('#chatlist-search').on('input', () => process_chatListOfEmployers());

  // initail run ######################################################################
  process_chatListOfEmployers();


  var url = `${baseURLChat}/chat?token=${token}`;

  var connection = new signalR
    .HubConnectionBuilder()
    .withUrl(url)
    // .withAutomaticReconnect()
    //.configureLogging(signalR.LogLevel.Information)//for test env
    .build();

  connection.on("ReceiveMessageFromEmployer", function (employerId, message) {
    if (+$('.chatUser.active').attr('key') == +employerId) {
      var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var html = /*html*/ `
          <div class="d-flex flex-column mb-5 align-items-start">
            <div class="d-flex align-items-center">
              <div class="symbol symbol-circle symbol-40 mr-3">
                <img alt="Pic" src=" ${baseURLUploads}/employers/${userInfo.employerId}/logo/${userInfo.logo}" />
              </div>
              <div>
                <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">${userInfo.companyName}</a>
                <span class="text-muted font-size-sm">${moment().fromNow()}</span>
              </div>
            </div>
            <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
              ${msg}
            </div>
          </div>`;
      $('.scroll-chat').removeClass('ps--active-y');
      $('#messages').append(html);
      $('.scroll-chat')[0].scrollTop = $('.scroll-chat')[0].scrollHeight;
    }
  });

  connection.start().then(function () {
    console.log('connected');
  }).catch(function (err) {
    return console.error(err.toString());
  });

  $('#sendToEmpButton').on("click", function (e) {
    e.preventDefault();

    let employerId = $("#userInput").val();
    let messageText = $("#messageInput").val();
    let html = /*html*/ `
        <!--begin::Message Out-->
        <div class="d-flex flex-column mb-5 align-items-end">
          <div class="d-flex align-items-center">
            <div>
              <span class="text-muted font-size-sm">${moment().fromNow()}</span>
              <a href="#"
                class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">You</a>
            </div>
            <!-- 
            <div class="symbol symbol-circle symbol-40 ml-3">
              <img alt="Pic" src="assets/media/users/default.jpg" />
            </div>
            -->
          </div>
          <div class="mt-2 rounded p-5 bg-light-warning text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
            ${messageText}</div>
        </div>
        <!--end::Message Out -->
      `;
    let error = /*html*/ `<p class="text-danger d-flex flex-column mb-5 align-items-end">Message Not Sent</p>`;

    $('#messages').append(html);
    $("#messageInput").val('').trigger('input');
    $('.scroll-chat')[0].scrollTop = $('.scroll-chat')[0].scrollHeight;

    connection.invoke("SendMessageToEmployer", employerId, messageText)
      .catch(function (e) {
        $('#messages').append(error);
        console.error("........");
        console.error(e.toString().substring(e.toString().indexOf('HubException') + 13));
        console.error("----------");
      });

  });

  // check run #####################################################################
  $('#messageInput').on('input, keyup', function (e) {
    ($(this).val()).trim() ? $('#sendToEmpButton').attr('disabled', false) : $('#sendToEmpButton').attr('disabled', true);

    if (e.keyCode === 13) {
      e.preventDefault();
      $('#sendToEmpButton').trigger('click').attr('disabled', true);
      $(this).val('');
    }
  });

});
