export function Normalize(item, normData) {
  Object.keys(normData).forEach((date) => {
    if (date in item.data)
      item.data[date].value = (item.data[date].value / normData[date]) * 1000000
    else item.data[date] = { dates: new Set(), value: 0.0 }
  })
  return item
}

export function Prefill(item, normData) {
  Object.keys(normData).forEach((date) => {
    if (!(date in item.data)) item.data[date] = { dates: new Set(), value: 0.0 }
  })
  return item
}

export class queryItem {
  layer
  position
  token

  toJSON() {
    return {
      layer: this.layer,
      position: this.position,
      token: this.token,
    }
  }

  static load(obj) {
    var res = new queryItem(obj.layer, obj.position, '', false)
    res.token = obj.token
    return res
  }

  constructor(layer, position, element, upperCase) {
    this.layer = layer
    this.position = position
    this.token = (
      upperCase ? element.toUpperCase() : element.toLowerCase()
    ).trim()
  }

  toString() {
    return '[' + (this.position + 1) + '. ' + this.layer + '] = ' + this.token
  }
}

export class OwidLiveSearch {
  #N
  #Key
  #Request
  #OwidLiveStorageTimeItems
  #IsSelected
  #TimeStamp

  /**
   * Create a new OwidLiveSearch
   * @param  {number} n of the N-Gram search
   * @param  {array} request the original search request
   * @param  {array} items the search responses
   */
  constructor(n, request, items) {
    this.#N = n
    this.#TimeStamp = new Date()

    var key = '(N = ' + n.toString() + '): '
    request.forEach((x) => {
      key += x.toString() + ' '
    })
    this.#Key = key.trim()

    this.#Request = request

    var olsti = []
    if (items != null)
      Object.keys(items).forEach((item) => {
        olsti.push(new OwidLiveStorageTimeItem(item, items[item]))
      })
    this.#OwidLiveStorageTimeItems = olsti

    this.#IsSelected = true
  }

  /**
   * Get the N(-Gram)
   */
  get N() {
    return this.#N
  }

  /**
   * Auto generated key
   */
  get Key() {
    return this.#Key
  }

  /**
   * Name based in Key and information about selected sub items
   */
  get Name() {
    var cnt = 0
    this.#OwidLiveStorageTimeItems.forEach((i) => {
      if (i.IsSelected) cnt++
    })

    return (
      this.#Key +
      ' [' +
      cnt +
      ' / ' +
      this.#OwidLiveStorageTimeItems.length +
      ']'
    )
  }

  /**
   * Get the TimeStamp
   */
  get TimeStamp() {
    return this.#TimeStamp
  }

  /**
   * Get all sub items (timelines)
   */
  get OwidLiveStorageTimeItems() {
    return this.#OwidLiveStorageTimeItems
  }

  /**
   * Is this entry selected (sum up all selected sub items - see OwidLiveStorageItems)
   */
  get IsSelected() {
    return this.#IsSelected
  }

  /**
   * @param  {boolean} bool Select this entry to sum up all selected sub items (see OwidLiveStorageItems)
   */
  set IsSelected(bool) {
    if (typeof bool === 'boolean') {
      this.#IsSelected = bool
      this.#OwidLiveStorageTimeItems.forEach((x) => {
        x.IsSelected = true
      })
    }
  }

  /**
   * The original search request
   */
  get Request() {
    return this.#Request
  }

  /**
   * If this.IsSelected than you recived the sum of all sub items (see OwidLiveStorageItems) otherwise null
   */
  get Date() {
    return this.#IsSelected
      ? this.Sum(function (x) {
          return x.Date
        })
      : null
  }

  /**
   * If this.IsSelected than you recived the sum of all sub items (see OwidLiveStorageItems) grouped by week otherwise null
   */
  get Week() {
    return this.#IsSelected
      ? this.Sum(function (x) {
          return x.Week
        })
      : null
  }

  /**
   * If this.IsSelected than you recived the sum of all sub items (see OwidLiveStorageItems) grouped by month otherwise null
   */
  get Month() {
    return this.#IsSelected
      ? this.Sum(function (x) {
          return x.Month
        })
      : null
  }

  /**
   * If this.IsSelected than you recived the sum of all sub items (see OwidLiveStorageItems) grouped by quarter otherwise null
   */
  get Quarter() {
    return this.#IsSelected
      ? this.Sum(function (x) {
          return x.Quarter
        })
      : null
  }

  /**
   * If this.IsSelected than you recived the sum of all sub items (see OwidLiveStorageItems) grouped by years otherwise null
   */
  get Year() {
    return this.#IsSelected
      ? this.Sum(function (x) {
          return x.Year
        })
      : null
  }

  /**
   * HELPER-Function: Used by Dates, Week, Month, Quarter and Year
   * @param  {function} func the functions describes how-to sum up the selected sub items (see OwidLiveStorageItems)
   */
  Sum(func) {
    var res = {}
    this.#OwidLiveStorageTimeItems.forEach((x) => {
      var items = func(x)
      if (items != null)
        Object.keys(items).forEach((key) => {
          if (key in res) {
            res[key].value += items[key].value
            res[key].dates = new Set([...res[key].dates, ...items[key].dates])
          } else res[key] = items[key]
        })
    })
    return res
  }

  /**
   * (Un-)Selects all OwidLiveStorageTimeItems
   * @param  {arry} selection all listed items will be selected - other: unselected
   */
  SelectOwidLiveStorageTimeItems(selection) {
    var set = new Set(selection)
    this.#OwidLiveStorageTimeItems.forEach((i) => {
      i.IsSelected = set.has(i.Key)
    })
  }
}

