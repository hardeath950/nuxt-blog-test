export { }

declare global {
  export interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    password: string
    location: any
    title: any
    description: any
    tags: any
    avatar: any
    language: any
    theme: string
    tfa_secret: any
    status: string
    role: string
    token: any
    last_access: string
    last_page: string
    provider: string
    external_identifier: any
    auth_data: any
    email_notifications: boolean
  }

  export interface Post {
    slug: string
    status: string
    sort: any
    user_created: User
    date_created: string
    user_updated?: User
    date_updated?: string
    title: string
    content: string
    summary: string
    image: string
  }

}
