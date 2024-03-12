import { sql } from "@vercel/postgres"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                Email: {},
                Password: {}
            },
            async authorize(credentials, req) {
                const response = await sql`SELECT * FROM Login 
                WHERE Email=${credentials?.Email}`
                const user = response.rows[0]

                // console.log("User:", user);
                // console.log("Credentials:", credentials);

                // if (!user || !user.Password) {
                //     console.log("User not found or password missing");
                //     return null;
                // }
                const correctPassword = await compare(credentials?.Password || '', user.Password)
                console.log({ correctPassword });

                if (correctPassword) {
                    return {
                        id: user.id,
                        email: user.email
                    }
                }
                console.log({ credentials });

                return null
            }
        })
    ]
})

export { handler as GET, handler as POST }