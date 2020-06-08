var tokyoAlert = function () {
        if (state) {
                window.alert("東京")
        }
}

var tokyoRelease = function () {
        window.alert("解除")
}

var trigger = function () {
        state = true
        document.bgColor = "red";
        document.getElementById("body").setAttribute('style', "background-image:linear-gradient(-45deg,#ff0000 25 %,#000 25 %, #000 50 %,#ff0000 50 %, #ff0000 75 %,#000 75 %, #000);")
        tokyoAlert()
}

var end = function () {
        state = false
        document.bgColor = "white";
        tokyoRelease()
}

window.onload = function () {
        setInterval(tokyoAlert, 1500)
}
