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

fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
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
