document.addEventListener('DOMContentLoaded', function(){
  ['menu-toggle','menu-toggle-2','menu-toggle-3','menu-toggle-4'].forEach(function(id){
    var btn = document.getElementById(id);
    var links = document.getElementById(id ? id.replace('menu-toggle','nav-links') : 'nav-links');
    if(btn && links){
      btn.addEventListener('click', function(){ links.classList.toggle('show'); });
    }
  });
});
