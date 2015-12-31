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
      useFontAwesome: {
        type:Boolean,
        default:true
      },
      width: { type: String, default: '200px' }
    },
    data() {
      return {
        display: false,
        currTime: new Date,
      }
    },
    computed: {
      // return the current hours
      hours() {
        return '11';
      },
      // return the current minutes
      minutes() {
        return '00';
      },
    },
    methods: {
      incrementHours() {
        // increase hours
      },
      decrementHours() {
        // increase hours
      },
      incrementMinutes() {
        // increase Minutes
      },
      decrementMinutes() {
        // increase Minutes
      },
      close() {
        this.display = false
      },
      clear() {
        this.value = "";
        this.close();
      },
      inputClick() {
        this.display =  !this.display
      },
    },
    ready() {
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
.timepicker-mouthRange span{
  width: 48px;
  height: 50px;
  line-height: 45px;
}
.timepicker-item-disable {
  background-color: white!important;
  cursor: not-allowed!important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.timepicker-item-disable,
.timepicker-item-gray{
    color: #999;
}

.timepicker-dateRange-item-active:hover,
.timepicker-dateRange-item-active {
    background: rgb(50, 118, 177)!important;
    color: white!important;
}
.timepicker-mouthRange {
  margin-top: 10px
}
.timepicker-mouthRange span,
.timepicker-ctrl span,
.timepicker-ctrl p,
.timepicker-dateRange span {
  cursor: pointer;
}
.timepicker-mouthRange span:hover,
.timepicker-ctrl p:hover,
.timepicker-ctrl i:hover,
.timepicker-dateRange span:hover,
.timepicker-dateRange-item-hover {
    background-color : #eeeeee;
}

.timepicker-weekRange span{
    font-weight: bold;
}
.timepicker-label{
    background-color: #f8f8f8;
    font-weight: 700;
    padding: 7px 0;
    text-align: center;
}
.timepicker-ctrl{
    position: relative;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    text-align: center;
}
.month-btn{
  font-weight: bold;
  -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.timepicker-preBtn{
    left: 2px;
}
.timepicker-nextBtn{
    right: 2px;
}
</style>