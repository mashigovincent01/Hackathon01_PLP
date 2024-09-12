var tablinks = document.querySelectorAll(".tab-links");
        var tabContents = document.querySelectorAll(".tab-contents");


        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabContents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            
            document.querySelector("#" + tabname).classList.add("active-tab");
        }




        //section 2
        var sidemenu = document.querySelector("#sidemenu");
        function openmenu(){
            sidemenu.style.right = "0";
        }

        function closemenu(){
            sidemenu.style.right = "-200px";
        }


        const scriptURL = 'https://script.google.com/macros/s/AKfycbymaXLmGpd6PLpfJsqwpCcmvNL0NugRopD3Bqh47XN2NqAqitJohKN5InNnzuG8y9wP/exec'
  const form = document.forms['submit-to-google-sheet']

  

  const msg  = document.querySelector("#msg");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message  sent successfully";
        setTimeout(()=>{
            mgs.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

  //themes
  const body = document.querySelector("body");
  var theme = "white";
  function toggleTheme(){
    
    const navlinks = document.querySelectorAll("nav ul li a");
    if(theme === "white"){
        theme = "black";
        body.style.background = "white";
        // body.style.color = "black";
        document.querySelector("#theme").color = "black";
        navlinks.forEach((navlink)=>{
            navlink.style.color = "black"
            
        });
    }
    else{
        theme = "white";
        body.style.background = "black";
        document.querySelector("#theme").color = "white";
        navlinks.forEach((navlink)=>{
            navlink.style.color = "white"
        });

    }
  }