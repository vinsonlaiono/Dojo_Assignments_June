$('button').click(function(){
    var name = $('.name').val();
    var suggestions = $('.suggestions').val();
    console.log(name, suggestions);

    var d = new Date();
    var time = d.getTime();
    var html_str = `<div class="posts">
                        <p>${Date.now()}</p>
                        <p>${name}</p>
                        <p>${suggestions}</p>
                    </div>`
    $('.name').val('');
    $('.suggestions').val('');
    
    $('.suggestions').append(html_str)


})
  





