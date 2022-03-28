
    fetch("https://api.github.com/users/nadfri")
        .then(response => response.json())
        .then(response2 => console.table(response2))

