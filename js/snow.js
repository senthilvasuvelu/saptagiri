// Lightweight continuous snow effect - canvas overlay
(function(){
  const canvas = document.createElement('canvas');
  canvas.id = 'snow-canvas';
  canvas.style.position = 'fixed';
  canvas.style.left = '0';
  canvas.style.top = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let DPR = window.devicePixelRatio || 1;
  let w, h, flakes = [];
  function resize(){ w = canvas.width = Math.floor(window.innerWidth * DPR); h = canvas.height = Math.floor(window.innerHeight * DPR); canvas.style.width = window.innerWidth+'px'; canvas.style.height = window.innerHeight+'px'; for(let f of flakes){ f.x *= DPR; f.y *= DPR; } }
  function init(){ flakes = []; const count = Math.max(40, Math.floor((window.innerWidth*window.innerHeight)/90000)); for(let i=0;i<count;i++){ flakes.push({x:Math.random()*w, y:Math.random()*h, r:(1+Math.random()*3)*DPR, s:0.2+Math.random()*0.8, o:0.6+Math.random()*0.4, drift:(Math.random()-0.5)*0.6}); } }
  function draw(){ ctx.clearRect(0,0,w,h); for(let f of flakes){ ctx.beginPath(); ctx.fillStyle = 'rgba(255,255,255,'+f.o+')'; ctx.arc(f.x, f.y, f.r, 0, Math.PI*2); ctx.fill(); f.y += 0.6 * f.s * DPR; f.x += f.drift * (0.6*f.s); if(f.y > h + 10){ f.y = -10; f.x = Math.random()*w; } if(f.x > w+50) f.x = -50; if(f.x < -50) f.x = w+50; } requestAnimationFrame(draw); }
  function onResize(){ DPR = window.devicePixelRatio || 1; resize(); init(); }
  window.addEventListener('resize', onResize, {passive:true}); onResize(); draw();
})();