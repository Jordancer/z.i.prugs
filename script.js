function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

window.onscroll = function () {
  navColorCange();
};

function navColorCange() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navColor").className = "navChange";
  } else {
    document.getElementById("navColor").className = "";
  }
}
// Collecting JSON.file, Setting It In A Table & Displaying On HTML

//Get Data From The json file
fetch("products.json")
  //catch the Response object and turn it to a javascript object
  .then(function (response) {
    return response.json();
  })

  //The products argument inside the function is holding a javascript array of The products.
  .then(function (products) {
    // targeting the table-body in the html file
    let placeholder = document.querySelector("#data-output");
    let out = "";

    // loop through the products array To access every product.
    for (let product of products) {
      out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.description}</td>
			</tr>
		`;
    }

    placeholder.innerHTML = out;
  });
