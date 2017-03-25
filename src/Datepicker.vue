<template>
  <div class="datepicker">
    <input class="form-control datepicker-input" type="text"
      v-model="val"
      :class="{'with-reset-button': clearButton}"
      :placeholder="placeholder"
      :style="{width:width}"
      @click="inputClick"
    />
    <button v-if="clearButton&&val" type="button" class="close" @click="val = ''">
      <span>&times;</span>
    </button>
    <div class="datepicker-popup" v-show="displayDayView">
      <div class="datepicker-inner">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span :class="preBtnClasses" aria-hidden="true" @click="preNextMonthClick(0)"></span>
            <span :class="nextBtnClasses" aria-hidden="true" @click="preNextMonthClick(1)"></span>
            <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
          </div>
          <div class="datepicker-weekRange">
            <span v-for="w in text.daysOfWeek">{{w}}</span>
          </div>
          <div class="datepicker-dateRange">
            <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d)">{{d.text}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="datepicker-popup" v-show="displayMonthView">
      <div class="datepicker-inner">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span :class="preBtnClasses" aria-hidden="true" @click="preNextYearClick(0)"></span>
            <span :class="nextBtnClasses" aria-hidden="true" @click="preNextYearClick(1)"></span>
            <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
          </div>
          <div class="datepicker-monthRange">
            <template v-for="(m, index) in text.months">
              <span v-text="m.substr(0,3)"
                :class="{'datepicker-dateRange-item-active':
                  (text.months[parse(val).getMonth()] === m) &&
                  currDate.getFullYear() === parse(val).getFullYear()}"
                @click="monthSelect(index)"
              ></span>
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="datepicker-popup" v-show="displayYearView">
      <div class="datepicker-inner">
        <div class="datepicker-body">
          <div class="datepicker-ctrl">
            <span :class="preBtnClasses" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
            <span :class="nextBtnClasses" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
            <p>{{stringifyDecadeHeader(currDate)}}</p>
          </div>
          <div class="datepicker-monthRange decadeRange">
            <template v-for="decade in decadeRange">
              <span :class="{'datepicker-dateRange-item-active':parse(val).getFullYear() === decade.text}"
                v-text="decade.text"
                @click.stop="yearSelect(decade.text)"
              ></span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {translations} from './utils/utils.js'
// import $ from './utils/NodeList.js'

