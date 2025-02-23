document.addEventListener("DOMContentLoaded", () => {



   

 

    function all_information_user() {



        sessionStorage.getItem("user_id");
        const first_name = sessionStorage.getItem("first_name");
        const middle_name = sessionStorage.getItem("middle_name");
        const last_name = sessionStorage.getItem("last_name");
        const profile_picture = sessionStorage.getItem("profile_picture");



        const about_me = sessionStorage.getItem("about_me");
        const hobbies = sessionStorage.getItem("hobbies");
        const random_pic = sessionStorage.getItem("random_pic")
        const random_vid = sessionStorage.getItem("random_vid");
        
      
       

        // profile picture
        document.getElementById("full_name").textContent = first_name + " " + middle_name + " " + last_name;
        document.getElementById("profile_picture").src = profile_picture;


        //about_me_picture
        document.getElementById("about_me").src = about_me;

        //hobbies picture 

        document.getElementById("hobbies").src = hobbies;


        //random_picture picture
        document.getElementById("random_picture").src = random_pic;
        

        //random_video picture
        document.getElementById("random_video").src = random_vid ;


   

       
 



    }



    function click_icon() {

       



        const icon_first = document.getElementById("first") ;

        icon_first.addEventListener("click", () => {
            window.location.href = "about_me.html";
          
            
        })


        const icon_second = document.getElementById("second");
        icon_second.addEventListener("click", () => {
         
            window.location.href = "hobbies.html";

        })

        const icon_third = document.getElementById("third");
        icon_third.addEventListener("click", () => {

            window.location.href = "random_picture.html";


        })

        const icon_fourth = document.getElementById("fourth");
        icon_fourth.addEventListener("click", () => {

          
            window.location.href = "random_video.html";
        })




            




    }
   






    function logout() {
        const log_out = document.getElementById("log_out");

        log_out.addEventListener("click", () => {



            setTimeout(() => {

                alert("logout........!");
                window.location.replace("index.html")
                sessionStorage.clear();




            },3000)
           



        })

    }




    click_icon();
    all_information_user();
    logout();
  




})