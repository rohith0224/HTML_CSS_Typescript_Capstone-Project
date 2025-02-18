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
var signup = document.getElementById("helloSignup");
var helloDiv = document.getElementById("hello");
var change = document.getElementById("change");
var change2 = document.getElementById("change2");
var user = document.getElementById("user");
var password = document.getElementById("password");
var button = document.getElementById("nutton");
if (signup && helloDiv) {
    signup.addEventListener('click', function () {
        if ((signup === null || signup === void 0 ? void 0 : signup.textContent) == 'sign up') {
            signup.innerText = "sign in";
            change.innerText = "welcome Back";
            change2.innerText = "to keep with us please login with your personal info";
            helloDiv.style.transition = '1s';
            helloDiv.style.transform = 'translateX(-200%)';
        }
        else {
            signup.innerText = "sign up";
            change.innerText = "Hello, Friend";
            change2.innerText = "enter your personal details , and sign up";
            helloDiv.style.transition = '1s';
            helloDiv.style.transform = 'translateX(-100%)';
        }
    });
}
// Login event listener
if (button && user && password) {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission behavior
        var userValue = user.value;
        var passwordValue = password.value;
        var expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (expression.test(userValue) && passwordRegex.test(passwordValue)) {
            window.location.href = 'Main.html';
        }
        else if (expression.test(userValue) && !passwordRegex.test(passwordValue)) {
            alert("Password incorrect");
        }
        else if (passwordRegex.test(passwordValue) && !expression.test(userValue)) {
            alert("Email incorrect");
        }
        else {
            alert("Invalid username or password!");
        }
    });
}
