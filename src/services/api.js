// API Service for Arissa Frontend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Generic fetch wrapper with error handling
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  // Add auth token if available
  const token = localStorage.getItem('arissa_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'API request failed')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Services API
export const servicesAPI = {
  getAll: () => fetchAPI('/services'),
  getById: (id) => fetchAPI(`/services/${id}`),
  create: (data) => fetchAPI('/services', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchAPI(`/services/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchAPI(`/services/${id}`, { method: 'DELETE' }),
}

// Success Stories API
export const successStoriesAPI = {
  getAll: () => fetchAPI('/success-stories'),
  getById: (id) => fetchAPI(`/success-stories/${id}`),
  create: (data) => fetchAPI('/success-stories', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) =>
    fetchAPI(`/success-stories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchAPI(`/success-stories/${id}`, { method: 'DELETE' }),
}

// Categories API
export const categoriesAPI = {
  getAll: () => fetchAPI('/categories'),
  getBySlug: (slug) => fetchAPI(`/categories/${slug}`),
  create: (data) => fetchAPI('/categories', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) =>
    fetchAPI(`/categories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchAPI(`/categories/${id}`, { method: 'DELETE' }),
}

// Articles API
export const articlesAPI = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString()
    return fetchAPI(`/articles${query ? `?${query}` : ''}`)
  },
  getFeatured: () => fetchAPI('/articles/featured'),
  getBySlug: (slug) => fetchAPI(`/articles/${slug}`),
  create: (data) => fetchAPI('/articles', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchAPI(`/articles/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchAPI(`/articles/${id}`, { method: 'DELETE' }),
}

// Auth API
export const authAPI = {
  login: (email, password) =>
    fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  register: (email, password, name) =>
    fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    }),
  me: () => fetchAPI('/auth/me'),
}

export default {
  services: servicesAPI,
  successStories: successStoriesAPI,
  categories: categoriesAPI,
  articles: articlesAPI,
  auth: authAPI,
}
