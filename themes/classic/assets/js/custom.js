/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */


window.onload =function () {
    document.querySelector('body').style.display = 'block';
}
var url = window.location.href;
console.log(url);

function replacer(from, to, rep = false, inter = false) {

    var doc = document.querySelector(from);
    var doc2 = document.querySelector(to);

    if (doc && doc2) {

        if (rep != false && inter == false) {

            var replace = doc.innerHTML;

            document.querySelector(to).innerHTML += replace;
            doc.innerHTML = '';

        } else if (rep == false && inter == false) {

            var replace = doc.innerHTML;

            document.querySelector(to).innerHTML = replace;
            doc.innerHTML = '';
        }

        if (inter != false) {

            var replace1 = doc.innerHTML;
            var replace2 = doc2.innerHTML;

            document.querySelector(from).innerHTML = replace2;
            document.querySelector(to).innerHTML = replace1;
        }

    } else {

        if (!doc) {

            console.log('l\'élément de départ n\'existe pas');
        }

        if (!doc2) {

            console.log('l\'élément d\'arrivée n\'existe pas');
        }
    }
}
//
if (url.search('hommes') != -1) {
    replacer('#left-column', '#js-product-list', false, true);
} else if (url.search('femmes') != -1) {
    replacer('#left-column', '#js-product-list', false, true);

} else if (url == 'http://localhost:8000/'){
    replacer('#carousel', '#custom-text', false, true);
    document.querySelector('#custom-text').innerHTML = '<div id="carousel " data-ride="carousel" class="carousel carousel-down slide" data-interval="5000" data-wrap="true" data-pause="hover">\n' + '<ul class="carousel-inner" role="listbox">'+document.querySelector('#custom-text').innerHTML+'</div>';
    replacer('#carousel', '#custom-text', true, false);
    document.querySelector('#carousel').innerHTML = '<div class="custom-text custom-text-up"></div>\n'+'<h2>Custom Text Block</h2>\n'+'<p><strong class="dark">Lorem ipsum dolor sit amet conse ctetu</strong></p>\n'+'<p>Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'+'</p>'+document.querySelector('#carousel').innerHTML +'</div>';
}
document.querySelector('#carousel').onclick = function() {

    this.style.backgroundColor= 'black';
}
