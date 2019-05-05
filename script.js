(function(){
  const sideBar = document.getElementById('side_nav');
  const menuIcon = document.getElementById('menu');
  const main_content = document.getElementById('main_content');

  function addClass(element, classToAdd){
    element.classList.add(classToAdd);
  }

  function removeClass(element, classToRemove){
    element.classList.remove(classToRemove);
  }

 // should add the class when clicked ....
  menuIcon.addEventListener('click', (e) => {
    if(sideBar.classList[0] === 'show'){
      removeClass(main_content,'show')
      removeClass(sideBar,'show');
    } else {
      addClass(main_content,'show')
      addClass(sideBar,'show');
    }

  })
})(window)
