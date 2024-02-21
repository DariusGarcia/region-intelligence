import { useEffect, useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'

export default function Avatar({ url, size, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)
  const supabase = useSupabaseClient()

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(event, filePath)
    } catch (error) {
      alert(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <div>
        <label
          htmlFor='photo'
          className='block text-sm font-medium leading-6 text-gray-900'>
          Profile Image
        </label>
        <div className='mt-2 flex items-center gap-x-3'>
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt='Avatar'
              className='avatar image'
              style={{ height: size, width: size }}
            />
          ) : (
            <UserCircleIcon
              className='h-12 w-12 text-gray-300'
              aria-hidden='true'
            />
          )}
        </div>
      </div>
      <div className='col-span-full'>
        <div className='flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
          <div className='text-center'>
            <PhotoIcon
              className='mx-auto h-12 w-12 text-gray-300'
              aria-hidden='true'
            />
            <div className='mt-4 flex text-sm leading-6 text-gray-600'>
              <label
                htmlFor='file-upload'
                className='relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500'>
                <span>Upload a file</span>
                <input
                  style={{
                    visibility: 'hidden',
                    position: 'absolute',
                  }}
                  type='file'
                  id='single'
                  accept='image/*'
                  onChange={uploadAvatar}
                  disabled={uploading}
                />
              </label>
              <label className='button primary block' htmlFor='single'>
                {uploading ? 'Uploading ...' : 'upload'}
              </label>
              <p className='pl-1'>or drag and drop</p>
            </div>
            <p className='text-xs leading-5 text-gray-600'>
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
