'use client';
import React, { useRef } from 'react';
import { Avatar } from '@nextui-org/react';
import addPost from '@/app/actions/add-post-action';
import ComposePostTextArea from './TextArea';
import ComposePostButton from './Button';

interface IComposePost {
  userAvatarUrl: string;
}

export default function ComposePost(props: IComposePost) {
  const { userAvatarUrl } = props;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-row p-3 border-b border-white/20"
    >
      <Avatar radius="full" size="md" src={userAvatarUrl} />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          id="content"
          name="content"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="Qué está pasando !?"
        />
        <ComposePostButton />
      </div>
    </form>
  );
}
