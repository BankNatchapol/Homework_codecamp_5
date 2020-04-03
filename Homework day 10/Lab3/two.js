let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
styles[Math.round(styles.length/2)-1] = "Classics";
console.log(styles.shift());
styles.unshift("Rap","Reggae");
console.log(styles);