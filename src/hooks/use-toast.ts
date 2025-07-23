"use client"

import * as React from "react"
import { toast as sonnerToast } from "sonner"

type Toast = {
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

function toast({ title, description, action }: Toast) {
  const id = sonnerToast(title, {
    description,
    action,
  })

  const update = (props: Toast) => {
    sonnerToast.dismiss(id)
    sonnerToast(props.title, {
      description: props.description,
      action: props.action,
    })
  }

  const dismiss = () => {
    sonnerToast.dismiss(id)
  }

  return {
    id,
    update,
    dismiss,
  }
}

function useToast() {
  return {
    toast,
    dismiss: (id?: string) => {
      if (id) {
        sonnerToast.dismiss(id)
      } else {
        sonnerToast.dismiss()
      }
    },
  }
}

export { useToast, toast }
