const LinksSocialMedia = {
  github: 'AMCGUIMA',
  facebook: 'AndersonMCGuima',
  youtube: 'channel/UCBlgTmiL8xie92a1z0ePmrQ',
  instagram: 'AndersonMCGuima',
  twitter: 'AndersonMCGuima'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href.textContent = data.html_url
      userLogin.textContent = data.login
      userImage.src.textContent = data.avatar_url
    })
}

getGitHubProfileInfos()
