import { cookies } from 'next/headers';
import { translations } from './translations';

export async function ServerSideString() {
  const cookieStore = await cookies(); 
  const language = cookieStore.get('lang')?.value as 'eng' | 'nl' | undefined;
  return translations[language ?? 'nl']; 
}
