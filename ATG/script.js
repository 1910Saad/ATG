function showCreateModal(){
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.modal').classList.add('show')
    document.getElementById('fpass').classList.add('hide')
}

function showLoginModal() {
    
    const btn = document.getElementById('login');
    if (btn.innerText === "Already have an account? Sign In") {
        btn.innerText = "Don't have an account? Create new for free";
        document.getElementById('signin-title').innerHTML = "Sign In"
        document.getElementById('name1').classList.add('hide')
        document.getElementById('name2').classList.add('hide')
        document.getElementById('signin-btn').innerHTML = "Sign In"
        document.getElementById('conpass').classList.add('hide')
        document.getElementById('fpass').style.display = "block"
        document.getElementById('Term').style.display = "none"
    }
    else {
        btn.innerText = "Already have an account? Sign In" 
        document.getElementById('signin-title').innerHTML = "Create Account"
        document.getElementById('name1').classList.remove('hide')
        document.getElementById('name2').classList.remove('hide')
        document.getElementById('signin-btn').innerHTML = "Create Account"
        document.getElementById('conpass').classList.remove('hide')
        document.getElementById('fpass').style.display = "none"
        document.getElementById('Term').style.display = "block"  
    }
    
}
function closemodal(){
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.modal').classList.remove('show')
}


function toggleLabel() {
    document.getElementById('leave-btn').classList.add('leave')
    const btn = document.getElementById('leave-btn');
    if (btn.innerText === 'Leave Group') {
        btn.innerText = 'Join Group';
    } else {
        btn.innerText = 'Leave Group';
    }
}

function showCreateMobileModal(){
    document.querySelector('.mobile-overlay').classList.add('show-mobile-overlay');
    document.querySelector('.mobile-modal-overlay').classList.add('show-form')
    document.querySelector('.mobile-modal-overlay').style.transform = 'translateY(0)'
}

function showMobileLoginModal() {
    
    const btn = document.getElementById('sign-in');
    if (btn.innerText === "or, Sign In") {
        btn.innerText = "or, Create Account";
        document.getElementById('signin-mobile-title').innerHTML = "Welcome Back"
        document.getElementById('fname').classList.add('hide')
        document.getElementById('lname').classList.add('hide')
        document.getElementById('signup-btn').innerHTML = "Sign In"
        document.getElementById('mconpass').classList.add('hide')
        document.getElementById('Fpass').style.display = "block"
        document.getElementById('Terms').style.display = "none"
    }
    else {
        btn.innerText = "or, Sign In" 
        document.getElementById('signin-mobile-title').innerHTML = "Create Account"
        document.getElementById('fname').classList.remove('hide')
        document.getElementById('lname').classList.remove('hide')
        document.getElementById('signup-btn').innerHTML = "Create Account"
        document.getElementById('mconpass').classList.remove('hide')
        document.getElementById('Fpass').style.display = "none"
        document.getElementById('Terms').style.display = "block"
    }
    
}

function closeMobileModal(){
    document.querySelector('.mobile-overlay').classList.remove('show-mobile-overlay');
    document.querySelector('.mobile-modal-overlay').classList.remove('show-form')
    document.querySelector('.mobile-modal-overlay').style.transform = 'translateY(100%)'
}

function signin(){
    document.querySelector('.modal').classList.remove('show')
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.custom-btn-create').style.display = "none"
    document.querySelector('.profile').style.display = "flex"
    document.querySelector('.recommend').style.display = "flex"
    document.querySelector('.groups').style.display = "flex"
    document.querySelector('.seemore').style.display = "flex"
}

function Follow() {
    const btn = document.getElementById('leisure');
    if (btn.innerText === "Follow") {
        btn.innerText = "Followed"
        btn.style.backgroundColor ="black"
        btn.style.color ="white"
    }
    else {
        btn.innerText = "Follow"
        btn.style.backgroundColor ="#edeef0"
        btn.style.color ="black"
    }
}

function Follow2() {
    const btn = document.getElementById('activism');
    if (btn.innerText === "Follow") {
        btn.innerText = "Followed"
        btn.style.backgroundColor ="black"
        btn.style.color ="white"
    }
    else {
        btn.innerText = "Follow"
        btn.style.backgroundColor ="#edeef0"
        btn.style.color ="black"
    }
}

function Follow3() {
    const btn = document.getElementById('mba');
    if (btn.innerText === "Follow") {
        btn.innerText = "Followed"
        btn.style.backgroundColor ="black"
        btn.style.color ="white"
    }
    else {
        btn.innerText = "Follow"
        btn.style.backgroundColor ="#edeef0"
        btn.style.color ="black"
    }
}

function Follow4() {
    const btn = document.getElementById('philosophy');
    if (btn.innerText === "Follow") {
        btn.innerText = "Followed"
        btn.style.backgroundColor ="black"
        btn.style.color ="white"
    }
    else {
        btn.innerText = "Follow"
        btn.style.backgroundColor ="#edeef0"
        btn.style.color ="black"
    }
}


var btnCreateAccount = document.querySelector(".custom-btn-create")
btnCreateAccount.addEventListener("click",showCreateModal)

var mobileBtnCreateAccount = document.querySelector(".add-post")
mobileBtnCreateAccount.addEventListener("click",showCreateMobileModal)

var btnLoginAccount = document.querySelector(".login")
btnLoginAccount.addEventListener("click",showLoginModal)

var mobileBtnLoginAccount = document.querySelector(".sign-in")
mobileBtnLoginAccount.addEventListener("click",showMobileLoginModal)

var btnClose = document.querySelector(".close")
btnClose.addEventListener("click",closemodal)

var btnMobileClose = document.querySelector(".close-mobile")
btnMobileClose.addEventListener("click",closeMobileModal)

var leavegroup = document.querySelector(".join-group")
leavegroup.addEventListener("click", toggleLabel)

var CreateAccount = document.querySelector(".signin")
CreateAccount.addEventListener("click", signin)

var leisurefollow = document.querySelector(".leisure")
leisurefollow.addEventListener("click", Follow)

var activismfollow = document.querySelector(".activism")
activismfollow.addEventListener("click", Follow2)

var mbafollow = document.querySelector(".mba")
mbafollow.addEventListener("click", Follow3)

var philosophyfollow = document.querySelector(".philosophy")
philosophyfollow.addEventListener("click", Follow4)