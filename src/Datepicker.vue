<template>
  <div class="datepicker"> 
    <input class="form-control datepicker-input" type="text" 
    v-on="click:inputClick" 
    v-model="value"/> 
      <div class="datepicker-popup" v-show="displayDayView"> 
          <div class="datepicker-inner"> 
              <div class="datepicker-body"> 
                  <div class="datepicker-ctrl"> 
                      <i class="month-btn datepicker-preBtn" v-on="click:preNextMonthClick(0)">&lt;</i> 
                      <i class="month-btn datepicker-nextBtn" v-on="click:preNextMonthClick(1)">&gt;</i> 
                      <p v-on="click:switchMouthView">
                      {{stringifyDayHeader(currDate)}}
                      </p>
                  </div> 
                  <div class="datepicker-weekRange"> 
                      <span v-repeat="w:weekRange">{{w}}</span> 
                  </div> 
                  <div class="datepicker-dateRange"> 
                      <span v-repeat="d:dateRange" v-class="d.sclass" v-on="click:daySelect(d.date,this)">{{d.text}}</span> 
                  </div> 
              </div> 
          </div> 
      </div>
      <div class="datepicker-popup" v-show="displayMouthView">
        <div class="datepicker-inner"> 
            <div class="datepicker-body"> 
                <div class="datepicker-ctrl"> 
                    <i class="month-btn datepicker-preBtn" v-on="click:preNextYearClick(0)">&lt;</i> 
                    <i class="month-btn datepicker-nextBtn" v-on="click:preNextYearClick(1)">&gt;</i> 
                    <p v-on="click:switchDecadeView">&nbsp;&nbsp;&nbsp;&nbsp;
                    {{stringifyYearHeader(currDate)}}
                    &nbsp;&nbsp;&nbsp;&nbsp;</p>
                </div> 
                <div class="datepicker-mouthRange"> 
                    <span v-repeat="m:mouthNames" 
                    v-class="datepicker-dateRange-item-active:
                    (this.mouthNames[this.parse(this.value).getMonth()]  === m) && 
                    this.currDate.getFullYear() === this.parse(this.value).getFullYear()"
                    v-on="click:mouthSelect($index)">
                      {{m.substr(0,3)}}
                    </span> 
                </div> 
            </div> 
        </div> 
      </div>
      <div class="datepicker-popup" v-show="displayYearView">
        <div class="datepicker-inner"> 
            <div class="datepicker-body"> 
                <div class="datepicker-ctrl"> 
                    <i class="month-btn datepicker-preBtn" v-on="click:preNextDecadeClick(0)">&lt;</i> 
                    <i class="month-btn datepicker-nextBtn" v-on="click:preNextDecadeClick(1)">&gt;</i> 
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;
                    {{stringifyDecadeHeader(currDate)}}
                    &nbsp;&nbsp;</p>
                </div> 
                <div class="datepicker-mouthRange decadeRange">
                    <span v-repeat="decade:decadeRange" 
                    v-class="datepicker-dateRange-item-active:
                    this.parse(this.value).getFullYear() === decade.text" 
                    v-on="click:yearSelect(this,$event)">
                      {{decade.text}}
                    </span> 
                </div> 
            </div> 
        </div> 
      </div>
</div>
</template>

