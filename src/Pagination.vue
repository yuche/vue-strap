<template>
  <nav>
    <ul class="pagination">
      <template v-for="page in pages">
        <li :class="{'active': page === curPage}">
          <a href="javascript:void(0)" @click="nav(page)"
             :style="{cursor: (page < 0 || page === curPage) ? 'default' : 'pointer'}">
            {{page > 0 ? page : '...'}}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
        pageCount: {
        type: Number,
        validator (val) {
          return val > 0
        }
      },
      curPage: {
        type: Number,
        default: 1
      },
      gotoPage: {
        type: Function,
        default (page) {
          this.curPage = page
        }
      }
    },
    computed: {
      pages () {
        var pageCount = this.pageCount
        var curPage = this.curPage
        var pages = []

        switch (pageCount) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            for (var i = 0; i < pageCount; i++) {
              pages.push(i + 1)
            }
            break
          default:
            if (curPage < 5) {
              pages = [1, 2, 3, 4, 5, 6, -1, pageCount]
            } else if (curPage < pageCount - 3) {
              pages = [1, -1, curPage - 2, curPage - 1, curPage, curPage + 1, curPage + 2, -2, pageCount]
            } else {
              pages = [1, -2, pageCount - 5, pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount]
            }
        }

        return pages
      },
      nav () {
        return function (page) {
          if (page > 0 && page !== this.curPage) {
            this.gotoPage(page)
          }
        }
      }
    }
  }
</script>
