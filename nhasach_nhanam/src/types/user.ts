// src/types/user.ts
export interface UserProfile {
  first_name: string
  last_name: string
  phone: string
  date_of_birth: string
  gender: string
  avatar_url: string
}

export interface Address {
  id: string
  type: string
  recipient_name: string
  street: string
  ward: string
  district: string
  city: string
  postal_code: string
  phone: string
  is_default: boolean
}

export interface UserPreferences {
  favorite_genres: string[]
  language: string
  currency: string
  newsletter_subscription: boolean
}

export interface User {
  id: string
  email: string
  username: string
  password: string
  profile: UserProfile
  addresses: Address[]
  preferences: UserPreferences
  created_at: string
  updated_at: string
  last_login: string
  is_active: boolean
  role: string
}
