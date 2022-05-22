
const element_chatListOfJobseekers = data => data.map(el =>
    /*html*/ `
    <div class="d-flex align-items-center justify-content-between origin-item chatUser mb-5" key="${el.jobSeekerId}">
      <div class="d-flex align-items-center">
        <div class="symbol symbol-circle symbol-50 mr-3">
          <img alt="Pic" src=" ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}">
        </div>
        <div class="d-flex flex-column">
          <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">${el.firstName} ${el.lastName}</a>
          <span class="text-muted font-weight-bold font-size-sm">${date_format(el.cvSelectedDate)}</span>
        </div>
      </div>
      <div class="d-flex flex-column align-items-end">
        <span class="text-muted font-weight-bold font-size-sm">${el.lastContacted != null ? date_fromNow(el.lastContacted) : 'No Message'}</span>
        <!-- <span class="label label-sm label-success">4</span> -->
      </div>
    </div>
    `
  ).join('');
  
const element_chatListOfEmployers = data => data.map(el =>
  /*html*/ `
  <div class="d-flex align-items-center justify-content-between origin-item chatUser mb-5" key="${el.employerId}">
    <div class="d-flex align-items-center">
      <div class="symbol symbol-circle symbol-50 mr-3">
        <img alt="Pic" src=" ${baseURLUploads}/employers/${el.employerId}/logo/${el.logo}">
      </div>
      <div class="d-flex flex-column">
        <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-lg">${el.companyName}</a>
      </div>
    </div>
    <div class="d-flex flex-column align-items-end">
      <span class="text-muted font-weight-bold font-size-sm">${el.lastContacted != null ? date_fromNow(el.lastContacted) : 'No Message'}</span>
      <!-- <span class="label label-sm label-success">4</span> -->
    </div>
  </div>
  `
).join('');


const element_messages = (data, type, clickedInfo) => data.slice(0).reverse().map(el => { 
    if (type == 'jobseeker') { // info is of clicked employer

      // image and name
      let employerName = `${clickedInfo.companyName}`;
      let employerImage = `${baseURLUploads}/employers/${clickedInfo.employerId}/logo/${clickedInfo.logo}`;
      let jobseekerName = "You";
      let jobseekerImage = "assets/media/users/default.jpg";

      return /*html*/ `
        ${ !(el.fromEmployer) ?  messagesOut(el, jobseekerName, jobseekerImage) : messagesIn(el, employerName, employerImage) }
      `
    } else { // condition just inverted // type employer // info is of clicked jobseeker 
      
      // image and name
      let employerName = "You";
      let employerImage = "assets/media/users/default.jpg";
      let jobseekerName = `${clickedInfo.firstName} ${clickedInfo.lastName}`;
      let jobseekerImage = `${baseURLUploads}/jobseekers/${clickedInfo.jobSeekerId}/profile/${clickedInfo.photoFileName}`;

      return /*html*/ `
        ${ el.fromEmployer ?  messagesOut(el, employerName, employerImage) : messagesIn(el, jobseekerName, jobseekerImage) }
      `
    }
  }).join('');

  const messagesIn = (el, name, image) => 
    /*html*/ `
      <!--begin::Message In-->
      <div class="d-flex flex-column mb-5 align-items-start">
        <div class="d-flex align-items-center">
          <div class="symbol symbol-circle symbol-40 mr-3">
            <img alt="Pic" src=" ${image}" />
          </div>
          <div>
            <a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">${name}</a>
            <span class="text-muted font-size-sm">${date_fromNow(el.sentDate)}</span>
          </div>
        </div>
        <div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
          ${el.messageText}</div>
      </div>
      <!--end::Message In-->
    `;
    
  const messagesOut = (el, name, image) => 
    /*html*/ `
    <!--begin::Message Out-->
    <div class="d-flex flex-column mb-5 align-items-end">
      <div class="d-flex align-items-center">
        <div>
          <span class="text-muted font-size-sm">${date_fromNow(el.sentDate)}</span>
          <a href="#"
            class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">${name}</a>
        </div>
        <!--
        <div class="symbol symbol-circle symbol-40 ml-3">
          <img alt="Pic" src=" ${image}" />
        </div>
        -->
      </div>
      <div class="mt-2 rounded p-5 bg-light-warning text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
        ${el.messageText}</div>
    </div>
    <!--end::Message Out-->
  `;