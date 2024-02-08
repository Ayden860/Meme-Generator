function generate(){
    console.log("Click");
    document.getElementById("name").addEventListener("change", function (e) {
        let nameElement = document.getElementById('nameTag');
        nameElement.innerText = e.target.value;
      });
  
      document.getElementById("type").addEventListener("change", function (e) {
        let infoElement = document.getElementById('info');
        infoElement.innerText = e.target.value;
      });
}
// get id/class from input box, then paste it into dif class of blank
// can do onlick with checkboxes, so make another function replacing img and icon