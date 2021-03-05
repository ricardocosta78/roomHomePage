let left = document.getElementById('left');
let right = document.getElementById('right');
let text1 = document.getElementById('text-1');
let text2 = document.getElementById('text-2');
let text3 = document.getElementById('text-3');
let background = document.querySelector('#background');
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');

let number = 1; 

right.addEventListener('click', ()=>{
    if(number >=3){
        number =3;
       
    }else{

        number++;
        background.src = `images/desktop-image-hero-${number}.jpg`;
        write();
    }
})
left.addEventListener('click', ()=>{
    if(number <= 1){
        number =1;
        
    }else{

        number--;
        background.src = `images/desktop-image-hero-${number}.jpg`;
        write();
    }
})

function write(){
    if (number === 1){
        document.getElementById('h1').textContent = "Discover innovative ways to decorate";
        document.getElementById('p1').textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    }
    if (number === 2){
        document.getElementById('h1').textContent = "We are available all across the globe";
        document.getElementById('p1').textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    }
    if (number === 3){
        document.getElementById('h1').textContent = "Manufactured with the best materials";
        document.getElementById('p1').textContent = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    }
}