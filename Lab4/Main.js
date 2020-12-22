function count (vages, scores) {
    let result = [[0],[0],[0],[0],[0],[0]];

    for (let i = 0; i < 5; i++) {
        result[0] = Math.round((parseFloat(result[0]) + vages[i]  + Number.EPSILON) * 100) / 100;
        for (let j = 0; j < 5; j++) {
            result[j+1] = Math.round((parseFloat(result[j+1]) + vages[i] * scores[i][j]  + Number.EPSILON) * 100) / 100; 
        }
    }
    return result;
}

function starter (){
    let vages = [];
    let scores = [];

    for (let i = 0; i < 5; i++) {
        scores.push([]);
        vages.push(parseFloat(document.getElementById(`kf_${i}`).value));
        for (let j = 0; j < 5; j++) {
            scores[i].push(parseFloat(document.getElementById(`score_${i}${j}`).value));
        }
    }

    let result = count(vages, scores);
    let max = result.indexOf(Math.max(...result));

    document.getElementById("kf_5").innerHTML = result[0];
    for (let i = 0; i < 5; i++) {
        document.getElementById(`score_5${i}`).style.color = "black";
        document.getElementById(`score_5${i}`).style.fontWeight = "normal";
        document.getElementById(`score_5${i}`).value = result[i+1];
    }

    document.getElementById(`score_5${max - 1}`).style.color = "green";
    document.getElementById(`score_5${max - 1}`).style.fontWeight = "bold";

}