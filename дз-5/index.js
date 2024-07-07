document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {
                let img = document.createElement('img');
                img.src = cat.url;
                img.className = 'cat-image';
                img.alt = 'Cat Image';
                document.body.appendChild(img);

                img.onclick = function(){
                    var modal = document.getElementById("myModal");
                    var modalImg = document.getElementById("img01");
                    var captionText = document.getElementById("caption");
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
            });
        })
        .catch(error => console.error('Error fetching cat images:', error));

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }
});