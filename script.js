function increment() {
	score_element = document.getElementById("score");
	score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',

	// These options can be used to round to whole numbers.
	trailingZeroDisplay: 'stripIfInteger'   // This is probably what most people
	// want. It will only stop printing
	// the fraction when the input
	// amount is a round number (int)
	// already. If that's not what you
	// need, have a look at the options
	// below.
	//minimumFractionDigits: 0, // This suffices for whole numbers, but will
	// print 2500.10 as $2,500.1
	//maximumFractionDigits: 0, // Causes 2500.99 to be printed as $2,501
});

// No need to enter key here -- it is a free API
const myHeaders = new Headers();
myHeaders.append("x-api-key", "");

const requestOptions = {
	method: "GET",
	headers: myHeaders,
	redirect: "follow"
};

fetch("https://api.api-ninjas.com/v1/marketcap?ticker=NVDA", requestOptions)
	.then((response) => response.json())
	.then((result) => {// 
		nvdaMC = document.getElementById("nvdaMC")
		nvdaMC.innerHTML = formatter.format(result["market_cap"])
		console.log(result)
	})
	.catch((error) => console.error(error));

