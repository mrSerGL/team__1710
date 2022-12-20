(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-ice-cream-open]"),
      closeModalBtn: document.querySelector("[data-modal-ice-cream-close]"),
      modal: document.querySelector("[data-modal-ice-cream]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();