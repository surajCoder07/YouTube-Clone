import { names, liveChatComment } from "./constant";
export function getDetails() {
  const random = Math.floor(Math.random() * liveChatComment.length);
  return [names[random], liveChatComment[random]];
}
export function changeTitle(title){

document.title =title
}