class Calc {
  static #value = ''
  //static #value = this.#load()

  static #NAME = 'calc'

  static #isDot = false

  static add = (newValue) => {
    // alert(newValue)

    if (isNaN(this.#value[this.#value.length - 2])) {
      if (
        Number(this.#value[this.#value.length - 1]) === 0 &&
        this.#isDot == false
      ) {
        return null
      }
    }

    // console.log(this.#value)

    this.#value = this.#value.concat(newValue)
    this.#output()
  }

  static #output = () => {
    this.#save()
    window.output.innerHTML = this.#value
  }

  static dot = () => {
    // this.#value = this.#value.concat('.')
    // this.#output()
    if (this.#isDot) {
      return null
    }

    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat('.')
    this.#output()

    this.#isDot = true
  }

  static op = (opValue) => {
    // this.#value = this.#value.concat(opValue)
    // this.#output()
    if (isNaN(this.#value[this.#value.length - 1])) {
      return null
    }

    this.#value = this.#value.concat(opValue)
    this.#output()

    this.#isDot = false
  }

  static reset = () => {
    this.#value = ''
    this.#isDot = false
    this.#output()
  }

  static result = () => {
    this.#value = String(eval(this.#value))
    this.#output()
  }

  static #save = () => {
    window.localStorage.setItem(this.#NAME, this.#value)
  }

  static #load = () => {
    this.#value =
      window.localStorage.getItem(this.#NAME) || ''
  }

  static init = () => {
    this.#load()
    // this.#output() //"Видає помилку - Uncaught TypeError: Cannot set properties of undefined (setting 'innerHTML')"
    console.log('Calc is init')
  }
}

Calc.init()

window.calc = Calc
