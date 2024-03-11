import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getUserData(userName: string) {
  return await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },

  }).then(res => res.json());
}
