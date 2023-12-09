import { BlogCardUser } from "@/components/BlogCardUser";
import { HeadPage } from "@/components/HeadPage";
import { HeaderPerfilPage } from "@/components/HeaderPerfilPage";
import { useUserInfo } from "@/context/UserContext";
import { getTable } from "@/services/table";
import { Blog } from "@/types/Blog";
import type { User } from "@/types/User";
import { showResponseMessage } from "@/utils/responseMessage";
import { useRouter } from 'next/router';
import { useEffect } from "react";

interface UserProps {
  user: User;
  posts: Blog[];
  postDeleted: boolean;
}

export default function Post({ user, posts, postDeleted }: UserProps) {
  const { userInfo, signOut } = useUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (postDeleted) {
      showResponseMessage("O post foi deletado com sucesso.", "success");
      router.replace(`/user/${user.id}`, undefined, { shallow: true });
    }
  }, []);

  return (
    <main className="w-full flex flex-col items-center mt-8 font-inter">
      <HeadPage title={`${user.name}`} />
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
  const { id, postDeleted } = context.query;

  const user = await getTable("User", id);
  const allPosts = await getTable("Post");

  if (!user) {
    return {
      notFound: true,
    };
  }

  const posts = allPosts?.filter((post: Blog) => post.authorId === id) as Blog[];

  const postsSorted = posts.sort((a, b) => {
    const dateA = new Date(a.createdat).getTime();
    const dateB = new Date(b.createdat).getTime();

    return dateB - dateA;
  });


  return {
    props: {
      user: user[0],
      posts: postsSorted,
      postDeleted: postDeleted === 'true'
    },
  };
}