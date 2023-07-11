// import { reactive } from "vue"

// export const store ={
//     state:{
//         number: reactive([1,2,3])
//     },
//     pushNumber(newNumberString){
//         this.state.number.push(Number(newNumberString))
//     }
// }

export const seedData = [
  {
    id: 1,
    abbvTitle: 'Mon',
    fullTitle: 'Monday',
    events: [
      { details: 'Get Groceries', edit: false },
      { details: 'Carpool', edit: false }
    ],
    active: true
  }
  // ...,
]
