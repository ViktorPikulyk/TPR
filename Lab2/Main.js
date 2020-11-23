function count (mA, pA, dA, mB, pB, dB, pC){
    let node = [];

    node.push({
        value: (dA[0] * pA[0] + dA[1] * pA[1]) * 5 - mA,
        high: dA[0] * 5 - mA,
        low: dA[1] * 5 -mA
    });

    node.push({
        value: (dB[0] * pB[0] + dB[1] * pB[1]) * 5 - mB,
        high: dB[0] * 5 - mB,
        low: dB[1] * 5 -mB
    });

    node.push({
        value: (dA[0] * pC[2] + dA[1] * pC[3]) * 4 - mA,
        high: dA[0] * 4 - mA,
        low: dA[1] * 4 -mA
    })

    node.push({
        value: (dB[0] * pC[2] + dB[1] * pC[3]) * 4 - mB,
        high: dB[0] * 4 - mB,
        low: dB[1] * 4 -mB
    });

    node.push({
        value: Math.max(node[2].value, node[3].value) * pC[0],
        high: Math.max(node[2].value, node[3].value),
        low: 0
    });

    return node;
}

function starter () {
    let mA = parseFloat(document.getElementById(`mAinput`).value);
    let pA = [parseFloat(document.getElementById(`pA0input`).value), parseFloat(document.getElementById(`pA1input`).value)];
    let dA = [parseFloat(document.getElementById(`dA0input`).value), parseFloat(document.getElementById(`dA1input`).value)];

    let mB = parseFloat(document.getElementById(`mBinput`).value);
    let pB = [parseFloat(document.getElementById(`pB0input`).value), parseFloat(document.getElementById(`pB1input`).value)];
    let dB = [parseFloat(document.getElementById(`dB0input`).value), parseFloat(document.getElementById(`dB1input`).value)];

    let pC = [parseFloat(document.getElementById(`pC0input`).value), parseFloat(document.getElementById(`pC1input`).value), parseFloat(document.getElementById(`pC2input`).value), parseFloat(document.getElementById(`pC3input`).value)];


    let result = count(mA, pA, dA, mB, pB, dB, pC);
    console.log(count(mA, pA, dA, mB, pB, dB, pC));

    let r = 0;
    for (let i = 0; i < result.length; i++) {
        if(result[r].value < result[i].value) r = i;
    }
    console.log(r);

    if(r == 0) document.getElementById(`resultPhrase`).innerHTML = "Result : Великий завод"
    else if(r == 1) document.getElementById(`resultPhrase`).innerHTML = "Result : Маленький завод"
    else if(r == 2) document.getElementById(`resultPhrase`).innerHTML = "Result : Відкласти і Великий завод"
    else document.getElementById(`resultPhrase`).innerHTML = "Result : Відкласти і Маленький завод"

    for (let i = 0; i < result.length; i++) {
        console.log(i);
        document.getElementById(`result${i}0`).innerHTML = result[i].value;
        document.getElementById(`result${i}1`).innerHTML = result[i].high;
        document.getElementById(`result${i}2`).innerHTML = result[i].low;
        if(i == 0){
            document.getElementById(`k${i}0`).innerHTML = pA[0];
            document.getElementById(`k${i}1`).innerHTML = pA[1];
        }else if(i == 1){
            document.getElementById(`k${i}0`).innerHTML = pB[0];
            document.getElementById(`k${i}1`).innerHTML = pB[1];
        }else if(i == 2 || i == 3){
            document.getElementById(`k${i}0`).innerHTML = pC[2];
            document.getElementById(`k${i}1`).innerHTML = pC[3];
        }else {
            document.getElementById(`k${i}0`).innerHTML = pC[0];
            document.getElementById(`k${i}1`).innerHTML = pC[1];
        }
    }
}

