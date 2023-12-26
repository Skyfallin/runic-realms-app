type ButtonType = "internal" | "external"

export interface ButtonPayload {
  readonly label: string
  readonly icon: JSX.Element
  readonly type: ButtonType
  readonly url: string
}
