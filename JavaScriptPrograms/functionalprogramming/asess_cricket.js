//print all players                            //  21/12/2020.....1:19:00 [16]

//print exp <8 years

// print highest scorer 


var players=[

{name:"dhoni",debut:2005,retired:2010,runs:101020},

{name:"raina",debut:2006,retired:2021,runs:20102},

{name:"jadeja",debut:2007,retired:2022,runs:30102},

{name:"kohli",debut:2008,retired:2023,runs:40102},

{name:"rohit",debut:2009,retired:2024,runs:50102},

{name:"deepak",debut:2010,retired:2025,runs:60102},

{name:"nataajan",debut:2011,retired:2026,runs:70102},

]

for(let plr of players){

    console.log(plr.name)
}



players.filter(plr=>(plr.retired-plr.debut)<8).forEach(plr=>console.log(plr.name))


var play=players.map(plr=>plr.runs).reduce((pl1,pl2)=>pl1>pl2?pl1:pl2)

console.log(play)


var play=players.map(plr=>plr.runs).reduce((pl1,pl2)=>pl1<pl2?pl1:pl2)

console.log(play)



