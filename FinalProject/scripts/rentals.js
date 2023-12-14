document.addEventListener("DOMContentLoaded", function() {
  fetch('data/typesRentals.json')
        .then(response => response.json())
        .then (rentalData=> {
            fillRentalTable(rentalData);
        })
        .catch(error=> console.error('erro to load file', error))

    function fillRentalTable(rentalData) {
        var table = document.getElementById("rentalTable");

        for (var category in rentalData.Types_of_Rentals) {
            rentalData.Types_of_Rentals[category].forEach(function (rental) {
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);

                cell1.innerHTML = rental.model;
                cell2.innerHTML = rental.capacity;
                cell3.innerHTML = rental.prices.reservation.half_day || '-';
                cell4.innerHTML = rental.prices.reservation.full_day || '-';
                cell5.innerHTML = rental.prices.walk_in.half_day || '-';
                cell6.innerHTML = rental.prices.walk_in.full_day || '-';
            });
        }
    }

});