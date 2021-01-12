// Start of Loading Screen //
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 3000);
};
// End of Loading Screen //

// Start of Menu button //
document.querySelector(".hamburger-menu").addEventListener
    ("click",()=>{
    document.querySelector(".container").classList.
    toggle("change");
});
// End of Menu button //

// Start of Scroll up button //
document.querySelector(".scroll-btn").addEventListener
    ("click",()=>{
    document.querySelector("html").style.scrollBehavior
    ="smooth";
    setTimeout(()=>{
        document.querySelector("html").style.scrollBehavior
    ="unset";    
    }, 1000);
});
// End of Scroll up button //

