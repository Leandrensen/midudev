'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '../../../utils/supabase/server';

const addPost = async (formData) => {
  const content = formData.get('content');

  if (content === null) {
    return;
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user === null) {
    return;
  }

  await supabase.from('posts').insert({ content, user_id: user.id });

  revalidatePath('/');
};

export default addPost;
