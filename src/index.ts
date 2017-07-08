type IOption =  {
  prefix: string
  prefixSeparetor: string
  elementSeparetor: string
  modifierSeparetor: string
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
      prefix: '',
      prefixSeparetor: '-',
      elementSeparetor: '__',
      modifierSeparetor: '--',
    }
  }

  get prefix() {
    return this.option.prefix
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
    return `${this.pref}${this.block}${this.elem}${this.mod}`
  }

  private get pref(): string {
    if (this.option.prefix === '') return ''
    return `${this.option.prefix}${this.option.prefixSeparetor}`
  }

  private get elem(): string {
    if (this._elem === '') return ''
    return `${this.option.elementSeparetor}${this._elem}`
  }

  private get mod(): string {
    if (this._modifier === '') return ''
    return `${this.option.modifierSeparetor}${this._modifier}`
  }

  private _modify(newMod: string): string {
    this._modifier = newMod;
    return this.className
  }

  private _clear(): string {
    this._modifier = '';
    return this.className
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

  modify(newMod: string): void {
    const el = this.getDOM()
    this._modify(newMod)
    if (!el) throw new Error(`${this.query} is not found.`)
    el.className = this.className
  }

  modifyAll(newMod: string): void {
    const elCollection = this.getDOMAll()
    if (elCollection.length === 0) throw new Error(`${this.query} is not found.`)
    this.modify(newMod)
    Array.prototype.forEach.call(elCollection, (el: Element) => {
      el.className = this.className
    });
  }

  clear(): void {
    const el = this.getDOM()
    if (!el) throw new Error(`${this.query} is not found.`)
    this._clear()
    el.className = this.className
  }
}