<script>
import Utils from './utils.js'

  export default {
    props: {
      value: {
        twoWay: true
      },
      format: {
        default: 'MM/dd/yyyy'
      }
    },
    data() {
      return {
        weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        dateRange: [],
        decadeRange: [],
        currDate: new Date,
        displayDayView: false,
        displayMouthView: false,
        displayYearView: false,
        mouthNames: [
                      'January', 'February', 'March',
                      'April', 'May', 'June',
                      'July', 'August', 'September',
                      'October', 'November', 'December'
                    ]
      }
    },
    watch: {
      currDate() {
        this.getDateRange()
      }
    },
    methods: {
        inputClick() {
          if (this.displayMouthView || this.displayYearView) {
            this.displayDayView = false
          } else {
            this.displayDayView =  !this.displayDayView
          }
        },
        preNextDecadeClick(flag) {
          const year = this.currDate.getFullYear()
          const mouths = this.currDate.getMonth()
          const date = this.currDate.getDate()

          if (flag === 0) {
            this.currDate = new Date(year - 10, mouths, date)
          } else {
            this.currDate = new Date(year + 10, mouths, date)
          }
        },
        preNextMonthClick(flag) {
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
        preNextYearClick(flag) {
          const year = this.currDate.getFullYear()
          const mouths = this.currDate.getMonth()
          const date = this.currDate.getDate()

          if (flag === 0) {
            this.currDate = new Date(year - 1, mouths, date)
          } else {
            this.currDate = new Date(year + 1, mouths, date)
          }
        },
        yearSelect(el, e) {
          e.stopPropagation()
          this.displayYearView = false
          this.displayMouthView = true
          this.currDate = new Date(el.$el.innerHTML, this.currDate.getMonth(), this.currDate.getDate())
        },
        daySelect(date, el) {
          if (el.$el.classList[0] === 'datepicker-item-disable') {
            return
          } else {
            this.currDate = date
            this.value = this.stringify(this.currDate)
            this.displayDayView = false
          }
        },
        switchMouthView() {
          this.displayDayView = false
          this.displayMouthView = true
        },
        switchDecadeView() {
          this.displayMouthView = false
          this.displayYearView = true
        },
        mouthSelect(index) {
          this.displayMouthView = false
          this.displayDayView = true
          this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate())
        },
        getYearMonth(year, month) {
            if (month > 11) {
              year++
              month = 0
            } else if (month < 0) {
              year--
              month = 11
            }
            return {year: year, month: month}
        },
        stringifyDecadeHeader(date) {
          const yearStr = date.getFullYear().toString()
          const firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0
          const lastYearOfDecade = parseInt(firstYearOfDecade) + 10
          return firstYearOfDecade + '-' + lastYearOfDecade

        },
        stringifyDayHeader(date) {
          return this.mouthNames[date.getMonth()] + ' ' + date.getFullYear()
        },
        stringifyYearHeader(date) {
          return date.getFullYear()
        },
        stringify(date, format) {
          format = format || this.format

          const year = date.getFullYear()
          const month = date.getMonth() + 1
          const day = date.getDate()

          return format
            .replace(/yyyy/g, year)
            .replace(/MM/g, ('0' + month).slice(-2))
            .replace(/dd/g, ('0' + day).slice(-2))
            .replace(/yy/g, year)
            .replace(/M/g, month)
            .replace(/d/g, day)
        },
        parse(str) {
          const date = new Date(str)
          return isNaN(date.getFullYear()) ? null : date
        },
        getDayCount(year, month) {
          const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


          if (month === 1) {
              if ( (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ) {
                  return 29
              }
              return 28
          }

          return dict[month]
        },
        getDateRange() {
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
            this.decadeRange.forEach( (ary, index) => {
              if (ary.text === this.parse(this.value).getFullYear()) {
                this.decadeRange[index].sclass = 'fuck'
              }
            })

            const currMonthFirstDay = new Date(time.year, time.month, 1)
            let firstDayWeek = currMonthFirstDay.getDay() + 1
            if (firstDayWeek == 0) {
                firstDayWeek = 7
            }
            const dayCount = this.getDayCount(time.year, time.month)
            if (firstDayWeek > 1) {
              const preMonth = this.getYearMonth(time.year, time.month - 1)
              const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month)
              for (let i = 1; i < firstDayWeek; i++) {
                  const dayText = prevMonthDayCount - firstDayWeek + i + 1
                  this.dateRange.push({
                      text: dayText,
                      date: new Date(preMonth.year, preMonth.month, dayText),
                      sclass: 'datepicker-item-gray'
                  })
              }
            }

            for (let i = 1; i <= dayCount; i++) {
                const date = new Date(time.year, time.month, i)
                const week = date.getDay()
                let sclass = ''
                // if (week == 6 || week == 0){
                //     sclass = 'datepicker-item-disable'
                // }
                if (i == time.day) {
                  //如果value有值
                  if (this.value) {
                    const valueDate = this.parse(this.value)
                    if (valueDate) {
                      if (valueDate.getFullYear() == time.year && valueDate.getMonth() == time.month) {
                        sclass = 'datepicker-dateRange-item-active'
                      }
                    }
                  }
                }
                this.dateRange.push({
                    text: i,
                    date: date,
                    sclass: sclass
                })
            }

            if (this.dateRange.length < 42) {
                const nextMonthNeed = 42 - this.dateRange.length
                const nextMonth = this.getYearMonth(time.year, time.month + 1)

                for (let i = 1; i <= nextMonthNeed; i++) {
                    this.dateRange.push({
                        text: i,
                        date: new Date(nextMonth.year, nextMonth.month, i),
                        sclass: 'datepicker-item-gray'
                    })
                }
            }
        }
    },
    created() {

    },
    ready() {
      this.currDate = this.parse(this.value) || this.stringify(this.currDate)
      Utils.detectClickOutside(this.$el, () => this.displayDayView = this.displayMouthView = this.displayMouthView = false)
    }
  }
</script>

<style>
.datepicker{
    position: relative;
    display: inline-block;
}
.datepicker-input{
    width: 186px;
}
.datepicker-popup{
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    margin-top: 2px;
    z-index: 1000;
    box-shadow: 0 6px 12px rgba(0,0,0,0.175);
}
.datepicker-inner{
    width: 218px;

}
.datepicker-body{
    padding: 10px 10px;
}
.datepicker-ctrl p,
.datepicker-ctrl i,
.datepicker-body span{
    display: inline-block;
    width: 28px;
    line-height: 28px;
    height: 28px;
    border-radius: 4px;
}
.datepicker-ctrl p {
    width: 65%;
}
.datepicker-ctrl i {
  position: absolute;
}
.datepicker-body span {
  text-align: center;
}
.datepicker-mouthRange span{
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
.datepicker-item-gray{
    color: #999;
}

.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
    background: rgb(50, 118, 177)!important;
    color: white!important;
} 
.datepicker-mouthRange {
  margin-top: 10px
}
.datepicker-mouthRange span,
.datepicker-ctrl i,
.datepicker-ctrl p,
.datepicker-dateRange span {
  cursor: pointer;
}
.datepicker-mouthRange span:hover,
.datepicker-ctrl p:hover,
.datepicker-ctrl i:hover,
.datepicker-dateRange span:hover,
.datepicker-dateRange-item-hover {
    background-color : #eeeeee;
}

.datepicker-weekRange span{
    font-weight: bold;
}
.datepicker-label{
    background-color: #f8f8f8;
    font-weight: 700;
    padding: 7px 0;
    text-align: center;
}
.datepicker-ctrl{
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
.datepicker-preBtn{
    left: 2px;
}
.datepicker-nextBtn{
    right: 2px;
}

</style>