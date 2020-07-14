// @ts-nocheck
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode
  export default Schema
}
