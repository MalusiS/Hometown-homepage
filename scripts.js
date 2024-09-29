var links, urls, icons;


links = ['LinkedIn', 'YouTube', 'X', 'Facebook'];
urls = ['#', '#', '#', '#'];
icons = ['https://img.icons8.com/?size=25&id=13930&format=png&color=000000', 'https://img.icons8.com/?size=25&id=9a46bTk3awwI&format=png&color=000000', 'https://img.icons8.com/?size=25&id=phOKFKYpe00C&format=png&color=000000', 'https://img.icons8.com/?size=25&id=118497&format=png&color=000000'];
let element_contact_links = document.getElementById('contact-links');
while (!!links.length) {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let new_li = document.createElement('li');
  let new_img = document.createElement('img');
  new_img.setAttribute("src", icons.shift());

  new_li.appendChild(new_img);
  let new_a = document.createElement('a');
  new_a.setAttribute("href", urls.shift());
  new_a.innerText = links.shift();
  new_a.style.color = '#94dea5';

  new_li.appendChild(new_a);

  element_contact_links.appendChild(new_li);
}
