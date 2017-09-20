const getters = {
  permissionRouters: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  roles: state => state.user.roles,
  info: state => state.screen.info,
}
export default getters
