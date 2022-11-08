const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                                        <div>
                                          <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                          <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                        </div>
                                      </div>`

        this.userProfile.innerHTML += `<div class="followers">
                                        <h3>Seguidores: ${user.followers}</h3>
                                        <h3>Seguindo: ${user.following}</h3>
                                      </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })
        this.userProfile.innerHTML += `<div class="repositories section">
                                          <h2>Repositories</h2>
                                          <ul>${repositoriesItens}</ul>
                                       </div>`
    },
	renderNotFound(){
		this.userProfile.innerHTML = "Usuário não encontrado" 
	}
}

export { screen }