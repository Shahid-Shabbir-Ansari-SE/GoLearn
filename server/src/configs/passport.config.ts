import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.model'
import { compare } from 'bcrypt'

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
        const passwordMatch = await compare(
          password + process.env.PEPPER,
          user.password
        )
        if (!passwordMatch) {
          return done(null, false, { message: 'Invalid password' })
        }

        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)
