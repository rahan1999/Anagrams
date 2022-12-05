let word1 = window.prompt("Provide first word").split("").sort();
let word2 = window.prompt("Provide second word").split("").sort();

function anagrams() {
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      window.alert("Words are not anagrams!");
      return;
    }
  }

  window.alert("Words are anagrams!");
}

anagrams();
