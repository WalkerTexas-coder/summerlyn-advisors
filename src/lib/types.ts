import type { Metadata } from "next"

export type PageProps<T = object> = {
  params: T
  searchParams?: { [key: string]: string | string[] | undefined }
}

export type LayoutProps<T = object> = PageProps<T> & {
  children: React.ReactNode
}

export interface GenerateMetadata<T = object> {
  (props: PageProps<T>): Metadata | Promise<Metadata>
}
