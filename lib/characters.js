import { endpoint } from '@/utils/endpoint'

export async function getCharacterBySlug() {}

export async function getAllCharacters() {
    const data = await fetch(`${endpoint}/characters`)
    if (!data.ok) {
      throw new Error('Failed to fetch characters')
    }
    return data.json()
  }