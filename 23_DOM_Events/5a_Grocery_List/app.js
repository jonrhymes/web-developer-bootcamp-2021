// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let pval = product.value;
    let qval = qty.value;
    const li = document.createElement('li');
    li.innerText = `${qval} ${pval}`;
    list.appendChild(li);
    qty.value = '';
    product.value = '';
})