var modal = document.getElementById("modal");
var btn = document.getElementById("關於古卡羅");
var span = modal.querySelector('.close');

btn.addEventListener('click', function() {
    modal.style.display = "block";
  });

span.addEventListener('click', function() {
  modal.style.display = 'none';
});