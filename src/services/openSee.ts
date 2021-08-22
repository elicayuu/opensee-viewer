import axios, { AxiosResponse } from 'axios'

const account = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91'

interface openSeeAsset {
  name: string
  image_url: string
  description: string
  collection: {
    name: string
  }
  permalink: string
  token_id: number
  asset_contract: {
    address: string
  }
}

interface openSeeAssets {
  assets: openSeeAsset[]
}

interface GetListParams {
  offset: number
}

export async function getList({
  offset = 0,
}: GetListParams): Promise<AxiosResponse<openSeeAssets>> {
  return axios.get('https://api.opensea.io/api/v1/assets', {
    params: {
      format: 'json',
      owner: account,
      limit: 20,
      offset,
    },
  })
}

export async function getDetail(
  address: string,
  tokenId: number,
): Promise<AxiosResponse<openSeeAsset>> {
  return axios.get(`https://api.opensea.io/api/v1/asset/${address}/${tokenId}`)
}
