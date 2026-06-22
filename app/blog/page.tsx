import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Posts and updates.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Posts and project notes.
        </p>
        <div className="mt-8">
          <BlogPosts />
        </div>
      </div>
    </div>
  )
}
