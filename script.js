const task1a = () => {
    for (i=1; i<=9; i++){
        console.log(i)
    }
}

const task1b = () => {
    for (i=9; i>=1; i--){
        console.log(i)
    }
}

const task1c = () => {
    for (i=5; i<=15; i++){
        console.log(i)
    }
}

const task1d = () => {
    for (i=0; i>=-10; i--){
        console.log(i)
    }
}

const task1e = () => {
    for (i=1; i<20; i+=2){
        console.log(i)
    }
}

const task1f = () => {
    for (i=10; i>=-10; i-=4){
        console.log(i)
    }
}
    
const task1g = () => {
    for (i=1; i<=100; i*=2){
        console.log(i)
    }
}

const task2a = () => {
    for (i=0; i<=20; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

const task2b = () => {
    for (i=0; i<=20; i++){
        if(i % 2 === 1){
            console.log(i)
        }
    }
}

const task2c = () => {
    for (i=0; i<=20; i++){
        console.log(i % 2 === 0 ? `${i} liczba parzysta` : `${i} liczba nieparzysta`)
    }
}

const task2d = () => {
    for (i=1; i<=30; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(`FizzBuzz`)
        } else if (i % 3 === 0){
            console.log(`Fizz`)
        } else if (i % 5 === 0){
            console.log(`Buzz`)
        } else 
            console.log(i)
    }
}


const task2e = () => {
    for (i=100; i>=0; i-=5){
        console.log(i % 10 === 0 ? `${i} - liczba podzielna przez 10` : `${i}`)
    }
}

const task3a = (endValue) => {
    for (i=0; i<=endValue; i++){
        console.log(i)
    }
}

const task3b = (startValue) => {
    for (i=startValue; i<=15; i++){
        console.log(i)
    }   
}

const task3c = (incrementation) => {
    for (i=0; i<=15; i+=incrementation){
        console.log(i)
    }
}

const task3d = (startValue, endValue) => {
    for (i = startValue; i <= endValue; i++) {
        console.log(i)
    }
}

const task3e = (startValue, endValue, incrementation) => {
    for (i = startValue; i <= endValue; i+=incrementation) {
        console.log(i)
    }
}

const task4a = () => {

    const array = [1, 5, 8, 'Aleksandra', 'Gabrysia']

    for (i=0; i<array.length; i++){
        console.log(array[i])
    }
}

const task4b = () => {

    const array = ['Ania', 'Kasia', 'Monika', 'Aleksandra', 'Gabrysia']

    for (i = 0; i < array.length; i++) {
        console.log(`Cześć ${array[i]}`)
    }
}

const task4c = () => {

    const array = [{carBrand: 'Seat', carColor: 'szary'}, {carBrand: 'Ferrari', carColor: 'czerwone'}, {carBrand: 'BMW', carColor: 'czarne'}]

    for (i = 0; i < array.length; i++) {
    console.log(`Przed wami stoi ${array[i].carColor} ${array[i].carBrand}`)
    }
}

const task4d = () => {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (i = 0; i <= array.length - 1; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

const task4e = () => {

    const tab = ['mama', 15, 'tata', 20, 25]

    for (i = 0; i < tab.length; i++) {
        if (typeof tab[i] === 'string')
            console.log(tab[i])
    }
}

const task4f = () => {
    const tab = ['mama', 15, 'tata', 20, 25]
  
    for (i = 0; i < tab.length; i++) {
      if (typeof tab[i] === 'number')
        console.log(tab[i])
    }
  }

const task5a = (tab) => {

    let sum = 0
  
    for (i = 0; i < tab.length; i++) {
        sum += tab[i]
    }
    console.log(sum)
  }

const task5b = (array) => {

    const evenNumber = []
    const oddNumber = []

    for (i = 0; i < array.length; i++){
        i % 2 === 0 ? evenNumber.push(array[i]) : oddNumber.push(array[i])
}
        console.log(evenNumber, oddNumber)

}

const task5c = (string) => {

    const name = [...string]
    let isTrue = false
  
    for (i = 0; i < name.length; i++) {
        if (name[i] === 'y') {
            isTrue = true
        }
    }
    console.log(isTrue ? `Jest !` : `Nie ma !`)
}

const task5d = (mult) => {

    let tab = []
    let sum = 1
  
    for (i = mult; i >= 1; i--) {
        tab.push(i)
    }
    for (i = 0; i < tab.length; i++) {
        sum *= tab[i]
    }
    console.log(sum)
  }

const task5e = (mult) => {
}

const task5f = (tab) => {

    for (i = 0; i < tab.length; i++) {
        if (tab[i].hasCar === true && tab[i].hasDrivingLicense === true) {
            console.log(`Do domu może odwieźć Cię ${tab[i].name} ${tab[i].lastName}`)
        } else if (tab[i].hasCar === false && tab[i].hasDrivingLicense === true) {
            console.log(`Jak dasz swój samochód to zawiezie Cię ${tab[i].name} ${tab[i].lastName}`)
        } else {
            console.log(`Auta i prawka nie ma ${tab[i].name} ${tab[i].lastName}`)
        }
    }
}
  /*task5f([{
      name: 'Jan',
      lastName: 'Kowalski',
      hasCar: true,
      hasDrivingLicense: true
    },
    {
      name: 'Bartłomiej',
      lastName: 'Nowak',
      hasCar: false,
      hasDrivingLicense: true
    },
    {
      name: 'Katarzyna',
      lastName: 'Piękna',
      hasCar: false,
      hasDrivingLicense: true
    },
    {
      name: 'Joanna',
      lastName: 'Zielona',
      hasCar: false,
      hasDrivingLicense: false
    }])*/

    const task5g = (tabName, name) => {

        tabName.indexOf(name) === -1 ? tabName.push(name) & console.log(tabName) : console.log(`wymyśl inne imię`)
        }

    /*task5g(['Katarzyna', 'Barbara', 'Kunegunda'],'Maria')*/
  



  