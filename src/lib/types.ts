import type { Metadata } from "next"

export type PageProps<T = {}> = {
  params: T
  searchParams: { [key: string]: string | string[] | undefined }
}

export type LayoutProps<T = {}> = PageProps<T> & {
  children: React.ReactNode
}

export interface GenerateMetadata<T = {}> {
  (props: PageProps<T>): Metadata | Promise<Metadata>
}
