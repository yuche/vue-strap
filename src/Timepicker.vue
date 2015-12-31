<template>
  <div class="timepicker">
    <input class="form-control timepicker-input" type="text"
      @click="inputClick"
      v-model="value"/>
      <div class="timepicker-popup" v-show="display">
        <div class="timepicker-inner">
          <div class="timepicker-body">
            <div class="timepicker-ctrl">
              <button class='btn btn-link btn-sm' @click.prevent="clear">
                <i v-if="useFontAwesome" class="fa fa-trash"></i>
                <span v-else>Clear</span>
              </button>
            </div>
            <div class="row">
              <div class="col-sm-4 col-sm-offset-1 text-xs-center">
                <button class='btn btn-link' @click.prevent="incrementHours">
                  <i v-if="useFontAwesome" class="fa fa-angle-up"></i>
                  <span v-else>+</span>
                </button>
                <br/>
                <button class="btn btn-secondary" v-text="hours" disabled></button>
                <br/>
                <button class='btn btn-link' @click.prevent="decrementHours">
                  <i v-if="useFontAwesome" class="fa fa-angle-down"></i>
                  <span v-else>-</span>
                </button>
              </div>
              <div class="col-sm-1" style="top:45px;">:</div>
              <div class="col-sm-4 text-xs-center">
                <button class='btn btn-link' @click.prevent="incrementMinutes">
                  <i v-if="useFontAwesome" class="fa fa-angle-up"></i>
                  <span v-else>+</span>
                </button>
                <br/>
                <button class="btn btn-secondary" v-text="minutes" disabled></button>
                <br/>
                <button class='btn btn-link' @click.prevent="decrementMinutes">
                  <i v-if="useFontAwesome" class="fa fa-angle-down"></i>
                  <span v-else>-</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import EventListener from './utils/EventListener.js'
  export default {
    props: {
      value: {
        type: String,
        twoWay: true
      },
      format: {
        type: String,
        default: "HH:mm" 
      },
      useFontAwesome: {
        type:Boolean,
        default:true
      },
      width: { type: String, default: '200px' }
    },
    data() {
      return {
        display: false,
      }
    },
    computed: {
      // Takes this.value and parses in to the date object
      // clears value if it turns out to be invalid time value
      currTime: {
        get() {
          var d = new Date('1970-01-01 '+this.value);
          if (d.toString()=="Invalid Date")
          {
            this.clear();
            //this.value = "";
            return undefined;
          }
          else
          {
            // some valid date!
            return d;
          }
        },
        set(newValue) {
          if (this.format =='HH:mm')
          {
            this.value = this.pad(newValue.getHours(),2) + ":" +
                          this.pad(newValue.getMinutes(),2);
          }
          else
          {
            console.warn("Invalid format supplied");
          }
        }
      },
      // return the current hours
      hours() {
        if (this.currTime != undefined)
          return this.currTime.getHours(); 
        return '00';
      },
      // return the current minutes
      minutes() {
        if (this.currTime != undefined)
          return this.currTime.getMinutes(); 
        return '00';
      },
    },
    methods: {
      pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
      },
      incrementHours() {
        if (this.currTime != undefined)
        {
          var tm = this.currTime;

          var hr = tm.getHours() + 1;
          if (hr >= 24) hr = 0;
          tm.setHours(hr);

          this.currTime = tm;
        }
      },
      decrementHours() {
        if (this.currTime != undefined)
        {
          var tm = this.currTime;

          var hr = tm.getHours() - 1;
          if (hr <= 0) hr = 23;
          tm.setHours(hr);

          this.currTime = tm;
        }
      },
      incrementMinutes() {
        if (this.currTime != undefined)
        {
          var tm = this.currTime;

          var hr = tm.getMinutes() + 1;
          if (hr >= 60) hr = 0;
          tm.setMinutes(hr);

          this.currTime = tm;
        }
      },
      decrementMinutes() {
        if (this.currTime != undefined)
        {
          var tm = this.currTime;

          var hr = tm.getMinutes() - 1;
          if (hr <= 0) hr = 59;
          tm.setMinutes(hr);

          this.currTime = tm;
        }
      },
      close() {
        this.display = false
      },
      clear() {
        this.value = "";
        console.log("cleared value");
        this.close();
      },
      inputClick() {
        this.display =  !this.display
      },
    },
    ready() {
      //this.parseTime();
      //this.$dispatch('child-created', this)
      //this.currDate = this.parse(this.value) || this.parse(new Date())
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!this.$el.contains(e.target)) this.close()
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>

<style>
.timepicker{
    position: relative;
    display: inline-block;
}
.timepicker-popup{
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    margin-top: 2px;
    z-index: 1000;
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
}
.timepicker-inner{
    width: 218px;

}
.timepicker-body{
    padding: 10px 10px;
}
.timepicker-ctrl p,
.timepicker-ctrl span,
.timepicker-body span{
    display: inline-block;
    width: 28px;
    line-height: 28px;
    height: 28px;
    border-radius: 4px;
}
.timepicker-ctrl p {
    width: 65%;
}
.timepicker-ctrl span {
  position: absolute;
}
.timepicker-body span {
  text-align: center;
}
.timepicker-ctrl{
    position: relative;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
}
</style>