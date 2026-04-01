function getBurgerPics(){
    //fetcha lokalt
    fetch('images/burger_pics/posts.json').then(response => response.json())
    .then(posts=> {
        //I denna kontainer
        const thisContainer = document.getElementById("burger_container");
        //För varje post
        posts.forEach(post => {

            //Skapa img elemnt från html formated path => alternativt räkna ut från att kolla i mappen
            const img = document.createElement('img');
            img.src = post.HTMLFormatedPath;
            thisContainer.appendChild(img);
        });
        
    })
    .catch(err=>console.log(err));
}