//alert(document.getElementById('title').innerText);
function btnclick(){
    console.log();
      document.getElementById('title').innerText=document.getElementById('name').value;
      document.getElementById('title').style.color="red";

}
function GetoOddEvenNumber() {
    let numbertype = document.getElementById('Idfornumber').value;
    document.getElementById('text-number').style.color = 'red';
    if (numbertype % 2 == 0) {

        let a = numbertype + " " + "is Even ";

        document.getElementById('text-number').innerHTML = a;

    } else {
        let b = numbertype + " " + "is Odd ";
        document.getElementById('text-number').innerHTML = b;
    }

}
function changeimage(path) {
    document.getElementById('gallarey').src = path;
}