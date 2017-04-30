<template>
    <div>
        <ul class="nav" :class="[{'nav-justified':isJustified}, navigationStyle]" role="tablist">
            <template v-for="tabHeader in headers">
                <dropdown v-if="tabHeader._tabgroup" :text="tabHeader.header" :class="{active:tabHeader.active}" :disabled="tabHeader.disabled">
                    <li v-for="tab in tabHeader.tabs" :class="{disabled:tab.disabled}">
                        <a href="#" @click.prevent="select(tab)">{{tab.header}}</a>
                    </li>
                </dropdown>
                <li v-else  :class="{active:tabHeader.active, disabled:tabHeader.disabled}" @click.prevent="select(tabHeader)">
                    <a href="#">
                        <slot name="header">{{tabHeader.header}}</slot>
                    </a>
                </li>
            </template>
        </ul>
        <div class="tab-content" ref="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {coerce} from './utils/utils.js'
    import dropdown from './Dropdown.vue'

    export default {
        data () {
            return {
                show: null,
                headers: [],
                tabs: [],
                navigationStyle: 'nav-'+this.navStyle,
                activeTab: 0
            }
        },
        components: {
            dropdown
        },
        props: {
            navStyle: {
                type: String,
                default: 'tabs'
            },
            effect: {
                type: String,
                default: 'fadein'
            },
            active: {
                twoWay: true,
                type: Number,
                coerce: coerce.number,
                default: 0
            },
            isJustified: {
                type: Boolean,
                default: false
            }
        },
        created () {
            this._tabset = true
        },
        watch: {
            activeTab (val) {
                this.show = this.tabs[val]
            }
        },
        mounted () {
            this.show = this.tabs[this.active]
        },
        methods: {
            select (tab) {
                if (!tab.disabled) {
                    this.activeTab = tab.index
                }
            }
        }
    }
</script>

<style scoped>
    .nav-tabs {
        margin-bottom: 15px;
    }
</style>
