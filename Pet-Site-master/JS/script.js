// scrollable navbar
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.nav').addClass('sticky')
  } else {
    $('.nav').removeClass('sticky')
  }
});

// validation of the forms

$(window).on("hashchange", function () {
  if (location.hash.slice(1) == "signup") {
    $(".page").addClass("extend");
    $("#login").removeClass("active");
    $("#signup").addClass("active");
  } else {
    $(".page").removeClass("extend");
    $("#login").addClass("active");
    $("#signup").removeClass("active");
  }
});
$(window).trigger("hashchange");

function validateLoginForm() {
  var name = document.getElementById("logName").value;
  var password = document.getElementById("logPassword").value;

  if (name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
    return false;
  } else {
    alert("Successfully logged in");
    return true;
  }
}

function validateSignupForm() {
  var mail = document.getElementById("signEmail").value;
  var name = document.getElementById("signName").value;
  var password = document.getElementById("signPassword").value;

  if (mail == "" || name == "" || password == "") {
    document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
    return false;
  } else if (password.length < 8) {
    document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
    return false;
  } else {
    alert("Successfully signed up");
    return true;
  }
}
//contact form validation
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
})

// upload file added event listener
const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function () {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});
$("form#form").submit(function (event) {
  event.preventDefault();
  var name = $("#fname").val();
  alert("Hello " + name + ". " + "Thank you for the interest to sell on our site, we will respond to you in an email within 12 hours");
  $("#form")[0].reset();
});