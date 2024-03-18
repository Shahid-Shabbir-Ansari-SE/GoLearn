export interface userType {
  save(): unknown
  name: string
  email: string
  phoneNumber: string
  password: string
  salt: string
  role?: string | null
}
