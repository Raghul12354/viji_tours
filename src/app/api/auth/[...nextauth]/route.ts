import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { sql } from "@vercel/postgres"
import { compare } from "bcrypt"

const handler = nextAuth({
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                console.log({ credentials });
                const response = await sql`SELECT * FROM login WHERE email=${credentials?.email}`
                const user = response.rows[0];
                // const user = response.rows.length > 0 ? response.rows[0] : null;
                console.log("User:", user);
                // if (!user || !user.Password) {
                //     console.log("User not found or password missing");
                //     return null;
                // }
                const passwordCorrect = await compare(
                    credentials?.password || "",
                    user.password
                );

                console.log({ passwordCorrect });

                if (passwordCorrect) {
                    return {
                        id: user.id,
                        email: user.email,
                    };
                }
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
