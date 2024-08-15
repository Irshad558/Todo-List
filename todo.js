document.getElementById('submit').addEventListener('click',function(){
    const listtask = document.getElementById('listvalue');
    const listvalue = listtask.value.trim();
    
    if (listvalue !== '') {
        const ul = document.getElementById('insertli');
        const li = document.createElement('li');
        
        li.textContent = listvalue;
        li.addEventListener('click', function(){
            li.classList.toggle('completed');
        });
        
        const deletebtn = document.createElement('input');
        deletebtn.setAttribute('type','button');
        // deletebtn.textContent='Delete';
        deletebtn.className='deletebtn';
        deletebtn.setAttribute("value","Delete");

        deletebtn.addEventListener('click', function(){
            ul.removeChild(li);
        });
        // const li = document.createTextNode(listvalue);
        // element.appendChild(li);
        li.appendChild(deletebtn);
        ul.appendChild(li);
        listtask.value = '';
    };
});