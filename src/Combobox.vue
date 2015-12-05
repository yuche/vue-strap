<template>
  <div class="input-group" v-bind:class="{open: (showDropdown && (filteredOptions.length >0))}">
    <input type="text"
        class="form-control"
        v-model="value"
        :placeholder="placeholder"
        @keyup="valueChanged"
        @blur="blur"
    >
    <div class="dropdown-menu">
      <a v-for="option in filteredOptions" @click.prevent="select(option)" class="dropdown-item">
        {{ option }}
      </a>
    </div>
    <div class="input-group-btn">
      <button type="button"
          class="btn btn-secondary dropdown-toggle"
          @click="toggleDropdown"
          aria-haspopup="true" aria-expanded="false"></button>
    </div>
  </div>
</template>

<script>
  var filter = Vue.filter('filterBy');
  export default {
    props: {
      options: {
        type: Array,
        default() { return [] },
      },
      value: {
        twoWay: true,
        default() {
          return []
        }
      },
      placeholder: {
        type: String,
        default: 'Select...'
      },
      freeText: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        showDropdown: false,
        searchDisabled: false,
        show: false,
      }
    },
    computed: {
      filteredOptions() {
        var results = filter(this.options,this.searchText);
        return results;
      },
      lowerCasedOptions() {
        console.log(this.options);
        return this.options.map((val) => {
          console.log(val);
          return val.toLowerCase();
        });
      },
      searchText() {
        // search by the text, unless, we need to disable the search
        if (this.searchDisabled)
          return '';
        else
          return this.value;
      },
      selectedItems() {
        if (!this.options.length)
        {
          return this.value.join(',');
        }
        else
        {
          // we were given bunch of options, so pluck them out to display
          var foundItems = [];
          for (var item of this.options)
          {
            if (this.value.indexOf(item.value) !== -1)
              foundItems.push(item.label);
          }

          return foundItems.join(', ');
        }
      },
    },
    methods: {
      select(v) {
        console.log(v, "selected");
        this.value = v;
        this.showDropdown = false;
      },
      toggleDropdown() {
        if (this.filteredOptions.length == 0)
        {
          this.value ="";
          this.showDropdown = true;
          return;
        }
        this.showDropdown = !this.showDropdown;
        // if we are showing the dropdown:
        if (this.showDropdown) // also make sure the search text is null
          this.searchDisabled = true;
      },
      valueChanged() {
        // They are typing stuff, so we need to:
        // 1) show the dropdown
        // 2) enable searching (if it was disabled)
        this.searchDisabled = false;
        this.showDropdown = true;
      },
      blur() {
        // reset value if it didn't match (if within freetext)
        if (!this.freeText)
        {
          // does this.value fall in the lowercased options?
          if ( this.lowerCasedOptions.indexOf(this.value.toLowerCase()) == -1)
          {
            this.value = "";
            this.showDropdown = false;
          }
        }
      },
    }
  }
</script>
<style>
.bs_searchbox {
  padding: 4px 8px;
}
.btn-group .dropdown-menu .notify {
  position: absolute;
  bottom: 5px;
  width: 96%;
  margin: 0 2%;
  min-height: 26px;
  padding: 3px 5px;
  background: #f5f5f5;
  border: 1px solid #e3e3e3;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
   pointer-events: none;
  opacity: .9;
}
</style>
