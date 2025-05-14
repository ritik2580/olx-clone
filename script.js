AOS.init({
    duration: 700,
    once: true
  });
  
  function openCategory() {
    document.getElementById("categoryModal").style.display = "flex";
  }
  
  function openForm(category) {
    document.getElementById("categoryModal").style.display = "none";
    document.getElementById("formModal").style.display = "flex";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  function backToCategory() {
    closeModal("formModal");
    openCategory();
  }
  