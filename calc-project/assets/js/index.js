let answer = document.getElementById("answer")
    function addition(v1, v2) {
      answer.value = v1 + v2
    }
    function subraction(v1, v2) {
      answer.value = v1 - v2
    }
    function multiplication(v1, v2) {
      answer.value = v1 * v2
    }
    function divison(v1, v2) {
      answer.value = v1 / v2
    }
    function percentage(v1, v2) {
      answer.value = (v1 / v2) * 100
    }
    function clear() {
      document.getElementById("answer").value = ""
      document.getElementById("v1").value = ""
      document.getElementById("v2").value = ""
    }
    let element1 = document.getElementById("v1")
    let element2 = document.getElementById("v2")

    $(document).ready(function () {
      $("#sum").on("click", function () {
        addition(parseFloat(element1.value), parseFloat(element2.value))
      })
      $("#sub").on("click", function () {
        subraction(parseFloat(element1.value), parseFloat(element2.value))
      })
      $("#mul").on("click", function () {
        multiplication(parseFloat(element1.value), parseFloat(element2.value))
      })
      $("#div").on("click", function () {
        divison(parseFloat(element1.value), parseFloat(element2.value))
      })
      $("#per").on("click", function () {
        percentage(parseFloat(element1.value), parseFloat(element2.value))
      })
      $("#clear").on("click", function () {
        clear();
      })
    })