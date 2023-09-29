function goToWebsite(websiteURL) {
      //window.location.href = websiteURL;
      alert("Oops! Terjadi kesalahan. 4000");
    }

// JavaScript
// JavaScript
const allSkeleton = document.querySelectorAll('.skeleton');
const loginElements = document.querySelectorAll('[id^="login"]'); // Memilih semua elemen dengan ID yang dimulai dengan "login"

window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
    });
    
    // Mengatur semua elemen dengan ID yang dimulai dengan "login" agar opasitasnya menjadi 1 (muncul)
    loginElements.forEach(loginElement => {
      loginElement.style.opacity = "1";
    });
  }, 700);
});
