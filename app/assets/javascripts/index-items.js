$(document).ready(function(){

  renderAllItems();

});


function renderAllItems() {
  //make a call to our server w/response an array of item objects
  // [<item>, <item>]
  // var name = $('#user-name').text()

  $.ajax({
    url: '/api/v1/skills',
    type: 'GET',
    // data: { name: name, age: 24}
    // dataType: 'json',
    success: function(response){
      console.log('SUCCESS', response)
      renderSkillsOnDOM(response);
    }, error: function(xhr){
      console.log('FAIL', xhr)
    }
  })
}

function renderSkillsOnDOM(skills) {
  var htmlSkills = skills.map(function(s){
    return('<h1>' +  s.name + '</h1>')
  })
  $('#all-items').append(htmlSkills)
}
