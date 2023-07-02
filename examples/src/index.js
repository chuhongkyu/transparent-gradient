import { tGradient } from "transparent-gradient"

window.__onHandleContents = onHandleContents;

const symbol = document.querySelector('.symbol .front')
tGradient(symbol, 'left');

function onHandleContents(){
    const items = document.querySelectorAll(".items .item[data-index]");
    
    items.forEach(function(item) {
      item.addEventListener("click", function() {
        let index = item.getAttribute("data-index");
    
        items.forEach(function(item) {
          item.classList.remove("active");
        });
    
        const contents = document.querySelectorAll(".content[data-index]");
    
        // 각 컨텐츠 요소에 active 클래스를 추가하거나 제거합니다.
        contents.forEach(function(content) {
          if (content.getAttribute("data-index") === index) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
    
        item.classList.add("active");
      });
    });
}
