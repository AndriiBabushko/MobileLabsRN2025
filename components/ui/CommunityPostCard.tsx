import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styled from 'styled-components/native';

import UserIcon from '@/assets/images/user-icon.png';
import CommunityPost from '@/assets/images/community-post.png';

interface Post {
  id: string;
  user: string;
  tag?: string;
  time: string;
  title: string;
  snippet: string;
  likes: number;
  comments: number;
}

interface CommunityPostCardProps {
  post: Post;
}

export function CommunityPostCard({ post }: CommunityPostCardProps) {
  return (
    <PostCard>
      <PostHeader>
        <PostUserIcon source={UserIcon} />
        <UserInfo>
          <UserNameRow>
            <UserName>{post.user}</UserName>
            {post.tag && (
              <TagBadge>
                <TagText>{post.tag}</TagText>
              </TagBadge>
            )}
          </UserNameRow>
          <PostTime>{post.time}</PostTime>
        </UserInfo>
      </PostHeader>

      <PostTitle>{post.title}</PostTitle>
      <PostImage source={CommunityPost} resizeMode="cover" />

      <SnippetText>{post.snippet}</SnippetText>

      <PostFooter>
        <Row>
          <Row>
            <FontAwesome
              name="thumbs-up"
              size={16}
              color="#22d07a"
              style={{ marginRight: 4 }}
            />
            <FooterText>{post.likes}</FooterText>
          </Row>
          <Row style={{ marginLeft: 16 }}>
            <FontAwesome
              name="comment"
              size={16}
              color="#9ea3b0"
              style={{ marginRight: 4 }}
            />
            <FooterText>{post.comments}</FooterText>
          </Row>
        </Row>
        <FontAwesome name="share" size={16} color="#9ea3b0" />
      </PostFooter>
    </PostCard>
  );
}

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostCard = styled.View`
  background-color: #2f3445;
  margin-bottom: 12px;
  border-radius: 12px;
  padding: 12px;
`;

const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const PostUserIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
`;

const UserInfo = styled.View`
  flex: 1;
`;

const UserNameRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin-right: 8px;
`;

const TagBadge = styled.View`
  background-color: #3b3f54;
  border-radius: 4px;
  padding: 2px 6px;
`;

const TagText = styled.Text`
  color: #22d07a;
  font-weight: 600;
  font-size: 12px;
`;

const PostTime = styled.Text`
  color: #9ea3b0;
  font-size: 12px;
  margin-top: 2px;
`;

const PostTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 320px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const SnippetText = styled.Text`
  color: #d0d0d0;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`;

const PostFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FooterText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-right: 2px;
`;
