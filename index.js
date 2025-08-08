
let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score") 
let guestScoreEl = document.getElementById("guest-score") 


homeScoreEl.textContent = homeScore 
guestScoreEl.textContent = guestScore 


function home1() {
    homeScore = homeScore + 1        
    homeScoreEl.textContent = homeScore 
}

function home2() {
    homeScore = homeScore + 2       
    homeScoreEl.textContent = homeScore 
}

function home3() {
    homeScore = homeScore + 3        
    homeScoreEl.textContent = homeScore 
}

function guest1() {
    guestScore = guestScore + 1        
    guestScoreEl.textContent = guestScore 
}

function guest2() {
    guestScore = guestScore + 2        
    guestScoreEl.textContent = guestScore 
}

function guest3() {
    guestScore = guestScore + 3        
    guestScoreEl.textContent = guestScore 
}

