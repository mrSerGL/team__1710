(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-milkshake-open]"),
      closeModalBtn: document.querySelector("[data-modal-milkshake-close]"),
      modal: document.querySelector("[data-modal-milkshake]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();