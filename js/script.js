
let quantity = 1;
let cash = 0;
let total = 0;

function addQuantity(){
    
    document.getElementById('qty').innerHTML = quantity;
    switch(quantity){
        case 11:
            document.getElementById('prc').innerHTML = quantity;
            quantity = 10;
            alert("MAX Items Reached");
            document.getElementById('prc').innerHTML = total;
            break;
        default:
            quantity = quantity + 1;
            document.getElementById('prc').innerHTML = total;
            break;




    }

}

function minusQuantity(){
    document.getElementById('qty').innerHTML = quantity;

    switch(quantity){
        case 1:
            document.getElementById('prc').innerHTML = quantity;
            alert("Minimum Items Reached");
            break;
        default:
            quantity = quantity - 1;
            break;
    }
}


function add(){
    addQuantity();
    total = quantity * 8406;

}

function minus(){
    minusQuantity();
}
