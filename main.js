const key = 'a87c3ec798mshe4e8c8f83a732e3p12548fjsn8ac8b742a32b'
const form  = document.querySelector('.form');
const input = document.querySelector('#input');
const row = document.querySelector('.row');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    call(input.value);
});

async function call(v){
    const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${v}`;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${key}`,
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const values = await result.results;
        row.innerHTML = '';
        for(let i=0;i<values.length;i++){
            let img = values[i].image.url;
            let t = values[i].title;
            let year = values[i].year;
            let id = values[i].id;
            console.log(id);
            if(img !== undefined && t !== undefined && year!=undefined && id!=undefined){
                const x = document.createElement('div');
                x.className = 'card bg-secondary m-3 p-2';
                x.setAttribute('style','min-width:10rem;  max-width: 18rem;');
                const y = document.createElement('img');
                y.className = 'card-img-top rounded';
                y.setAttribute('src',`${img}`);
                const z = document.createElement('div');
                z.className = 'card-body text-center';
                const l = document.createElement('h4');
                l.className = 'card-title';
                const tex = document.createTextNode(`${t}`);
                const k = document.createElement('div');
                k.className = 'h6 fw-normal';
                const tex1 = document.createTextNode(`${year}`);
                const a = document.createElement('a');
                a.className = 'btn btn-dark mx-2 mb-2';
                const tex2 = document.createTextNode('Details');
                a.setAttribute('href',`https://www.imdb.com${id}`);
                a.setAttribute('target','_blank');
                a.appendChild(tex2);
                k.appendChild(tex1);
                l.appendChild(tex);
                z.appendChild(l);
                z.appendChild(k);
                x.appendChild(y);
                x.appendChild(z);
                x.appendChild(a);
                row.appendChild(x);
            }
        }
        } catch (error) {
        console.error(error);
    }
}

