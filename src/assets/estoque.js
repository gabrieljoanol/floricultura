function chooseItem() {
    const item = createItem();
    grabItem(item)
      .then((item) => selectItem(item))
      .then((item) => displayItem(item))
      .catch((item) => {
        itemFailure(item);
      });
  }
  function createItem(){
    // Make the order and associate it with a new HTML element
    const id = Math.floor(Math.random() * 20);
    const itemElement = document.createElement("li");
    const item = { element: itemElement, id: id };
  
    // Insert the order into the HTML list
    itemElement.innerHTML = `<span>[${item.id}] &#128523; <i>procurando</i> ...</span>`;
    const items = document.getElementById("items");
    items.appendChild(itemElement);
  
    return item;
  }
  
  function grabItem(item) {
    return new Promise((resolve, reject) => {
      doWork(item, 1000, 3000, resolve, reject, `sem estoque de violetas`);
    });
  }
  
  function selectItem(item) {
    return new Promise((resolve, reject) => {
      doWork(item, 2000, 5000, resolve, reject, `sem estoque de rosas`);
    });
  }
  
  function doWork(item, min, max, resolve, reject, errMsg) {
    let workTime = Math.random() * (max - min) + min;
    setTimeout(() => {
      workTime = Math.round(workTime);
      if (workTime < max * 0.85) {
        resolve(item);
      } else {
        item.error = errMsg;
        reject(item);
      }
    }, workTime);
  }
  function displayItem(item) {
    item.element.innerHTML = `<span>[${item.id}] 🛒; <b>rosas 3 , violetas 4</b>!</span>`;
  }
  
  function itemFailure(item) {
    item.element.innerHTML = `<span> [${item.id}] &#128544; <b class='failure'>Oops</b>! ${item.error}</span>`;
  }
  
  
    