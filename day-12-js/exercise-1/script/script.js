document.addEventListener('DOMContentLoaded', function () {
    // Fill in your code here



    function CalculateItemsValue() {
        // Fill in your code here

        let total = 0;

        // Get the quantity input field
        let [qnt1, qnt2, qnt3, qnt4] = document.querySelectorAll('.quantityInput');

        // Alert the user if the quantity is not a number
        [qnt1, qnt2, qnt3, qnt4].forEach(function (qnt) {
            if (isNaN(qnt.value)) {
            alert('Please enter a valid number');
            qnt.value = '0';
            return;
            }
        });

        // Get the price of the item
        let price1 = qnt1.getAttribute('data-price');
        let price2 = qnt2.getAttribute('data-price');
        let price3 = qnt3.getAttribute('data-price');
        let price4 = qnt4.getAttribute('data-price');

        // Multiply the quantity by the price
        total += (qnt1.value * price1);
        total += (qnt2.value * price2);
        total += (qnt3.value * price3);
        total += (qnt4.value * price4);

        // Display the result in the total field
        document.getElementById('ItemsTotal').innerText = '$' + total;

    }


    document.querySelectorAll('.quantityInput').forEach(function (input) {
        input.addEventListener('keyup', CalculateItemsValue);
    });
});