import PocketBase from 'pocketbase'

const config = useRuntimeConfig()

const pb = new PocketBase(config.BASE_URL)

export default pb
