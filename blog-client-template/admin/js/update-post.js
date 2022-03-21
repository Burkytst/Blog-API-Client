window.onload = function() {
    var url = document.URL;
    var id = url.substring(url.indexOf('=')+1);
    fetchPost(id)
}

async function fetchPost(id) {
    try {
        const response = await fetch('http://localhost:5000/posts/' +id)
        const post = await response.json();
        
        
            document.getElementById("title").value = post.title;
            document.getElementById('author').value = post.author;
            document.getElementById("content").value = post.content;
            document.getElementById('tags').value = post.tags;


      
    } catch(error) {
        console.log(error)
    }

}




$("#UpdatePost").click(function(){
    axios.post('http://localhost:5000/posts', {
        title: $("#title").val(),
        content: $("#content").val(),
        author: $("#author").val(),
        tags: $("#tags").val()
    })

    .then(function (response) {
      if(response){
        alert("Successfully updated!");
        window.location.href="index.html";
      }
    })
    .catch(function (error) {
      console.log(error);
    })

})




  

