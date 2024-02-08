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