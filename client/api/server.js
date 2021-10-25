import request from '@/components/request-server'
import { objToUrlParam } from '@/components'

export function fetchArticles(obj) {
    return request.get('/fetchArticles' + objToUrlParam(obj))
}

export function fetchArticleDetail(id) {
    return request.get(`/fetchArticleDetail?id=${id}`)
}

export function fetchTagsData() {
    return request.get('/fetchTagsData')
}

export function fetchTagsArtilesData() {
    return request.get('/fetchTagsArtilesData')
}

export function fetchVisits() {
    return request.get('/fetchVisits')
}

export function fetchYears() {
    return request.get('/fetchYears')
}