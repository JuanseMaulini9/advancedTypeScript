import {User, ROLES} from './01-enum'

const currentUser: User = {
  username: 'juanse',
  role: ROLES.CUSTOMER
}

// export const checkAdminRole = () => {
//   if (currentUser.role === ROLES.ADMIN){
//     return true
//   }
//   return false
// }

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true
  }
  return false
}


console.log(checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER))
