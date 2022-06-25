// let countDown = new Date("Dec 31, 2021 8:14:59").getTime();

// let counter = setInterval(() => {
//     let dateNow = new Date().getTime();

//     let dateDiff = countDown - dateNow;

//     let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) ;
//     document.querySelector(".days").innerHTML = days;

//     let hours = Math.floor((dateDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
//     document.querySelector(".hours").innerHTML = hours;

//     let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)) ;
//     document.querySelector(".minutes").innerHTML = minutes;
    
//     let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000) ;
//     document.querySelector(".seconds").innerHTML = seconds;

//     if(dateDiff < 0){
//         clearInterval(counter);
//         let newYear = document.querySelector(".new-year")
//         newYear.classList.replace("d-none" , "d-flex");
//     }
   
// }, 1000);


$(window).ready(function(){

$(".scloading .loading").fadeOut(1000,()=>{
    $(".scloading .loading").parent().fadeOut(1000,()=>{
        $(".scloading").remove();
        $("body").css("overflow-y" , "auto")
    });
});
    
})