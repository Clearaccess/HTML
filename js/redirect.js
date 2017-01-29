$('#bLoginSignIn').click(
    function () {
        location.href = "";
    }
)

$('#bLoginEnterGuest').click(
    function () {
        location.href = "showItems.html";
    }
)

$('#bLoginReg').click(
    function () {
        location.href = "registration.html";
    }
)

$('#bReg').click(
    function () {
        if ($('#form').valid()) {
            location.href = "showItems.html";
        }
    }
)

$('#bReset').click(
    function () {
        $('#form')[0].reset();
    }
)

$('#reset').click(
    function () {
        $('#form')[0].reset();
    }
)