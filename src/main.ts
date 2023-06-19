import "./Style/style.scss";

// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.js'

const sections: NodeListOf<Element> =
  document.querySelectorAll(".section");

// const sectbtns =
//   document.querySelectorAll(".controls");

const sec_btn: NodeListOf<Element> =
  document.querySelectorAll(".control");



const pageTransition = (): void => {
  // button click active class
  sec_btn.forEach((btn) => {
    btn.addEventListener("click", (): void => {
      let currentBtn: NodeListOf<Element> = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove('active-btn');
      btn.classList.add("active-btn");
      sections.forEach((section) => {
        section.classList.remove('active');
      })
      const id = btn.getAttribute('data-id');
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.classList.add('active');
        }
      }
    });
  });
};

pageTransition();

export { };