export default {
  props: {
    value: {type: String},
    format: {default: 'MM/dd/yyyy'},
    disabledDaysOfWeek: {type: Array, default () { return [] }},
    width: {type: String},
    clearButton: {type: Boolean, default: false},
    lang: {type: String, default: typeof navigator !== 'undefined'?navigator.language:"zh-CN"},
    placeholder: {type: String},
    iconsFont: {type: String, default: 'glyphicon'}
  },
  data () {
    return {
      currDate: new Date(),
      dateRange: [],
      decadeRange: [],
      displayDayView: false,
      displayMonthView: false,
      displayYearView: false,
      val: this.value
    }
  },
  watch: {
    currDate () {
      this.getDateRange()
    },
    format () {
      this.val = this.stringify(this.currDate)
    },
    val (val, old) {
      this.$emit('input', val)
    },
    value (val) {
      if (this.val !== val) { this.val = val }
    }
  },
  computed: {
    text () {
      return translations(this.lang)
    },
    preBtnClasses () {
      return `datepicker-preBtn ${this.iconsFont} ${this.iconsFont}-chevron-left`
    },
    nextBtnClasses () {
      return `datepicker-nextBtn ${this.iconsFont} ${this.iconsFont}-chevron-right`
    },
    disabledDaysArray () {
      return this.disabledDaysOfWeek.map(d => parseInt(d, 10))
    }
  },
  methods: {
    close () {
      this.displayDayView = this.displayMonthView = this.displayYearView = false
    },
    inputClick () {
      this.currDate = this.parse(this.val) || this.parse(new Date())
      if (this.displayMonthView || this.displayYearView) {
        this.displayDayView = false
      } else {
        this.displayDayView = !this.displayDayView
      }
    },
    preNextDecadeClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 10, months, date)
      } else {
        this.currDate = new Date(year + 10, months, date)
      }
    },
    preNextMonthClick (flag) {
      const year = this.currDate.getFullYear()
      const month = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        const preMonth = this.getYearMonth(year, month - 1)
        this.currDate = new Date(preMonth.year, preMonth.month, date)
      } else {
        const nextMonth = this.getYearMonth(year, month + 1)
        this.currDate = new Date(nextMonth.year, nextMonth.month, date)
      }
    },
    preNextYearClick (flag) {
      const year = this.currDate.getFullYear()
      const months = this.currDate.getMonth()
      const date = this.currDate.getDate()

      if (flag === 0) {
        this.currDate = new Date(year - 1, months, date)
      } else {
        this.currDate = new Date(year + 1, months, date)
      }
    },
    yearSelect (year) {
      this.displayYearView = false
      this.displayMonthView = true
      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate())
    },
    daySelect (day) {
      if (day.sclass === 'datepicker-item-disable') {
        return false
      } else {
        this.currDate = day.date
        this.val = this.stringify(this.currDate)
        this.displayDayView = false
      }
    },
    switchMonthView () {
      this.displayDayView = false
      this.displayMonthView = true
    },
    switchDecadeView () {
      this.displayMonthView = false
      this.displayYearView = true
    },
    monthSelect (index) {
      this.displayMonthView = false
      this.displayDayView = true
      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
    },
    getYearMonth (year, month) {
      if (month > 11) {
        year++
        month = 0
      } else if (month < 0) {
        year--
        month = 11
      }
      return {year: year, month: month}
    },
    stringifyDecadeHeader (date) {
      const yearStr = date.getFullYear().toString()
      const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
      const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10
      return firstYearOfDecade + '-' + lastYearOfDecade
    },
    stringifyDayHeader (date) {
      return this.text.months[date.getMonth()] + ' ' + date.getFullYear()
    },
    parseMonth (date) {
      return this.text.months[date.getMonth()]
    },
    stringifyYearHeader (date) {
      return date.getFullYear()
    },
    stringify (date, format = this.format) {
      if (!date) date = this.parse()
      if (!date) return ''
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const monthName = this.parseMonth(date)
      return format
        .replace(/yyyy/g, year)
        .replace(/yy/g, year)
        .replace(/MMMM/g, monthName)
        .replace(/MMM/g, monthName.substring(0, 3))
        .replace(/MM/g, ('0' + month).slice(-2))
        .replace(/M(?!a)/g, month)
        .replace(/dd/g, ('0' + day).slice(-2))
        .replace(/d/g, day)
    },
    parse (str) {
      if (str === undefined || str === null) { str = this.val }
      let date = str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy') ?
        new Date(str.substring(6, 10), str.substring(3, 5)-1, str.substring(0, 2)) :
        new Date(str)
      return isNaN(date.getFullYear()) ? new Date() : date
    },
    getDayCount (year, month) {
      const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      if (month === 1) {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
          return 29
        }
      }
      return dict[month]
    },
    getDateRange () {
      this.dateRange = []
      this.decadeRange = []
      const time = {
        year: this.currDate.getFullYear(),
        month: this.currDate.getMonth(),
        day: this.currDate.getDate()
      }
      const yearStr = time.year.toString()
      const firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1
      for (let i = 0; i < 12; i++) {
        this.decadeRange.push({
          text: firstYearOfDecade + i
        })
      }

      const currMonthFirstDay = new Date(time.year, time.month, 1)
      let firstDayWeek = currMonthFirstDay.getDay() + 1
      if (firstDayWeek === 0) {
        firstDayWeek = 7
      }
      const dayCount = this.getDayCount(time.year, time.month)
      if (firstDayWeek > 1) {
        const preMonth = this.getYearMonth(time.year, time.month - 1)
        const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
        for (let i = 1; i < firstDayWeek; i++) {
          const dayText = prevMonthDayCount - firstDayWeek + i + 1
          const date = new Date(preMonth.year, preMonth.month, dayText)
          let sclass = 'datepicker-item-gray'
          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
            sclass = 'datepicker-item-disable'
          }
          this.dateRange.push({text: dayText, date, sclass })
        }
      }

      for (let i = 1; i <= dayCount; i++) {
        const date = new Date(time.year, time.month, i)
        let sclass = ''
        if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
          sclass = 'datepicker-item-disable'
        }
        if (i == time.day && date.getFullYear() == time.year && date.getMonth() == time.month){
          sclass = 'datepicker-dateRange-item-active'
        }
        this.dateRange.push({text: i, date, sclass})
      }

      if (this.dateRange.length < 42) {
        const nextMonthNeed = 42 - this.dateRange.length
        const nextMonth = this.getYearMonth(time.year, time.month + 1)

        for (let i = 1; i <= nextMonthNeed; i++) {
          const date = new Date(nextMonth.year, nextMonth.month, i)
          let sclass = 'datepicker-item-gray'
          if (this.disabledDaysArray.indexOf(date.getDay()) > -1) {
            sclass = 'datepicker-item-disable'
          }
          this.dateRange.push({text: i, date, sclass})
        }
      }
    }
  },
  mounted () {
    this.$emit('child-created', this)
    this.currDate = this.parse(this.val) || this.parse(new Date())
    this._blur = e => {
      if (!this.$el.contains(e.target))
        this.close()
    }
    window.addEventListener('click', this._blur);
  },
  beforeDestroy () {
    window.removeEventListener('click', this._blur)
  }
}
</script>

