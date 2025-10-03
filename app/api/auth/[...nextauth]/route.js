import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/helpers/connectDB";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    // When a user signs in
    async signIn({ user, account }) {
      try {
        await connectDB();

        if (account.provider === "github") {
          // Check if user exists
          let existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            // Create new user
            const newUser = new User({
              name: user.name || user.email.split("@")[0],
			  username: user.email.split("@")[0],
              email: user.email,
              profilePic: user.image,
            });
            await newUser.save();
          } 
		//   else {
        //     // Update existing user
        //     existingUser.name = user.name || existingUser.name;
        //     existingUser.profilePic = user.image || existingUser.profilePic;
        //     await existingUser.save();
        //   }
        }

        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },

    // When creating a session
    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.name;
		session.user.username = dbUser.username;
        session.user.id = dbUser._id.toString();
        session.user.profilePic = dbUser.profilePic;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

