import"./assets/styles-mwZ4H1Mt.js";import{f as b,i as l}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),n=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),c=document.querySelector("span[data-minutes]"),m=document.querySelector("span[data-seconds]");n.setAttribute("disabled","");let h,o;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){new Date().getTime()>=t[0].getTime()?(n.setAttribute("disabled",""),l.error({message:"Please choose a date in the future",position:"topRight"})):(h=t[0],n.removeAttribute("disabled",""))}};b(r,g);function T(t){const p=Math.floor(t/864e5),y=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:p,hours:y,minutes:f,seconds:S}}function C(t){return{days:String(t.days).padStart(2,"0"),hours:String(t.hours).padStart(2,"0"),minutes:String(t.minutes).padStart(2,"0"),seconds:String(t.seconds).padStart(2,"0")}}n.addEventListener("click",v);function v(t){n.setAttribute("disabled",""),r.setAttribute("disabled","");let a=h;o&&clearInterval(o),o=setInterval(()=>{let s=a.getTime()-new Date().getTime(),i=T(s),e=C(i);d.textContent=e.days,u.textContent=e.hours,c.textContent=e.minutes,m.textContent=e.seconds,s<=0&&(clearInterval(o),d.textContent="00",u.textContent="00",c.textContent="00",m.textContent="00",l.success({message:"Time is up!",position:"topRight"}),r.removeAttribute("disabled",""))},1e3)}
//# sourceMappingURL=1-timer.js.map
