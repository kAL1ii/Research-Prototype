// Dropdown function for more options
var a_parent = document.querySelectorAll(".a_parent");
a_parent.forEach(function(a_paren_item) {
  a_paren_item.addEventListener("click", function() {
    a_parent.forEach(function(a_parent_item) {
        if (a_parent_item !== a_paren_item) {
          a_parent_item.classList.remove("active");
        }
    });
    a_paren_item.classList.toggle("active");
  });
});

// Sidebar Page Highlighter
var listItems = document.querySelectorAll('li');
  listItems.forEach(item => {
    item.addEventListener('click', function() {
      listItems.forEach(li => li.classList.remove('active'));
      item.classList.add('active');
  });
});

//Page Switcher
function showPage(pageName) {
  var i;
  var pages = document.getElementsByClassName("page");
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}

//Switch between Table and ProductMangement UI
function toggleDivs() {
  var table_id = document.getElementById("table_id");
  var ProductManage = document.getElementById("ProductManage");

  if (table_id.style.display === "none") {
    table_id.style.display = "block";
    ProductManage.style.display = "none";
  } else {
    table_id.style.display = "none";
    ProductManage.style.display = "block";
  }
}

//edit the product name and description
function editProduct(productId) {
  var row = document.querySelector(`tr[data-product-id="${productId}"]`);
  var productName = row.querySelector('td:nth-child(3)');
  var price = row.querySelector('td:nth-child(4)');
  var description = row.querySelector('td:nth-child(5)');
  var size = row.querySelector('td:nth-child(6)');
  
  productName.contentEditable = true;
  price.contentEditable = true;
  description.contentEditable = true;
  size.contentEditable = true;
  productName.focus();
}

function deleteProduct(button) {
  var row = button.closest('tr');
  row.remove();
}

//Product management size option toggle
function toggleSizes() {
  var sizeOptions = document.getElementById('size-options');
  sizeOptions.classList.toggle('show');
}

// Event listener for the size toggle button
var sizeToggle = document.getElementById('size-toggle');
sizeToggle.addEventListener('change', toggleSizes);

//highlight for size available
var sizeButtons = document.getElementsByClassName("sizebtn");
for (var i = 0; i < sizeButtons.length; i++) {
  sizeButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}
//reset button for productmangement
function resetSizes() {
  var sizeButtons = document.getElementsByClassName("sizebtn");
  for (var i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].classList.remove("active");
  }
}

//save button for productmanagement
function saveNewProduct() {

  var productNameInput = document.getElementById("name");
  var productDescriptionInput = document.getElementById("Description");
  var productPriceInput = document.getElementById("price");
  
  if (productNameInput.value && productDescriptionInput.value && productPriceInput.value) {
    // Clear the input fields
    productNameInput.value = "";
    productDescriptionInput.value = "";
    productPriceInput.value = "";

    // Reset the sizes
    resetSizes();

    // Display the alert
    alert("Data saved somewhere...");
    } else {
      alert ("Please fill in the form");
    }
}

function logout() {
  alert("Action is not possible");
}

function addToCart() {
    alert(`Adding to cart`);
    resetSizes();
}