enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

type User = {
  username: string,
  role: ROLES
}

const JuanseUser: User = {
  username: 'juanse',
  role: ROLES.ADMIN
}
