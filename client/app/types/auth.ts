export interface userRegister {
  name: string
  email: string
  phoneNumber: string
  password: string
}

export interface userLogin {
  email: string
  password: string
}

export interface userRole {
  email: string
  role: string
}

export interface fieldinterested {
  email: string
  field: string[]
}
