// document.onclick = () =>{
//     const root = document.querySelectorAll("#root");
//     let audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3");
//     audio.play().then(alert("Началась музыка"))
// }
//

//
// document.onclick = () =>{
//
//     let audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3");
//     audio.play();
//     alert("Началась музыка");
// }


// const root = document.querySelector("#root");
// document.onclick = () =>{
//     let img = new Image("1000")
//     let audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3")
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";
//     let promise = new Promise(function(resolve, reject){
//         resolve(img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg");
//         reject(console.log("Не удалось"))
//     })
//     promise.then(
//         root.insertAdjacentElement("afterend", img),
//         alert("Произошла ошибка")
//     )
// }
let audio = new Audio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3")
fetch("https://api.giphy.com/v1/gifs/trending?api_key=2bfK2NN1yjPRMWseYYbgLQwM3Wy9g9YX&limit=25&rating=g")
    .then(response => response.json())
    .then(json=> gifParty(json))
    .then(setTimeout(()=>{audio.play()}, 3000));


function gifParty(obj){
    console.log(obj);
    console.log(obj.data[1].images.original.url)
    for (let i = 0; i <25; i++ ) {
        root.insertAdjacentHTML("afterend", `<img src=${obj.data[i].images.downsized.url}/>`);
    }
}
