



class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    const blackList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let wordArray = sentence.split(" ")
    let newWord = []

    for (let i = 0; i < wordArray.length; i++ ) {

      
      
      if (blackList.includes(wordArray[i])) {
        newWord.push(wordArray[i])
        console.log(wordArray[i])
      } else {
        newWord.push(Formatter.capitalize(wordArray[i]))
      }
    }

    newWord = newWord.join(" ")
    let formattedNewWord = Formatter.capitalize(newWord)

    return formattedNewWord
  }
}



test = Formatter.titleize( "where the wild things are" ) 

