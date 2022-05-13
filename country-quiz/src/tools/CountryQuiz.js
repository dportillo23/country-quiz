import axios from "axios";

export default class CountryQuiz {
  constructor(data) {
    this.data = data;
    this.TYPE = ["capital", "country", "flags"];

    // TODO: avoid duplicates between right and wrongs.
    this.question = {
      qType: this.TYPE[Math.floor(Math.random() * this.TYPE.length)],
      right: this.getMultipleRandom(this.data, 1)[0],
      wrongs: this.getMultipleRandom(this.data, 3)
    };
    this.choices = [...this.question.wrongs, this.question.right]
    this.shuffleChoices = this.choices.sort(() => 0.5 - Math.random())

    // Removed countries, needed to avoid repeating questions
    this.removedCountries = {
      capital: [],
      country: [],
      flags: []
    };
  }

  // TODO: filter to see if selected country has qType argument (i.e: )
  getMultipleRandom(arr, num) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, num);
  }

  //  Get next question
  //  TODO: filter to search for removed countries, before picking the new quesitons
  getNextQuestion() {
    // Remove actual country for qType argument
    this.removeActualCountry();

    // Get next question
    this.question.qType = this.TYPE[
      Math.floor(Math.random() * this.TYPE.length)
    ];
    this.question.right = this.getMultipleRandom(this.data, 1)[0];
    this.question.wrongs = this.getMultipleRandom(this.data, 3);
    this.choices = [...this.question.wrongs, this.question.right]
    this.shuffleChoices = this.choices.sort(() => 0.5 - Math.random())
  }

  removeActualCountry() {
    this.removedCountries[this.question.qType].push(this.question.right.name);
  }

  // API to get initial data
  static async getAPIData() {
    const url = "https://restcountries.com/v2/all?fields=name,capital,flags";
    const res = await axios.get(url);
    return res.data;
  }

  // function to check if answer is correct
  static checkAnswer(selected, right) {
    return selected === right
  }

}