const button = document.querySelector('button');
const cElement = document.getElementById('cElement');
const sElement = document.getElementById('sElement');
const speed = document.querySelector('input');
const output = document.querySelector('.output');
let scroller = true;
const content =
  '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p><p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p><p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p><p>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p><p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>';
//http://www.blindtextgenerator.com/lorem-ipsum
//https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
window.onload = setupScroll;

button.addEventListener('click', function() {
  scroller ^= true;
  button.innerText = !scroller ? 'Start' : 'Stop';
})

cElement.addEventListener('mouseenter', scrollSpeed);
cElement.addEventListener('mouseleave', scrollSpeed);

function scrollSpeed(e) {
  scroller = (e.type == 'mouseenter') ? false : true;
  output.innerHTML = 'Scrolling Paused';
}

function setupScroll() {
  sElement.innerHTML = content;
  let temp = sElement.getBoundingClientRect();
  cElement.style.height = temp.height / 2 + 'px';
  sElement.style.top = temp.height + 'px';
  scrollInt = setInterval(scrollingEle, 50);
}

function scrollingEle() {
  let scrollSpeed = speed.value;
  if (scroller) {
    let posY = parseInt(sElement.style.top);
    if (posY + sElement.clientHeight > 0) {
      sElement.style.top = posY - scrollSpeed + 'px';
    } else {
      sElement.style.top = cElement.clientHeight + 'px';
    }

    output.innerHTML = 'Adjust Scroll Speed Below';
  }
}
