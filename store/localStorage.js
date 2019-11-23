export const state = () => ({
  user: {},
  token: ''
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}
