// console.log("Hello World");
// const head = document.querySelector("html > *"); //First direct child of html
// const body = document.querySelectorAll("html > *")[1]; //Second in array of NodeList is body
// const html = document.querySelector(":root");
// console.log(`The head ${head}`);
// console.log(head);
// console.log(`The body ${body}`);
// console.log(body);
// console.log(`The html ${html}`);
// console.log(html);

document.querySelector("#box1").addEventListener("click", (event) => {
    if(document.querySelector("#content1").classList.contains("display") && 
        event.target.classList.add("tabbed")){
        console.log("contains");
    } else{
        document.querySelector("#content1").classList.add("display");
        event.target.classList.add("tabbed");
        document.querySelector("#content2").classList.remove("display");
        document.querySelector("#box2").classList.remove("tabbed");
        document.querySelector("#content3").classList.remove("display");
        document.querySelector("#box3").classList.remove("tabbed");
    }
});

document.querySelector("#box2").addEventListener("click", (event) => {
    if(document.querySelector("#content2").classList.contains("display")){
        console.log("contains");
    } else{
        document.querySelector("#content2").classList.add("display");
        event.target.classList.add("tabbed");
        document.querySelector("#content1").classList.remove("display");
        document.querySelector("#box1").classList.remove("tabbed");
        document.querySelector("#content3").classList.remove("display");
        document.querySelector("#box3").classList.remove("tabbed");
    }
});

document.querySelector("#box3").addEventListener("click", (event) => {
    if(document.querySelector("#content3").classList.contains("display")){
        console.log("contains");
    } else{
        document.querySelector("#content3").classList.add("display");
        event.target.classList.add("tabbed");
        document.querySelector("#content2").classList.remove("display");
        document.querySelector("#box2").classList.remove("tabbed");
        document.querySelector("#content1").classList.remove("display");
        document.querySelector("#box1").classList.remove("tabbed");
    }
});


