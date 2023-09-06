class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\-\'\s]/g, "");
  }
  static titleize(sentence) {
    let words = sentence.split(" ");
    let excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let result = [];

    let capitalizedWords = words.map((word, index) => {
      if (index === 0 || !excludedWords.includes(word.toLowerCase())) {
        result.push(this.capitalize(word));
      } else {
        result.push(word.toLowerCase());
      }
    });
    return result.join(" ");
  }
}
