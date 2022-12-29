
function gameObject(){

const game = {

    home: {
        teamName:  "Brooklyn Nets", 
        colors:  ["Black", "White"],
        players:  
            {"Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamdunks: 1,
            }, "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamdunks:  7,
            }, "Brook Lopez" : {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamdunks: 15,
            }, "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamdunks:  5,
            }, "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals:  4,
                blocks: 11,
                slamdunks: 1,
            }
        },
    },

    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: 
            {"Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamdunks: 2,
            }, "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamdunks: 10,
            }, "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamdunks: 5,
            }, "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamdunks: 0,
            }, "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamdunks: 12,
            }, 
        },
    },
}
return game
}



function homeTeamName(){
    let game = gameObject()
    return game[`home`][`teamName`]
}
console.log(homeTeamName())



function numPointsScored(name){
    
    const game = gameObject()

    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){
            
            if (player === name){
                console.log(teamObject.players[name][`points`]) 
                // return teamObject.players[name][`points`]
            }
        }

    }


}

function shoeSize(name){
    const game = gameObject()

    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){
            
            if (player === name){
                console.log(teamObject.players[name][`shoe`])
                // return teamObject.players[name][`shoe`] 
            }
        }

    }
}

function teamColors(name){
    const game = gameObject()

    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        if (teamObject.teamName === name){
                console.log(teamObject.colors); 
                // return teamObject.colors
        }
    }

}

function teamNames(){
    const game = gameObject()
    const arrayNames = []

    for (let gameKey in game){
        let teamObject = game[gameKey]
        
        arrayNames.push(teamObject.teamName)
        
    }
console.log(arrayNames);

}

function playerNumbers(name){
    const game = gameObject()
    const playerNumbers = []

    for (let gameKey in game){
        let teamObject = game[gameKey]
        
            for (let playerKey in teamObject.players){
                playerNumbers.push(teamObject.players[playerKey][`number`])       
            };        
    }
console.log(playerNumbers);
}

function playerStats(name){
    const game = gameObject()

    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){
            
            if (player === name){
                console.log(teamObject.players[name]) 
                // return teamObject.players[name][`points`]
            }
        }

    }

}

function bigShoeRebounds(){
    const game = gameObject()
    let biggestShoeSize = 0
    let playerBiggestShoe = ""
    let playerRebounds = 0

    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){

            
            if(teamObject.players[player].shoe> biggestShoeSize){
                biggestShoeSize = teamObject.players[player].shoe
                playerBiggestShoe = player
                playerRebounds = teamObject.players[player].rebounds

            }

            //check shoe size, if bigger overwrite

        }

    }
    console.log("biggest:", biggestShoeSize, "| player:", playerBiggestShoe, "| player rebounds:", playerRebounds);
}


function mostPointsScored(){
    const game = gameObject()
    let pointsScored = 0


    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){    
            
            if(teamObject.players[player].points > pointsScored){
                pointsScored = teamObject.players[player].points

            }

        }
    }
    console.log(pointsScored);
}


function winningTeam(){
    const game = gameObject()
    let homeTeamScore = 0
    let awayTeamScore = 0

    if (game.home){
        
        for (let player in game.home.players){    
            homeTeamScore = homeTeamScore + game.home.players[player].points
        }  
    }  

    if(game.away){

        for (let player in game.away.players){    
            awayTeamScore = awayTeamScore + game.away.players[player].points
        }

    }

    console.log(homeTeamScore);
    console.log(awayTeamScore);
}


function playerWithLongestName(){
    const game = gameObject()
    let nameLength = 0
    let playerName = ""


    // return home and away
    for (let gameKey in game){
        let teamObject = game[gameKey]
    
        for (let player in teamObject.players){ 

            if (player.length > nameLength){
                nameLength = player.length
                playerName = player

            }  
        }
    }
    console.log("longest player name and length: ", playerName, nameLength);
}

numPointsScored("Brendan Haywood")
shoeSize("Brendan Haywood")
teamColors("Brooklyn Nets")
teamNames()
playerNumbers()
playerStats("Alan Anderson")
bigShoeRebounds()
mostPointsScored()
winningTeam()
playerWithLongestName()