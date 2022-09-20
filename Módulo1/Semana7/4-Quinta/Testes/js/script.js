const posts = [
    {
        title: "Lógica de programação",
        description: "lorem sf ass fsa fasfassfafsas asfa sfsfa",
        link: "www.google.com"
    },
    {
        title: "Lógica de programação",
        description: "lorem sf ass fsa fasfassfafsas asfa sfsfa",
        link: "www.google.com"
    },
    {
        title: "Lógica de programação",
        description: "lorem sf ass fsa fasfassfafsas asfa sfsfa",
        link: "www.google.com"
    }
]

document.querySelector(".posts").insertAdjacentHTML("beforeend", `
    <article class="post">
        <h1 class="post-title">
        Lógica de programação
        </h1>
        <p class="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore illum suscipit deserunt totam! Voluptate odit cum, molestiae obcaecati ratione, quam commodi fugiat quibusdam voluptatibus fugit blanditiis sapiente! Saepe, cumque.
        </p>
        <a href="#" target="_blank" class="post-link">Acessar post</a>
    </article>
`)