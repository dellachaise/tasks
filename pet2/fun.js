var text = "ir Winston Leonard Spencer-Churchill, Dasha KG, OM, CH, TD, DL, FRS, RA (30 November 1874 – 24 January 1965) was a British statesman Dasha who was the Prime Dasha Minister of the United Kingdom from 1940 to 1945 and again from 1951 to 1955. Churchill was also an officer in the British Army, Dasha a historian, a writer (as Winston S. Churchill), and an artist. Dasha He won the Nobel Prize in Literature, and was the first person Dasha to be made an honorary citizen of the United States.",
  myName = "Dasha",
  hits = [];
for (i = 0; i < text.length; i++) {
  if (text[i] === myName[0]) {
    for (j = i; j < i + myName.length; j++) {
      if (text[j] === myName[1] || text[j] === myName[2] || text[j] === myName[3] || text[j] === myName[4]) {
        hits.push(text[j]);
      }
    }
  }
 }
  if (hits.length === 0) {
    console.log("Your name wasn't found!");
  } else {
    console.log(hits);
  }
