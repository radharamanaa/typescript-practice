"use strict";
// Write a function that takes two strings and returns true if
// they are anagrams of each other, false otherwise.
// An anagram is a word that can be formed by rearranging the letters of another word.
function findIfAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    else {
        let set = new Set();
        for (let c of s1) {
            set.add(c);
        }
        for (let c of s2) {
            if (!set.has(c)) {
                return false;
            }
        }
        return true;
    }
}
let sol = findIfAnagram("tomato", "matoto");
console.log(sol);
