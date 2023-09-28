function goToWebsite(websiteURL) {
      window.location.href = websiteURL;
      //alert("Oops! Terjadi kesalahan. 4000");
    }

const allSkeleton = document.querySelectorAll('.skeleton');
const allContent =  document.getElementById('skel');


window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
      allContent.style.opacity = "1";
    });
  }, 700);
});

setTimeout()
