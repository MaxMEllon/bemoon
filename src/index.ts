type IOption =  {
  elSeparetor: string;
  modSeparetor: string;
}

export default class Bemoon {
  private _block: string;
  private _elem: string;
  private _modifier: string;
  private option: IOption;

  constructor(block: string, element: string, modifier: string = '') {
    this._block = block
    this._elem = element
    this._modifier = modifier
    this.option = {
      elSeparetor: '__',
      modSeparetor: '--',
    }
  }

  get block() {
    return this._block
  }

  get element() {
    return this._elem
  }

  get modifier() {
    return this._modifier
  }

  get query(): string {
    return `.${this.className}`
  }

  get className(): string {
    return `${this.block}${this.elem}${this.mod}`
  }

  private get elem() {
    if (this._elem === '') return ''
    return `${this.option.elSeparetor}${this._elem}`
  }

  private get mod() {
    if (this._modifier === '') return ''
    return `${this.option.modSeparetor}${this._modifier}`
  }

  config(opt: IOption): void {
    this.option = opt
  }

  getDOM(): Element | null {
    return document.querySelector(this.query)
  }

  getDOMAll(): HTMLCollectionOf<Element> {
    return document.getElementsByClassName(this.className)
  }

  modify(newMod: string): string {
    this._modifier = newMod;
    return this.className
  }

  clear(): string {
    this._modifier = '';
    return this.className
  }

  modElement(newMod: string): void {
    const el = this.getDOM()
    this.modify(newMod)
    if (!el) throw new Error(`${this.query} is not found.`)
    el.className = this.className
  }

  modElementAll(newMod: string): void {
    const elCollection = this.getDOMAll()
    if (elCollection.length === 0) throw new Error(`${this.query} is not found.`)
    this.modify(newMod)
    Array.prototype.forEach.call(elCollection, (el: Element) => {
      el.className = this.className
    });
  }

  modClear(): void {
    const el = this.getDOM()
    if (!el) throw new Error(`${this.query} is not found.`)
    this.clear()
    el.className = this.className
  }
}