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
    title: "Commodo nulla facilisi",
    description: "Sed nisi lacus sed viverra tellus in hac habitasse. Eu feugiat pretium nibh ipsum consequat. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Nunc pulvinar sapien et ligula ullamcorper. Est ante in nibh mauris cursus mattis molestie. Enim neque volutpat ac tincidunt vitae. Massa id neque aliquam vestibulum morbi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Velit laoreet id donec ultrices. Ac odio tempor orci dapibus ultrices in iaculis nunc. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.",
};
var data3 = {
    photo: "/img/eg-erdo-fak-fenyvisszaverodes.jpg",
    title: "Lectus magna fringilla",
    description: "Tristique nulla aliquet enim tortor at. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Lacus vel facilisis volutpat est velit egestas. Vulputate mi sit amet mauris. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Lorem donec massa sapien faucibus et. Etiam erat velit scelerisque in dictum non consectetur. Velit dignissim sodales ut eu sem integer vitae justo. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Odio facilisis mauris sit amet massa.",
};
var data4 = {
    photo: "/img/erdo-fak-kod-kodos.jpg",
    title: "Neque viverra justo",
    description: "Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nunc congue nisi vitae suscipit tellus mauris a diam. Eget aliquet nibh praesent tristique. Id neque aliquam vestibulum morbi blandit. Tempus iaculis urna id volutpat. Consequat nisl vel pretium lectus quam. Feugiat scelerisque varius morbi enim nunc faucibus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Mauris cursus mattis molestie a iaculis at erat pellentesque. Lobortis elementum nibh tellus molestie nunc. Eget felis eget nunc lobortis mattis aliquam. Ornare arcu odio ut sem nulla pharetra diam sit amet. Etiam sit amet nisl purus. Eu lobortis elementum nibh tellus molestie nunc non. Imperdiet proin fermentum leo vel orci. Viverra nam libero justo laoreet sit amet cursus. Id diam vel quam elementum.",
};
var data5 = {
    photo: "/img/csobbanas-folyam-h2o-hullam.jpg",
    title: "Consectetur adipiscing elit",
    description: "Vel eros donec ac odio. Turpis egestas integer eget aliquet nibh praesent. Vel eros donec ac odio. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Pellentesque id nibh tortor id aliquet lectus proin. Gravida neque convallis a cras semper auctor neque. Orci dapibus ultrices in iaculis. Amet nisl suscipit adipiscing bibendum est ultricies. Elementum sagittis vitae et leo duis ut diam. Lacus vel facilisis volutpat est velit egestas. Ut diam quam nulla porttitor massa id neque. Facilisi etiam dignissim diam quis enim. Mauris pellentesque pulvinar pellentesque habitant.",
};
var data6 = {
    photo: "/img/tajkep-hegyek-termeszet-eg.jpg",
    title: "Sed tempus urna",
    description: "Sed viverra tellus in hac. Sapien nec sagittis aliquam malesuada bibendum arcu. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Aliquam etiam erat velit scelerisque in dictum. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ut tortor pretium viverra suspendisse potenti. Orci phasellus egestas tellus rutrum tellus. Ante metus dictum at tempor. Tellus elementum sagittis vitae et leo duis ut. Arcu dui vivamus arcu felis bibendum. Elit pellentesque habitant morbi tristique senectus et. Sit amet porttitor eget dolor morbi.",
};

var photos = [data1, data2, data3, data4, data5, data6];


$('#imgBig').attr('src', data1.photo);
$('#photoTitle').text(data1.title);
$('#photoDescription').text(data1.description);

/* <div class="imageHolder">
<img src="/img/20200421-csobbanas-folyam-h2o-hullam-1295138.jpg " alt="Something " class="small1 ">
<span class="textOver ">Test text</span>
</div> */

photos.forEach(photos => console.log(photos.photo));

photos.forEach(photos => $('.photoScroll').append(`${photos.title}`));

/* let names = ["Peter", "Anna", "Timothy", "<b>Vicky</b>"];
names.forEach(names => $('ul').append(`<li>${names}</li>`)); */