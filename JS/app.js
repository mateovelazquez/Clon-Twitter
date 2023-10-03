const urlUsers = "https://jsonplaceholder.typicode.com/users/"

const buttons = document.querySelectorAll(".btn-primary");

const main = document.querySelector("main");

//FUNCION ASINCRONICA PARA AGREGAR LOS DATOS DEL USUARIO Y POSTS
async function userPost(){
    try{
        let Users = await fetch(urlUsers)
        let jsonUsers = await Users.json();
        for(let i = 0; i < buttons.length; i++){
            let Post = await fetch(`https://jsonplaceholder.typicode.com/users/${i+1}/posts`)
            let jsonPosts = await Post.json()
            buttons[i].addEventListener('click',()=>{
                //ELIMINAR INFORMACION DEL USUARIO QUE SE ESTÁ MOSTRANDO AL APRETAR OTRO N° DE USUARIO
                while(main.firstChild){
                    main.removeChild(main.firstChild);
                }
                    jsonPosts.forEach(p=> {
                        //SE CREA SECTION CUANDO ENTRA AL FOREACH PARA GUARDAR INFO DE CADA POST
                        const section = document.createElement("section");
                        section.classList.add("borde-grey");
                        //SE CREA SPAN Y SE LE AGREGA LAS CLASES DE USUARIO
                        const name = document.createElement("span");
                        name.classList.add("usuarios");
                        name.classList.add("bold-text");
                        name.textContent = jsonUsers[i].name + " - ";
                        section.appendChild(name);
                        //SE CREA SPAN Y SE LE AGREGA LAS CLASES DE NOMBRES DE USUARIOS(PERO AHORA CAMBIADOS POR EL MAIL)
                        const arroba = document.createElement("span");
                        arroba.classList.add("arroba-us");
                        arroba.textContent = jsonUsers[i].email;
                        section.appendChild(arroba);
                        //SE CREA PARRAFP Y SE LE AGREGA LAS CLASES DE TWITS
                        const title = document.createElement("p");
                        title.classList.add("text-twit");
                        //AGREGO BOLD TEXT AL TITULO PARA QUE QUEDE DISTINTO DEL POST(BODY)
                        title.classList.add("bold-text");
                        title.textContent = p.title;
                        section.appendChild(title);
                        //SE CREA P Y SE LE AGREGA LAS CLASES DE TWITS
                        const body = document.createElement("p");
                        body.classList.add("text-twit");
                        body.textContent = p.body;
                        section.appendChild(body);
                        //AGREGO SECTION AL MAIN
                        main.appendChild(section);
                     });
                 
            })
        }
    } catch(error){
        console.error("Error en la carga de datos", error)
    }
       
}


userPost();


