function myFunction() {
  document.getElementById("mydropdown").classList.toggle("show-dropdown");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropd = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropd.length; i++) {
      var runDropd = dropd[i];
      if (runDropd.classList.contains('show-dropdown')) {
        runDropd.classList.remove('show-dropdown');
}
}
}
}
