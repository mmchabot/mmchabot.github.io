function calculateYears(principal, interest, tax, desired) {
 	
	var years = 0;
    var newBeforeTax = (principal*interest) + principal;
    var taxes = interest*tax;
    var newAfterTax = newBeforeTax - taxes;
    
    if (newAfterTax => desired) {
      years = 1;
      } else {
		years++
	}
  return years;
}

calculateYears(500, .05, .10, 600);