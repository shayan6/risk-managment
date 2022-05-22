
//   <!-- ####################################################################################### -->
//   <!-- render elements ####################################################################### -->
//   <!-- ####################################################################################### -->
const classList = ['primary', 'warning', 'success', 'danger', 'info', 'primary', 'warning', 'success', 'danger', 'info'];

const element_workexperience = data => data.map((el, i) =>
  /*html*/ `
    <div class="timeline-item origin-item" key="${el.workExperienceId}">
      <div class="timeline-media bg-light-${classList[i]}">
        <span class="svg-icon-${classList[i]} svg-icon-md">
          <i class="os-icon os-icon-briefcase text-${classList[i]}"></i>
        </span>
      </div>

      <!--begin::Info-->
      <div class="timeline-desc timeline-desc-light-${classList[i]}">
        <span class="font-weight-bolder text-${classList[i]}">${date_my(el.joiningDate)} - ${date_my(el.leavingDate)}</span>
        <div class="timeline-event mt-5 mb-5">
          <h3 class="font-weignt-bolder">${el.jobTitle} - ${el.jobLocationCountryCode}</h3>
          <h6>${el.organisationName} | ${el.jobType}</h6>
          <p class="font-weight-normal text-dark-50 pt-1 pb-2">
            ${el.jobDescription}  
          </p>
          <p class="btn-actions">
            <a class="text-primary edit-workexperience" href="#"><i class="os-icon os-icon-ui-49 text-primary font-size-reset mr-1"></i>Edit</a>
            .
            <a class="text-danger delete-workexperience" href="#"><i class="os-icon os-icon-ui-15 text-danger font-size-reset mr-1"></i>Delete</a>
          </p>
        </div>
      </div>
      <!--end::Info-->
    </div>
  `
).join('');

const element_education = data => data.map((el, i) =>
  /*html*/ `
    <div class="timeline-item origin-item" key="${el.qualificationId}">
      <div class="timeline-media bg-light-${classList[i]}">
        <span class="svg-icon-${classList[i]} svg-icon-md">
          <i class="os-icon os-icon-book-open text-${classList[i]}"></i>
        </span>
      </div>

      <!--begin::Info-->
      <div class="timeline-desc timeline-desc-light-${classList[i]}">
        <span class="font-weight-bolder text-${classList[i]}">${el.abbreviation}</span>
        <div class="timeline-event mt-5 mb-5">
          <h3 class="font-weignt-bolder">${el.qualificationName}</h3>
        </div>
      </div>
      <!--end::Info-->
    </div>
  `
).join('');

const element_skill = data => data.map(el =>
  /*html*/ `
    <span class="label label-light-primary label-lg label-inline font-weight-bold m-2">${el.skillName}</span>
  `
).join('');

const element_deepSkill = data => data.map(el =>
  /*html*/ `
    <span class="label label-light-danger label-lg label-inline font-weight-bold m-2">${el.deepSkillName}</span>
  `
).join('');

const element_language = data => data.map(el =>
  /*html*/ `
    <span class="label label-light-info label-lg label-inline font-weight-bold m-2">${el.languageName}</span>
  `
).join('');

const element_portfolio = data => data.map(el =>
  /*html*/ `
    <div class="col-12 col-sm-6 origin-item" key="${el.portfolioId}">
      <div class="list-with-img">
        <div class="list-logo file-download-portfolio" key="${el.attachmentFileName ? el.attachmentFileName : 0}">
          <img src="assets/image/${el.attachmentFileName != null ? 'file.png' : 'no_image.png'}" alt="${el.title}" style="height:50px; width:60px;"/>
        </div>
        <div class="list-summary">
          <h6>${el.title}</h6>
          <p><a href="${el.url}">${el.url}</a></p>
          <p class="btn-actions">
            <a class="text-primary edit-portfolio" href="#"><i class="os-icon os-icon-ui-49 text-primary font-size-reset mr-1"></i>Edit</a>
            .
            <a class="text-danger delete-portfolio" href="#"><i class="os-icon os-icon-ui-15 text-danger font-size-reset mr-1"></i>Delete</a>
            .
            <a class="text-success attachment-portfolio" href="#"><i class="os-icon os-icon-ui-51 text-success font-size-reset mr-1"></i>Attachment</a>
          </p>
        </div>
      </div>
    </div>
  `
).join('');


const element_certificate = data => data.map(el =>
  /*html*/ `
    <div class="col-12 col-sm-6 origin-item" key="${el.certificationId}">
      <div class="list-with-img">
        <div class="list-logo file-download-certificate" key="${el.fileName ? el.fileName : 0}">
          <img src="assets/image/${el.fileName ? 'certificate/1.jpg' : 'no_image.png'}" alt="" />
        </div>
        <div class="list-summary">
          <h6>${el.certificateTitle}</h6>
          <p>Issued By: <b>${el.issuedBy}</b></p>
          <p>Issued Date: <b>${date_format(el.issuedDate)}</b></p>
          <p class="btn-actions">
            <a class="text-primary edit-certificate" href="#"><i class="os-icon os-icon-ui-49 text-primary font-size-reset mr-1"></i>Edit</a>
            .
            <a class="text-danger delete-certificate" href="#"><i class="os-icon os-icon-ui-15 text-danger font-size-reset mr-1"></i>Delete</a>
            .
            <a class="text-success attachment-certificate" href="#"><i class="os-icon os-icon-ui-51 text-success font-size-reset mr-1"></i>Attachment</a>
          </p>
        </div>
      </div>
    </div>
  `
).join('');
