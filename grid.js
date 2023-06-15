const listItems = document.querySelectorAll('li');

listItems.forEach((listItem) => {
    listItem.addEventListener('mouseenter', handleMouseEnter);
    listItem.addEventListener('mouseout', handleMouseLeave);
  });
  

function handleMouseMove(e) {
  const listItem = e.currentTarget;
  const thumb = listItem.querySelector('.content-img');

  const center_x = listItem.offsetLeft + (thumb.offsetWidth / 2);
  const center_y = listItem.offsetTop + (thumb.offsetHeight / 2);
  const tween_x = e.clientX - center_x;
  const tween_y = e.clientY - center_y;

  thumb.style.left = `${tween_x}px`;
  thumb.style.top = `${tween_y}px`;
}

function handleMouseLeave(e) {
  const listItem = e.currentTarget;
  const thumb = listItem.querySelector('.content-img');

  if (!thumb) {
    return;
  }

  thumb.style.opacity = '0';
  listItem.removeEventListener('mousemove', handleMouseMove);
}

function handleMouseEnter(e) {
  const listItem = e.currentTarget;
  const thumb = listItem.querySelector('.content-img');

  if (!thumb) {
    return;
  }

  thumb.style.opacity = '1';

  listItem.addEventListener('mousemove', handleMouseMove);
}

const stickyElement = document.querySelector('.money');

function updateStickyElementOffset() {
  const scrollPosition = window.scrollY;
  const offset = scrollPosition >= 200 ? 20 : 50; // Set your desired dynamic offset here

  stickyElement.style.top = `${offset}px`;
}
window.addEventListener('load', updateStickyElementOffset);
window.addEventListener('scroll', updateStickyElementOffset);
window.addEventListener('resize', updateStickyElementOffset);
