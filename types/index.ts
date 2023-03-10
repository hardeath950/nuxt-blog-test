export { }

declare global {
  export interface Post {
    slug: string
    status: string
    sort: any
    user_created: string
    date_created: string
    user_updated?: string
    date_updated?: string
    title: string
    content: string
    summary: string
    image: string
  }

}
