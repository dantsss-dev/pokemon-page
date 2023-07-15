export const hasValidateNickname = (nickname, favPokemon) => {
  if (nickname.trim() !== '') {
    const nicknameExists = favPokemon.find(
      (pokemon) => pokemon.nickname.toLowerCase() === nickname.toLowerCase(),
    )
    if (!nicknameExists) {
      return true
    } else {
      alert(`Nickname is already take by ${nicknameExists.name}`)
    }
  } else {
    alert('Fill the information.')
  }
}
