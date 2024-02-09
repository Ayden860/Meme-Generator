function generate() {
  // The person's name
  let nameInput = document.getElementById('individual');
  let nameElement = document.getElementById('individual_1');

  nameElement.innerText = nameInput.value;
  // First signer's name
  let nameInput_1 = document.getElementById('first_signer');
  let nameElement_1 = document.getElementById('signer_1');

  nameElement_1.innerText = nameInput_1.value;
  // Second signer's name
  let nameInput_2 = document.getElementById('second_signer');
  let nameElement_2 = document.getElementById('signer_2');

  nameElement_2.innerText = nameInput_2.value;
}
function changer_1() {
  document.getElementById("nothing").src = "monkey-meme.jpg";
  document.getElementById("nothing_icon").src = "brain-svgrepo-com.svg";
  let checkbox_1 = document.getElementById("certificate_name");
  checkbox_1.textContent = "Certificate of Intelligence";
}
function changer_2() {
  document.getElementById("nothing").src = "Roblox-Memes.png";
  document.getElementById("nothing_icon").src = "Robux.png";
  let checkbox_2 = document.getElementById("certificate_name");
  checkbox_2.textContent = "Certificate of Peak Gaming";
}
function changer_3() {
  document.getElementById("nothing").src = "Pixels-Beach.jpeg";
  document.getElementById("nothing_icon").src = "pixel.png";
  let checkbox_3 = document.getElementById("certificate_name");
  checkbox_3.textContent = "Certificate of Vison";
}