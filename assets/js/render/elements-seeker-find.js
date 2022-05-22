
const element_jobseekers = data => data.map(el =>
    /*html*/ `
    <div class="col-12 col-sm-6 col-lg-6 origin-item" key="${el.jobSeekerId}">
      <div class="card card-custom gutter-b">
      <div class="card-body ribbon ribbon-top ribbon-ver">
          <div class="ribbon-target bg-light-warning" style="top: -2px; right: 20px;"><i class="fa fa-star text-warning"></i></div>
          <!--begin::Details-->
          <div class="d-flex mb-4">
          <!--begin: Pic-->
          <div class="flex-shrink-0 mr-7 mt-0 pt-2">
              <div class="symbol symbol-50 symbol-lg-60">
                <img src=" ${baseURLUploads}/jobseekers/${el.jobSeekerId}/profile/${el.photoFileName}" alt="image">
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
                  <a href="#" class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3">${el.firstName}</a>
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
          <!--begin::button-->
          <div class="mt-7 text-left">
            <a href="#" class="btn btn-sm btn-light-${el.cvViews > 0 ? 'success' : 'primary'} view-profile ${el.cvViews > 0 ? 'viewed' : ''}">
                <i class="os-icon ${el.cvViews > 0 ? 'os-icon-check-circle' : 'os-icon-user'}"></i> View Profile
            </a>
            <a href="#" class="btn btn-icon btn-light-facebook mr-2 d-none" data-toggle="tooltip"
                data-theme="dark" title="View Profile">
                <i class="os-icon os-icon-user"></i>
            </a>
            <a href="#" class="btn btn-icon btn-light-twitter mr-2 d-none" data-toggle="tooltip"
                data-theme="dark" title="Hire Me">
                <i class="os-icon os-icon-award"></i>
            </a>
            <a href="#" class="btn btn-icon btn-light-warning mr-2 d-none" data-toggle="tooltip"
                data-theme="dark" title="Add To Favourite">
                <i class="os-icon os-icon-ui-02"></i>
            </a>
            <a href="#" class="btn btn-icon btn-light-google d-none" data-toggle="tooltip" data-theme="dark"
                title="Send Like">
                <i class="os-icon os-icon-ui-03"></i>
            </a>
          </div>
          <!--end::button-->
      </div>
      </div>
    </div>
    `
).join('');
