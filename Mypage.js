document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      const topBtn = document.getElementById("topBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          topBtn.style.display = "block";
      } else {
          topBtn.style.display = "none";
      }
  }

  document.getElementById('topBtn').addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });
});
