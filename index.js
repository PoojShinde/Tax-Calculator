
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateTax").addEventListener("click", function() {
        
        var grossIncome = parseFloat(document.getElementById("grossIncome").value) || 0;
        var extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
        var deductions = parseFloat(document.getElementById("deductions").value) || 0;
        var ageGroup = document.getElementById("ageGroup").value;

        if (!ageGroup) {
            alert("Please select your age group.");
            return;
        }

        var taxableIncome = grossIncome + extraIncome - deductions;
        var taxRate = 0;
        var taxPayable = 0;

        if (taxableIncome > 800000) {
            switch (ageGroup) {
                case "-40":
                    taxRate = 0.3;
                    break;
                case "40-59":
                    taxRate = 0.4;
                    break;
                case "60+":
                    taxRate = 0.1;
                    break;
            }
            taxPayable = (taxableIncome - 800000) * taxRate;
        }
        
        var finalIncome = grossIncome - taxPayable;
        var resultWindow = window.open("", "_blank");
        // resultWindow.document.write(`<h1 style="text-align:center">Your Overall Income Will Be: <strong>₹${finalIncome.toLocaleString()}</strong></h1>`);
        
        // resultWindow.document.write( `<small>After Tax Deduction</small>`) 
        
        // resultWindow.document.write('<button onclick="window.close()">Close</button>');
       
        resultWindow.document.write(`<h1 style="color: #333; font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">Your Overall Income Will Be: <strong>₹${finalIncome.toLocaleString()}</strong></h1>`);

        resultWindow.document.write(`<h6 style="text-align: center" >After Tax Deduction</h6>`);

        resultWindow.document.write('<button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; display: block; margin: 20px auto;" onclick="window.close()">Close</button>');

       

    });
    
});