<style>
.datepicker {
  position: relative;
  display: inline-block;
}
input.datepicker-input.with-reset-button {
  padding-right: 25px;
}
.datepicker > button.close {
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}
.datepicker > button.close:focus {
  opacity: .2;
}
.datepicker-popup {
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  margin-top: 2px;
  z-index: 1000;
  box-shadow: 0 6px 12px rgba(0,0,0,0.175);
}
.datepicker-inner {
  width: 218px;
}
.datepicker-body {
  padding: 10px 10px;
}
.datepicker-ctrl p,
.datepicker-ctrl span,
.datepicker-body span {
  display: inline-block;
  width: 28px;
  line-height: 28px;
  height: 28px;
  border-radius: 4px;
}
.datepicker-ctrl p {
  width: 65%;
}
.datepicker-ctrl span {
  position: absolute;
}
.datepicker-body span {
  text-align: center;
}
.datepicker-monthRange span {
  width: 48px;
  height: 50px;
  line-height: 45px;
}
.datepicker-item-disable {
  background-color: white!important;
  cursor: not-allowed!important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.datepicker-item-disable,
.datepicker-item-gray {
  color: #999;
}

.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
  background: rgb(50, 118, 177)!important;
  color: white!important;
}
.datepicker-monthRange {
  margin-top: 10px
}
.datepicker-monthRange span,
.datepicker-ctrl span,
.datepicker-ctrl p,
.datepicker-dateRange span {
  cursor: pointer;
}
.datepicker-monthRange span:hover,
.datepicker-ctrl p:hover,
.datepicker-ctrl i:hover,
.datepicker-dateRange span:hover,
.datepicker-dateRange-item-hover {
  background-color : #eeeeee;
}
.datepicker-weekRange span {
  font-weight: bold;
}
.datepicker-label {
  background-color: #f8f8f8;
  font-weight: 700;
  padding: 7px 0;
  text-align: center;
}
.datepicker-ctrl {
  position: relative;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
}
.month-btn {
  font-weight: bold;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.datepicker-preBtn {
  left: 2px;
}
.datepicker-nextBtn {
  right: 2px;
}
</style>
