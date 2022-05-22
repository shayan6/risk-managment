
const element_viewed_cv = data => data.map(el =>
  /*html*/ `
  <div class="col-12 col-sm-6 col-lg-6">
    <div class="card card-custom gutter-b origin-cv" key="${el.jobSeekerId}">
      <div class="card-body ribbon ribbon-top ribbon-ver">
          <div class="ribbon-target bg-light-warning" style="top: -2px; right: 20px;"><i class="fa fa-star text-warning"></i></div>
          <!--begin::Details-->
          <div class="d-flex mb-4">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-0 pt-2">
              <div class="symbol symbol-50 symbol-lg-60">
                <img src=" ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.jobSeekerPhoto}" alt="image">
              </div>
              <div class="symbol symbol-50 symbol-lg-60 symbol-primary d-none">
                <span class="font-size-h3 symbol-label font-weight-boldest">JS</span>
              </div>
          </div>
          <!--end::Pic-->
          <!--begin::Info-->
          <div class="flex-grow-1">
            <!--begin::Title-->
            <div class="d-flex justify-content-between flex-wrap mt-1 mb-2">
              <div class="d-flex mr-3">
                <a href="#" class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">
                  ${el.jobSeekerFirstName}
                </a>
              </div>
            </div>
            <!--end::Title-->
            <!--begin::Content-->
            <div class="d-flex flex-wrap justify-content-between">
            <div class="row">
              <div class="col-12">
                <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                    <i class="os-icon os-icon-briefcase mr-2 font-size-lg"></i>${isNull(el.jobTitle)}</a>
              </div>
              <div class="col-12">
                <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                    <i class="os-icon os-icon-flag mr-2 font-size-lg"></i>${isNull(el.nationalityCountryName)}</a>
              </div>
              <div class="col-12">
                <a href="#"  class="text-dark-50 text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                    <i class="os-icon os-icon-ui-93 mr-2 font-size-lg"></i>${isNull(el.organizationName)}</a>
              </div>
              <div class="col-12">
                <a href="#" class="text-dark-50 text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                    <i class="os-icon os-icon-ui-74 mr-2 font-size-lg"></i>${isNull(el.currentLocationCountryName)}</a>
              </div>
            </div> 
          </div>
          <!--end::Content-->
          </div>
          <!--end::Info-->
        </div>
        <!--end::Details-->
      </div>
    </div>
  </div>
  `
).join('');
