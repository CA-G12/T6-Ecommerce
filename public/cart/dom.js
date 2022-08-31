const container = document.querySelector(".container");
fetch("/usercart")
  .then((res) => res.json())
  .then((result) => {
    if (result.length === 0) {
    } else {
      result.forEach(e);
    }
  });
