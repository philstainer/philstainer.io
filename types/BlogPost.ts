import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import {Post} from './Post'

export type BlogPost = {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: Post
}
