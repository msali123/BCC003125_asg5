var a_week = parseInt(prompt("Enter The Number of Week You Want to Add"));

        function addWeek(a_week) {

    var current_d = new Date();
    current_d.setDate(current_d.getDate() + a_week * 7);
    console.log(current_d);
        }
 addWeek(5);
      