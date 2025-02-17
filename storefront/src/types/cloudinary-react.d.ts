declare module "cloudinary-react" {
  import { Component } from "react"

  export interface CloudinaryContextProps {
    cloudName: string
    children: React.ReactNode
    style?: React.CSSProperties
  }

  export const CloudinaryContext = (props: CloudinaryContextProps) =>
    JSX.Element

  export interface VideoProps {
    publicId: string
    width?: string | number
    height?: string | number
    controls?: boolean
    loop?: boolean
    autoPlay?: boolean
    muted?: boolean
    sourceTypes?: string[]
    sourceTransformation?: { [key: string]: any }
    fallback?: string
    [key: string]: any
  }

  export const Video = (props: VideoProps) => JSX.Element
}
