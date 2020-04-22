// id = "imgBig"
// id = "photoTitle"
// id = "photoDescription"
let name = 'Vicky';
console.log(`Hello, Vicky!`)


var data1 = {
    photo: "/img/madartavlat-tajkep-termeszet-kreativ.jpg",
    title: "Odio pellentesque diam",
    description: "Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.Amet facilisis magna etiam tempor orci eu lobortis elementum.Vulputate enim nulla aliquet porttitor.Non arcu risus quis varius quam quisque id diam.Tristique senectus et netus et malesuada     fames ac.Arcu risus quis varius quam quisque id diam.Duis at tellus at urna condimentum.Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.Adipiscing diam donec adipiscing tristique risus nec feugiat. Fermentum posuere urna nec tincidunt praesent.Euismod elementum nisi quis eleifend quam adipiscing vitae.",
};
var data2 = {
    photo: "/img/eg-erdo-fak-fenseges.jpg",
    title: "Odio pellentesque diam",
    description: "Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.Amet facilisis magna etiam tempor orci eu lobortis elementum.Vulputate enim nulla aliquet porttitor.Non arcu risus quis varius quam quisque id diam.Tristique senectus et netus et malesuada     fames ac.Arcu risus quis varius quam quisque id diam.Duis at tellus at urna condimentum.Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien.Adipiscing diam donec adipiscing tristique risus nec feugiat. Fermentum posuere urna nec tincidunt praesent.Euismod elementum nisi quis eleifend quam adipiscing vitae.",
};




$('#imgBig').attr('src', data1.photo);
$('#photoTitle').text(data1.title);
$('#photoDescription').text(data1.description);

/* <div class="imageHolder">
<img src="/img/20200421-csobbanas-folyam-h2o-hullam-1295138.jpg " alt="Something " class="small1 ">
<span class="textOver ">Test text</span>
</div> */

var photos = [data1, data2, ];

//photos.forEach(photos => $('#imgSmall').attr('src', data.photo));

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

$('body').append('<h1>Hello World!</h1>');

let names = ["Peter", "Anna", "Timothy", "<b>Vicky</b>"];

names.forEach(names => console.log(names));

names.forEach(names => $('ul').append(`<li>${names}</li>`));