// var name = 'John';
// let num = 15;
// const pi = 3.14; //константу мы переопределять не можем
// num = 20; //переопределяем переменную num
// let bigWidthBorder = 200; // cammelCase стандарт, правило написания

// number
// string
// true/false boolean
// null
// undefined

//  объекты
// let obj = {
//     name: 'John',
//     age: 18,
//     isMaried: true,
// }

// Symbol



// взаимодействие с пользователем
// alert('123'); видит пользователь
// console.log('123'); видит разработчик в консоли браузера

// let message = confirm('Вам уже есть 18?'); 
// console.log(message);

// prompt('Сколько вам лет?', '');



// операторы  - * /
// оператор + конкатинация, объединение двух частей в одну
// возведение в степень обознач **
// деление от остатка %, можем получить четные или нечетные числа
// знак или ||
// знак и &&
// знак сравнения ==
// знак присваивания =
// жесткое сравнение, сравнивает не только числа но и их тип данных ===
// знак отрицания !
// не равно !=

// console.log(8 + 5);

// let isChecked = false;
//     isClose = true;
// console.log(isChecked || isClose);



//условные конструкции

// if (2 * 4 == 8 * 1) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let answer = confirm('Вам уже есть 18?');

// if (answer == true) {
//     console.log('Проходите');
// } else {
//     console.log('Уходите');
// }


// можно также записать так
// if (answer) {
//     console.log('Проходите');
// } else {
//     console.log('Уходите');
// }

//  let number = 10;
// if(number > 500) {
//     console.log('Это много');
// } else if (number < 49) {
//     console.log('Это мало');
// } else {
//     console.log('Верно');
// }


// можно использовать '' , "" или ``

// цикл for
// for (let i = 0; i < 7; i++) {
//     console.log(i + ' Номер');
// }


// for (let i = 0; i < 4; i++) {
//     console.log(`Номер ${i}`);
// }

// функции
// function tocalc(a, b) {
//     console.log(a + b);
// }
// tocalc(10, 20);


$(document).ready(function () {
  $('.carousel__wrapper').slick({
    infinite: true,
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true         
        }
      }
    ]
  });
});




