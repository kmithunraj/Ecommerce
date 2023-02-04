function menuBar() {
    var container = document.getElementById('navigation');
    var blur = document.getElementById('blur');
    if (container.style.display == 'none') {
        container.style.display = 'flex';
        blur.style.display = 'block';
    } else {
        container.style.display = 'none';
        blur.style.display = 'none';
    }
    
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('navigation');
    var blur = document.getElementById('blur');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
        blur.style.display = 'none';
    }
});



function toggleSearchBar() {
    var header = document.getElementById("mobile_header");
    var searchbar = document.getElementById("searchbar");
    if (searchbar.style.display === "none") {
        header.style.filter = "blur(5px)";
        searchbar.style.display = "flex";
    } else {
        header.style.filter = "blur(0px)";
        searchbar.style.display = "none";
    }
}

document.addEventListener('mouseup', function(e) {
    var header = document.getElementById("mobile_header");
    var searchbar = document.getElementById("searchbar");
    if (!searchbar.contains(e.target)) {
        header.style.filter = "blur(0px)";
        searchbar.style.display = "none";
    }
});