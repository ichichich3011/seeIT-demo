import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GitHubUser } from '@/types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const sleep = (number: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
};

export async function getUserData(userName: string): Promise<GitHubUser>{

  // add artificial delay to show data streaming
  await sleep(Math.random() * 2 * 1000);


  return await fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.GITHUB_API_TOKEN}`,
    },

  }).then(res => res.json());
}
