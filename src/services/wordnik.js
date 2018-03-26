import wApi from '@/services/source/wordnik'

export default {
  definitions (word, params) {
    return wApi().get('/word.json/' + word + '/definitions', params)
  },
  hyphenation (word, params) {
    return wApi().get('/word.json/' + word + '/hyphenation', params)
  },
  synonym (word, params) {
    return wApi().get('/word.json/' + word + '/relatedWords', params)
  },
  antonym (word, params) {
    return wApi().get('/word.json/' + word + '/relatedWords', params)
  },
  audio (word, params) {
    return wApi().get('/word.json/' + word + '/audio', params)
  },
  wordOfDay (params) {
    return wApi().get('/words.json/wordOfTheDay', params)
  },
  signup (params) {
    return wApi().post('signup', params, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  login (params) {
    return wApi().post('login', params)
  }
}
