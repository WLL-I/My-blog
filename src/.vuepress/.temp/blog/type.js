export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-1008f34a","v-7d129068","v-3a9b2d03","v-7a72ece8","v-9b75bba0","v-1ecf8fa2","v-ea12815a","v-02de07c8","v-2a179ea0"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-3a9b2d03"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-1008f34a","v-7d129068","v-3a9b2d03","v-7a72ece8","v-9b75bba0","v-1ecf8fa2","v-ea12815a","v-02de07c8","v-2a179ea0"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
