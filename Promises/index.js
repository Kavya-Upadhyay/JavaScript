
fetch("https://api.github.com/users")
    .then((res) => {
        return res.json();
    })
    .then((data)=>{

            const parent = document.getElementById("first");
            for(let i = 0; i<data.length; i++) {
                const image = document.createElement("img");
                image.src = data[i].avatar_url;
                image.style.height = "50%";
                image.style.width = "50%";
                image.style.padding = "2%"
                parent.append(image);
            }

        }
    )