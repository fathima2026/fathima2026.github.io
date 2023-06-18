let list = document.querySelector('#shopping_list');
let buttons = document.querySelectorAll('.add');

buttons.forEach(function(button){
  button.addEventListener('click', addToCart);
});
list.addEventListener('click', removefromCart);

let count = 0;

function addToCart(e){

    count++;
    let list = document.querySelector('#shopping_list');
    let row = document.createElement('tr');
    let price = e.target.previousElementSibling.innerHTML;
    let product = e.target.previousElementSibling.previousElementSibling.innerHTML
    row.innerHTML = `<th scope="row">${count}</th>
    <td>${product}</td>
    <td>${price}</td>`
    let link = document.createElement('a');
        link.setAttribute('href','#');
        link.appendChild(document.createTextNode('X'));
    row.appendChild(link);
    list.appendChild(row);
    
}

function removefromCart(e){
    if(e.target.hasAttribute("href")){

        if(confirm('Are you sure?')){
            let parent = e.target.parentElement;
            parent.remove();
            count--;
        }
    }
}
