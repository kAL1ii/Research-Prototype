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