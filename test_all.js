// using nodejs's build in asserts that throw on failure
var assert = require('assert');

exports['teste inicial'] = function() {
   assert.equal(true, true, 'sempre irá funcionar!')
}
/*
exports['test my async foo'] = function(assert, done) {
  var http = require('http')
  var google = http.createClient(80, 'www.jeditoolkit.com')
  var request = google.request('GET', '/', {'host': 'www.jeditoolkit.com'})
  request.end()
  request.on('response', function (response) {
    assert.equal(response.statusCode, 302, 'must redirect') // will log result
    response.setEncoding('utf8')
    response.on('data', function (chunk) {
      assert.notEqual(chunk, 'helo world', 'must be something more inteligent')
      done() // telling test runner that we're done with this test
    })
  })
}
*/
exports['teste final'] = function() {
  assert.equal(true, true, 'sempre irá funcionar!')
}

if (module == require.main) require('test').run(exports);
