import Head from "next/head";
import React from "react";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import AppLayout from "../components/AppLayout";

const profile = () => {
const followerList = [{nickname:"제로초"}, {nickname:"바보"}, {nickname:"노드버드오피셜"}];
const followingList = [{nickname:"제로초"}, {nickname:"바보"}, {nickname:"노드버드오피셜"}];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  );
};

export default profile;
