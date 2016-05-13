<template>
    <div class="container-fluid">
        <div class="navbar-header">
            <slot></slot>
        </div>
        <slot name="dropdown-menu"></slot>
    </div>
</template>

<script>
import EventListener from './utils/EventListener';
export default {
    methods: {
        toggleCollapse(e) {
            e.preventDefault();

            // collapse data-target
            var tmp = this.$el.querySelector('[data-target]');
            var id = tmp.getAttribute('data-target');
            var o = document.getElementById(id.substring(1));
            o.classList.toggle('collapse');
        }
    },
    ready() {
        const toggle = this.$el.querySelector('[data-toggle="collapse"]');
        if (toggle) {
            toggle.style.borderRadius = '4px';
            toggle.addEventListener('click', this.toggleCollapse);
        }
        this._closeEvent = EventListener.listen(window, 'click', (e)=> {
            if (!this.$el.contains(e.target)) {
                this.$el.classList.remove('open');
            }
        })
    },
    beforeDestroy() {
        if (this._closeEvent) {
            this._closeEvent.remove();
        }
    }
}
</script>