export class OwidLiveStorage {
  #OwidLiveSearches
  #Norm
  #Dates
  #LastDate
  #Total
  #NormTotal
  #N
  #Granulation
  #AvailableYears

  /**
   * @param  {array} norm array from GET: owidAPI/norm
   */
  constructor(norm) {
    if (norm == undefined || norm == null) return

    this.#Norm = norm
    this.#OwidLiveSearches = {}
    this.#N = 1

    var dates = []
    var total = []
    var notal = []
    for (var n = 0; n < norm.length; n++) {
      if (n === 0)
        Object.keys(norm[0]).forEach(function (key) {
          dates.push(key.substring(0, 10))
        })

      var sum = 0.0
      Object.keys(norm[n]).forEach(function (key) {
        sum += norm[n][key]
      })
      total.push(sum)
      notal.push(sum / 1000000.0)
    }

    this.#Dates = dates.sort()
    this.#LastDate = this.#Dates[this.#Dates.length - 1]
    this.#Total = total
    this.#NormTotal = notal

    var years = new Set()
    Object.keys(norm[0]).forEach((k) => years.add(k.substring(0, 4)))
    this.#AvailableYears = Array.from(years)
    this.#AvailableYears.sort()
  }

  /**
   * Returns the complete search history
   */
  get OwidLiveSearches() {
    return this.#OwidLiveSearches
  }

