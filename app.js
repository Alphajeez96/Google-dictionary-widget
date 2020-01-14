// new Vue({

//     el:'#app',
//     data:{
//         response: null,
//         word: "program"

//     },
//     computed: {
//         syllables: function() {
//             // try the if function here
//             return this.response === null ? [] : this.response.syllables.list.join("•");
//           },
//           pronunciation: function() {
//             return this.response === null ? [] : `/${this.response.pronunciation.all}/`
//           },
//           nouns: function() {
//             return this.response === null ? [] : this.response.results.filter(result => result.partOfSpeech === "noun") 
//           },
//           verbs: function() {
//             return this.response === null ? [] : this.response.results.filter(result => result.partOfSpeech === "verb")
//           }
          
//     },

//     methods: {
//         Lookup: function() {   
//             fetch(`https://wordsapiv1.p.mashape.com/words/${this.word}`, {
//       headers: {
//          "X-Mashape-Key": "8b033f1c84msh7c26658a226ad13p1dc23fjsnf922308c7548"
//       }
//    })
//    .then(response => response.json())
//    .then(body => this.response = body)
          
//     }
// },
// })

   
// })

    // .then(response => response.json())
    // .then(body => this.respose = body )

    var vm = new Vue({
        el: "#app",
        data: {
          response: null,
          word: ""
        },
        computed: {
          syllables() {
            return this.response !== null ? this.response.syllables.list.join("•") : [];
          },
          pronunciation() {
            return this.response !== null ? `/${this.response.pronunciation.all}/` : [];
          },
          verbs() {
            return this.response !== null ? this.response.results.filter(result => result.partOfSpeech === "verb") : [];
          },
          nouns() {
            return this.response !== null ? this.response.results.filter(result => result.partOfSpeech === "noun") : [];
          },
        },
        methods: {
         findWord() {
            fetch(`https://wordsapiv1.p.mashape.com/words/${this.word}`, {
              headers: {
                "X-Mashape-Key": "8b033f1c84msh7c26658a226ad13p1dc23fjsnf922308c7548"
              }
            })
              .then(response => response.json())
              .then(body => this.response = body)
          },
        }
      })