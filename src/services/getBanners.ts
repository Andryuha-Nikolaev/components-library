const REVALIDATE = 3600

const baseUrl = process.env.NEXT_API_LOCAL_URL

export const getAllBanners = async () => {
  const response = await fetch(`${baseUrl}/banners`, {
    next: {
      revalidate: REVALIDATE,
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error("Unable to fetch banners.")
  }

  return data
}
