function appendImageElement(key, index) { 
    const imgElem = document.createElement('img');
    imgElem.src = 'http://source.unsplash.com/400x225/?'+key+'&sig='+index ;

    const galleryElement = document.querySelector('.gallery');
    galleryElement.appendChild(imgElem);
}
function removeImageElement() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if(event.key === 'Enter' && keyword)
        {
        removeImageElement();}
        for (let i = 0; i <= 9 ; i++) {
            appendImageElement(keyword, i);      
            }
        };

function run () {
    // testโปรแกรมสามารถแสดงรูปภาพเมื่อรับข้อมูล
    /*for (let i = 0; i < 9 ; i++) {
    appendImageElement('dog', i);      
    }*/

    const inputElement = document.querySelector('input');
    inputElement.addEventListener('keydown', searchPhotos, false);
}

run();