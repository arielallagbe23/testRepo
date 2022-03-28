
        btn.onclick = () => {
            fetch("https://api.github.com/users/"+champ.value)
            .then(response => response.json())
            .then(data => {
                output.textContent = 'Compte de '+data.name;
                output2.texContent = "";
                const img = document.createElement("img");
                img.src = data.avatar_url;
                output2.appendChild(img); 
                output3.textContent = 'Sa BIO est : '+data.bio;
                output4.textContent = 'Il vit a : '+data.location;
            })
        }




