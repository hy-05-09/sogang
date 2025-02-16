function click_id(){
    let id=document.getElementById("id");
    id.style.color="#8b0000";
    id.style.fontSize="13px";
    id.classList.remove('no_ani')
    id.classList.add('red_ani')
}

function no_click_id(){
    let id=document.getElementById("id");
    if (document.getElementById("code").value===""){
        id.style.color="#696969";
        id.style.fontSize="16px";
        id.classList.remove('red_ani')
        id.classList.add('no_ani') 
    }
}

function click_pw(){
    let pw=document.getElementById("password");
    pw.style.color="#8b0000";
    pw.style.fontSize="13px";
    pw.classList.remove('no_ani')
    pw.classList.add('red_ani')
}

function no_click_pw(){
    let pw=document.getElementById("password");
    if (document.getElementById("pw_input").value===""){
        pw.style.color="#696969";
        pw.style.fontSize="16px";
        pw.classList.remove('red_ani')
        pw.classList.add('no_ani')
    }
}

function tran(){
    let eye=document.getElementById("eye");
    eye.classList.toggle("fa-eye");
    eye.classList.toggle("fa-eye-slash");
    if (document.getElementById("eye").classList.contains('fa-eye')) {
        document.getElementById("pw_input").setAttribute("type","password");  
    }
    if (document.getElementById("eye").classList.contains('fa-eye-slash')) {
        document.getElementById("pw_input").setAttribute("type","text");  
    }
}

function openPopup(url,name,specs){
    window.open(url,name,specs);
}

function login(){
    let id=document.getElementById("code").value;
    let pw=document.getElementById("pw_input").value;
    
    if (id.length<6){
        alert("아이디를 입력해 주십시요.");
    }
    else if (pw.length<1){
        alert("비밀번호를 입력해 주십시요.");
    }
    else if (id!==20220620){
        document.getElementById("alert").setAttribute("style","color:red;")
        document.getElementById("code").value="";
        document.getElementById("pw_input").value="";
        no_click_id();
        no_click_pw();
        document.getElementById("code").focus();
    }
    else{
        alert("로그인 성공!");
    }
}