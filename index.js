function goUp()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ProgressBar Scroller
window.onscroll = function(){progressBar()};

function progressBar()
{
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}