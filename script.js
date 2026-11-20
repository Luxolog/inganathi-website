const menu=document.querySelector('.menu'),nav=document.querySelector('nav');if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}document.getElementById('year').textContent=new Date().getFullYear();

// Expand the floating WhatsApp enquiry form before opening WhatsApp.
const waToggle=document.getElementById('whatsapp-toggle');
const waPanel=document.getElementById('whatsapp-panel');
const waClose=document.getElementById('whatsapp-close');
function setWhatsAppPanel(open){if(!waPanel||!waToggle)return;waPanel.classList.toggle('open',open);waPanel.setAttribute('aria-hidden',String(!open));waToggle.setAttribute('aria-expanded',String(open));if(open){const first=waPanel.querySelector('input,select');if(first)first.focus();}}
if(waToggle)waToggle.addEventListener('click',()=>setWhatsAppPanel(!waPanel.classList.contains('open')));
if(waClose)waClose.addEventListener('click',()=>setWhatsAppPanel(false));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setWhatsAppPanel(false);});

// Prepare the selected details, then redirect the visitor to WhatsApp.
const enquiryForm=document.getElementById('whatsapp-enquiry');
if(enquiryForm){enquiryForm.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(enquiryForm);const service=data.get('service');if(!service){document.getElementById('enquiry-service').focus();return;}const name=(data.get('name')||'').trim();const message=(data.get('message')||'').trim();const lines=['Good day, Inganathi Driving Academy.','I would like to enquire about your services.',name?'Name: '+name:null,'Service: '+service,data.get('stage')?'Experience: '+data.get('stage'):null,data.get('code')?'Licence code: '+data.get('code'):null,data.get('time')?'Preferred start: '+data.get('time'):null,message?'Additional information: '+message:null,'Please assist me with more information. Thank you.'].filter(Boolean);const url='https://wa.me/27713264047?text='+encodeURIComponent(lines.join('\n'));window.location.href=url;});}
