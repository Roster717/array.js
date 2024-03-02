// 1 uy ishi

let string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
let array = string.split('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'a' || 'e' || 'i' || 'o' || 'u' ) {
            array.splice(i,1)
        }
    }
let str = array.join('')
console.log(str);



// 2 uy ishi

const user = prompt("Ismizni kiriting 'add, ism' deb");
if (user && user.startsWith('add,')) {
    const userName = user.slice(4);
    console.log(`Ism: ${userName}`);
} else {
    console.log("Hatolik ketdi");
}




// 3 uy ishi (CHIQMADI!!!!)

// const a = prompt("Ismni uchirmoqchi bolsangiz 'del, ism' deb yozing");
// let array = ['']
// if () {
//     const userName = array.indexOf('');
//     console.log(`${userName}`);
// } else {
//     console.log("Hatolik ketdi");
// }










