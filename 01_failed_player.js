
/**
 * Use Sequencial Compare
 * @param {*} participant 
 * @param {*} completion 
 */
function solution1(participant, completion) {
    participant.sort();
    completion.sort();
    for (var i = 0; i < participant.length; i++ ) {
        var isSame = completion[i] === participant[i];
        if (!isSame) {
            return participant[i];
        }
    }
}

function solution1Recursive(participant, completion) {

    participant.sort();
    completion.sort();

    return recursive(participant, completion, 0);
    function recursive(participant, completion, index) {
          
        var isSame = participant[index] === completion[index] ;
        return isSame ? recursive(participant, completion, index+1) : participant[index];
    }

}


function solution1RecursiveTail(participant, completion) {

    participant.sort();
    completion.sort();

    return recursive(participant, completion);

    function recursive(participant, completion) {
          
        var isSame = participant[0] === completion[0] ;

        return isSame ? recursive(participant, completion) : participant[index];
    }

}

/**
 * Use Hash Table 
 * @param {*} participant 
 * @param {*} completion 
 */
function solution2(participant, completion) {

    var completionMap = {};

    for (let i = 0; i < completion.length; i++) {
        let element = completion[i];

        var nameCount = completionMap[element];
        if (typeof(nameCount) === "undefined" ){
            nameCount = 0;
        }
        completionMap[element] = nameCount +1;
    }

    for (let i = 0; i < participant.length; i++ ) {
        let element = participant[i];
        var nameCount = completionMap[element];

        if (nameCount) {
            nameCount--;
            completionMap[element] = nameCount;
        } else {
            return element;
        }
    }
}



console.log('aaa')