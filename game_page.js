player1_name=localStorage.getItem("player1_name_input");
player2_name=localStorage.getItem("player2_name_input");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

function send() {
    getword=document.getElementById("word").value ;
    word=getword.toLowerCase();

    fletter=word.charAt(1);

    lengthdivide=Math.floor(word.length/2);
    sletter=word.charAt(lengthdivide);

    lengthminus=word.length-1;
    tletter=word.charAt(lengthminus);

    remove1=word.replace(fletter,"_");
    remove2=remove1.replace(sletter,"_");
    remove3=remove2.replace(tletter,"_");

    question="<h4 id='question'>Q."+remove3+"</h4>";
    answer="<br>Answer:<input type='text' id='input'>";
    check1="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
    row=question+answer+check1;

    document.getElementById("output").innerHTML=row;
}

question_turn="Player1";
answer_turn="Player2";

function check() {
    get_answer=document.getElementById("input").value;
    actual_answer=get_answer.toLowerCase();

    if(actual_answer==word) {
        if(answer_turn=="Player1") {
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
        else {
            player2score=player2score+1;
            document.getElementById("player2_score").innerHTML=player2score;
        }
    }

    if(question_turn=="Player1") {
        question_turn="Player2";
        document.getElementById("player_question").innerHTML="question turn : "+player2_name;
    }

    else {
        question_turn="Player1";
        document.getElementById("player_question").innerHTML="question turn : "+player1_name;
    }

    if(answer_turn=="Player1") {
        answer_turn="Player2";
        document.getElementById("player_answer").innerHTML="answer turn : "+player2_name;
    }

    else {
        answer_turn="Player1";
        document.getElementById("player_answer").innerHTML="answer turn : "+player1_name;
    }

    document.getElementById("output").innerHTML="";

}


