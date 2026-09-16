const header=document.querySelector('[data-header]');
const menu=document.querySelector('[data-menu]');
const mobileNav=document.querySelector('[data-mobile-nav]');
const dialog=document.querySelector('[data-dialog]');
const dialogVideo=document.querySelector('[data-dialog-video]');
const status=document.querySelector('[data-status]');
const hero=document.querySelector('[data-hero]');
const heroMedia=document.querySelector('[data-hero-media]');

const onScroll=()=>header.classList.toggle('stuck',scrollY>24);
onScroll();addEventListener('scroll',onScroll,{passive:true});

const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
if(hero&&heroMedia&&!reducedMotion.matches){
  const finePointer=matchMedia('(pointer: fine)').matches;
  const setHeroMotion=(x=0,y=0)=>{hero.style.setProperty('--hero-x',`${x}px`);hero.style.setProperty('--hero-y',`${y}px`)};
  if(finePointer){
    hero.addEventListener('pointermove',event=>{const rect=hero.getBoundingClientRect();setHeroMotion(((event.clientX-rect.left)/rect.width-.5)*-12,((event.clientY-rect.top)/rect.height-.5)*-8)});
    hero.addEventListener('pointerleave',()=>setHeroMotion());
  }
  const moveHeroOnScroll=()=>hero.style.setProperty('--hero-scroll',`${Math.min(scrollY*.035,28)}px`);
  moveHeroOnScroll();addEventListener('scroll',moveHeroOnScroll,{passive:true});
  heroMedia.addEventListener('loadedmetadata',()=>{heroMedia.playbackRate=.82},{once:true});
}

menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');mobileNav.hidden=!open;document.body.classList.toggle('lock',open)});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');mobileNav.hidden=true;document.body.classList.remove('lock')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -6%'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${(i%4)*45}ms`;observer.observe(el)});

function stopVideo(){dialogVideo.pause();dialogVideo.removeAttribute('src');dialogVideo.load()}
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{dialogVideo.src=button.dataset.video;dialog.showModal();dialogVideo.play().catch(()=>{})}));
document.querySelector('[data-close]').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',stopVideo);
dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()});

document.querySelector('[data-form]').addEventListener('submit',async event=>{event.preventDefault();const d=new FormData(event.currentTarget);const text=`Новый проект для MILLER\nИмя: ${d.get('name')}\nКонтакт: ${d.get('contact')}\nЗадача: ${d.get('task')}`;try{await navigator.clipboard.writeText(text);status.textContent='Бриф скопирован. Его можно вставить в удобный канал связи.'}catch{status.textContent='Бриф заполнен. Скопируйте данные и отправьте их в удобный канал связи.'}});
