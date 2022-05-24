let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {

    let box = document.querySelector('.box');
    let content_box = document.createElement('div');
    content_box.style.width = '100%';
    content_box.style.marginTop = '15px';
    content_box.style.borderRadius = '5px';
    content_box.style.background = '#007bff';
    box.appendChild(content_box);

    let content = document.createElement('div');
    content.style.padding = '20px';
    content_box.appendChild(content);

    let rand_num = Math.floor(Math.random() * 10000);

    let id_num = document.createElement('p');
    id_num.style.color = '#fff';
    content.appendChild(id_num).innerHTML = 'Id no: ' + rand_num;

    let dis = document.querySelector('#post').value;
    let discrib = document.createElement('h5');
    discrib.style.color = '#fff';
    content.appendChild(discrib).innerHTML = 'Discription: ' + dis;

    let name_dis = document.querySelector('#name').value;
    let name = document.createElement('p');
    name.style.color = '#fff200';
    name.style.display = 'inline';
    content.appendChild(name).innerHTML = 'Name: ' + name_dis;

    let date_dis = document.querySelector('#date').value;
    let date = document.createElement('p');
    date.style.color = '#fff';
    date.style.marginLeft = '20px';
    date.style.display = 'inline';
    content.appendChild(date).innerHTML = 'Date: ' + date_dis;

    let btn2 = document.createElement('BUTTON');
    btn2.innerHTML = 'Delete';
    btn2.style.display = 'block';
    btn2.style.marginTop = '10px';
    btn2.style.cursor = 'pointer';
    btn2.style.height = '40px';
    btn2.style.width = '80px';
    btn2.style.border = 'none';
    btn2.style.outline = 'none';
    btn2.style.borderRadius = '5px';
    btn2.style.background = '#c82333';
    btn2.style.color = '#fff';
    content.appendChild(btn2);


    btn2.addEventListener('click', () => {
        content_box.remove();
    })

    e.preventDefault();
})