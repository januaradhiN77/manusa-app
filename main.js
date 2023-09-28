function goToWebsite(websiteURL) {
      window.location.href = websiteURL;
      //alert("Oops! Terjadi kesalahan. 4000");
    }

const allSkeleton = document.querySelectorAll('.skeleton');
const sejarah =  document.getElementById('sejarah');
const berita =  document.getElementById('berita');

window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
      sejarah.style.opacity = "1";
      berita.style.opacity = "1";
    });
  }, 700);
});

