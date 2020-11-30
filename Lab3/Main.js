let t1 = [14, 33, 36, 26, 10];
let t2 = [[0, 1, 2],
         [0, 2, 1],
         [2, 1, 0],
         [1, 2, 0],
         [1, 0, 2]];
let t3 = [3, 2, 1];

function condorcet (t1, t2) {
    let AB = 0;
    let AC = 0;
    let BC = 0;

    for (let i = 0; i < t2.length; i++) {
        if(t2[i].indexOf(0) < t2[i].indexOf(1)) AB += t1[i];
        else AB -= t1[i];
        if(t2[i].indexOf(0) < t2[i].indexOf(2)) AC += t1[i];
        else AC -= t1[i];
        if(t2[i].indexOf(1) < t2[i].indexOf(2)) BC += t1[i];
        else BC -= t1[i];
    }

    if(AB < 0 && AC < 0 && BC < 0) return ["C", "B", "A"];
    else if(AB < 0 && AC < 0 && BC > 0) return ["B", "C", "A"];
    else if(AB < 0 && AC > 0 && BC < 0) return 0;
    else if(AB < 0 && AC > 0 && BC > 0) return ["B", "A", "C"];
    else if(AB > 0 && AC < 0 && BC < 0) return ["C", "A", "B"];
    else if(AB > 0 && AC < 0 && BC > 0) return 0;
    else if(AB > 0 && AC > 0 && BC < 0) return ["A", "C", "B"];
    else if(AB > 0 && AC > 0 && BC > 0) return ["A", "B", "C"];
    else if(AB == 0 || AC == 0 || BC == 0) return 0;
}

function borda (t1, t2){
    let result = [0, 0, 0];
    for (let i = 0; i < t2.length; i++) {
        result[0] += t3[t2[i].indexOf(0)] * t1[i];
        result[1] += t3[t2[i].indexOf(1)] * t1[i];
        result[2] += t3[t2[i].indexOf(2)] * t1[i];
    }
    return result;
}

function starter (){
    let t1 = [];
    let t2 = [];

    for (let i = 0; i < 5; i++) {
        t1.push(parseFloat(document.getElementById(`t1_${i}`).value));
        t2.push([]);
        for (let j = 0; j < 3; j++) {
            if(document.getElementById(`t2_${i}${j}`).value == "A") t2[i].push(0);
            else if(document.getElementById(`t2_${i}${j}`).value == "B") t2[i].push(1);
            else if(document.getElementById(`t2_${i}${j}`).value == "C") t2[i].push(2);
        }
    }

    let bResult = borda(t1, t2);
    let cResult = condorcet(t1, t2);

    document.getElementById(`result1`).innerHTML = `${cResult[0]} > ${cResult[1]} > ${cResult[2]}`;
    document.getElementById(`fResult1`).innerHTML = cResult[0];

    document.getElementById(`result2`).innerHTML = `A = ${bResult[0]}, B = ${bResult[1]}, C = ${bResult[2]}`;

    let tt = ["A", "B", "C"];
    document.getElementById(`fResult2`).innerHTML = tt[bResult.indexOf(Math.max(...bResult))];
}