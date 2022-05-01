// Write a function called constructNote, which accepts two strings, 
// a message and some letters. The function should return true if the 
// message can be built with the letters that you are given; otherwise, 
// it should return false.

// Assume that there are only lowercase letters and no space or special 
// characters in both the message and the letters.

// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const lettersFreq = {}
    const msgFreq = {}

    //freq counter for letters
    for (let val of letters) {
        lettersFreq[val] = ++lettersFreq[val] || 1
    }

    //freq counter for message
    for (let val of msg) {
        msgFreq[val] = ++msgFreq[val] || 1
    }

    for (let val in msgFreq) {
        if(!lettersFreq[val]) {
            return false
        }
        if (msgFreq[val] > lettersFreq[val]) {
            return false
        }
    }
    return true
}

