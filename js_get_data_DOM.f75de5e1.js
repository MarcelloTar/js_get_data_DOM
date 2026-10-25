'use strict';
// write your code here
const allPopulatinTag = document.querySelectorAll('.population');
const total = [
    ...allPopulatinTag
].reduce((sum, item)=>{
    item = Number(item.textContent.replaceAll(',', ''));
    return sum + item;
}, 0);
document.querySelector('.total-population').textContent = total.toLocaleString('en-US');
document.querySelector('.average-population').textContent = (total / allPopulatinTag.length).toLocaleString('en-US');

//# sourceMappingURL=js_get_data_DOM.f75de5e1.js.map
