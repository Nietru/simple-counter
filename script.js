var count = 0;

function changeCount(num) {             /*from HTML file*/
    count += num;
    document.getElementById("count").innerHTML = count;
}