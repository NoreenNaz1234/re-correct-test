// Write all your Javascript here!
let month = [
"January",
"Feburary",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
]


function callBack(index) {
	
	$.ajax({
		url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${index}`,
		success: function (data) {
			console.log(data);
			document.querySelector("#price").innerHTML = data.menuOptions[0];
			document.querySelector("#hire").innerHTML = data.menuOptions[1];
			document.querySelector("#enterprice").innerHTML = data.menuOptions[2];
			document.querySelector("#prvcy").innerHTML = data.menuOptions[3];
			document.querySelector(".image").innerHTML = `<img width="720"src="${data.imageURL}">`;
			document.querySelector(".card-title").innerHTML =`<h5>${data.info.heading}</h5>`;
			document.querySelector(".card-text").innerHTML =`<p>${data.info.description}</p>`
			document.querySelector("#title").innerHTML =`<h5>${data.sale.heading}</h5>`;
			document.querySelector("#decription").innerHTML =`<p>${data.sale.description}</p>`
			var Newdate = new Date(data.date);
			var d = Newdate.getDay(Newdate * 1000);
			var dat = Newdate.getMonth(Newdate * 1000);
			var year = Newdate.getFullYear(Newdate * 1000);
			var h = Newdate.getHours();
			var m = Newdate.getMinutes();
			document.querySelector(`#date`).innerHTML = `${month[dat]}-${d}-${year}  ${h}H : ${m}M`;



		}
	});
}
callBack('en');