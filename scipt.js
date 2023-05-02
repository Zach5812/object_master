const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// const div3 = pokemon.filter((element) =>{
//     return element.id %3 == 0
// })
// console.log(div3);

// const fire = pokemon.filter((element) =>{
//     return element.types == ("fire")
// })
// console.log(fire)

// const manyTypes = pokemon.filter((element) =>{
//         return element.types.length > 1
// })

// console.log(manyTypes);

// const names = pokemon.map((element) =>{
//     return element.name
// })

// console.table(names);

// const over99 = pokemon
//     .filter((element) => element.id >99)
//     .map((element) => element.name)

//     console.log(over99)


// const poisonTypes = pokemon
//     .filter((element) => element.types =='poison')

//     console.log(poisonTypes)

// const flyingTypes = pokemon
//     .filter((element) => element.types[1] =='flying')
//     .map((element) => element.types[0])

//     console.log(flyingTypes)

// const normalTypes = pokemon
//     .filter((element) => {
//         return element.types[0] == 'normal' || element.types[1] == 'normal' 
//     })
//     .reduce


// console.log(normalTypes.length)

// const normalTypes = pokemon
//     .reduce((count, element) =>{
//         if(element.types[0] == 'normal' || element.types[1] == 'normal'){
//             count++
//         }
//         return count
//     }, 0)


const normalTypes = pokemon
    .reduce((count, element) => 
        element.types.includes('normal')? count+1: count, 0
    )

    console.log(normalTypes)