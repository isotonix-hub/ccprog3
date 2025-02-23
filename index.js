document.addEventListener("DOMContentLoaded", () => {
    function login_authentication() {



        

        let user_id = 0



        let first_name;
        let last_name;
        let middle_name;
        let profile_picture;

        let about_me;
        let hobbies;
        let random_pic;
        let random_vid;


        let random_hobbies;
        let random_hobbies_2;

        let random_video
 

        let picture;
       

        const user_random_hobbies = [
            "coding.mp4"
        ]

        const user_random_hobbies_2 = [
            "csgo.mp4"
        ]
        

        
   
        const id = [
            1,
          
        ]

        const user_first_name = [
            "VincentMackRyan",
        ]

        const user_middle_name = [
            "Marcos",
        ]

        const user_last_name = [
            "Salvan",
        ]

        const user_profile_picture = [
            "phonk.jpg",
           
        ]

        const user_picture_about_me = [
            "about_me.jpg"
        ]

        const user_picture_hobbies = [
            "hobbies.jpg"

        ]

        const user_picture_random_picture = [
            "random_picture.jpg"

        ]

        const user_picture_random_video = [
            "random_video.jpg"
        ]

       
      
        

    



        const user_username = ["admin@gmail.com"]; 
        const user_password = ["admin" ];

        const get_username = document.getElementById("username").value;
        const get_password = document.getElementById("password").value;

       

        let credential = false;
        for (let i = 0; i < id.length; i++) {
            if (user_username[i] === get_username && user_password[i] === get_password) {
                user_id = id[i];
                first_name = user_first_name[i];
                last_name = user_last_name[i];
                middle_name = user_middle_name[i];
                profile_picture = user_profile_picture[i];
                about_me = user_picture_about_me[i];
                hobbies = user_picture_hobbies[i];  
                random_pic  =  user_picture_random_picture[i]
                random_vid = user_picture_random_video[i];
                random_hobbies = user_random_hobbies[i];
                random_hobbies_2 = user_random_hobbies_2[i]
                credential = true;
                break;
            }
        }

        if (credential) {

            document.getElementById("h1").textContent = "Please wait!";
            sessionStorage.setItem("user_id", user_id);
            sessionStorage.setItem("first_name", first_name);
            sessionStorage.setItem("middle_name", middle_name);
            sessionStorage.setItem("last_name", last_name);
            sessionStorage.setItem("profile_picture", profile_picture);
            sessionStorage.setItem("about_me", about_me);
            sessionStorage.setItem("hobbies", hobbies);
            sessionStorage.setItem("random_pic", random_pic);
            sessionStorage.setItem("random_vid", random_vid);
            sessionStorage.setItem("random_hobbies", random_hobbies);
            sessionStorage.setItem("random_hobbies_2", random_hobbies_2);

            
            
            setTimeout(() => {

         

               
                window.location.href = "profile.html"
         

            },3000)



        } else {
            document.getElementById("h1").textContent = "Please wait!"
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            setTimeout(() => {
               
                document.body.style.backgroundImage = "url('sad.jpg')";
                alert("Wrong credentials please try again!"); 
                document.getElementById("h1").textContent = "Try again!"
      
             

            }, 3000)

            

          
        }
       
    }


    function key_pressed(event) {
        if (event.key === "Enter") {
            login_authentication();
        }
    }




    function close_lock_toggle() {
        const close_lock = document.getElementById("close_lock");
        let input_password = document.getElementById("password");

        close_lock.addEventListener("mouseenter", () => {

            if (input_password.type === "password") {
                close_lock.textContent = "🔓"
                input_password.type = "text";
            } 



        })




    }


    function open_lock_toggle() {
        const close_lock = document.getElementById("close_lock");
        let input_password = document.getElementById("password");

        close_lock.addEventListener("mouseleave", () => {

            if (input_password.type === "text") {
                close_lock.textContent = "🔒"
                input_password.type = "password";
            }



        })




    }

 
    document.getElementById("enter").addEventListener("click", login_authentication);

   
    document.getElementById("username").addEventListener("keydown", key_pressed);
    document.getElementById("password").addEventListener("keydown", key_pressed);

    close_lock_toggle();
    open_lock_toggle();

});
