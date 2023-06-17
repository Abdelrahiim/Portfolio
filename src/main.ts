import "./Style/style.scss";

// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.js'

const sections: NodeListOf<Element> =
  document.querySelectorAll(".section");

const sectbtns  =
  document.querySelectorAll(".controls");

const sectbtn: NodeListOf<Element> =
  document.querySelectorAll(".control");

const allSections:Element = document.querySelector(".main-content");

const pageTransition = (): void => {
  // button click active class
  sectbtn.forEach((btn) => {
    btn.addEventListener("click", ():void => {
      let currentBtn: NodeListOf<Element> = document.querySelectorAll(".active-btn");
      
      const id:string = btn.getAttribute('data-id');

      currentBtn[0].classList.remove('active-btn');
      btn.classList.add("active-btn");
      sections.forEach((section)=>{
        section.classList.remove('active');
      })
      const element:Element = document.getElementById(id);
      element.classList.add('active')

    });
  });
  // Sections Active Class
//   allSections.addEventListener('click',(e:Event)=>{
//     if (e.target instanceof Element){
      

//       // hide other Sections 
      

      
//     }
    
    

//   })
 };

pageTransition();

export {};
