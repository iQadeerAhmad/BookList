const title = document.getElementById('title');

const author = document.getElementById('author');

const year = document.getElementById('year');

const bookList = document.getElementById('book-list');

const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {

    e.preventDefault();


    let titleData=document.createElement("div");
    
    titleData.innerText=title.value;

    let authorData=document.createElement("div");

    authorData.innerText=author.value;

    let yearData=document.createElement('div');

    yearData.innerText=year.value;

    if (title.value === '' || author.value === '' || year.value === '') {
        
        alert('Please fill in all the fields');

    } else {

    let bookTable=document.createElement("section");

    bookTable.className="table-section";

    bookTable.appendChild(titleData);

    bookTable.appendChild(authorData);

    bookTable.appendChild(yearData);

    document.getElementById('book-list').appendChild(bookTable);

    }
    
});
