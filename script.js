document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true, 
  });
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1); 
      scroll.scrollTo(`#${targetId}`);
    });
  });
});
var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+"px"
  crsr.style.top=dets.y+"px"
})


function loco(){

    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})
function countUp(elementId, endValue) {
  let currentValue = 0;
  const increment = Math.ceil(endValue / 100);
  const interval = setInterval(function () {
      if (currentValue < endValue) {
          currentValue += increment;
          document.getElementById(elementId).textContent = currentValue;
      } else {
          clearInterval(interval);
      }
  }, 10);
}

countUp("clientCount", 50);
countUp("projectCount", 500);
countUp("supportHours", 1362);
countUp("hardWorkers", 50);

var form = document.getElementById("contact-form");
    function submitForm(event) {
      event.preventDefault();
      var name = form.name.value;
      var email = form.email.value;
      var subject = form.subject.value;
      var message = form.message.value;
      var data = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };
      var json = JSON.stringify(data);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://example.com/contact-us.php");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function() {
        if (xhr.status == 200) {
          form.success.style.display = "block";
          form.error.style.display = "none";
          form.reset();
        } else {
          form.error.style.display = "block";
          form.success.style.display = "none";
        }
      };
      xhr.send(json);
    }