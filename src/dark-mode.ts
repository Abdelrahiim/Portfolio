
export const toggle_theme = () :void =>  {
    const themeBtn = document.querySelector('.theme-btn');
    const toggle_icon:Element | null = document.querySelector("#toggle");
    if (!toggle_icon){
        throw "WTF";
    }
    toggle_icon.innerHTML = "toggle_on";
    console.log(typeof(toggle_icon.innerHTML))
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            if (toggle_icon.innerHTML == "toggle_on"){
                
                toggle_icon.innerHTML = 'toggle_off';
            }
            else{
                toggle_icon.innerHTML ='toggle_on';
            }
            
            let element = document.body;
            element.classList.toggle('light-mode');
            themeBtn.classList.toggle('light-btn');

        })
    };
}