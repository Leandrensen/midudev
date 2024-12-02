import React from 'react';
import { createClient } from '../../utils/supabase/server';
import PostList from './components/PostList';
import ComposePost from './components/ComposePost';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="max-w-[800px] w-full mx-auto border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={user?.user_metadata?.avatar_url} />
        <PostList posts={posts} />
      </section>
    </main>
  );
}
