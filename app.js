//Example-01
const arr = [2, 20, 13, 5, 6, 61, 23, 7]
let arr1 = arr.filter((value)=>{
    return value > 10
})
console.log(arr1);


//Example-02
const team = [
    {
        name:"Naim",
        job:"Developer"
    },
    {
        name:"Santo",
        job:"UI Deginer"
    },
    {
        name:"Banta",
        job:"Developer"
    },
    {
        name:"Kanta",
        job:"App Developer"
    },
    {
        name:"Malak",
        job:"Youtuber"
    }
]
let developer = team.filter((value)=>{
    return value.job == 'Developer'
})
console.log(developer);



