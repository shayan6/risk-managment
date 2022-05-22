
const element_jobTitleWiseCount = data => data.map((el, i) =>
/*html*/ `
  <div class="col-md-3 ftco-animate fadeInUp ftco-animated">
    <ul class="category">
      <li><a href="javascript:void(0)">${isNull(el.jobTitle)} <br><span class="number">${el.count}</span> <span>Job Seekers</span><i class="os-icon os-icon-arrow-right4"></i></a></li>
    </ul>
  </div>
`
).join('');

const element_owlCarouselPremium = data => data.map((el, i) => 
  /*html*/ `
  <div key="${i}">
    <div class="card card-custom">
      <div class="card-body ribbon ribbon-top ribbon-ver">
        <div class="ribbon-target bg-light-success" style="top: -2px; right: 20px;"><i class="fa fa-star text-success"></i></div>
        <!--begin::User-->
        <div class="text-center">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div class="symbol-label" style="background-image:url(' ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}')"></div>
          </div>
          <h4 class="font-weight-bold my-2">${el.firstName}</h4>
          <div class="text-muted mb-2">${isNull(el.jobTitle)}</div>
          <!-- <span class="label label-light-success label-inline font-weight-bold label-lg">Premium</span> -->
        </div>
        <!--end::User-->
      </div>
    </div>
  </div>
  `
).join('');

const element_owlCarouselFeatured = data => data.map((el, i) => 
  /*html*/ `
  <div key="${i}">
    <div class="card card-custom mb-10">
      <div class="card-body ribbon ribbon-top ribbon-ver">
        <div class="ribbon-target bg-light-primary" style="top: -2px; right: 20px;"><i class="fa fa-star text-primary"></i></div>
        <!--begin::User-->
        <div class="text-center">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div class="symbol-label" style="background-image:url(' ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}')"></div>
          </div>
          <h4 class="font-weight-bold my-2">${el.firstName}</h4>
          <div class="text-muted mb-2">${isNull(el.jobTitle)}</div>
          <!-- <span class="label label-light-primary label-inline font-weight-bold label-lg">Featured</span> -->
        </div>
        <!--end::User-->
      </div>
    </div>
    <div class="card card-custom">
      <div class="card-body ribbon ribbon-top ribbon-ver">
        <div class="ribbon-target bg-light-primary" style="top: -2px; right: 20px;"><i class="fa fa-star text-primary"></i></div>
        <!--begin::User-->
        <div class="text-center">
          <div class="symbol symbol-60 symbol-circle symbol-xl-90">
            <div class="symbol-label" style="background-image:url(' ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}')"></div>
          </div>
          <h4 class="font-weight-bold my-2">${el.firstName}</h4>
          <div class="text-muted mb-2">${isNull(el.jobTitle)}</div>
          <!-- <span class="label label-light-primary label-inline font-weight-bold label-lg">Featured</span> -->
        </div>
        <!--end::User-->
      </div>
    </div>
  </div>
  `
).join('');

const element_owlCarouselStandard = data => {

  let div = [];
  for (let i = 0; i < data.length; i += 2) {
    let el = data[i];
    let html = /*html*/ `<div key="${i}">`;
    
    // fist element 
    html += /*html*/ `
      <div class="card card-custom mb-10">
        <div class="card-body ribbon ribbon-top ribbon-ver">
          <div class="ribbon-target bg-light-warning" style="top: -2px; right: 20px;"><i class="fa fa-star text-warning"></i></div>
          <!--begin::User-->
          <div class="text-center">
            <div class="symbol symbol-60 symbol-circle symbol-xl-90">
              <div class="symbol-label" style="background-image:url(' ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}')"></div>
            </div>
            <h4 class="font-weight-bold my-2">${el.firstName}</h4>
            <div class="text-muted mb-2">${isNull(el.jobTitle)}</div>
            <!-- <span class="label label-light-warning label-inline font-weight-bold label-lg">Standard</span> -->
          </div>
          <!--end::User-->
        </div>
      </div>
    `;
    
    // second element 
    el = i+1 < data.length ? data[i+1] : el;
    html += /*html*/ `
      <div class="card card-custom mb-10">
        <div class="card-body ribbon ribbon-top ribbon-ver">
          <div class="ribbon-target bg-light-warning" style="top: -2px; right: 20px;"><i class="fa fa-star text-warning"></i></div>
          <!--begin::User-->
          <div class="text-center">
            <div class="symbol symbol-60 symbol-circle symbol-xl-90">
              <div class="symbol-label" style="background-image:url(' ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}')"></div>
            </div>
            <h4 class="font-weight-bold my-2">${el.firstName}</h4>
            <div class="text-muted mb-2">${isNull(el.jobTitle)}</div>
            <!-- <span class="label label-light-warning label-inline font-weight-bold label-lg">Standard</span> -->
          </div>
          <!--end::User-->
        </div>
      </div>
    `;

    html += /*html*/ `</div>`;

    div.push(html); //push when created
  }

  return div.join('');
}