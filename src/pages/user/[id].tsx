import { BlogCardUser } from "@/components/BlogCardUser";
import { HeaderPerfilPage } from "@/components/HeaderPerfilPage";
import { useUserInfo } from "@/context/UserContext";
import { mockBlogs } from "@/mocks/mockBlog";
import { getTable } from "@/services/table";
import { Blog } from "@/types/Blog";
import type { User } from "@/types/User";

interface UserProps {
  user: User;
  posts: Blog[];
}

export default function Post({ user, posts }: UserProps) {
  const { userInfo, signOut } = useUserInfo();

  return (
    <main className="w-full flex flex-col items-center mt-8 font-inter min-h-screen">
      <section className="w-full max-w-7xl px-6 lg:px-10">
        <HeaderPerfilPage user={user} userInfo={userInfo} signOut={signOut}/>

        <div className="w-full h-[2px] bg-secondary-100 mt-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {posts.map(blog => (
            <BlogCardUser key={blog.title} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const user = await getTable("User", id);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: user[0],
      posts: mockBlogs
    },
  };
}