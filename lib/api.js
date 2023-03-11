import fs from 'fs'

export function getDirectory() {
  return fs.readdirSync(postsDirectory + '/')
}

export function sampleAPI() {
  return {
   sample: 'Hello'
  }
}

export function getAllSamplePostsAsPath() {
  let dir = getDirectory();
  return (
    dir
  )
}