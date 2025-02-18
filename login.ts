// class AE extends Error{
//     constructor(){
//         super('cannot be authenticated: invalid details')
//     }
// }

// function authenticateUser(username: string, password: string): void {

//     const usern='user'
//     const validpass='password'
//     if(username!=usern||password!=validpass){
//         throw new AE
//     }
//     console.log("user succesfully authenticated")

// }
// try
// {
//     authenticateUser('user','password')
//     authenticateUser('user','passwor')
// }
// catch(err:any){
   
//         console.log(err.message)


// }

// function rotateAndNavigate(): void {
//     const element: HTMLElement | null = document.querySelector('.i1');
    
//     if (element) {
//       element.style.transform = 'rotateY(180deg)'; // Apply Y-axis rotation to the element
  
//       setTimeout(() => {
//         window.location.href = '.html'; // Navigate to another page
//       }, 300); // Wait for 300 milliseconds (0.3 seconds) before navigating
//     }
//   }

var signup : HTMLElement | null = document.getElementById("helloSignup") as HTMLButtonElement
var helloDiv : HTMLElement | null = document.getElementById("hello") as HTMLDivElement
var change :HTMLElement|null = document.getElementById("change") as HTMLHeadElement
var change2 : HTMLElement | null= document.getElementById("change2") as HTMLParagraphElement
var user:HTMLInputElement |null=document.getElementById("user") as HTMLInputElement
var password:HTMLInputElement|null=document.getElementById("password") as HTMLInputElement
var button:HTMLButtonElement=document.getElementById("nutton") as HTMLButtonElement

if (signup && helloDiv){
    signup.addEventListener('click',()=>{
        if (signup?.textContent == 'sign up'){
            signup.innerText = "sign in"
            change!.innerText = "welcome Back"
            change2!.innerText = "to keep with us please login with your personal info"
        helloDiv!.style.transition = '1s'
        helloDiv!.style.transform = 'translateX(-200%)'
        }else{
            signup!.innerText = "sign up"
            change!.innerText = "Hello, Friend"
            change2!.innerText = "enter your personal details , and sign up"
            helloDiv!.style.transition = '1s'
            helloDiv!.style.transform = 'translateX(-100%)'
        }
    })
}
// Login event listener
if (button && user && password) {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const userValue = user.value;
        const passwordValue = password.value;
        const expression:RegExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if (expression.test(userValue) && passwordRegex.test(passwordValue)) 
        {
                window.location.href = 'Main.html';
        }
        else if(expression.test(userValue) && !passwordRegex.test(passwordValue))
        {
            alert("Password incorrect")
        } 
        else if(passwordRegex.test(passwordValue) && !expression.test(userValue) )
        {
            alert("Email incorrect")
        } 
        else {
            alert("Invalid username or password!");
        }
    });
}