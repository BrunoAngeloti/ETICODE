import { Button } from "@/components/Button";
import { EditPost } from "@/components/EditPost";
import { HeadPage } from "@/components/HeadPage";
import { DeleteConfirmationModal } from "@/components/modals/DeleteConfirmationModal";
import { useUserInfo } from "@/context/UserContext";
import { supabase } from "@/lib/initSupabase";
import { deleteTable, getTable } from "@/services/table";
import { Blog } from "@/types/Blog";
import { showResponseMessage } from "@/utils/responseMessage";
import { convertDate } from "@/utils/time";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface PostProps {
  post: Blog;
  postUpdated: boolean
}

export default function Post({ post, postUpdated }: PostProps) {
  const { userInfo } = useUserInfo()
  const route = useRouter()

  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
  const [openEditPost, setOpenEditPost] = useState(false)

  const isUser = userInfo?.id === post.authorId

  useEffect(() => {
    const incrementPostView = async () => {
      const { data, error } = await supabase.rpc('increment_view_count', { 
        post_id: post.id 
      });
    };

    incrementPostView();
  }, [])

  useEffect(() => {
    if (postUpdated) {
      showResponseMessage("O post foi editado com sucesso.", "success");
      route.replace(`/post/${post?.id}`, undefined, { shallow: true });
    }
  }, []);

  const handleDeletePost = async () => {
    try{
      await deleteTable("Post", post.id)

      route.push(`/user/${userInfo?.id}?postDeleted=true`);
    }catch(err){
      showResponseMessage("Ocorreu um erro ao apagar o post. Tente novamente mais tarde.", "error");
    }
  }

  const postDetails = () => {
    return(
      <section className="w-full max-w-5xl px-6 lg:px-10">
        <h1 className="text-grey-500 font-bold text-5xl">{post.title}</h1>
        <h2 className="text-grey-300 font-medium text-lg mt-3 leading-6">{post.description}</h2>

        <div className="flex flex-row w-full items-center mt-8">
          <Link
            href={`/user/${post.authorId}`}
            className="flex flex-row gap-3 items-center"
          >
            <Image src={post.authorImage} alt={post.authorName} width={40} height={40} className="rounded-full" />
            <p className="text-grey-500 font-medium text-base">{post.authorName}</p>
          </Link>

          <p className="text-grey-200 font-medium text-base ml-auto">{convertDate(post.createdat)}</p>

          {isUser && 
            <div className="flex flex-row gap-3 ml-4">
              <button onClick={() => setOpenEditPost(true)}>
                <MdEdit size={20} className="text-primary-500" />
              </button>
              <button onClick={() => setIsOpenModalDelete(true)}>
                <FaTrash size={16} className="text-red-500" />
              </button>
            </div>
          }
        </div>

        <Image src={post.coverImage} alt={post.title} width={1024} height={800} quality={100} className="rounded-lg my-8" loading="eager" priority />

        <div
          className="output font-inter"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    )
  }

  return (
    <main className={`"w-full flex flex-col items-center ${openEditPost ? "mt-0" : "mt-14"} font-inter`}>
      <HeadPage title={`${post.title}`} />

      {openEditPost ? <EditPost post={post} /> : postDetails()}

      <DeleteConfirmationModal 
        isOpen={isOpenModalDelete} 
        title="Você tem certeza que deseja deletar o seu post?"
        buttonTitle="Deletar" 
        onClose={() => setIsOpenModalDelete(false)} 
        handleConfirm={handleDeletePost}
      />
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { id, postUpdated } = context.query;

  const post = await getTable("Post", id);

  if (!post) {
    return {
      notFound: true,
    };
  }


  return {
    props: {
      post: post[0],
      postUpdated: postUpdated === 'true'
    },
  };
}