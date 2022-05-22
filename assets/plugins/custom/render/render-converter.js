// date formate
$.views.converters("format", date => moment(date).format('MMM D, YYYY'));
// date formate
$.views.converters("datetime", date => moment(date).format('MMM D, YYYY hh:mm A'));
// date time from now
$.views.converters("fromNow", date => moment(date).fromNow());
// status
$.views.converters("status", value => value == 'Yes' ? 'success' : 'danger' );
// is ready
$.views.converters("isCreated", value => value ? '<span class="badge badge-success-inverted">Ready</span>' : '<span class="badge badge-primary-inverted">Created</span>' );
$.views.converters("time", value => value ? moment(value).format('hh:mm:A') : '' );
$.views.converters("isSelected", value => value ? '' : 'selected' );
$.views.converters("isAssigned", value => value && value > 0 ? 'btn-success' : 'btn-danger' );
$.views.converters("isActive", value => value ? 'active' : 'inactive' );
$.views.converters("isRider", value => value ? value : 'Assign Rider' );
// yes or no
$.views.converters("yesOrNo", value => value ? 'Yes' : 'No' );
$.views.converters("isChecked", value => value ? 'checked' : '' );
$.views.converters("isReturned", value => value ? 'returned' : '' );
// currency
$.views.converters("currency", num => num ? num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.0' );
// $.views.converters("currency", num => num );
// isEmpty
$.views.converters("isEmpty", value => value ? value.toFixed(2) : '0.0' );
// ready to delivery
$.views.converters("timeDiff", function(date1, date2) {
    if (date1 && date2) {
        var a = moment(date1); //todays date
        var b = moment(date2); // another date
        return a.diff(b, 'minutes');
    } else {
        return 0;
    }
});

// is Arrived
$.views.converters("isArrived", (created, ready = null, accepted = null, arrived = null, collected = null, delivered = null, returned = null) =>  { 
    if (returned != null) return '<span class="badge badge-danger">Returned</span>';
    if (delivered != null) return '<span class="badge badge-success-inverted">Delivered</span>';
    if (collected != null) return '<span class="badge badge-success-inverted">Collected</span>';
    if (arrived != null) return '<span class="badge badge-primary-inverted">Arrived</span>';
    if (accepted != null) return '<span class="badge badge-primary-inverted">Accepted</span>';
    if (ready != null) return '<span class="badge badge-primary-inverted">Ready</span>';
    return '<span class="badge badge-danger-inverted">Created</span>';
});

// feed back stars
$.views.converters("stars", value =>  {
    return `<span class="fa fa-star ${value > 0 && 'checked'}"></span>
            <span class="fa fa-star ${value > 1 && 'checked'}"></span>
            <span class="fa fa-star ${value > 2 && 'checked'}"></span>
            <span class="fa fa-star ${value > 3 && 'checked'}"></span>
            <span class="fa fa-star ${value > 4 && 'checked'}"></span>`;
});
