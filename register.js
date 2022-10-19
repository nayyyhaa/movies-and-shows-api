
const form=document.querySelector("form");

const registerpost=async(event)=>
{
    event.preventDefault();

    const doc=
    {
        title:form.title.value,
        plot:form.plot.value,
        genre:form.genre.value,
        rating:form.rating.value,
        year:form.year.value,
        poster:form.poster.value
    }

    await fetch("http://localhost:3001/movies",{
        method:"POST",
        body:JSON.stringify(doc),
        headers:{"Content-Type":"application/json"}
    })

    window.location.replace("/index.html");

}

form.addEventListener("submit",registerpost);