  /**
   * (Un-)Selects all OwidLiveSearches
   * @param  {arry} selection all listed items will be selected - other: unselected
   */
  selectSearchItems(selection) {
    var set = new Set(selection)
    Object.keys(this.#OwidLiveSearches).forEach((key) => {
      this.#OwidLiveSearches[key].IsSelected = set.has(key)
    })
  }

  /**
   * (Un-)Selects all OwidLiveStorageTimeItems
   * @param  {arry} selection all listed items will be selected - other: unselected
   */
  selectSearchHistoryItem(selection) {
    Object.keys(this.#OwidLiveSearches).forEach((key) => {
      this.#OwidLiveSearches[key].SelectOwidLiveStorageTimeItems(selection)
    })
  }

  /**
   * Add a new search to the history storage
   * @param  {number} n of the N-Gram search
   * @param  {array} request the original search request
   * @param  {array} items the search responses
   */
  addOwidLiveSearchItem(n, request, items) {
    var x = new OwidLiveSearch(n, request, items)
    this.#OwidLiveSearches = {} // clear all (special instruction for NeoRATE)
    this.#OwidLiveSearches[x.Key] = x
  }

  /**
   * Delete all searches
   */
  clearAll() {
    this.#OwidLiveSearches = {}
  }

  /**
   * An array of all available years
   */
  get AvailableYears() {
    return this.#AvailableYears
  }

  /**
   * Return all normalization data
   */
  get Norm() {
    return this.#Norm
  }

  /**
   * Return the last date
   */
  get LastDate() {
    return this.#LastDate === null ? '' : this.#LastDate
  }

  /**
   * Return all available dates
   */
  get Dates() {
    return this.#Granulation
  }

  /**
   * Set the current granulation
   */
  set Dates(granulation) {
    this.#Granulation = granulation
  }

  /**
   * Return the current N(-gram)
   */
  get N() {
    return this.#N
  }

  /**
   * @param  {number} n set the current N(-gram)
   */
  set N(n) {
    this.#N = n
  }

  /**
   * Return the total (in Token)
   */
  get Total() {
    return this.#Total
  }

  /**
   * Return the relative total (in pro Mio. Token)
   */
  get NormTotal() {
    return this.#NormTotal
  }

  /**
   * Get the search history for N(-Gram). Used by components/Clipboard
   */
  GetSearchHistory() {
    var tmp = []
    if (Object.keys(this.#OwidLiveSearches).length == 0) return res

    Object.keys(this.#OwidLiveSearches).forEach((key) => {
      var current = this.#OwidLiveSearches[key]
      if (current.N === this.#N) tmp.push({ key: key, date: current.TimeStamp })
    })

    tmp.sort(function (a, b) {
      return b.date - a.date
    })

    var res = []
    tmp.forEach((x) => {
      res.push(x.key)
    })

    return res
  }

  /**
   * @param  {string} key Get the request of the HistoryItem
   */
  GetSearchHistoryItemRequest(key) {
    return this.#OwidLiveSearches[key].Request
  }

  /**
   * @param  {string} key Get the raw the HistoryItem (for export only)
   */
  GetSearchHistoryItem4export(key) {
    return this.#OwidLiveSearches[key]
  }

  /**
   * @param  {string} key Get the specific table of the search (history) entry. Used by components/Clipboard
   * @param  {number} granulation Set the granulation for calculation (0=day, 1=week, 2=month, 3=quarter, 4=year)
   */
  GetSearchHistoryItem(key, granulation) {
    var data = this.#OwidLiveSearches[key]
    var dates = this.#Dates
    var total = this.#Total[this.#N - 1]
    var normd = null
    switch (granulation) {
      case 1:
        normd = this.NormWeek
        break
      case 2:
        normd = this.NormMonth
        break
      case 3:
        normd = this.NormQuarter
        break
      case 4:
        normd = this.NormYear
        break
      default:
        normd = this.NormDate
        break
    }

    var res = []
    data.OwidLiveStorageTimeItems.forEach(function (item) {
      var tokens = item.Key.split('µ')

      var d = Object.keys(item.Date).length
      var s = 0
      Object.keys(item.Date).forEach((key) => {
        s += item.Date[key].value
      })

      var sparkNorm = []
      for (var i in normd) {
        var v = i in item.Date ? item.Date[i].value : 0
        sparkNorm.push(Math.round((v / normd[i]) * 1000000.0, 0))
      }

      var wS = tokens[0].split(' ')
      var pS = tokens[2].split(' ')

      var korap = ''
      for (let i = 0; i < wS.length; i++) {
        korap += `[orth=${wS[i]}/i & pos=${pS[i]}] `
      }

      res.push({
        key: item.Key,

        w: tokens[0],
        l: tokens[1],
        p: tokens[2],

        d: d,
        dRel: ((d / dates.length) * 100.0).toFixed(5),
        s: s,
        sRel: ((s / total) * 1000000.0).toFixed(5),
        sparkNorm: sparkNorm,

        korap: korap.trim(),

        checked: item.IsSelected,
      })
    })

    return res
  }

  #funcDate = function (x) {
    return (
      x.getFullYear() +
      '-' +
      x.getMonth().toString().padStart(2, '0') +
      '-' +
      x.getDate().toString().padStart(2, '0')
    )
  }

  #funcWeek = function (x) {
    return x.getYearWeek()
  }

  #funcMonth = function (x) {
    return x.getFullYear() + '-' + x.getMonth().toString().padStart(2, '0')
  }

  #funcQuarter = function (x) {
    return x.getYearQuarter()
  }

  #funcYear = function (x) {
    return x.getFullYear()
  }

  /**
   * get a date array (day based)
   */
  get DatesDate() {
    return this.calculateDateGranulation(this.#funcDate)
  }

  /**
   * get the norm date values for N(-Gram)
   */
  get NormDate() {
    return this.calculateGranulation(this.#funcDate)
  }

  /**
   * get a date array (week based)
   */
  get DatesWeek() {
    return this.calculateDateGranulation(this.#funcWeek)
  }

  /**
   * get the norm weeks values for N(-Gram)
   */
  get NormWeek() {
    return this.calculateGranulation(this.#funcWeek)
  }

  /**
   * get a date array (month based)
   */
  get DatesMonth() {
    return this.calculateDateGranulation(this.#funcMonth)
  }

  /**
   * get the norm month values for N(-Gram)
   */
  get NormMonth() {
    return this.calculateGranulation(this.#funcMonth)
  }

  /**
   * get a date array (quarter based)
   */
  get DatesQuarter() {
    return this.calculateDateGranulation(this.#funcQuarter)
  }

  /**
   * get the norm quarters values for N(-Gram)
   */
  get NormQuarter() {
    return this.calculateGranulation(this.#funcQuarter)
  }

  /**
   * get a date array (year based)
   */
  get DatesYear() {
    return this.calculateDateGranulation(this.#funcYear)
  }

  /**
   * get the norm years values for N(-Gram)
   */
  get NormYear() {
    return this.calculateGranulation(this.#funcYear)
  }

  /**
   * HELPER-Function: Used by NormDate, NormWeek, NormMonth, NormQuarter and NormYear (see above)
   * @param  {function} func the functions needs to describe how-to find the dateTime-Key
   */
  calculateGranulation(func) {
    var dates = this.#Norm[this.#N - 1]
    var res = {}
    Object.keys(dates).forEach((d) => {
      var key = func(new Date(d))
      if (key in res) res[key] += dates[d]
      else res[key] = dates[d]
    })
    return res
  }

  /**
   * HELPER-Function: Used by NormDate, NormWeek, NormMonth, NormQuarter and NormYear (see above)
   * @param  {function} func the functions needs to describe how-to find the dateTime-Key
   */
  calculateDateGranulation(func) {
    var res = []
    Object.keys(this.#Dates).forEach((d) => {
      res.push(func(new Date(this.#Dates[d])))
    })
    return res
  }
}

export class OwidLiveStorageTimeItem {
  #Key
  #Token
  #Name
  #Label
  #Dates
  #IsSelected

  /**
   * @param  {string} key the key of the search-result
   * @param  {array} dates all matched dates
   */
  constructor(key, dates) {
    this.#Key = key
    this.#Token = key.split('µ')
    this.#Name = key.split('µ')[0]
    this.#Label = key.split('µ').join(' | ')
    this.#Dates = dates
    this.#IsSelected = true
  }

  /**
   * The key of the search-result
   */
  get Key() {
    return this.#Key
  }

  /**
   * Token based on Key
   */
  get Token() {
    return this.#Token
  }

  /**
   * Name based on Key
   */
  get Name() {
    return this.#Name
  }

  /**
   * The label of the search-result
   */
  get Label() {
    return this.#Label
  }

  /**
   * All matched dates
   */
  get Date() {
    return this.#IsSelected
      ? this.calculateGranulation(function (x) {
          return (
            x.getFullYear() +
            '-' +
            x.getMonth().toString().padStart(2, '0') +
            '-' +
            x.getDate().toString().padStart(2, '0')
          )
        })
      : null
  }

  /**
   * Is this timeItem selected for visualization?
   */
  get IsSelected() {
    return this.#IsSelected
  }

  /**
   * @param  {boolean} bool select for visualization?
   */
  set IsSelected(bool) {
    if (typeof bool === 'boolean') this.#IsSelected = bool
  }

  /**
   * All matched weeks
   */
  get Week() {
    return this.#IsSelected
      ? this.calculateGranulation(function (x) {
          return x.getYearWeek()
        })
      : null
  }

  /**
   * All matched month
   */
  get Month() {
    return this.#IsSelected
      ? this.calculateGranulation(function (x) {
          return (
            x.getFullYear() + '-' + x.getMonth().toString().padStart(2, '0')
          )
        })
      : null
  }

  /**
   * All matched quarter
   */
  get Quarter() {
    return this.#IsSelected
      ? this.calculateGranulation(function (x) {
          return x.getYearQuarter()
        })
      : null
  }

  /**
   * All matched years
   */
  get Year() {
    return this.#IsSelected
      ? this.calculateGranulation(function (x) {
          return x.getFullYear()
        })
      : null
  }

  /**
   * HELPER-Function: Used by Weeks, Month, Quarter and Year
   * @param  {function} func the function describes how-to group the dates
   */
  calculateGranulation(func) {
    var res = {}
    Object.keys(this.#Dates).forEach((k) => {
      var d = new Date(k)
      var key = func(d)
      if (key in res) {
        res[key].value += this.#Dates[k]
        res[key].dates.add(k)
      } else {
        var nset = new Set()
        nset.add(k)

        res[key] = { dates: nset, value: this.#Dates[k] }
      }
    })
    return res
  }
}

export class Store {
  baseUrl = 'http://lexik02.ids-mannheim.de/owid-plus-live'
  sessionKey = null

  owid = null
  searches = 0

  vizNoCommit = 0
  vizOptionRelative = true
  vizOptionGranulation = 0
  vizOptionSmoothing = 7

  vizData = null
  initialized = false

  constructor(callback) {
    var self = this

    // Der Aufruf INIT sowie NORM lädt notwendige Normdaten herunter.
    // INIT kann serverseitig zur Flood-Detection und Loging verwendet werden.
    fetch(this.baseUrl + '/init', {
      method: 'GET',
      mode: 'no-cors',
    })
      .then((response) => response.text())
      .then((response) => {
        self.id(response)

        fetch(this.baseUrl + '/norm', {
          method: 'GET',
          mode: 'no-cors',
        })
          .then((resp) => {
            if (resp.status != 200) throw new Error('Server Error')
            return resp
          })
          .then((resp) => {
            return resp.ok ? resp.json() : null
          })
          .then((obj) => {
            if (obj === null) throw new Error('No Data')

            self.init(obj)
            self.initialized = true
            callback()
          })
      })
      .catch((ex) => {
        console.log(ex)
      })
  }

  id(id) {
    this.sessionKey = id
    this.owid = new OwidLiveStorage()
  }

  init(payload) {
    this.owid = new OwidLiveStorage(payload)
  }

  clearAll() {
    this.owid.clearAll()
  }

  updateN(N) {
    this.owid.N = N
  }

  /*
  search({ n, queryItems, items }) {
    this.owid.addOwidLiveSearchItem(n, queryItems, items)
    this.searches = Object.keys(owid.OwidLiveSearches).length
  }
  */

  vizOption(payload) {
    this.vizOptionRelative = payload.r
    this.vizOptionGranulation = payload.g
    this.vizOptionSmoothing = payload.s
  }

  selectSearchChange(payload) {
    this.owid.selectSearchItems(payload)
  }

  selectSearchHistoryItemsChange(payload) {
    this.owid.selectSearchHistoryItem(payload)
  }

  modelLoad(o) {
    this.owid = OwidLiveStorage.load(
      o.Norm,
      o.OwidLiveSearches,
      o.N,
      o.Dates,
      o.Total,
      o.NormTotal
    )
  }

  calculate() {
    if (this.owid === null || this.owid.OwidLiveSearches === null) {
      this.vizData = null
      return
    }

    this.vizData = {}
    var res = {}

    // Set Granulation
    switch (this.vizOptionGranulation) {
      case 1:
        this.owid.Dates = this.owid.DatesWeek
        break
      case 2:
        this.owid.Dates = this.owid.DatesMonth
        break
      case 3:
        this.owid.Dates = this.owid.DatesQuarter
        break
      case 4:
        this.owid.Dates = this.owid.DatesYear
        break
      default:
        this.owid.Dates = this.owid.DatesDate
        break
    }

    for (var s in this.owid.OwidLiveSearches) {
      var search = this.owid.OwidLiveSearches[s]

      // Build a serie for any selected StorageTimeItem
      var subItems = {}
      for (var i in search.OwidLiveStorageTimeItems) {
        var item = search.OwidLiveStorageTimeItems[i]

        if (!item.IsSelected) continue

        var sitem
        switch (this.vizOptionGranulation) {
          case 1:
            sitem = item.Week
            break
          case 2:
            sitem = item.Month
            break
          case 3:
            sitem = item.Quarter
            break
          case 4:
            sitem = item.Year
            break
          default:
            sitem = item.Date
            break
        }

        subItems[item.Label] = {
          name: item.Name,
          label: item.Label,
          data: sitem,
          items: null,
        }
      }
      if (Object.keys(subItems).length === 0) continue

      // Build a serie for any selected search
      if (search.IsSelected) {
        var sgrp
        switch (this.vizOptionGranulation) {
          case 1:
            sgrp = search.Week
            break
          case 2:
            sgrp = search.Month
            break
          case 3:
            sgrp = search.Quarter
            break
          case 4:
            sgrp = search.Year
            break
          default:
            sgrp = search.Date
            break
        }

        // if you had selected a 'search' all subItems will be appended
        res[search.Name] = {
          name: search.Name,
          label: search.Label,
          data: sgrp,
          items: subItems,
        }
      } else {
        // if you had not selected a 'search' all subItems will be root items
        Object.keys(subItems).forEach((x) => {
          res[x] = {
            name: subItems[x].name,
            label: subItems[x].Label,
            data: subItems[x].data,
            items: [subItems[x]],
          }
        })
      }
    }

    var normData
    switch (this.vizOptionGranulation) {
      case 1:
        normData = this.owid.NormWeek
        break
      case 2:
        normData = this.owid.NormMonth
        break
      case 3:
        normData = this.owid.NormQuarter
        break
      case 4:
        normData = this.owid.NormYear
        break
      default:
        normData = this.owid.NormDate
        break
    }
    // relativ Frquency
    if (this.vizOptionRelative) {
      Object.keys(res).forEach((key) => {
        res[key] = Normalize(res[key], normData)
        if (res[key].items != null) {
          Object.keys(res[key].items).forEach((subKey) => {
            res[key].items[subKey] = Normalize(res[key].items[subKey], normData)
          })
        }
      })
    }
    // absolute Frequenz (auffüllen von Leerdaten)
    else {
      Object.keys(res).forEach((key) => {
        res[key] = Prefill(res[key], normData)
        if (res[key].items != null) {
          Object.keys(res[key].items).forEach((subKey) => {
            res[key].items[subKey] = Prefill(res[key].items[subKey], normData)
          })
        }
      })
    }

    // smoothing
    if (this.vizOptionSmoothing > 1) {
      var carret, odd

      if (this.vizOptionSmoothing % 2 === 0) {
        carret = parseInt((this.vizOptionSmoothing / 2).toFixed(0))
        odd = false
      } else {
        carret = parseInt(((this.vizOptionSmoothing - 1) / 2).toFixed(0))
        odd = true
      }

      var halfVOS = this.vizOptionSmoothing * 2.0

      var warnings = new Set()
      Object.keys(res).forEach((key) => {
        var item = res[key].data
        var keys = this.owid.Dates
        var nval = {}
        for (var i = carret; i < keys.length - carret; i++) {
          var dates = new Set()
          var sum = 0.0
          for (var j = 0 - carret; j <= carret; j++) {
            try {
              item[keys[i + j]].dates.forEach((d) => dates.add(d))

              if (!(keys[i + j] in item)) continue

              if (!odd && (j === 0 - carret || j === carret))
                sum += item[keys[i + j]].value * (1.0 / halfVOS)
              else
                sum += item[keys[i + j]].value * (1.0 / this.vizOptionSmoothing)
            } catch (e) {
              warnings.add(keys[i + j])
            }
          }

          nval[keys[i]] = {
            dates: dates,
            value: parseFloat(sum.toFixed(5)),
          }
        }

        res[key].data = nval
      })

      if (warnings.size > 0) {
        console.log('>>> WARN: missing norm-data:')
        warnings.forEach((w) => {
          console.log(w)
        })
        console.log('<<< WARN: missing norm-data (END)')
      }
    }

    this.vizData = res
  }

  search(query, callback) {
    var splits = query.split(' ')
    var queryItems = []
    var cnt = 0
    splits.forEach((s) => {
      queryItems.push(new queryItem(0, cnt++, s))
    })

    var n = queryItems.length

    this.updateN(n)

    fetch('http://lexik02.ids-mannheim.de/owid-plus-live/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        sessionKey: this.sessionKey,
      },
      body: JSON.stringify({ N: n, Items: queryItems }),
      mode: 'no-cors',
    })
      .then((resp) => {
        try {
          return resp.ok ? resp.json() : null
        } catch {
          return null
        }
      })
      .then((searchResult) => {
        if (
          searchResult === null ||
          searchResult.Items === null ||
          searchResult.Items.length === 0
        ) {
          return
        }

        searchResult.Items = searchResult.Items.slice(i, 1000)

        var packageSize = 250
        var result = {}
        var done = 0

        for (var i = 0; i < searchResult.Items.length; i += packageSize) {
          var request = searchResult.Items.slice(i, i + packageSize)

          fetch('http://lexik02.ids-mannheim.de/owid-plus-live/pull', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ N: n, Items: request }),
            mode: 'no-cors',
          })
            .then((resp2) => {
              if (!resp2.ok) {
                return
              }
              return resp2.json()
            })
            .then((page) => {
              if (page === null) return

              if (page != null) {
                result = Object.assign({}, result, page)
              } else {
                return
              }

              done += Object.keys(page).length

              if (done === searchResult.Items.length) {
                this.owid.addOwidLiveSearchItem(n, queryItems, result)
                this.vizNoCommit = 1
                this.calculate()
                callback()
              }
            })
        }
      })
  }
}
