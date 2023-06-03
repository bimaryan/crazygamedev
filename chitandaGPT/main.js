document.addEventListener('DOMContentLoaded', function () {
    var prefixInput = document.getElementById('prefixInput');

    prefixInput.addEventListener('input', function () {
        var prefix = prefixInput.value;
        console.log('Prefix:', prefix);
    });
});
