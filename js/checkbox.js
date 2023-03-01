
/*new Vue ({
	el: '#changeTheme',
	data: {
        changeThemeDark: false
      },
      methods: {
        changeTheme() {
          this.changeThemeDark = "./css/darkTheme.css";
        }
    }
});*/

const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");
const switchBtn = document.querySelector(".switch-btn");
const btnOn = document.querySelector(".switch-on");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "./css/lightTheme.css";
    let darkTheme = "./css/darkTheme.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

}

switchBtn.addEventListener('click', function(){
	switchBtn.classList.toggle('switch-on');
});
