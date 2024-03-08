import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model'
import { hash } from 'bcrypt'

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          email
        })
        if (!user) {
          return done(null, false, { message: 'Invalid email' })
        }
        const hashedPassword = await hash(
          password + process.env.PEPPER,
          user.salt
        )
        if (hashedPassword !== user.password) {
          return done(null, false, { message: 'Invalid password' })
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)
