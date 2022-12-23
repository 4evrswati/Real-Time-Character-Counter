var totalEl = document.getElementById("total-counter")

var remainingEl = document.getElementById("remaining-counter")

var textareaEl = document.getElementById("textarea")

textareaEl.addEventListener("keyup", function(){
    var totalChar = textareaEl.value.length;

    totalEl.innerText = totalChar;

    remainingEl.innerText = textareaEl.getAttribute("maxlength") - totalChar;
});