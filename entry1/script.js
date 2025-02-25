// Mouse-responsive animations for title and home link
document.querySelector('a.home-link').addEventListener('mouseover', function () {
    this.classList.add('mouse-active');
  });
  document.querySelector('a.home-link').addEventListener('mouseout', function () {
    this.classList.remove('mouse-active');
  });
  
  document.querySelector('#title').addEventListener('mouseover', function () {
    this.classList.add('mouse-active');
  });
  document.querySelector('#title').addEventListener('mouseout', function () {
    this.classList.remove('mouse-active');
  });
  
  // Mouse position-based background changes
  document.body.addEventListener('mousemove', function (e) {
    const width = window.innerWidth;
    const mouseX = e.clientX;
  
    const isLeft = mouseX < width / 2;
    
    if (isLeft) {
      // Left side (dark background with light text)
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      // Right side (light background with dark text)
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  });
  