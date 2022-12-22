$("#login_form").on("submit", function (e) {
    e.preventDefault();

    const action = $(this).attr('action');
    const method = $(this).attr('method');
    const formData = new FormData(this);

    $.ajax({
        url: action,
        type: method,
        data: formData,
        processData: false,
        contentType: false,
        dataType: "json",
        beforeSend: function () {
            $("#btn_submit").prop("disabled", true);
            $("#btn_submit").attr("data-kt-indicator", "on");
        },
        success: function (res) {
            window.location.href = "/administrator/dashboard";
        },
        error: function (err) {
            if (err.status === 422) {
                validationError(err);
            }
        },
        complete: function () {
            $("#btn_submit").removeAttr("data-kt-indicator");
            $("#btn_submit").prop("disabled", false);
        },
    });
});

// const loginForm = document.querySelector('#login_form');

// loginForm.addEventListener('submit', function(e) {
//   e.preventDefault();

//   console.log(this);

//   const action = loginForm.getAttribute('action');
//   const method = loginForm.getAttribute('method');
//   const button = document.getElementById('btn_submit');

//   const xhr = new XMLHttpRequest();
//   xhr.open(method, action);

//   xhr.onloadstart = function() {
//     button.setAttribute('disabled', true);
//     button.setAttribute('data-kt-indicator', 'on');
//   }

//   xhr.onloadend = function() {
//     button.removeAttribute('data-kt-indicator');
//     button.removeAttribute('disabled');
//   }

//   xhr.send();
//   console.log(xhr);
// })
