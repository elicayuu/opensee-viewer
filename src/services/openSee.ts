import axios, { AxiosResponse } from 'axios'

const account = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'

interface openSeeAsset {
  name: string
  image_url: string
  description: string
  collection: {
    name: string
  }
  permalink
}

interface openSeeAssets {
  assets: openSeeAsset[]
}

export async function getList(): Promise<AxiosResponse<openSeeAssets>> {
  return axios.get('https://api.opensea.io/api/v1/assets', {
    params: {
      format: 'json',
      owner: account,
      limit: 20,
    },
  })
}
