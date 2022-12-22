function validationError(err) {
    $("small.text-danger").text("");
    $("form").find("input,select,textarea").removeClass("is-invalid");

    const json = JSON.parse(err.responseText);
    if (json.errors) {
        $.each(json.errors, function (prefix, value) {
            $(`input#${prefix}`).addClass("is-invalid");
            $(`select#${prefix}`).addClass("is-invalid");
            $(`textarea#${prefix}`).addClass("is-invalid");

            $(`span#${prefix}`).text(value[0]);
            $(`small#${prefix}`).text(value[0]);
        });
    }
}