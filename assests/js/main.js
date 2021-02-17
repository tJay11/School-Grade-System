function studentGrade() {
    var name = document.getElementById('studentname').value;
    var courses = document.getElementById('courses').value;
    var IA = document.getElementById('IA').value;
    var ES = document.getElementById('ES').value;
    var total = parseInt(IA) + parseInt(ES)

    if (IA > 50) {
        alert('Invalid Internal Assessment or ENd of Semester score')
        return;
    }
    if (ES > 50) {
        alert('Invalid Internal Assessment or ENd of Semester score')
        return;
    }

    function grade() {
        if (total < 101 && total > 79) {
            return ("A")
        }
        else if (total < 80 && total > 69) {
            return ("B")
        }
        else if (total < 70 && total > 59) {
            return ("C")
        }
        else if (total < 60 && total > 49) {
            return ("D")
        }
        else if (total < 50 && total > 39) {
            return ("E")
        }
        else if (total < 40 && total > 0) {
            return ("F")
        }
        else {
            return ("F")
        }
    }

    var newrow = document.createElement("tr");
    document.getElementById('gradetable').appendChild(newrow);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);

    cell1.innerHTML = name
    cell2.innerHTML = courses
    cell3.innerHTML = IA
    cell4.innerHTML = ES
    cell5.innerHTML = total
    cell6.innerHTML = grade()

    document.getElementById('studentname').value = ''
    document.getElementById('courses').value = ''
    document.getElementById('IA').value = ''
    document.getElementById('ES').value = ''
}