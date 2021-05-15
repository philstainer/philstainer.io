import Image from 'next/image'
import {CustomLink} from './CustomLink'
import {Pre} from './Pre'

export const MDXComponents = {
  Image,
  a: CustomLink,
  pre: Pre,
}
