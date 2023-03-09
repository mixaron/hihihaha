const inputElement =
document.getElementById("myForm");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2")
inputElement.addEventListener("submit", function(event) {
    event.preventDefault();
    let chislo1 = parseInt(document.getElementById("1chislo").value);
    let chislo2 = parseInt(document.getElementById("2chislo").value);
    function Calculator() {
        this.read = function() {
          this.a = chislo1;
          this.b = chislo2;
        };
      
        this.sum = function() {
          return this.a + this.b;
        };
      
        this.mul = function() {
          return this.a * this.b;
        };
       }
      
      let calculator = new Calculator();
      calculator.read();
      result1.innerHTML = "Sum=" + calculator.sum();
      result2.innerHTML = "Mul=" + calculator.mul();
})
